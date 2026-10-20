<script lang="ts">
	import Scene from '#lib/components/art/Scene.svelte'
	import LegendCard from '#lib/components/home/LegendCard.svelte'
	import NowAtGorgo from '#lib/components/home/NowAtGorgo.svelte'
	import SpeciesOfDay from '#lib/components/home/SpeciesOfDay.svelte'
	import VisitTeaser from '#lib/components/home/VisitTeaser.svelte'
	import GroupTiles from '#lib/components/nature/GroupTiles.svelte'
	import SeasonCards from '#lib/components/nature/SeasonCards.svelte'
	import Seo from '#lib/components/site/Seo.svelte'
	import Button from '#lib/components/ui/Button.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Icon from '#lib/components/ui/Icon.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { siteUrl } from '#lib/config/site.ts'
	import { getI18n } from '#lib/i18n/index.ts'
	import { catalog } from '#lib/nature/catalog.ts'
	import { groups } from '#lib/nature/groups.ts'
	import { seasonOf, seasons } from '#lib/nature/seasons.ts'
	import { animalGroups, plantGroups } from '#lib/nature/types.ts'
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
	const i18n = getI18n()

	let stats = $derived([
		{ label: i18n.m.home.stats.species, value: catalog.length },
		{ label: i18n.m.home.stats.groups, value: groups.length },
		{ label: i18n.m.home.stats.seasons, value: seasons.length }
	])
</script>

<Seo
	title={i18n.m.home.title}
	description={i18n.m.site.description}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: i18n.m.site.name,
		url: `${siteUrl}${i18n.path()}`,
		inLanguage: i18n.locale,
		description: i18n.m.site.description
	}}
/>

<section class="hero">
	<div class="wrap hero-grid">
		<div>
			<p class="eyebrow">{i18n.m.home.eyebrow}</p>
			<h1>{i18n.m.home.heading}</h1>
			<p class="lead">{i18n.m.home.lead}</p>
			<div class="cluster actions">
				<Button href={i18n.path('/nature')} variant="dark" iconAfter="arrowRight">
					{i18n.m.home.explore}
				</Button>
				<Button href={i18n.path('/visit')} variant="outline" icon="pin">{i18n.m.home.plan}</Button>
			</div>
			<dl class="stats">
				{#each stats as stat (stat.label)}
					<div>
						<dt>{stat.label}</dt>
						<dd>{stat.value}</dd>
					</div>
				{/each}
			</dl>
		</div>
		<figure class="scene">
			<Scene label={i18n.m.home.scene} withSky={false} />
		</figure>
	</div>
</section>

<section class="wrap dash">
	<SpeciesOfDay day={data.today} />
	<NowAtGorgo month={data.today.month} />
	<VisitTeaser />
</section>

<section class="wrap section" aria-labelledby="groups">
	<SectionHeading
		id="groups"
		title={i18n.m.home.groupsTitle}
		lead={i18n.m.home.groupsLead}
		action={{ href: i18n.path('/nature'), label: i18n.m.common.seeAll }}
	/>
	<h3 class="overline kingdom">{i18n.m.kinds.animal}</h3>
	<GroupTiles groups={animalGroups} />
	<h3 class="overline kingdom">{i18n.m.kinds.plant}</h3>
	<GroupTiles groups={plantGroups} />
</section>

<section class="wrap section" aria-labelledby="year">
	<SectionHeading
		id="year"
		title={i18n.m.home.yearTitle}
		lead={i18n.m.home.yearLead}
		action={{ href: i18n.path('/seasons'), label: i18n.m.nav.seasons }}
	/>
	<SeasonCards current={seasonOf(data.today.month)} />
</section>

<section class="wrap section about" aria-labelledby="about">
	<Card tone="soft">
		<div class="about-grid">
			<div>
				<h2 id="about">{i18n.m.home.aboutTitle}</h2>
				<p>{i18n.m.home.origin}</p>
				<p>{i18n.m.home.about}</p>
			</div>
			<dl class="facts">
				{#each i18n.m.home.facts as fact (fact.value)}
					<div>
						<dt>{fact.value}</dt>
						<dd>{fact.label}</dd>
					</div>
				{/each}
			</dl>
		</div>
		<p class="draft"><Icon name="info" size={16} /> {i18n.m.common.draft}</p>
	</Card>
	<LegendCard title={i18n.m.home.legendTitle} text={i18n.m.home.legend} />
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		padding-block: var(--space-fluid-l) var(--space-fluid-xl);
		background:
			var(--noise), linear-gradient(160deg, #ffd1c3, var(--primary) 55%, var(--primary-hover));
		background-blend-mode: soft-light, normal;
		color: var(--on-primary);
	}

	.hero-grid > div {
		position: relative;
		z-index: 1;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
		align-items: center;
		gap: var(--space-fluid-m);
	}

	@media (max-width: 52rem) {
		.hero-grid {
			grid-template-columns: 1fr;
		}
	}

	.eyebrow {
		font-size: var(--text-s);
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		opacity: 0.75;
	}

	h1 {
		margin-top: var(--space-2);
		font-size: var(--text-4xl);
		line-height: 1.05;
	}

	.lead {
		max-width: 32rem;
		margin-top: var(--space-4);
		font-size: var(--text-l);
		opacity: 0.85;
	}

	.actions {
		margin-top: var(--space-5);
	}

	.stats {
		display: flex;
		gap: var(--space-6);
		margin: var(--space-5) 0 0;
	}

	.stats div {
		display: flex;
		flex-direction: column-reverse;
	}

	.stats dt {
		font-size: var(--text-s);
		opacity: 0.75;
	}

	.stats dd {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--text-2xl);
		font-weight: 600;
		line-height: 1.1;
	}

	/* The land fills the hero's full height and bleeds off the right edge of the page. */
	.scene {
		position: absolute;
		inset: 0 0 0 auto;
		width: 55%;
		margin: 0;
	}

	@media (max-width: 52rem) {
		.scene {
			position: relative;
			inset: auto;
			width: auto;
			height: auto;
			aspect-ratio: 256 / 216;
			margin: var(--space-4) calc(-1 * var(--gutter)) calc(-1 * var(--space-fluid-xl));
		}
	}

	.dash {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--stack-gap) var(--card-gap);
		position: relative;
		margin-top: calc(-1 * var(--space-7));
	}

	@media (max-width: 60rem) {
		.dash {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 40rem) {
		.dash {
			grid-template-columns: 1fr;
		}
	}

	.kingdom {
		margin: var(--space-2) 0 var(--space-2);
		font-size: var(--text-s);
	}

	.kingdom + :global(ul) {
		margin-bottom: var(--space-4);
	}

	.about h2 {
		margin-bottom: var(--space-2);
		font-size: var(--text-xl);
	}

	.about-grid {
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		gap: var(--space-fluid-m);
	}

	@media (max-width: 52rem) {
		.about-grid {
			grid-template-columns: 1fr;
		}
	}

	.about p {
		max-width: 46rem;
	}

	/* The legend is a second card right after the gorgo card. */
	.about :global(.card) + :global(section) {
		margin-top: var(--stack-gap);
		min-height: 14rem;
	}

	.about-grid p + p {
		margin-top: var(--space-2);
	}

	.facts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-2);
		align-content: start;
		margin: 0;
	}

	.facts div {
		padding: var(--space-3) var(--space-3);
		border-radius: var(--radius-m);
		background: var(--surface);
	}

	.facts dt {
		color: var(--primary-ink);
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: 600;
		line-height: 1.15;
	}

	.facts dd {
		margin: var(--space-1) 0 0;
		color: var(--muted);
		font-size: var(--text-s);
	}

	.draft {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--muted);
		font-size: var(--text-s);
	}
</style>
