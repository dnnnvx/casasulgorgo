<script lang="ts">
	/**
	 * A top-to-bottom gradient drawn as ordered (Bayer 4×4) dithering: hard square pixels
	 * stepping between the given colours instead of a smooth CSS blend.
	 */
	let { colors, pixel = 3 }: { colors: string[]; pixel?: number } = $props()

	const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]
	const uid = $props.id()

	// Each pair of colours gets 16 bands: level k paints the cells whose threshold is below k.
	let bands = $derived(
		colors.slice(1).flatMap((to, s) => {
			const from = colors[s] ?? to
			return Array.from({ length: 16 }, (_, k) => ({
				from,
				to,
				k,
				y: ((s * 16 + k) / ((colors.length - 1) * 16)) * 100
			}))
		})
	)
	let step = $derived(100 / ((colors.length - 1) * 16))
</script>

<svg class="dither" aria-hidden="true" shape-rendering="crispEdges" preserveAspectRatio="none">
	<defs>
		{#each bands as b, i (i)}
			<pattern id="{uid}-{i}" width={pixel * 4} height={pixel * 4} patternUnits="userSpaceOnUse">
				<rect width={pixel * 4} height={pixel * 4} style:fill={b.from} />
				{#each bayer as t, c (c)}
					{#if t < b.k}
						<rect
							x={(c % 4) * pixel}
							y={Math.floor(c / 4) * pixel}
							width={pixel}
							height={pixel}
							style:fill={b.to}
						/>
					{/if}
				{/each}
			</pattern>
		{/each}
	</defs>
	{#each bands as b, i (i)}
		<!-- A hair of overlap so no seam shows between bands. -->
		<rect x="0" y="{b.y}%" width="100%" height="{step + 0.2}%" fill="url(#{uid}-{i})" />
	{/each}
</svg>

<style>
	.dither {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}
</style>
