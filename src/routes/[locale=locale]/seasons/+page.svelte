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
	import { seasonMonths, seasonOf, seasonsFrom } from '#lib/seasons.ts'
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
	const i18n = getI18n()

	let current = $derived(seasonOf(data.today.month))
	// Start from the current season, so the page reads as "what's next".
	let ordered = $derived(seasonsFrom(current))

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
		{@const stars = starsOf(season, 8)}
		<section class="season" class:current={season === current} aria-labelledby="season-{season}">
			<Backdrop theme={season}>
				<header>
					<h2 id="season-{season}">{i18n.m.seasons[season]}</h2>
					<p class="months">{seasonMonths[season].map((m) => i18n.m.months[m]).join(' · ')}</p>
					{#if season === current}
						<span class="now"><Badge tone="primary">{i18n.m.seasonsPage.current}</Badge></span>
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
	/* Four identical cards (current season first): 4 across, then 2x2, then a single column. */
	.seasons {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: var(--stack-gap) var(--space-3);
		align-items: stretch;
	}

	@media (max-width: 64rem) {
		.seasons {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 40rem) {
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
		border: var(--border-width) solid var(--border);
		box-shadow: var(--shadow);
	}

	/* Same forest treatment as the "before you come" card, so it reads as "now". */
	.season.current {
		--chip-bg: rgb(255 255 255 / 0.12);
		--chip-bg-hover: rgb(255 255 255 / 0.2);
		--chip-ink: var(--on-forest);
		background: var(--noise), linear-gradient(160deg, #26462f, var(--forest) 60%, #182e21);
		background-blend-mode: soft-light, normal;
		color: var(--on-forest);
		border-color: var(--forest-edge);
		box-shadow:
			0 4px 0 var(--forest-drop),
			var(--dark-card-sheen);
	}

	header {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-1);
		min-height: 6rem;
		padding: var(--space-4) var(--space-4);
	}

	.now {
		position: absolute;
		top: 0.85rem;
		right: 0.85rem;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-4) var(--space-4) var(--space-4);
	}

	h2 {
		font-size: var(--text-xl);
	}

	.months {
		font-size: var(--text-s);
		font-weight: 600;
		opacity: 0.75;
	}

	h3 {
		margin-top: var(--space-1);
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.more {
		align-self: center;
		padding: var(--space-1) var(--space-2);
		color: var(--muted);
		font-size: var(--text-s);
		font-weight: 600;
		text-decoration: none;
	}

	.current h3,
	.current .more {
		color: inherit;
		opacity: 0.75;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.panel {
		margin-bottom: var(--stack-gap);
		padding: var(--space-4);
		border-radius: var(--radius-m);
		background: var(--panel);
		border: var(--border-width) solid var(--border);
		box-shadow: var(--shadow);
	}

	.panel h3 {
		margin: 0 0 var(--space-2);
	}
</style>
