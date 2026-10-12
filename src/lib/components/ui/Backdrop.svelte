<script lang="ts">
	import type { Snippet } from 'svelte'
	import { type Theme, themes } from '#lib/themes.ts'

	/** A themed panel: gradient, grain and a motif, with optional content on top. */
	let { theme, children }: { theme: Theme; children?: Snippet | undefined } = $props()

	let { from, to, motif } = $derived(themes[theme])
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
			{#each [6, 16, 27, 38, 49, 61, 72, 84, 95, 106, 116] as x, i (x)}
				<path d="M{x} 80q{i % 2 ? 3 : -3}-12 {i % 2 ? 6 : -2}-{18 + ((i * 7) % 12)}" />
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
		{:else if motif === 'stones'}
			<ellipse class="fill" cx="22" cy="74" rx="16" ry="7" />
			<ellipse class="fill" cx="58" cy="78" rx="20" ry="8" />
			<ellipse class="fill" cx="100" cy="72" rx="14" ry="6" />
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
		background: var(--noise), linear-gradient(150deg, var(--from), var(--to));
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
