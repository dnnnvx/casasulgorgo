<script lang="ts">
	import { type Sprite, sprite } from '#lib/art/pixel.ts'
	import Pixels from './Pixels.svelte'

	/** Without a label the sprite is decorative and hidden from screen readers. */
	let { art, label }: { art: Sprite; label?: string | undefined } = $props()

	let width = $derived(Math.max(...art.rows.map((r) => r.length)))
	let height = $derived(art.rows.length)
	let size = $derived(Math.max(width, height) + 2)
</script>

<svg
	viewBox="0 0 {size} {size}"
	shape-rendering="crispEdges"
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
>
	<Pixels runs={sprite(art, Math.floor((size - width) / 2), Math.floor((size - height) / 2))} />
</svg>

<style>
	svg {
		display: block;
		width: 100%;
		height: auto;
		filter: drop-shadow(0 2px 0 rgb(58 46 32 / 0.25));
	}
</style>
