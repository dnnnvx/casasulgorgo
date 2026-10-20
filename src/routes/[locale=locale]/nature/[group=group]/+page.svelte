<script lang="ts">
	import PhaseLegend from '#lib/components/nature/PhaseLegend.svelte'
	import SpeciesGrid from '#lib/components/nature/SpeciesGrid.svelte'
	import YearGrid from '#lib/components/nature/YearGrid.svelte'
	import Seo from '#lib/components/site/Seo.svelte'
	import Breadcrumbs from '#lib/components/ui/Breadcrumbs.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Chip from '#lib/components/ui/Chip.svelte'
	import PageHeader from '#lib/components/ui/PageHeader.svelte'
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

<PageHeader
	title={info.name}
	lead="{info.description} · {i18n.m.common.species(data.species.length)}"
>
	{#snippet above()}
		<Breadcrumbs
			label={i18n.m.nav.breadcrumb}
			items={[{ label: i18n.m.nav.nature, href: i18n.path('/nature') }, { label: info.name }]}
		/>
	{/snippet}
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
</PageHeader>

<section class="wrap section" aria-labelledby="calendar">
	<SectionHeading id="calendar" title={i18n.m.nature.yearView} />
	<Card>
		<YearGrid {rows} caption={i18n.m.nature.yearView} current={data.today.month} />
		<PhaseLegend {kinds} />
	</Card>
</section>

<section class="wrap section" aria-labelledby="species">
	<SectionHeading id="species" title={i18n.m.nature.cards} />
	<SpeciesGrid species={data.species} current={data.today.month} />
</section>

<style>
	.groups {
		display: flex;
		gap: var(--space-2);
		max-width: 100%;
		margin-top: var(--space-2);
		overflow-x: auto;
		scrollbar-width: none;
	}
</style>
