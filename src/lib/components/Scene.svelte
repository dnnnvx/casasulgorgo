<script lang="ts">
	import { ellipse, type Run, skyline, sprite } from '#lib/pixel.ts';
	import { birdDown, birdUp, duck, heron, lilyPad } from '#lib/sprites.ts';
	import Pixels from './Pixels.svelte';

	const W = 160;
	const H = 96;

	// Sunset sky, banded with dithered seams.
	const sky = [
		{ y: 0, c: '#ffeccb' },
		{ y: 12, c: '#ffdca6' },
		{ y: 22, c: '#ffc581' },
		{ y: 31, c: '#ffab62' },
		{ y: 40, c: '#ff9150' }
	];
	const skyAt = (y: number) => sky.findLast((b) => y >= b.y)?.c ?? sky[0].c;
	const skyRuns: Run[] = sky.map((b, i) => ({
		x: 0,
		y: b.y,
		w: W,
		h: (sky[i + 1]?.y ?? 60) - b.y,
		c: b.c
	}));

	// Retro sun with horizontal cuts.
	const sun = { cx: 114, cy: 33, r: 11 };
	const sunRuns: Run[] = [
		...ellipse(sun.cx, sun.cy, sun.r, sun.r, '#fff3c4'),
		...ellipse(sun.cx, sun.cy, sun.r, sun.r, '#ffe08a').filter((r) => r.y > sun.cy),
		...[3, 6, 9].map((d) => ({ x: sun.cx - 12, y: sun.cy + d, w: 25, c: skyAt(sun.cy + d) }))
	];

	const cloud = (x: number, y: number): Run[] => [
		{ x: x + 4, y, w: 6, c: '#fff6e4' },
		{ x: x + 1, y: y + 1, w: 13, c: '#fff6e4' },
		{ x, y: y + 2, w: 18, c: '#fff6e4' },
		{ x: x + 2, y: y + 3, w: 12, c: '#ffe2bd' }
	];

	const farHills = skyline(
		W,
		60,
		(x) => 44 - 4 * Math.sin(x / 17 + 0.5) - 2 * Math.sin(x / 7),
		'#c97f5c'
	);
	const midHills = skyline(
		W,
		60,
		(x) => 51 - 3 * Math.sin(x / 11 + 2) - 1.5 * Math.sin(x / 4.3),
		'#6f8f4c'
	);

	// Poplars and round trees along the far shore.
	const poplar = (x: number, h: number): Run[] => {
		const runs: Run[] = [{ x: x + 2, y: 58 - h - 1, w: 1, c: '#3f6a3c' }];
		for (let i = 0; i < h; i++) {
			const w = i < 2 ? 3 : i > h - 3 ? 3 : 5;
			runs.push({ x: x + (5 - w) / 2, y: 58 - h + i, w, c: '#3f6a3c' });
		}
		runs.push({ x: x + 1, y: 58 - h + 2, w: 1, h: h - 5, c: '#55834a' });
		return runs;
	};
	const trees: Run[] = [
		...ellipse(42, 54, 6, 4, '#33583a'),
		...ellipse(96, 55, 7, 3, '#33583a'),
		...ellipse(122, 55, 5, 3, '#3a6340'),
		...poplar(12, 16),
		...poplar(19, 20),
		...poplar(27, 14),
		...poplar(134, 18),
		...poplar(142, 22),
		...poplar(150, 15)
	];

	// The gorgo: shore, water bands, sun reflection.
	const pond = { cx: 82, cy: 76, rx: 64, ry: 11 };
	const waterAt = (y: number) =>
		y < pond.cy - 9
			? '#4d6f4a'
			: y < pond.cy - 3
				? '#5d9cc0'
				: y < pond.cy + 5
					? '#4589b8'
					: '#33709f';
	const water: Run[] = [
		...ellipse(pond.cx, pond.cy, pond.rx + 3, pond.ry + 1, '#5c7a3a'),
		...ellipse(pond.cx, pond.cy, pond.rx, pond.ry, '').map((r) => ({ ...r, c: waterAt(r.y) }))
	];
	const reflection: Run[] = [];
	for (let y = pond.cy - 7; y < pond.cy + 10; y += 2) {
		const w = Math.max(1, 9 - Math.floor((y - pond.cy + 7) / 2));
		reflection.push({ x: sun.cx - Math.floor(w / 2), y, w, c: y % 4 ? '#ffb35c' : '#ffd27a' });
	}
	const shimmer: Run[] = [
		[30, 74, 4],
		[52, 71, 3],
		[66, 84, 5],
		[92, 80, 4],
		[100, 70, 3],
		[132, 75, 4],
		[140, 80, 3],
		[24, 79, 3],
		[78, 73, 3]
	].map(([x, y, w]) => ({ x, y, w, c: '#b6dbee' }));
	const ripples: Run[] = [
		{ x: 42, y: 81, w: 10, c: '#b6dbee' },
		{ x: 39, y: 82, w: 3, c: '#8fc3e0' },
		{ x: 52, y: 82, w: 3, c: '#8fc3e0' },
		{ x: 87, y: 75, w: 3, c: '#b6dbee' },
		{ x: 97, y: 75, w: 3, c: '#b6dbee' }
	];
	const pads: Run[] = [
		...sprite(lilyPad, 62, 82),
		...sprite(lilyPad, 120, 79),
		...sprite(lilyPad, 134, 84)
	];

	// Foreground grass, reeds and cattails.
	const ground: Run[] = [{ x: 0, y: 88, w: W, h: H - 88, c: '#4b7f3a' }];
	for (let x = 0; x < W; x += 3) {
		const h = (x * 7) % 3;
		if (h) ground.push({ x, y: 88 - h, w: 1, h, c: '#4b7f3a' });
	}
	const blade = (x0: number, len: number, dir: number, c: string): Run[] =>
		Array.from({ length: len }, (_, i) => ({
			x: x0 + dir * Math.floor(i / 4),
			y: H - 1 - i,
			w: 1,
			c
		}));
	const cattail = (x: number, top: number): Run[] => [
		{ x, y: top, w: 1, h: H - top, c: '#5d8a3a' },
		{ x: x - 1, y: top + 2, w: 2, h: 5, c: '#7b4a2b' },
		{ x: x - 1, y: top + 2, w: 1, h: 2, c: '#9a643c' }
	];
	const bladeColors = ['#5f9a42', '#7bb350', '#3f7a35'];
	const reeds: Run[] = [
		...[2, 5, 8, 11, 14, 18, 21, 25].flatMap((x, i) =>
			blade(x, 14 + ((i * 5) % 13), i % 2 ? 1 : -1, bladeColors[i % 3])
		),
		...[134, 138, 141, 145, 148, 152, 155, 158].flatMap((x, i) =>
			blade(x, 13 + ((i * 7) % 14), i % 2 ? -1 : 1, bladeColors[(i + 1) % 3])
		),
		...cattail(6, 64),
		...cattail(10, 60),
		...cattail(16, 67),
		...cattail(23, 71),
		...cattail(139, 67),
		...cattail(145, 59),
		...cattail(151, 64),
		...cattail(156, 69)
	];

	const flock = [
		[0, 4],
		[10, 0],
		[18, 7],
		[29, 3]
	];
</script>

<svg
	viewBox="0 0 {W} {H}"
	shape-rendering="crispEdges"
	role="img"
	aria-label="Il gorgo in pixel art: un airone cenerino nell'acqua bassa, un germano reale, canneti, pioppi e uccelli in volo al tramonto"
>
	<defs>
		{#each sky.slice(1) as band, i (band.y)}
			<pattern id="dither-{i}" width="2" height="2" patternUnits="userSpaceOnUse">
				<rect width="2" height="2" fill={sky[i].c} />
				<rect x="1" width="1" height="1" fill={band.c} />
				<rect y="1" width="1" height="1" fill={band.c} />
			</pattern>
		{/each}
	</defs>

	<Pixels runs={skyRuns} />
	{#each sky.slice(1) as band, i (band.y)}
		<rect x="0" y={band.y - 2} width={W} height="2" fill="url(#dither-{i})" />
	{/each}
	<Pixels runs={sunRuns} />
	<Pixels class="cloud slow" runs={cloud(18, 9)} />
	<Pixels class="cloud" runs={cloud(70, 20)} />

	<g class="flock">
		{#each flock as [x, y], i (i)}
			<Pixels class="wing up" runs={sprite(birdUp, x, y)} />
			<Pixels class="wing down" runs={sprite(birdDown, x, y)} />
		{/each}
	</g>

	<Pixels runs={farHills} />
	<Pixels runs={midHills} />
	<rect x="0" y="56" width={W} height={H - 56} fill="#78a64e" />
	<Pixels runs={trees} />
	<Pixels runs={water} />
	<Pixels runs={reflection} />
	<Pixels class="shimmer" runs={shimmer} />
	<Pixels runs={pads} />
	<Pixels runs={ripples} />
	<Pixels runs={sprite(heron, 34, 57)} />
	<Pixels class="bob" runs={sprite(duck, 88, 67)} />
	<Pixels runs={ground} />
	<Pixels runs={reeds} />
</svg>

<style>
	svg {
		display: block;
		width: 100%;
		height: auto;
	}

	svg :global(.flock) {
		transform: translate(20px, 4px);
	}

	svg :global(.wing.down) {
		opacity: 0;
	}

	@media (prefers-reduced-motion: no-preference) {
		svg :global(.flock) {
			animation: fly 45s steps(220) infinite;
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
	}

	@keyframes fly {
		from {
			transform: translate(-40px, 10px);
		}
		to {
			transform: translate(180px, 0);
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
			transform: translateX(16px);
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
