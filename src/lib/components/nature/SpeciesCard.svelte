<script lang="ts">
	import SpriteIcon from '#lib/components/art/SpriteIcon.svelte'
	import Backdrop from '#lib/components/ui/Backdrop.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { phases } from '#lib/nature/catalog.ts'
	import { phaseLabel, speciesPath } from '#lib/nature/labels.ts'
	import { months } from '#lib/nature/seasons.ts'
	import type { Species } from '#lib/nature/types.ts'
	import PhaseCell from './PhaseCell.svelte'

	type Props = {
		species: Species
		/** Highlights this month on the mini calendar. */
		current?: number | undefined
		summary?: boolean
	}

	let { species, current, summary = true }: Props = $props()
	const i18n = getI18n()

	let year = $derived(phases(species.calendar))
	let photo = $derived(species.photos?.[0])
</script>

<a class="card pixel-box" href={i18n.path(speciesPath(species))}>
	<span class="habitat">
		{#if photo}
			<!-- The name sits right next to it, so the photo is decorative here. -->
			<img
				class="photo"
				src={photo.src}
				alt=""
				width={photo.width}
				height={photo.height}
				loading="lazy"
			>
		{:else}
			<Backdrop theme={species.group}>
				<span class="sprite"><SpriteIcon art={species.sprite} /></span>
			</Backdrop>
		{/if}
	</span>
	<span class="body">
		<span class="name">{i18n.t(species.name)}</span>
		<span class="latin">{species.scientificName}</span>
		{#if summary}
			<span class="summary">{i18n.t(species.summary)}</span>
		{/if}
		<span class="year" aria-hidden="true">
			{#each year as phase, i (i)}
				<PhaseCell
					{phase}
					size="s"
					current={i === current}
					title="{i18n.m.monthsShort[months[i] ?? 'jan']}: {phaseLabel(
						i18n.m,
						species.kind,
						phase
					)}"
				/>
			{/each}
		</span>
	</span>
</a>

<style>
	.card {
		display: grid;
		grid-template-columns: minmax(5.5rem, 1fr) 2fr;
		min-width: 0;
		--fill: var(--panel);
		--edge: var(--border);
		--drop: var(--shadow-color);
		border: var(--border-width) solid transparent;
		color: var(--ink);
		text-decoration: none;
	}

	.card:hover {
		--fill: var(--panel-hover);
	}

	.habitat {
		overflow: hidden;
		clip-path: var(--pixel-corners-left);
	}

	.habitat :global(.backdrop) {
		height: 100%;
	}

	.photo {
		display: block;
		width: 100%;
		height: 100%;
		min-height: 6rem;
		object-fit: cover;
		transition: transform 0.2s;
	}

	.card:hover .photo {
		transform: scale(1.04);
	}

	.sprite {
		display: grid;
		place-items: center;
		height: 100%;
		padding: var(--space-3);
		transition: transform 0.2s;
	}

	.card:hover .sprite {
		transform: scale(1.06);
	}

	.sprite :global(svg) {
		max-width: 4rem;
		filter: drop-shadow(0 2px 0 rgb(0 0 0 / 0.12));
	}

	.body {
		display: flex;
		flex-direction: column;
		min-width: 0;
		padding: var(--space-3) var(--space-3);
	}

	.name {
		font-family: var(--font-display);
		font-size: var(--text-m);
		font-weight: 500;
		line-height: 1.2;
	}

	.latin {
		color: var(--muted);
		font-size: var(--text-s);
		font-style: italic;
	}

	.summary {
		display: -webkit-box;
		margin-top: var(--space-1);
		overflow: hidden;
		color: var(--muted);
		font-size: var(--text-s);
		line-height: 1.4;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-clamp: 2;
	}

	.year {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 2px;
		margin-top: auto;
		padding-top: var(--space-2);
	}
</style>
