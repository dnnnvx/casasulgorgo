<script lang="ts">
	import SpriteIcon from '#lib/components/art/SpriteIcon.svelte'
	import Backdrop from '#lib/components/ui/Backdrop.svelte'
	import Badge from '#lib/components/ui/Badge.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Icon from '#lib/components/ui/Icon.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { speciesOfDay } from '#lib/nature/catalog.ts'
	import { speciesPath } from '#lib/nature/labels.ts'
	import type { Day } from '#lib/nature/seasons.ts'

	let { day }: { day: Day } = $props()
	const i18n = getI18n()

	let species = $derived(speciesOfDay(day))
	let photo = $derived(species.photos?.[0])
</script>

<Card>
	<p class="label"><Icon name="leaf" size={16} /> {i18n.m.home.ofTheDay}</p>
	<a class="species" href={i18n.path(speciesPath(species))}>
		<span class="sprite">
			{#if photo}
				<img src={photo.src} alt="" width={photo.width} height={photo.height} loading="lazy">
			{:else}
				<Backdrop theme={species.group}>
					<span class="sprite-art"><SpriteIcon art={species.sprite} /></span>
				</Backdrop>
			{/if}
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
		gap: var(--space-2);
		color: var(--primary-ink);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.name {
		display: block;
		font-family: var(--font-display);
		font-size: var(--text-xl);
		line-height: 1.15;
	}

	.species {
		display: flex;
		align-items: center;
		gap: var(--space-3);
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

	.sprite img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.sprite-art {
		display: block;
		padding: var(--space-2);
	}

	.latin {
		display: block;
		color: var(--muted);
		font-size: var(--text-s);
		font-style: italic;
	}

	.text {
		color: var(--muted);
		font-size: var(--text-s);
	}

	.foot {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-2);
		margin-top: auto;
	}

	.note {
		color: var(--muted);
		font-size: var(--text-s);
	}
</style>
