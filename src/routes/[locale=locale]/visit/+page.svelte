<script lang="ts">
	import Seo from '#lib/components/site/Seo.svelte'
	import Backdrop from '#lib/components/ui/Backdrop.svelte'
	import Badge from '#lib/components/ui/Badge.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Icon from '#lib/components/ui/Icon.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import type { IconName } from '#lib/icons.ts'

	const i18n = getI18n()

	let v = $derived(i18n.m.visit)
	let reach = $derived([
		{ icon: 'car', ...v.reach.car },
		{ icon: 'bike', ...v.reach.bike },
		{ icon: 'train', ...v.reach.train },
		{ icon: 'walk', ...v.reach.walk }
	] satisfies { icon: IconName; title: string; text: string }[])
	let info = $derived([
		{ icon: 'clock', ...v.info.access },
		{ icon: 'parking', ...v.info.services },
		{ icon: 'mail', ...v.info.contact }
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
		<div class="map">
			<Backdrop theme="spring">
				<div class="map-content">
					<Icon name="pin" size={28} />
					<p>{v.reachNote}</p>
					<Badge tone="soon">{i18n.m.common.soon}</Badge>
				</div>
			</Backdrop>
		</div>
		<ul class="list two">
			{#each reach as item (item.title)}
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
		gap: clamp(1.5rem, 4vw, 3rem);
		padding-block: 1rem;
	}

	@media (max-width: 52rem) {
		.layout {
			grid-template-columns: 1fr;
		}
	}

	.map {
		overflow: hidden;
		margin-bottom: 0.75rem;
		border-radius: var(--radius-m);
	}

	.map-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		min-height: 9rem;
		padding: 1rem;
		font-size: 0.9rem;
		text-align: center;
	}

	.list {
		display: grid;
		column-gap: 1.5rem;
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
		gap: 0.75rem;
		padding-block: 0.75rem;
		border-top: 1px solid var(--line);
	}

	.list li > span:last-child {
		display: flex;
		flex-direction: column;
	}

	.icon {
		display: inline-flex;
		flex: none;
		padding: 0.45rem;
		border-radius: var(--radius-s);
		background: var(--primary-soft);
		color: var(--primary-ink);
	}

	strong {
		font-weight: 600;
	}

	.muted {
		color: var(--muted);
		font-size: 0.875rem;
	}

	.rules {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
		gap: 1rem 1.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.rules li {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 0.7rem;
	}

	.rule-icon {
		grid-row: span 2;
		display: inline-flex;
		align-self: start;
		padding: 0.45rem;
		border-radius: var(--radius-s);
		background: rgb(255 255 255 / 0.4);
	}

	.rule-text {
		font-size: 0.875rem;
		opacity: 0.8;
	}

	.respect :global(.lead) {
		color: inherit;
		opacity: 0.8;
	}
</style>
