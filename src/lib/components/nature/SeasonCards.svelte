<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { starsOf } from '#lib/nature/catalog.ts'
	import { speciesPath } from '#lib/nature/labels.ts'
	import { type Season, seasonMonths, seasons } from '#lib/seasons.ts'
	import SpriteIcon from '../SpriteIcon.svelte'
	import Backdrop from '../ui/Backdrop.svelte'
	import Badge from '../ui/Badge.svelte'

	/** The four seasons side by side: a seasonal backdrop, the note and the species to look for. */
	let { current }: { current: Season } = $props()
	const i18n = getI18n()
</script>

<div class="seasons">
	{#each seasons as season (season)}
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
	.seasons {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 0.75rem;
	}

	@media (max-width: 60rem) {
		.seasons {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 30rem) {
		.seasons {
			grid-template-columns: 1fr;
		}
	}

	article {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: var(--radius-m);
		background: var(--panel);
	}

	article.current {
		box-shadow: 0 0 0 2px var(--primary);
	}

	header {
		position: relative;
		min-height: 5.5rem;
		padding: 0.9rem 1rem;
	}

	h3 {
		font-size: 1.3rem;
	}

	.months {
		font-size: 0.75rem;
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
		gap: 0.6rem;
		padding: 0.9rem 1rem 1rem;
	}

	.note {
		color: var(--muted);
		font-size: 0.9rem;
	}

	.sprites {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
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
</style>
