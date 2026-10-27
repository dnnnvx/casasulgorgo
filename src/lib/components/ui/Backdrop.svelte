<script lang="ts">
	import type { Snippet } from 'svelte'
	import { gradientOf, motifs, type Theme } from '#lib/nature/themes.ts'

	/** A themed panel: gradient, grain and a motif, with optional content on top. */
	let { theme, children }: { theme: Theme; children?: Snippet | undefined } = $props()

	let { from, to } = $derived(gradientOf(theme))
	let motif = $derived(motifs[theme])

	// Grass blades: scattered, leaning and sized by a fixed pseudo-random sequence, so they
	// look natural yet render identically on server and client.
	const random = (blade: number, salt: number) => {
		const value = Math.sin(blade * 12.9898 + salt * 78.233) * 43_758.5453
		return value - Math.floor(value)
	}
	const blades = Array.from({ length: 26 }, (_, i) => {
		const x = (i + random(i, 1)) * 4.6
		const height = 4 + random(i, 2) ** 2 * 14
		const lean = (random(i, 3) - 0.5) * 9
		return `M${x.toFixed(1)} 80q${(lean / 3).toFixed(1)} ${(-height / 2).toFixed(1)} ${lean.toFixed(1)} ${-height.toFixed(1)}`
	})
</script>

<div class="backdrop" style:--from={from} style:--to={to}>
	<svg viewBox="0 0 120 80" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
		{#if motif === 'waves'}
			{#each [34, 48, 62, 76] as y (y)}
				<path d="M-10 {y}q10-6 20 0t20 0t20 0t20 0t20 0t20 0t20 0" />
			{/each}
		{:else if motif === 'clouds'}
			<path class="fill" d="M10 58a8 8 0 0 1 15-4a6 6 0 0 1 10 5h-25z" />
			<path class="fill" d="M62 50a9 9 0 0 1 17-4a7 7 0 0 1 11 6h-28z" />
			<path class="fill" d="M92 70a6 6 0 0 1 11-3a5 5 0 0 1 8 4h-19z" />
		{:else if motif === 'grass'}
			{#each blades as d (d)}
				<path {d} />
			{/each}
		{:else if motif === 'leaves'}
			{#each [
				[18, 22, 20],
				[58, 14, -30],
				[96, 30, 50],
				[36, 56, -60],
				[84, 64, 15]
			] as [x, y, r] (`${x}-${y}`)}
				<path
					class="fill"
					transform="translate({x} {y}) rotate({r})"
					d="M0-7q6 7 0 14q-6-7 0-14z"
				/>
			{/each}
		{:else if motif === 'sun'}
			<circle class="sun" cx="94" cy="52" r="10" />
			{#each [0, 45, 90, 135, 180, 225, 270, 315] as a (a)}
				<path class="ray" transform="translate(94 52) rotate({a})" d="M14 0h7" />
			{/each}
		{:else if motif === 'snow'}
			{#each [
				[12, 14],
				[34, 30],
				[58, 10],
				[80, 26],
				[104, 12],
				[22, 52],
				[48, 64],
				[72, 50],
				[96, 62],
				[114, 40]
			] as [x, y] (`${x}-${y}`)}
				<circle class="fill" cx={x} cy={y} r="1.6" />
			{/each}
		{:else if motif === 'blossom'}
			{#each [
				[20, 24],
				[62, 14],
				[98, 32],
				[40, 58],
				[86, 64]
			] as [x, y] (`${x}-${y}`)}
				<g transform="translate({x} {y})">
					<circle class="fill" cx="0" cy="-3.5" r="2.6" />
					<circle class="fill" cx="3.5" cy="0" r="2.6" />
					<circle class="fill" cx="0" cy="3.5" r="2.6" />
					<circle class="fill" cx="-3.5" cy="0" r="2.6" />
				</g>
			{/each}
		{/if}
	</svg>
	{#if children}
		<div class="content">{@render children()}</div>
	{/if}
</div>

<style>
	.backdrop {
		position: relative;
		overflow: hidden;
		background: var(--dither), linear-gradient(150deg, var(--from), var(--to));
		background-blend-mode: soft-light, normal;
		color: #1c2610;
	}

	svg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		fill: none;
		stroke: rgb(255 255 255 / 0.45);
		stroke-width: 1.4;
		stroke-linecap: round;
	}

	.sun {
		fill: rgb(255 248 220 / 0.75);
		stroke: none;
	}

	.ray {
		stroke: rgb(255 248 220 / 0.7);
		stroke-width: 2.2;
	}

	.fill {
		fill: rgb(255 255 255 / 0.35);
		stroke: none;
	}

	.content {
		position: relative;
		height: 100%;
	}
</style>
