<script lang="ts">
	import PhaseLegend from '#lib/components/nature/PhaseLegend.svelte'
	import SpeciesChip from '#lib/components/nature/SpeciesChip.svelte'
	import YearGrid from '#lib/components/nature/YearGrid.svelte'
	import Seo from '#lib/components/site/Seo.svelte'
	import Backdrop from '#lib/components/ui/Backdrop.svelte'
	import Badge from '#lib/components/ui/Badge.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { inGroup, starsOf } from '#lib/nature/catalog.ts'
	import { groups, kindOf } from '#lib/nature/groups.ts'
	import { speciesPath, yearRow } from '#lib/nature/labels.ts'
	import { seasonMonths, seasonOf, seasons } from '#lib/seasons.ts'
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
	const i18n = getI18n()

	let current = $derived(seasonOf(data.today.month))
	// Start from the current season, so the page reads as "what's next".
	let ordered = $derived([
		...seasons.slice(seasons.indexOf(current)),
		...seasons.slice(0, seasons.indexOf(current))
	])

	const kinds = ['animal', 'plant'] as const
	let calendars = $derived(
		kinds.map((kind) => ({
			kind,
			rows: groups
				.filter((g) => kindOf(g) === kind)
				.flatMap(inGroup)
				.map((s) => yearRow(s, i18n.t(s.name), i18n.path(speciesPath(s))))
		}))
	)
</script>

<Seo title={i18n.m.seasonsPage.title} description={i18n.m.seasonsPage.lead} />

<div class="wrap page-head">
	<h1>{i18n.m.seasonsPage.title}</h1>
	<p>{i18n.m.seasonsPage.lead}</p>
</div>

<div class="wrap seasons">
	{#each ordered as season (season)}
		{@const stars = starsOf(season, season === current ? 12 : 8)}
		<section class="season" class:current={season === current} aria-labelledby="season-{season}">
			<Backdrop theme={season}>
				<header>
					<h2 id="season-{season}">{i18n.m.seasons[season]}</h2>
					<p class="months">{seasonMonths[season].map((m) => i18n.m.months[m]).join(' · ')}</p>
					{#if season === current}
						<Badge tone="primary">{i18n.m.seasonsPage.current}</Badge>
					{/if}
				</header>
			</Backdrop>
			<div class="body">
				<p class="note">{i18n.m.seasonNotes[season]}</p>
				<h3>{i18n.m.seasonsPage.highlights}</h3>
				<div class="chips">
					{#each stars.shown as species (species.slug)}
						<SpeciesChip {species} />
					{/each}
					{#if stars.more > 0}
						<a class="more" href={i18n.path('/nature')}>+{stars.more}</a>
					{/if}
				</div>
			</div>
		</section>
	{/each}
</div>

<section class="wrap section" aria-labelledby="calendar">
	<SectionHeading id="calendar" title={i18n.m.seasonsPage.calendar} />
	{#each calendars as calendar (calendar.kind)}
		<div class="panel">
			<h3>{i18n.m.kinds[calendar.kind]}</h3>
			<YearGrid
				rows={calendar.rows}
				caption="{i18n.m.seasonsPage.calendar}: {i18n.m.kinds[calendar.kind]}"
				current={data.today.month}
			/>
			<PhaseLegend kinds={[calendar.kind]} />
		</div>
	{/each}
</section>

<style>
	.seasons {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}

	@media (max-width: 48rem) {
		.seasons {
			grid-template-columns: 1fr;
		}
	}

	.season {
		--chip-bg: var(--chip-on-panel);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: var(--radius-m);
		background: var(--panel);
	}

	.season.current {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: minmax(12rem, 1fr) 2fr;
	}

	@media (max-width: 48rem) {
		.season.current {
			grid-template-columns: 1fr;
		}
	}

	.current :global(.backdrop) {
		height: 100%;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.3rem;
		min-height: 6rem;
		padding: 1rem 1.25rem;
	}

	.current header {
		justify-content: flex-end;
		min-height: 10rem;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem 1.25rem 1.25rem;
	}

	h2 {
		font-size: 1.5rem;
	}

	.months {
		font-size: 0.8rem;
		font-weight: 600;
		opacity: 0.75;
	}

	.note {
		max-width: 44rem;
	}

	h3 {
		margin-top: 0.25rem;
		font-family: var(--font-body);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.more {
		align-self: center;
		padding: 0.25rem 0.6rem;
		color: var(--muted);
		font-size: 0.85rem;
		font-weight: 600;
		text-decoration: none;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.panel {
		margin-bottom: 0.75rem;
		padding: 1rem;
		border-radius: var(--radius-m);
		background: var(--panel);
	}

	.panel h3 {
		margin: 0 0 0.6rem;
	}
</style>
