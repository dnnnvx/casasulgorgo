<script lang="ts">
	import PlaceMap from '#lib/components/site/PlaceMap.svelte'
	import Seo from '#lib/components/site/Seo.svelte'
	import Badge from '#lib/components/ui/Badge.svelte'
	import Button from '#lib/components/ui/Button.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Icon from '#lib/components/ui/Icon.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import type { IconName } from '#lib/icons.ts'
	import { mapLinks } from '#lib/place.ts'

	const i18n = getI18n()

	let v = $derived(i18n.m.visit)
	let info = $derived([
		{ icon: 'leaf', ...v.info.access },
		{ icon: 'table', ...v.info.picnic },
		{ icon: 'binoculars', ...v.info.hide },
		{ icon: 'basket', ...v.info.shop }
	] satisfies { icon: IconName; title: string; text: string }[])

	const respectIcons: IconName[] = [
		'route',
		'binoculars',
		'quiet',
		'paw',
		'ban',
		'flower',
		'fish',
		'trash'
	]
	const whenIcons: IconName[] = ['dawn', 'dusk', 'sun']
</script>

<Seo title={v.title} description={v.lead} />

<div class="wrap page-head">
	<h1>{v.title}</h1>
	<p>{v.lead}</p>
</div>

<div class="wrap layout">
	<section aria-labelledby="reach">
		<SectionHeading id="reach" title={v.reachTitle} />
		<PlaceMap label={v.map.label} />
		<p class="open-in">
			<span class="muted">{v.map.openIn}</span>
			<Button href={mapLinks.google} external variant="ghost" size="s" iconAfter="external">
				Google Maps
			</Button>
			<Button href={mapLinks.apple} external variant="ghost" size="s" iconAfter="external">
				Apple Maps
			</Button>
			<Button href={mapLinks.openStreetMap} external variant="ghost" size="s" iconAfter="external">
				OpenStreetMap
			</Button>
		</p>
		<ul class="list">
			<li>
				<span class="icon"><Icon name="car" /></span>
				<span>
					<strong>{v.reach.car.title}</strong>
					{#each v.reach.car.routes as route (route.from)}
						<span class="route">
							<span class="from">{route.from}</span>
							<ol class="muted">
								{#each route.steps as step (step)}
									<li>{step}</li>
								{/each}
							</ol>
						</span>
					{/each}
				</span>
			</li>
			<li>
				<span class="icon"><Icon name="bike" /></span>
				<span>
					<strong>{v.reach.bike.title}: {v.reach.bike.route}</strong>
					<span class="facts">
						{#each v.reach.bike.facts as fact (fact.label)}
							<Badge>{fact.label}: {fact.value}</Badge>
						{/each}
					</span>
					<ol class="stops muted">
						{#each v.reach.bike.stops as stop (stop.place)}
							<li>
								<span class="from">{stop.place}</span>
								{stop.text}
							</li>
						{/each}
					</ol>
					<span class="fun-fact">{v.reach.bike.funFact}</span>
				</span>
			</li>
			<li>
				<span class="icon"><Icon name="walk" /></span>
				<span>
					<strong>{v.reach.walk.title}</strong>
					<span class="muted">{v.reach.walk.text}</span>
				</span>
			</li>
		</ul>
	</section>

	<section aria-labelledby="when">
		<SectionHeading
			id="when"
			title={v.whenTitle}
			action={{ href: i18n.path('/seasons'), label: i18n.m.nav.seasons }}
		/>
		<ul class="list">
			{#each v.when as item, i (item.title)}
				<li>
					<span class="icon"><Icon name={whenIcons[i] ?? 'sun'} /></span>
					<span>
						<strong>{item.title}</strong>
						<span class="muted">{item.text}</span>
					</span>
				</li>
			{/each}
		</ul>
	</section>
</div>

<section class="wrap section respect" aria-labelledby="respect">
	<Card tone="primary">
		<SectionHeading id="respect" title={v.respectTitle} lead={v.respectLead} />
		<ul class="rules">
			{#each v.respect as rule, i (rule.title)}
				<li>
					<span class="rule-icon"><Icon name={respectIcons[i] ?? 'leaf'} /></span>
					<strong>{rule.title}</strong>
					<span class="rule-text">{rule.text}</span>
				</li>
			{/each}
		</ul>
	</Card>
</section>

<div class="wrap layout">
	<section aria-labelledby="bring">
		<SectionHeading id="bring" title={v.bringTitle} />
		<ul class="list two">
			{#each v.bring as item (item)}
				<li>
					<span class="icon"><Icon name="backpack" /></span>
					<span>{item}</span>
				</li>
			{/each}
		</ul>
	</section>

	<section aria-labelledby="info">
		<SectionHeading id="info" title={v.infoTitle} />
		<ul class="list">
			{#each info as item (item.title)}
				<li>
					<span class="icon"><Icon name={item.icon} /></span>
					<span>
						<strong>{item.title}</strong>
						<span class="muted">{item.text}</span>
					</span>
				</li>
			{/each}
		</ul>
	</section>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-fluid-m);
		padding-block: var(--space-4);
	}

	@media (max-width: 52rem) {
		.layout {
			grid-template-columns: 1fr;
		}
	}

	.open-in {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-2);
		margin: var(--space-2) 0 var(--space-3);
	}

	.list {
		display: grid;
		column-gap: var(--space-5);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.list.two {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 30rem) {
		.list.two {
			grid-template-columns: 1fr;
		}
	}

	.list li {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		padding-block: var(--space-3);
		border-top: 1px solid var(--line);
	}

	.list li > span:last-child {
		display: flex;
		flex-direction: column;
	}

	.icon {
		display: inline-flex;
		flex: none;
		padding: var(--space-2);
		border-radius: var(--radius-s);
		background: var(--primary-soft);
		color: var(--primary-ink);
	}

	strong {
		font-weight: 600;
	}

	.muted {
		color: var(--muted);
		font-size: var(--text-s);
	}

	.route {
		margin-top: var(--space-2);
	}

	.from {
		font-size: var(--text-s);
		font-weight: 600;
	}

	.route ol {
		margin: var(--space-1) 0 0;
		padding-left: var(--space-4);
	}

	.fun-fact {
		margin-top: var(--space-2);
		color: var(--primary-ink);
		font-size: var(--text-s);
	}

	.rules {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
		gap: var(--space-4) var(--space-5);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.rules li {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: var(--space-3);
	}

	.rule-icon {
		grid-row: span 2;
		display: inline-flex;
		align-self: start;
		padding: var(--space-2);
		border-radius: var(--radius-s);
		background: rgb(255 255 255 / 0.4);
	}

	.rule-text {
		font-size: var(--text-s);
		opacity: 0.8;
	}

	/* Steps are plain list items, not rows of the divided lists above. */
	.facts {
		display: flex;
		flex-flow: row wrap;
		gap: var(--space-1);
		margin: var(--space-2) 0 var(--space-1);
	}

	.stops {
		margin: var(--space-2) 0 0;
		padding-left: var(--space-4);
	}

	.stops li,
	.route ol li {
		display: list-item;
		padding: 0;
		border: 0;
	}

	.respect :global(.lead) {
		color: inherit;
		opacity: 0.8;
	}
</style>
