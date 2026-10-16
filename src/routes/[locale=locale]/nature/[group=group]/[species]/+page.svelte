<script lang="ts">
	import PhaseLegend from '#lib/components/nature/PhaseLegend.svelte'
	import SpeciesCard from '#lib/components/nature/SpeciesCard.svelte'
	import StatusBadge from '#lib/components/nature/StatusBadge.svelte'
	import YearGrid from '#lib/components/nature/YearGrid.svelte'
	import SpriteIcon from '#lib/components/SpriteIcon.svelte'
	import Seo from '#lib/components/site/Seo.svelte'
	import Backdrop from '#lib/components/ui/Backdrop.svelte'
	import Badge from '#lib/components/ui/Badge.svelte'
	import Breadcrumbs from '#lib/components/ui/Breadcrumbs.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Icon from '#lib/components/ui/Icon.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import type { IconName } from '#lib/icons.ts'
	import { isSeasonal } from '#lib/nature/catalog.ts'
	import { groupPath, yearRow } from '#lib/nature/labels.ts'
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
	const i18n = getI18n()

	let s = $derived(data.species)
	let name = $derived(i18n.t(s.name))
	type Fact = { icon: IconName; label: string; value: string }
	let facts: Fact[] = $derived(
		s.kind === 'animal'
			? [
					{ icon: 'paw', label: i18n.m.species.size, value: i18n.t(s.size) },
					{ icon: 'leaf', label: i18n.m.species.diet, value: i18n.t(s.diet) },
					{
						icon: 'clock',
						label: i18n.m.species.activeAt,
						value: s.activeAt.map((time) => i18n.m.times[time]).join(', ')
					}
				]
			: [
					{ icon: 'leaf', label: i18n.m.species.form, value: i18n.m.forms[s.form] },
					{ icon: 'flower', label: i18n.m.species.height, value: i18n.t(s.height) }
				]
	)
</script>

<Seo title="{name} ({s.scientificName})" description={i18n.t(s.summary)} />

<div class="wrap page-head">
	<Breadcrumbs
		label={i18n.m.nav.breadcrumb}
		items={[
			{ label: i18n.m.nav.nature, href: i18n.path('/nature') },
			{ label: i18n.m.groups[s.group].name, href: i18n.path(groupPath(s.group)) },
			{ label: name }
		]}
	/>
</div>

<article class="wrap">
	<header class="head">
		<div class="portrait">
			<Backdrop theme={s.group}>
				<span class="portrait-sprite"><SpriteIcon art={s.sprite} label={name} /></span>
			</Backdrop>
		</div>
		<div>
			<h1>{name}</h1>
			<p class="latin">{s.scientificName}</p>
			<div class="badges">
				<Badge tone="primary">{i18n.m.groups[s.group].name}</Badge>
				<Badge tone={isSeasonal(s) ? 'accent' : 'neutral'}>
					{isSeasonal(s) ? i18n.m.species.seasonal : i18n.m.species.resident}
				</Badge>
				{#if s.status}
					<StatusBadge status={s.status} />
				{/if}
			</div>
			<p class="summary">{i18n.t(s.summary)}</p>
		</div>
	</header>

	<div class="body">
		<div class="text">
			<p>{i18n.t(s.description)}</p>
			<h2>{i18n.m.species.habitat}</h2>
			<p>{i18n.t(s.habitat)}</p>
			<Card tone="soft" padding="s">
				<h2 class="spot"><Icon name="binoculars" size={18} /> {i18n.m.species.spotting}</h2>
				<p>{i18n.t(s.spotting)}</p>
			</Card>
		</div>

		<aside>
			<dl class="facts">
				{#each facts as fact (fact.label)}
					<div>
						<dt><Icon name={fact.icon} size={16} /> {fact.label}</dt>
						<dd>{fact.value}</dd>
					</div>
				{/each}
				{#if s.status}
					<div>
						<dt><Icon name="info" size={16} /> {i18n.m.species.status}</dt>
						<dd>{i18n.m.status[s.status]} ({i18n.m.species.statusSource})</dd>
					</div>
				{/if}
			</dl>
			{#if s.links?.length}
				<div class="links">
					<h2>{i18n.m.species.links}</h2>
					{#each s.links as link (link.label)}
						<a href={i18n.t(link.url)} target="_blank" rel="noopener" hreflang={i18n.locale}>
							{link.label}
							<Icon name="arrowRight" size={16} />
						</a>
					{/each}
				</div>
			{/if}
		</aside>
	</div>

	<section class="section" aria-labelledby="year">
		<SectionHeading id="year" title={i18n.m.species.year} />
		<div class="panel">
			<YearGrid
				rows={[yearRow(s, name, '')]}
				caption={i18n.m.species.year}
				current={data.today.month}
				bare
			/>
			<PhaseLegend kinds={[s.kind]} />
		</div>
	</section>

	{#if data.related.length}
		<section class="section" aria-labelledby="related">
			<SectionHeading
				id="related"
				title={i18n.m.species.related}
				action={{ href: i18n.path(groupPath(s.group)), label: i18n.m.groups[s.group].name }}
			/>
			<div class="grid">
				{#each data.related as species (species.slug)}
					<SpeciesCard {species} current={data.today.month} />
				{/each}
			</div>
		</section>
	{/if}
</article>

<style>
	.page-head {
		padding-bottom: 0;
	}

	.head {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: var(--space-fluid-s);
		padding-block: var(--space-4) var(--space-5);
	}

	.portrait {
		width: clamp(6.5rem, 16vw, 10rem);
		overflow: hidden;
		border-radius: var(--radius-m);
	}

	.portrait :global(.backdrop) {
		aspect-ratio: 1;
	}

	.portrait-sprite {
		display: block;
		padding: var(--space-3);
		filter: drop-shadow(0 3px 0 rgb(0 0 0 / 0.12));
	}

	h1 {
		font-size: var(--text-3xl);
	}

	.latin {
		color: var(--muted);
		font-size: var(--text-m);
		font-style: italic;
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-top: var(--space-3);
	}

	.summary {
		max-width: 38rem;
		margin-top: var(--space-3);
		font-size: var(--text-l);
	}

	.body {
		display: grid;
		grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
		gap: var(--space-5);
	}

	@media (max-width: 48rem) {
		.body {
			grid-template-columns: 1fr;
		}
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		max-width: 42rem;
	}

	.text h2 {
		margin-top: var(--space-2);
		font-size: var(--text-xl);
	}

	.text h2.spot {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		margin: 0;
		color: var(--primary-ink);
	}

	.facts {
		display: flex;
		flex-direction: column;
		margin: 0;
	}

	.facts div {
		padding-block: var(--space-3);
		border-top: 1px solid var(--line);
	}

	.links {
		display: flex;
		flex-direction: column;
		padding-top: var(--space-3);
		border-top: 1px solid var(--line);
	}

	.links h2 {
		color: var(--muted);
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.links a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: var(--space-2);
		font-weight: 600;
		text-decoration: none;
	}

	.links a:hover {
		text-decoration: underline;
	}

	dt {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--muted);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	dd {
		margin: var(--space-1) 0 0;
		font-weight: 500;
	}

	.panel {
		padding: var(--space-4);
		border-radius: var(--radius-m);
		background: var(--panel);
		border: var(--border-width) solid var(--border);
		box-shadow: var(--shadow);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		gap: var(--stack-gap) var(--card-gap);
	}
</style>
