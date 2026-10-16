<script lang="ts">
	import { type IconName, icons } from '#lib/icons.ts'

	let {
		name,
		size = 20,
		label
	}: { name: IconName; size?: number; label?: string | undefined } = $props()

	let Svg = $derived(icons[name])
</script>

<Svg
	{size}
	stroke={1.8}
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
/>

<style>
	:global(svg.tabler-icon) {
		flex: none;
	}
</style>
