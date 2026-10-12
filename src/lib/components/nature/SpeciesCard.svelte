<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { phases } from '#lib/nature/catalog.ts'
	import { phaseLabel, speciesPath } from '#lib/nature/labels.ts'
	import type { Species } from '#lib/nature/types.ts'
	import { months } from '#lib/seasons.ts'
	import SpriteIcon from '../SpriteIcon.svelte'
	import Backdrop from '../ui/Backdrop.svelte'

	type Props = {
		species: Species
		/** Highlights this month on the mini calendar. */
		current?: number | undefined
		summary?: boolean
	}

	let { species, current, summary = true }: Props = $props()
	const i18n = getI18n()

	let year = $derived(phases(species.calendar))
</script>

<a class="card" href={i18n.path(speciesPath(species))}>
	<span class="habitat">
		<Backdrop theme={species.group}>
			<span class="sprite"><SpriteIcon art={species.sprite} /></span>
		</Backdrop>
	</span>
	<span class="body">
		<span class="name">{i18n.t(species.name)}</span>
		<span class="latin">{species.scientificName}</span>
		{#if summary}
			<span class="summary">{i18n.t(species.summary)}</span>
		{/if}
		<span class="year" aria-hidden="true">
			{#each year as phase, i (i)}
				<span
					class="month swatch-{phase}"
					class:current={i === current}
					style:background-color="var(--phase-{phase})"
					title="{i18n.m.monthsShort[months[i] ?? 'jan']}: {phaseLabel(
						i18n.m,
						species.kind,
						phase
					)}"
				></span>
			{/each}
		</span>
	</span>
</a>

<style>
	.card {
		display: grid;
		grid-template-columns: minmax(5.5rem, 1fr) 2fr;
		min-width: 0;
		overflow: hidden;
		border-radius: var(--radius-m);
		background: var(--panel);
		color: var(--ink);
		text-decoration: none;
		transition: background-color 0.15s;
	}

	.card:hover {
		background: var(--panel-hover);
	}

	.habitat :global(.backdrop) {
		height: 100%;
	}

	.sprite {
		display: grid;
		place-items: center;
		height: 100%;
		padding: 0.9rem;
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
		padding: 0.85rem 0.95rem;
	}

	.name {
		font-family: var(--font-display);
		font-size: 1.05rem;
		font-weight: 500;
		line-height: 1.2;
	}

	.latin {
		color: var(--muted);
		font-size: 0.8rem;
		font-style: italic;
	}

	.summary {
		display: -webkit-box;
		margin-top: 0.3rem;
		overflow: hidden;
		color: var(--muted);
		font-size: 0.85rem;
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
		padding-top: 0.6rem;
	}

	.month {
		height: 5px;
		border-radius: 2px;
	}

	.month.current {
		height: 9px;
		margin-top: -2px;
		box-shadow: 0 0 0 1.5px var(--ink);
	}
</style>
