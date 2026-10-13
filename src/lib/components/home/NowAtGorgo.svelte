<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { catalog, isHighlight } from '#lib/nature/catalog.ts'
	import { months, seasonOf } from '#lib/seasons.ts'
	import SpeciesChip from '../nature/SpeciesChip.svelte'
	import Badge from '../ui/Badge.svelte'
	import Card from '../ui/Card.svelte'
	import Icon from '../ui/Icon.svelte'

	/** What is happening this month: the season, and species worth going out for. */
	let { month }: { month: number } = $props()
	const i18n = getI18n()

	let season = $derived(seasonOf(month))
	let highlights = $derived(catalog.filter((s) => isHighlight(s, month)).slice(0, 8))
</script>

<Card>
	<p class="label"><Icon name="calendar" size={16} /> {i18n.m.home.now}</p>
	<p class="season">
		<span>{i18n.m.months[months[month] ?? 'jan']}</span>
		<Badge dot="var(--{season})">{i18n.m.seasons[season]}</Badge>
	</p>
	<p class="text">{i18n.m.seasonNotes[season]}</p>
	<p class="sub">{i18n.m.home.highlights}</p>
	{#if highlights.length}
		<div class="chips">
			{#each highlights as species (species.slug)}
				<SpeciesChip {species} />
			{/each}
		</div>
	{:else}
		<p class="text">{i18n.m.home.nowEmpty}</p>
	{/if}
</Card>

<style>
	.label {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--primary-ink);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.season {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-display);
		font-size: var(--text-xl);
	}

	.text {
		color: var(--muted);
		font-size: var(--text-s);
	}

	.sub {
		font-size: var(--text-s);
		font-weight: 600;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}
</style>
