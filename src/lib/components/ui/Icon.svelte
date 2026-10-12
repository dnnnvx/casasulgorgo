<script lang="ts">
	import { type IconName, icons } from '#lib/icons.ts'

	let {
		name,
		size = 20,
		label
	}: { name: IconName; size?: number; label?: string | undefined } = $props()
</script>

<svg
	viewBox="0 0 24 24"
	width={size}
	height={size}
	fill="none"
	stroke="currentColor"
	stroke-width="1.8"
	stroke-linecap="round"
	stroke-linejoin="round"
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
>
	<path d={icons[name]} />
</svg>

<style>
	svg {
		flex: none;
	}
</style>
