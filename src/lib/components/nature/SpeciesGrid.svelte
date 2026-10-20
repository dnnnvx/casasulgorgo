<script lang="ts">
	import SpeciesCard from '#lib/components/nature/SpeciesCard.svelte'
	import type { Species } from '#lib/nature/types.ts'

	/** current: the month (0-11) each card highlights. */
	let { species, current }: { species: readonly Species[]; current: number } = $props()
</script>

<div>
	{#each species as item (item.slug)}
		<SpeciesCard species={item} {current} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		gap: var(--stack-gap) var(--card-gap);
	}
</style>
