<script lang="ts">
	import { blob, hash, isometric, type Point, paint } from '#lib/iso.ts'
	import { ellipse, type Run, sprite } from '#lib/pixel.ts'
	import { birdDown, birdUp, drake, hen, heronSmall } from '#lib/sprites.ts'
	import Pixels from './Pixels.svelte'

	type Item = { depth: number; runs: Run[]; cls?: string | undefined }

	/** Cycles through a non-empty list. */
	const pick = <T>(list: readonly [T, ...T[]], i: number): T => list[i % list.length] ?? list[0]

	const W = 256
	const H = 192

	// The island: a square slab of plain, S world units a side, seen in 2:1 isometric.
	const S = 112
	const OY = 48
	const { at, ground, quad, box } = isometric(W / 2, OY)
	const atPixel = (x: number, y: number): Point => {
		const [sx, sy] = at(x, y)
		return [Math.round(sx), Math.round(sy)]
	}

	// Pale morning sky, banded with dithered seams.
	const sky = [
		{ y: 0, c: '#dae7e3' },
		{ y: 40, c: '#e2ebe4' },
		{ y: 80, c: '#e9eee3' },
		{ y: 120, c: '#eff0e2' },
		{ y: 160, c: '#f4f0e1' }
	]
	const skyRuns: Run[] = sky.map((b, i) => ({
		x: 0,
		y: b.y,
		w: W,
		h: (sky[i + 1]?.y ?? H) - b.y,
		c: b.c
	}))
	const seams = sky.flatMap((below, i) => {
		const above = sky[i - 1]
		return above ? [{ y: below.y, above: above.c, below: below.c }] : []
	})
	const sun: Run[] = [
		...ellipse(36, 26, 8, 8, '#fff8e2'),
		...ellipse(36, 26, 8, 8, '#fbeec2').filter((r) => r.y > 28)
	]
	const cloud = (x: number, y: number): Run[] => [
		{ x: x + 4, y, w: 6, c: '#ffffff' },
		{ x: x + 1, y: y + 1, w: 13, c: '#ffffff' },
		{ x, y: y + 2, w: 18, c: '#ffffff' },
		{ x: x + 2, y: y + 3, w: 12, c: '#d9e4df' }
	]

	// The gorgo: a wobbly ellipse dug three units into the plain.
	const pond = { x: 62, y: 62, rx: 22, ry: 26, depth: 3 }
	const wobble = (x: number, y: number) =>
		1 + 0.08 * Math.sin(3 * Math.atan2(y - pond.y, x - pond.x) + 1)
	const pondAt = (x: number, y: number) =>
		(((x - pond.x) / pond.rx) ** 2 + ((y - pond.y) / pond.ry) ** 2) * wobble(x, y)
	const rim = (a: number, k = 1.04): Point => {
		const r = k / Math.sqrt(1 + 0.08 * Math.sin(3 * a + 1))
		return [pond.x + pond.rx * r * Math.cos(a), pond.y + pond.ry * r * Math.sin(a)]
	}

	// The house, its kitchen garden, and the path down to the jetty.
	const home = { x: 12, y: 46, w: 24, d: 18, h: 13, roof: 9 }
	const path: [Point, Point][] = [
		[
			[24, 65],
			[30, 72]
		],
		[
			[30, 72],
			[40, 74]
		]
	]
	const nearPath = ([px, py]: Point) =>
		path.some(([[ax, ay], [bx, by]]) => {
			const t = Math.max(
				0,
				Math.min(
					1,
					((px - ax) * (bx - ax) + (py - ay) * (by - ay)) / ((bx - ax) ** 2 + (by - ay) ** 2)
				)
			)
			return Math.hypot(px - ax - t * (bx - ax), py - ay - t * (by - ay)) < 2.2
		})
	const inside = (x: number, y: number, x0: number, y0: number, x1: number, y1: number) =>
		x >= x0 && x < x1 && y >= y0 && y < y1

	const grass = (x: number, y: number) => {
		const n = hash(Math.floor(x), Math.floor(y))
		if (n > 0.92) {
			return '#9cc46b'
		}
		return n < 0.07 ? '#76a44f' : '#88b45b'
	}

	// Inside the pond: the far bank seen through the cut, then water deepening to the middle.
	const water = (sx: number, sy: number) => {
		const [x, y] = ground(sx, sy, -pond.depth)
		const d = pondAt(x, y)
		if (d >= 1) {
			return '#6e5539'
		}
		if (d > 0.7) {
			return '#6aaed1'
		}
		return d > 0.3 ? '#4f93bf' : '#3f80ae'
	}

	// Top of the island, one screen pixel at a time.
	const surface = (sx: number, sy: number) => {
		const [x, y] = ground(sx, sy)
		if (x < 0 || y < 0 || x >= S || y >= S) {
			return
		}
		const d = pondAt(x, y)
		if (d < 1) {
			return water(sx, sy)
		}
		if (d < 1.08) {
			return '#a49b66'
		}
		if (d < 1.2) {
			return hash(Math.floor(x), Math.floor(y)) > 0.5 ? '#93ad5e' : grass(x, y)
		}
		return land(x, y)
	}

	// Dry land: the path, the kitchen garden, the wheat and the ploughed field.
	const land = (x: number, y: number) => {
		if (nearPath([x, y])) {
			return '#d6c595'
		}
		if (inside(x, y, 10, 70, 20, 84)) {
			return Math.floor(y) % 3 ? '#8d6a45' : '#6f9a3c'
		}
		if (inside(x, y, 92, 8, 108, 56)) {
			return Math.floor(x) % 3 ? '#e2c172' : '#c9a24f'
		}
		if (inside(x, y, 92, 60, 108, 106)) {
			return Math.floor(x) % 2 ? '#7a5a3a' : '#5f8f3c'
		}
		return grass(x, y)
	}

	const island: Run[] = [
		...box(0, 0, -16, S, S, 1, { left: '#6f4a2f', right: '#583a25' }),
		...box(0, 0, -15, S, S, 4, { left: '#9b6d47', right: '#7c5538' }),
		...box(0, 0, -11, S, S, 1, { left: '#8a603e', right: '#6c4a31' }),
		...box(0, 0, -10, S, S, 6, { left: '#9b6d47', right: '#7c5538' }),
		...box(0, 0, -4, S, S, 3, { left: '#6f9d47', right: '#58823a' }),
		...box(0, 0, -1, S, S, 1, { left: '#9cc46c', right: '#7fa957' }),
		...paint(W / 2 - S, OY, W / 2 + S, OY + S + 1, surface)
	]
	const islandShadow = ellipse(W / 2, OY + S + 22, 76, 3, '#e3e3d2')

	// Light on the water, and lily pads.
	const onWater = (x: number, y: number) => at(x, y, -pond.depth)
	const glints: [x: number, y: number, w: number][] = [
		[56, 48, 4],
		[70, 66, 3],
		[62, 80, 5],
		[50, 64, 3],
		[74, 52, 3]
	]
	const shimmer: Run[] = glints.map(([x, y, w]) => {
		const [sx, sy] = onWater(x, y)
		return { x: sx, y: sy, w, c: '#b8dcee' }
	})
	const padSpots: Point[] = [
		[72, 76],
		[76, 70],
		[56, 46]
	]
	const pads: Run[] = padSpots.flatMap(([x, y]) => {
		const [sx, sy] = onWater(x, y)
		return [...ellipse(sx, sy, 2, 1, '#4f8f4f'), { x: sx + 1, y: sy - 1, w: 1, c: '#f29bb5' }]
	})

	// Shadows fall to the lower right, away from the sun.
	const shadows: Run[] = []

	const jetty: Run[] = [
		...box(55, 71, -pond.depth, 1, 1, 4, { left: '#6b4a30', right: '#553a26' }),
		...box(55, 75, -pond.depth, 1, 1, 4, { left: '#6b4a30', right: '#553a26' }),
		...box(36, 71, 0, 20, 5, 1, { left: '#94693f', right: '#7a5634' }),
		...Array.from({ length: 10 }, (_, i) =>
			quad(
				[
					[36 + i * 2, 71, 1],
					[38 + i * 2, 71, 1],
					[38 + i * 2, 76, 1],
					[36 + i * 2, 76, 1]
				],
				i % 2 ? '#b2845a' : '#c39565'
			)
		).flat()
	]

	const house = ({ x, y, w, d, h, roof }: typeof home): Item => {
		const o = 2
		const ym = y + d / 2
		const ridge = h + roof
		const eave = h - o
		const front = (x0: number, x1: number, z0: number, z1: number, c: string) =>
			quad(
				[
					[x0, y + d, z0],
					[x1, y + d, z0],
					[x1, y + d, z1],
					[x0, y + d, z1]
				],
				c
			)
		const side = (y0: number, y1: number, z0: number, z1: number, c: string) =>
			quad(
				[
					[x + w, y0, z0],
					[x + w, y1, z0],
					[x + w, y1, z1],
					[x + w, y0, z1]
				],
				c
			)
		const window = (x0: number) => [
			...front(x0 - 1, x0 + 5, 4, 10, '#5d8a55'),
			...front(x0, x0 + 4, 5, 9, '#3e5a6e'),
			...front(x0, x0 + 1, 8, 9, '#8fb3c4')
		]
		const tiles = Array.from({ length: 3 }, (_, i) => {
			const t = (i + 1) / 4
			const ty = ym + t * (y + d + o - ym)
			const tz = ridge + t * (eave - ridge)
			return quad(
				[
					[x - o, ty, tz],
					[x + w + o, ty, tz],
					[x + w + o, ty, tz - 1],
					[x - o, ty, tz - 1]
				],
				'#ad5532'
			)
		}).flat()
		const cx = x + 5
		const cy = y + 4
		const top = ridge + 3

		shadows.push(
			...quad(
				[
					[x + w, y, 0],
					[x + w + 9, y + 3, 0],
					[x + w + 9, y + d + 3, 0],
					[x + w, y + d, 0]
				],
				'#000'
			)
		)

		return {
			depth: x + w + y + d,
			runs: [
				...box(x, y, 0, w, d, h, { left: '#efe2c4', right: '#d3bf98' }),
				...box(x, y, 0, w, d, 1, { left: '#c9b48c', right: '#b09a74' }),
				...window(x + 3),
				...window(x + w - 8),
				...front(x + 10, x + 14, 0, 9, '#7a4a2a'),
				...front(x + 13, x + 14, 4, 5, '#e8b23a'),
				...side(y + 7, y + 11, 5, 9, '#33495a'),
				// Back slope, gable end, chimney, front slope.
				...quad(
					[
						[x - o, y - o, eave],
						[x + w + o, y - o, eave],
						[x + w + o, ym, ridge],
						[x - o, ym, ridge]
					],
					'#9d4a2b'
				),
				...quad(
					[
						[x + w, y, h],
						[x + w, y + d, h],
						[x + w, ym, ridge]
					],
					'#d3bf98'
				),
				...quad(
					[
						[x + w + o, y - o, eave],
						[x + w + o, ym, ridge],
						[x + w + o, y + d + o, eave],
						[x + w + o, y + d + o, eave - 1],
						[x + w + o, ym, ridge - 1],
						[x + w + o, y - o, eave - 1]
					],
					'#7e3a22'
				),
				...quad(
					[
						[cx, cy + 3, h + 7],
						[cx + 3, cy + 3, h + 7],
						[cx + 3, cy + 3, top],
						[cx, cy + 3, top]
					],
					'#b9a382'
				),
				...quad(
					[
						[cx + 3, cy, h + 4],
						[cx + 3, cy + 3, h + 7],
						[cx + 3, cy + 3, top],
						[cx + 3, cy, top]
					],
					'#9c8668'
				),
				...box(cx, cy, top, 3, 3, 0, { top: '#5b4a3a' }),
				...quad(
					[
						[x - o, ym, ridge],
						[x + w + o, ym, ridge],
						[x + w + o, y + d + o, eave],
						[x - o, y + d + o, eave]
					],
					'#c4643a'
				),
				...tiles
			]
		}
	}

	const foliage = ['#8ab95e', '#5b8f45', '#3c6a37'] as const
	const poplarLeaves = ['#79a856', '#4f8040', '#355e34'] as const

	const poplar = (x: number, y: number, h: number): Item => {
		const [sx, sy] = atPixel(x, y)
		shadows.push(...ellipse(sx + 5, sy + 1, 5, 2, '#000'))
		return {
			depth: x + y,
			runs: [
				{ x: sx, y: sy - 4, w: 1, h: 4, c: '#5a4030' },
				...blob(sx, sy - 3 - h / 2, 3, h / 2, poplarLeaves)
			]
		}
	}

	const tree = (x: number, y: number, r: number): Item => {
		const [sx, sy] = atPixel(x, y)
		shadows.push(...ellipse(sx + r, sy + 1, r + 1, Math.ceil(r / 2), '#000'))
		return {
			depth: x + y,
			runs: [
				{ x: sx - 1, y: sy - 5, w: 2, h: 5, c: '#5a4030' },
				...blob(sx, sy - 4 - r, r + 1, r, foliage)
			]
		}
	}

	const reedColors = ['#5f9a42', '#77ad4e', '#4a7f38'] as const
	const reeds = ([x, y]: Point, seed: number): Item => {
		const [sx, sy] = atPixel(x, y)
		const runs: Run[] = []
		for (let i = 0; i < 5; i++) {
			const h = 5 + Math.floor(hash(seed, i) * 5)
			const rx = sx - 2 + i
			runs.push({ x: rx, y: sy - h, w: 1, h, c: pick(reedColors, seed + i) })
			if (i % 2 && hash(i, seed) > 0.3) {
				runs.push({ x: rx, y: sy - h + 1, w: 1, h: 2, c: '#7b4a2b' })
			}
		}
		return { depth: x + y, runs }
	}

	const bird = (
		art: typeof drake,
		x: number,
		y: number,
		cls?: string,
		ripple = '#b8dcee'
	): Item => {
		const [sx, sy] = onWater(x, y)
		const width = Math.max(...art.rows.map((r) => r.length))
		const height = art.rows.length
		return {
			depth: x + y,
			cls,
			runs: [
				{ x: sx - width / 2 - 1, y: sy, w: width + 2, c: ripple },
				...sprite(art, sx - width / 2, sy - height + 1)
			]
		}
	}

	const items: Item[] = [
		house(home),
		...[20, 30, 40, 50, 60, 70].map((x, i) => poplar(x, 5, 20 + ((i * 7) % 6))),
		...[12, 22, 32, 42, 52].map((y, i) => poplar(88, y, 18 + ((i * 5) % 7))),
		tree(6, 22, 6),
		tree(7, 36, 5),
		tree(100, 104, 5),
		tree(6, 100, 4),
		...[0.2, 0.6, 1.0, 1.4, 1.9, 3.9, 4.5, 5.2].map((a, i) => reeds(rim(a), i)),
		bird(heronSmall, 76, 62),
		bird(drake, 48, 58, 'bob'),
		bird(hen, 52, 50, 'bob late')
	].sort((a, b) => a.depth - b.depth)

	const flock: Point[] = [
		[0, 4],
		[10, 0],
		[18, 7],
		[29, 3]
	]
</script>

<svg
	viewBox="0 0 {W} {H}"
	shape-rendering="crispEdges"
	role="img"
	aria-label="Il gorgo in pixel art isometrica: la casa con l'orto, il pontile, un airone cenerino e una coppia di germani reali nell'acqua, canneti, pioppi e campi intorno"
>
	<defs>
		{#each seams as seam, i (seam.y)}
			<pattern id="dither-{i}" width="2" height="2" patternUnits="userSpaceOnUse">
				<rect width="2" height="2" fill={seam.above} />
				<rect x="1" width="1" height="1" fill={seam.below} />
				<rect y="1" width="1" height="1" fill={seam.below} />
			</pattern>
		{/each}
	</defs>

	<Pixels runs={skyRuns} />
	{#each seams as seam, i (seam.y)}
		<rect x="0" y={seam.y - 2} width={W} height="2" fill="url(#dither-{i})" />
	{/each}
	<Pixels runs={sun} />
	<Pixels class="cloud slow" runs={cloud(150, 14)} />
	<Pixels class="cloud" runs={cloud(196, 36)} />
	<Pixels runs={islandShadow} />

	<Pixels runs={island} />
	<Pixels runs={pads} />
	<Pixels class="shimmer" runs={shimmer} />
	<Pixels class="shadow" runs={shadows} />
	<Pixels runs={jetty} />
	{#each items as item, i (i)}
		<Pixels class={item.cls} runs={item.runs} />
	{/each}

	<g class="flock">
		{#each flock as [x, y], i (i)}
			<Pixels class="wing up" runs={sprite(birdUp, x, y)} />
			<Pixels class="wing down" runs={sprite(birdDown, x, y)} />
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
		width: 100%;
		height: auto;
	}

	svg :global(.shadow) {
		opacity: 0.16;
	}

	svg :global(.flock) {
		transform: translate(20px, 4px);
	}

	svg :global(.wing.down) {
		opacity: 0;
	}

	@media (prefers-reduced-motion: no-preference) {
		svg :global(.flock) {
			animation: fly 45s steps(300) infinite;
		}

		svg :global(.wing.up) {
			animation: flap 0.8s steps(1) infinite;
		}

		svg :global(.wing.down) {
			animation: flap 0.8s steps(1) -0.4s infinite;
		}

		svg :global(.cloud) {
			animation: drift 30s steps(16) infinite alternate;
		}

		svg :global(.cloud.slow) {
			animation-duration: 50s;
		}

		svg :global(.shimmer) {
			animation: shimmer 2.4s steps(1) infinite;
		}

		svg :global(.bob) {
			animation: bob 1.6s steps(1) infinite;
		}

		svg :global(.bob.late) {
			animation-delay: -0.8s;
		}
	}

	@keyframes fly {
		from {
			transform: translate(-40px, 14px);
		}
		to {
			transform: translate(280px, 0);
		}
	}

	@keyframes flap {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	@keyframes drift {
		to {
			transform: translateX(-16px);
		}
	}

	@keyframes shimmer {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.35;
		}
	}

	@keyframes bob {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(1px);
		}
	}
</style>
