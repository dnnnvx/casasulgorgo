<script lang="ts">
	import type { IconName } from '#lib/assets/icons.ts'
	import PlaceMap from '#lib/components/site/PlaceMap.svelte'
	import Seo from '#lib/components/site/Seo.svelte'
	import Badge from '#lib/components/ui/Badge.svelte'
	import Button from '#lib/components/ui/Button.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import IconItem from '#lib/components/ui/IconItem.svelte'
	import IconList from '#lib/components/ui/IconList.svelte'
	import PageHeader from '#lib/components/ui/PageHeader.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { mapLinks } from '#lib/config/place.ts'
	import { getI18n } from '#lib/i18n/index.ts'

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

<PageHeader title={v.title} lead={v.lead} />

<div class="wrap layout">
	<section aria-labelledby="reach">
		<SectionHeading id="reach" title={v.reachTitle} />
		<PlaceMap label={v.map.label} />
		<p class="cluster open-in">
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
		<IconList>
			<IconItem icon="car" title={v.reach.car.title}>
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
			</IconItem>
			<IconItem icon="bike" title="{v.reach.bike.title}: {v.reach.bike.route}">
				<span class="cluster facts">
					{#each v.reach.bike.facts as fact (fact.label)}
						<Badge>{fact.label}: {fact.value}</Badge>
					{/each}
				</span>
				<ol class="muted">
					{#each v.reach.bike.stops as stop (stop.place)}
						<li>
							<span class="from">{stop.place}</span>
							{stop.text}
						</li>
					{/each}
				</ol>
				<span class="fun-fact">{v.reach.bike.funFact}</span>
			</IconItem>
			<IconItem icon="walk" title={v.reach.walk.title} text={v.reach.walk.text} />
		</IconList>
	</section>

	<section aria-labelledby="when">
		<SectionHeading
			id="when"
			title={v.whenTitle}
			action={{ href: i18n.path('/seasons'), label: i18n.m.nav.seasons }}
		/>
		<IconList>
			{#each v.when as item, i (item.title)}
				<IconItem icon={whenIcons[i] ?? 'sun'} title={item.title} text={item.text} />
			{/each}
		</IconList>
	</section>
</div>

<section class="wrap section respect" aria-labelledby="respect">
	<Card tone="primary">
		<SectionHeading id="respect" title={v.respectTitle} lead={v.respectLead} />
		<IconList layout="grid">
			{#each v.respect as rule, i (rule.title)}
				<IconItem
					icon={respectIcons[i] ?? 'leaf'}
					tone="glass"
					title={rule.title}
					text={rule.text}
				/>
			{/each}
		</IconList>
	</Card>
</section>

<div class="wrap layout">
	<section aria-labelledby="bring">
		<SectionHeading id="bring" title={v.bringTitle} />
		<IconList columns={2}>
			{#each v.bring as item (item)}
				<IconItem icon="backpack">{item}</IconItem>
			{/each}
		</IconList>
	</section>

	<section aria-labelledby="info">
		<SectionHeading id="info" title={v.infoTitle} />
		<IconList>
			{#each info as item (item.title)}
				<IconItem icon={item.icon} title={item.title} text={item.text} />
			{/each}
		</IconList>
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
		margin: var(--space-2) 0 var(--space-3);
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

	ol {
		margin: var(--space-1) 0 0;
		padding-left: var(--space-4);
	}

	.facts {
		gap: var(--space-1);
		margin: var(--space-2) 0 var(--space-1);
	}

	.fun-fact {
		margin-top: var(--space-2);
		color: var(--primary-ink);
		font-size: var(--text-s);
	}

	.respect :global(.lead) {
		color: inherit;
		opacity: 0.8;
	}
</style>
