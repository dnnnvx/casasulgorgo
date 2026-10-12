<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { speciesPath } from '#lib/nature/labels.ts'
	import type { Species } from '#lib/nature/types.ts'
	import SpriteIcon from '../SpriteIcon.svelte'

	/** A compact link to a species: sprite and name, for dense lists. */
	let { species }: { species: Species } = $props()
	const i18n = getI18n()
</script>

<a href={i18n.path(speciesPath(species))}>
	<span class="sprite"><SpriteIcon art={species.sprite} /></span>
	{i18n.t(species.name)}
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.25rem 0.7rem 0.25rem 0.25rem;
		border-radius: var(--radius-pill);
		background: var(--chip-bg, var(--chip));
		color: var(--ink);
		font-size: 0.85rem;
		font-weight: 500;
		text-decoration: none;
		white-space: nowrap;
	}

	a:hover {
		background: var(--chip-hover);
	}

	.sprite {
		width: 1.6rem;
		height: 1.6rem;
		padding: 2px;
		border-radius: 50%;
		background: var(--tile);
	}
</style>
