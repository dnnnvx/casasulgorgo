<script lang="ts">
	import { place } from '#lib/place.ts'

	/**
	 * A static OpenStreetMap view centred on the gorgo: the 3×3 tiles around it, shifted so the
	 * marker sits in the middle of the frame.
	 * https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
	 */
	let { label }: { label: string } = $props()

	const server = 'https://tile.openstreetmap.org'
	const zoom = 16
	const tileSize = 256
	const radians = (degrees: number) => (degrees * Math.PI) / 180
	const tilesPerSide = 2 ** zoom

	const exactX = (tilesPerSide * (1 + radians(place.lon) / Math.PI)) / 2
	const exactY = (tilesPerSide * (1 - Math.asinh(Math.tan(radians(place.lat))) / Math.PI)) / 2
	const x = Math.floor(exactX)
	const y = Math.floor(exactY)

	const offsets = [-1, 0, 1]
	// Marker position inside the 3×3 grid, in pixels.
	const markerX = tileSize * (exactX - x + 1)
	const markerY = tileSize * (exactY - y + 1)
</script>

<figure role="img" aria-label={label}>
	<div class="tiles" style:--x="{markerX}px" style:--y="{markerY}px">
		{#each offsets as dy (dy)}
			{#each offsets as dx (dx)}
				<img
					src="{server}/{zoom}/{x + dx}/{y + dy}.png"
					alt=""
					width={tileSize}
					height={tileSize}
					loading="lazy"
				>
			{/each}
		{/each}
	</div>
	<span class="marker"></span>
	<figcaption>
		<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">
			© OpenStreetMap
		</a>
	</figcaption>
</figure>

<style>
	figure {
		position: relative;
		height: 16rem;
		margin: 0;
		overflow: hidden;
		border-radius: var(--radius-m);
		background: var(--tile);
	}

	/* The grid is placed so its marker point lands on the frame's centre. */
	.tiles {
		position: absolute;
		top: 50%;
		left: 50%;
		display: grid;
		grid-template-columns: repeat(3, 256px);
		transform: translate(calc(-1 * var(--x)), calc(-1 * var(--y)));
	}

	.tiles img {
		display: block;
		width: 256px;
		height: 256px;
	}

	.marker {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background: rgb(33 150 243 / 0.3);
		transform: translate(-50%, -50%);
	}

	.marker::before {
		content: "";
		display: block;
		width: 1rem;
		height: 1rem;
		margin: var(--space-4);
		border: 2px solid #fff;
		border-radius: 50%;
		background: #2196f3;
		box-sizing: border-box;
	}

	figcaption {
		position: absolute;
		right: 0;
		bottom: 0;
		padding: var(--space-1) var(--space-2);
		border-top-left-radius: var(--radius-s);
		background: rgb(255 255 255 / 0.8);
		font-size: var(--text-xs);
	}

	figcaption a {
		color: #333;
	}
</style>
