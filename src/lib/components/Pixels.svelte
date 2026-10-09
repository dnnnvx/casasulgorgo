<script lang="ts">
	import type { Run } from '#lib/pixel.ts'

	let { runs, class: className }: { runs: Run[]; class?: string | undefined } = $props()
</script>

<g class={className}>
	{#each runs as r, i (i)}
		<rect x={r.x} y={r.y} width={r.w} height={r.h ?? 1} fill={r.c} />
	{/each}
</g>
