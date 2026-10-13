<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { starsOf } from '#lib/nature/catalog.ts'
	import { speciesPath } from '#lib/nature/labels.ts'
	import { type Season, seasonMonths, seasonsFrom } from '#lib/seasons.ts'
	import SpriteIcon from '../SpriteIcon.svelte'
	import Backdrop from '../ui/Backdrop.svelte'
	import Badge from '../ui/Badge.svelte'

	/** The four seasons side by side: a seasonal backdrop, the note and the species to look for. */
	let { current }: { current: Season } = $props()
	const i18n = getI18n()
</script>

<div class="seasons">
	{#each seasonsFrom(current) as season (season)}
		<article class:current={season === current}>
			<Backdrop theme={season}>
				<header>
					<h3>{i18n.m.seasons[season]}</h3>
					<p class="months">
						{seasonMonths[season].map((m) => i18n.m.monthsShort[m]).join(' · ')}
					</p>
					{#if season === current}
						<span class="now"><Badge tone="primary">{i18n.m.species.now}</Badge></span>
					{/if}
				</header>
			</Backdrop>
			<div class="body">
				<p class="note">{i18n.m.seasonNotes[season]}</p>
				<div class="sprites">
					{#each starsOf(season, 6).shown as species (species.slug)}
						<a
							href={i18n.path(speciesPath(species))}
							title={i18n.t(species.name)}
							aria-label={i18n.t(species.name)}
						>
							<SpriteIcon art={species.sprite} />
						</a>
					{/each}
				</div>
			</div>
		</article>
	{/each}
</div>

<style>
	/* Always one row, current season first and a little larger; scrolls sideways when narrow. */
	.seasons {
		display: grid;
		grid-template-columns: 1.25fr repeat(3, minmax(0, 1fr));
		gap: var(--space-3);
		align-items: stretch;
		overflow-x: auto;
		scroll-snap-type: x proximity;
	}

	@media (max-width: 60rem) {
		.seasons {
			grid-template-columns: 17rem repeat(3, 13rem);
		}
	}

	article {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: var(--radius-m);
		background: var(--panel);
		scroll-snap-align: start;
		position: relative;
	}

	header {
		position: relative;
		min-height: 5.5rem;
		padding: var(--space-3) var(--space-4);
	}

	h3 {
		font-size: var(--text-xl);
	}

	.months {
		font-size: var(--text-xs);
		font-weight: 600;
		opacity: 0.75;
	}

	.now {
		position: absolute;
		top: 0.85rem;
		right: 0.85rem;
	}

	.body {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4) var(--space-4);
	}

	.note {
		color: var(--muted);
		font-size: var(--text-s);
	}

	.sprites {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-1);
		margin-top: auto;
	}

	.sprites a {
		width: 2rem;
		height: 2rem;
		padding: 3px;
		border-radius: var(--radius-s);
		background: var(--tile);
		transition: transform 0.15s;
	}

	.sprites a:hover {
		transform: translateY(-2px);
	}

	/* Same forest treatment as the "before you come" card, so it reads as "now". */
	article.current {
		background: var(--noise), linear-gradient(160deg, #26462f, var(--forest) 60%, #182e21);
		background-blend-mode: soft-light, normal;
		color: var(--on-forest);
	}

	/* The ring is drawn inside the card, so the scroll box can never clip it. */
	article.current::after {
		content: "";
		position: absolute;
		inset: 0;
		border-radius: inherit;
		box-shadow: inset 0 0 0 2px var(--primary);
		pointer-events: none;
	}

	article.current .note {
		color: inherit;
		opacity: 0.85;
	}

	article.current h3 {
		font-size: var(--text-xl);
	}
</style>
