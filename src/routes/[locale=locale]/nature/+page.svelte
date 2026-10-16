<script lang="ts">
	import SpeciesCard from '#lib/components/nature/SpeciesCard.svelte'
	import Seo from '#lib/components/site/Seo.svelte'
	import Chip from '#lib/components/ui/Chip.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { inGroup, isActive } from '#lib/nature/catalog.ts'
	import { groups, kindOf } from '#lib/nature/groups.ts'
	import { groupPath } from '#lib/nature/labels.ts'
	import { months } from '#lib/seasons.ts'
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
	const i18n = getI18n()

	/** The month to filter by; null shows the whole year. */
	let month = $state<number | null>(null)

	let sections = $derived(
		groups.map((group) => ({
			group,
			species: inGroup(group).filter((s) => month === null || isActive(s, month))
		}))
	)
</script>

<Seo title={i18n.m.nature.title} description={i18n.m.nature.lead} />

<div class="wrap page-head">
	<h1>{i18n.m.nature.title}</h1>
	<p>{i18n.m.nature.lead}</p>
</div>

<div class="wrap filters">
	<nav class="row" aria-label={i18n.m.nature.title}>
		{#each groups as group (group)}
			<Chip href={i18n.path(groupPath(group))} count={inGroup(group).length}>
				{i18n.m.groups[group].name}
			</Chip>
		{/each}
	</nav>
	<!-- The flex row lives in a div inside the fieldset: flex on a fieldset itself misrenders in some browsers. -->
	<fieldset>
		<legend class="visually-hidden">{i18n.m.nature.filter}</legend>
		<div class="month-filter">
			<span class="filter-label" aria-hidden="true">{i18n.m.nature.filter}</span>
			<div class="row">
				<Chip
					active={month === null}
					onclick={() => {
						month = null
					}}
				>
					{i18n.m.common.allYear}
				</Chip>
				{#each months as key, i (key)}
					<Chip
						active={month === i}
						onclick={() => {
							month = i
						}}
					>
						{i18n.m.monthsShort[key]}{i === data.today.month ? ' •' : ''}
					</Chip>
				{/each}
			</div>
		</div>
	</fieldset>
</div>

{#each sections as section (section.group)}
	<section class="wrap section" aria-labelledby="group-{section.group}">
		<SectionHeading
			id="group-{section.group}"
			eyebrow={i18n.m.kinds[kindOf(section.group)]}
			title={i18n.m.groups[section.group].name}
			lead={i18n.m.groups[section.group].description}
			action={{ href: i18n.path(groupPath(section.group)), label: i18n.m.common.details }}
		/>
		{#if section.species.length}
			<div class="grid">
				{#each section.species as species (species.slug)}
					<SpeciesCard {species} current={month ?? data.today.month} />
				{/each}
			</div>
		{:else}
			<p class="empty">{i18n.m.nature.empty}</p>
		{/if}
	</section>
{/each}

<style>
	.filters {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		position: sticky;
		top: 3.8rem;
		z-index: 2;
		padding-block: var(--space-3);
		background: var(--bg);
	}

	.row {
		display: flex;
		gap: var(--space-2);
		overflow-x: auto;
		scrollbar-width: none;
	}

	fieldset {
		min-width: 0;
		margin: 0;
		padding: 0;
		border: 0;
	}

	.month-filter {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		min-width: 0;
	}

	.month-filter .row {
		flex: 1;
		min-width: 0;
	}

	.row > :global(*) {
		flex: none;
	}

	.filter-label {
		flex: none;
		color: var(--muted);
		font-size: var(--text-s);
		font-weight: 600;
		white-space: nowrap;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		gap: var(--stack-gap) var(--card-gap);
	}

	.empty {
		color: var(--muted);
		font-size: var(--text-s);
	}
</style>
