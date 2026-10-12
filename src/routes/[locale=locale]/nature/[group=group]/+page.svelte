<script lang="ts">
	import PhaseLegend from '#lib/components/nature/PhaseLegend.svelte'
	import SpeciesCard from '#lib/components/nature/SpeciesCard.svelte'
	import YearGrid from '#lib/components/nature/YearGrid.svelte'
	import Seo from '#lib/components/site/Seo.svelte'
	import Breadcrumbs from '#lib/components/ui/Breadcrumbs.svelte'
	import Chip from '#lib/components/ui/Chip.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { inGroup } from '#lib/nature/catalog.ts'
	import { groups } from '#lib/nature/groups.ts'
	import { groupPath, speciesPath, yearRow } from '#lib/nature/labels.ts'
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
	const i18n = getI18n()

	let info = $derived(i18n.m.groups[data.group])
	let kinds = $derived([...new Set(data.species.map((s) => s.kind))])
	let rows = $derived(
		data.species.map((s) => yearRow(s, i18n.t(s.name), i18n.path(speciesPath(s))))
	)
</script>

<Seo title={info.name} description={info.description} />

<div class="wrap page-head">
	<Breadcrumbs
		label={i18n.m.nav.breadcrumb}
		items={[{ label: i18n.m.nav.nature, href: i18n.path('/nature') }, { label: info.name }]}
	/>
	<h1>{info.name}</h1>
	<p>{info.description} · {i18n.m.common.species(data.species.length)}</p>
	<nav class="groups" aria-label={i18n.m.nav.nature}>
		{#each groups as group (group)}
			<Chip
				href={i18n.path(groupPath(group))}
				active={group === data.group}
				count={inGroup(group).length}
			>
				{i18n.m.groups[group].name}
			</Chip>
		{/each}
	</nav>
</div>

<section class="wrap section" aria-labelledby="calendar">
	<SectionHeading id="calendar" title={i18n.m.nature.yearView} />
	<div class="panel">
		<YearGrid {rows} caption={i18n.m.nature.yearView} current={data.today.month} />
		<PhaseLegend {kinds} />
	</div>
</section>

<section class="wrap section" aria-labelledby="species">
	<SectionHeading id="species" title={i18n.m.nature.cards} />
	<div class="grid">
		{#each data.species as species (species.slug)}
			<SpeciesCard {species} current={data.today.month} />
		{/each}
	</div>
</section>

<style>
	.page-head h1 {
		margin-top: 0.5rem;
	}

	.groups {
		display: flex;
		gap: 0.35rem;
		margin-top: 1rem;
		overflow-x: auto;
		scrollbar-width: none;
	}

	.panel {
		padding: 1rem;
		border-radius: var(--radius-m);
		background: var(--panel);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		gap: 0.75rem;
	}
</style>
