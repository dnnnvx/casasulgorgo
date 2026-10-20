<script lang="ts">
	import SpriteIcon from '#lib/components/art/SpriteIcon.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { speciesPath } from '#lib/nature/labels.ts'
	import type { Species } from '#lib/nature/types.ts'

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
		gap: var(--space-2);
		padding: var(--space-1) var(--space-3) var(--space-1) var(--space-1);
		border-radius: var(--radius-pill);
		background: var(--chip-bg, var(--chip));
		color: var(--chip-ink, var(--ink));
		font-size: var(--text-s);
		font-weight: 500;
		text-decoration: none;
		white-space: nowrap;
	}

	a:hover {
		background: var(--chip-bg-hover, var(--chip-hover));
	}

	.sprite {
		width: 1.6rem;
		height: 1.6rem;
		padding: 2px;
		border-radius: 50%;
		background: var(--tile);
	}
</style>
