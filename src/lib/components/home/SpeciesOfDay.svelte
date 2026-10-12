<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { speciesOfDay } from '#lib/nature/catalog.ts'
	import { speciesPath } from '#lib/nature/labels.ts'
	import type { Day } from '#lib/seasons.ts'
	import SpriteIcon from '../SpriteIcon.svelte'
	import Backdrop from '../ui/Backdrop.svelte'
	import Badge from '../ui/Badge.svelte'
	import Card from '../ui/Card.svelte'
	import Icon from '../ui/Icon.svelte'

	let { day }: { day: Day } = $props()
	const i18n = getI18n()

	let species = $derived(speciesOfDay(day))
</script>

<Card>
	<p class="label"><Icon name="leaf" size={16} /> {i18n.m.home.ofTheDay}</p>
	<a class="species" href={i18n.path(speciesPath(species))}>
		<span class="sprite">
			<Backdrop theme={species.group}>
				<span class="sprite-art"><SpriteIcon art={species.sprite} /></span>
			</Backdrop>
		</span>
		<span>
			<span class="name">{i18n.t(species.name)}</span>
			<span class="latin">{species.scientificName}</span>
		</span>
	</a>
	<p class="text">{i18n.t(species.summary)}</p>
	<p class="foot">
		<Badge tone="primary">{i18n.m.groups[species.group].name}</Badge>
		<span class="note">{i18n.m.home.ofTheDayNote}</span>
	</p>
</Card>

<style>
	.label {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--primary-ink);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.name {
		display: block;
		font-family: var(--font-display);
		font-size: 1.35rem;
		line-height: 1.15;
	}

	.species {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		color: var(--ink);
		text-decoration: none;
	}

	.species:hover .name {
		text-decoration: underline;
	}

	.sprite {
		flex: none;
		width: 4.75rem;
		height: 4.75rem;
		overflow: hidden;
		border-radius: var(--radius-s);
	}

	.sprite :global(.backdrop) {
		height: 100%;
	}

	.sprite-art {
		display: block;
		padding: 0.5rem;
	}

	.latin {
		display: block;
		color: var(--muted);
		font-size: 0.85rem;
		font-style: italic;
	}

	.text {
		color: var(--muted);
		font-size: 0.9rem;
	}

	.foot {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		margin-top: auto;
	}

	.note {
		color: var(--muted);
		font-size: 0.8rem;
	}
</style>
