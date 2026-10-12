<script lang="ts">
	import NowAtGorgo from '#lib/components/home/NowAtGorgo.svelte'
	import SpeciesOfDay from '#lib/components/home/SpeciesOfDay.svelte'
	import VisitTeaser from '#lib/components/home/VisitTeaser.svelte'
	import GroupTiles from '#lib/components/nature/GroupTiles.svelte'
	import SeasonCards from '#lib/components/nature/SeasonCards.svelte'
	import Scene from '#lib/components/Scene.svelte'
	import Seo from '#lib/components/site/Seo.svelte'
	import Button from '#lib/components/ui/Button.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Icon from '#lib/components/ui/Icon.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { catalog } from '#lib/nature/catalog.ts'
	import { groups } from '#lib/nature/groups.ts'
	import { animalGroups, plantGroups } from '#lib/nature/types.ts'
	import { seasonOf, seasons } from '#lib/seasons.ts'
	import { siteUrl } from '#lib/site.ts'
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
			<div class="actions">
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
	<h3 class="kingdom">{i18n.m.kinds.animal}</h3>
	<GroupTiles groups={animalGroups} />
	<h3 class="kingdom">{i18n.m.kinds.plant}</h3>
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
		<h2 id="about">{i18n.m.home.aboutTitle}</h2>
		<p>{i18n.m.home.about}</p>
		<p class="draft"><Icon name="info" size={16} /> {i18n.m.common.draft}</p>
	</Card>
</section>

<style>
	.hero {
		padding-block: clamp(2rem, 5vw, 3.5rem) clamp(4rem, 8vw, 5.5rem);
		background: var(--primary);
		color: var(--on-primary);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
		align-items: center;
		gap: clamp(1.5rem, 4vw, 3.5rem);
	}

	@media (max-width: 52rem) {
		.hero-grid {
			grid-template-columns: 1fr;
		}
	}

	.eyebrow {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		opacity: 0.75;
	}

	h1 {
		margin-top: 0.6rem;
		font-size: clamp(2.3rem, 5vw, 3.6rem);
		line-height: 1.05;
	}

	.lead {
		max-width: 32rem;
		margin-top: 1rem;
		font-size: 1.075rem;
		opacity: 0.85;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin-top: 1.5rem;
	}

	.stats {
		display: flex;
		gap: 2rem;
		margin: 1.75rem 0 0;
	}

	.stats div {
		display: flex;
		flex-direction: column-reverse;
	}

	.stats dt {
		font-size: 0.8rem;
		opacity: 0.75;
	}

	.stats dd {
		margin: 0;
		font-family: var(--font-display);
		font-size: 1.75rem;
		font-weight: 600;
		line-height: 1.1;
	}

	.scene {
		margin: -1rem -1rem -2.5rem;
	}

	.dash {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
		position: relative;
		margin-top: -3rem;
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

	.dash :global(.card) {
		box-shadow: var(--shadow);
	}

	.kingdom {
		margin: 0.5rem 0 0.6rem;
		color: var(--muted);
		font-family: var(--font-body);
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.kingdom + :global(ul) {
		margin-bottom: 1.25rem;
	}

	.about h2 {
		font-size: 1.5rem;
	}

	.about p {
		max-width: 46rem;
	}

	.draft {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--muted);
		font-size: 0.8rem;
	}
</style>
