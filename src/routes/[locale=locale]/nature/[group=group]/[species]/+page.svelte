<script lang="ts">
	import type { IconName } from '#lib/assets/icons.ts'
	import SpriteIcon from '#lib/components/art/SpriteIcon.svelte'
	import PhaseLegend from '#lib/components/nature/PhaseLegend.svelte'
	import SpeciesGrid from '#lib/components/nature/SpeciesGrid.svelte'
	import StatusBadge from '#lib/components/nature/StatusBadge.svelte'
	import YearGrid from '#lib/components/nature/YearGrid.svelte'
	import Seo from '#lib/components/site/Seo.svelte'
	import Backdrop from '#lib/components/ui/Backdrop.svelte'
	import Badge from '#lib/components/ui/Badge.svelte'
	import Breadcrumbs from '#lib/components/ui/Breadcrumbs.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Icon from '#lib/components/ui/Icon.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { isSeasonal } from '#lib/nature/catalog.ts'
	import { groupPath, yearRow } from '#lib/nature/labels.ts'
	import type { Rarity } from '#lib/nature/types.ts'
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()
	const i18n = getI18n()

	let s = $derived(data.species)
	let name = $derived(i18n.t(s.name))
	let photo = $derived(s.photos?.[0])
	const rarityColors: Record<Rarity, string> = {
		common: '#6a9a2a',
		uncommon: '#e8a530',
		rare: '#c0302a'
	}
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

<div class="wrap crumbs">
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
		{#if photo}
			<figure class="portrait photo">
				<img
					src={photo.src}
					alt={i18n.t(photo.alt)}
					width={photo.width}
					height={photo.height}
					fetchpriority="high"
				>
				<figcaption>
					{#if photo.caption}
						{i18n.t(photo.caption)}
						·
					{/if}
					{i18n.m.species.photo}:
					{#if photo.sourceUrl}
						<a href={photo.sourceUrl} target="_blank" rel="noopener"
							>{photo.author}, {photo.license}</a
						>
					{:else}
						{photo.author}, {photo.license}
					{/if}
				</figcaption>
			</figure>
		{:else}
			<div class="portrait">
				<Backdrop theme={s.group}>
					<span class="portrait-sprite"><SpriteIcon art={s.sprite} label={name} /></span>
				</Backdrop>
			</div>
		{/if}
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
				{#if s.rarity}
					<p><Badge dot={rarityColors[s.rarity]}>{i18n.m.rarity[s.rarity]}</Badge></p>
				{/if}
				<p>{i18n.t(s.spotting)}</p>
			</Card>
			{#if s.curiosity}
				<h2>{i18n.m.species.curiosity}</h2>
				<p>{i18n.t(s.curiosity)}</p>
			{/if}
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
					<h2 class="overline">{i18n.m.species.links}</h2>
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
		<Card>
			<YearGrid
				rows={[yearRow(s, name, '')]}
				caption={i18n.m.species.year}
				current={data.today.month}
				bare
			/>
			<PhaseLegend kinds={[s.kind]} />
		</Card>
	</section>

	{#if data.related.length}
		<section class="section" aria-labelledby="related">
			<SectionHeading
				id="related"
				title={i18n.m.species.related}
				action={{ href: i18n.path(groupPath(s.group)), label: i18n.m.groups[s.group].name }}
			/>
			<SpeciesGrid species={data.related} current={data.today.month} />
		</section>
	{/if}
</article>

<style>
	.crumbs {
		padding-top: var(--space-fluid-m);
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
		clip-path: var(--pixel-corners);
	}

	.portrait :global(.backdrop) {
		aspect-ratio: 1;
	}

	/* A real photo earns more room than the sprite. */
	.portrait.photo {
		width: clamp(10rem, 30vw, 20rem);
		margin: 0;
		overflow: visible;
		/* The caption hangs below the photo, so the photo clips itself. */
		clip-path: none;
	}

	.portrait.photo img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		clip-path: var(--pixel-corners);
	}

	figcaption {
		margin-top: var(--space-1);
		color: var(--muted);
		font-size: var(--text-xs);
		overflow-wrap: anywhere;
	}

	@media (max-width: 40rem) {
		.head:has(.photo) {
			grid-template-columns: 1fr;
		}

		.portrait.photo {
			width: 100%;
		}
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
</style>
