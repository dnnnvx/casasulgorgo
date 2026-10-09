<script lang="ts">
	import { type Sprite, sprite } from '#lib/pixel.ts'
	import Pixels from './Pixels.svelte'

	let { art, label }: { art: Sprite; label: string } = $props()

	let width = $derived(Math.max(...art.rows.map((r) => r.length)))
	let height = $derived(art.rows.length)
	let size = $derived(Math.max(width, height) + 2)
</script>

<svg viewBox="0 0 {size} {size}" shape-rendering="crispEdges" role="img" aria-label={label}>
	<Pixels runs={sprite(art, Math.floor((size - width) / 2), Math.floor((size - height) / 2))} />
</svg>

<style>
	svg {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
