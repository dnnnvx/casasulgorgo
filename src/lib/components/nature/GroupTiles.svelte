<script lang="ts">
	import SpriteIcon from '#lib/components/art/SpriteIcon.svelte'
	import Backdrop from '#lib/components/ui/Backdrop.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { inGroup } from '#lib/nature/catalog.ts'
	import { groupPath } from '#lib/nature/labels.ts'
	import type { Group } from '#lib/nature/types.ts'

	/** One tile per group: its habitat backdrop with the first species, name and count. */
	let { groups }: { groups: readonly Group[] } = $props()
	const i18n = getI18n()
</script>

<ul>
	{#each groups as group (group)}
		{@const members = inGroup(group)}
		<li>
			<a class="pixel-box" href={i18n.path(groupPath(group))}>
				<span class="art">
					<Backdrop theme={group}>
						{#if members[0]}
							<span class="sprite"><SpriteIcon art={members[0].sprite} /></span>
						{/if}
					</Backdrop>
				</span>
				<span class="name">{i18n.m.groups[group].name}</span>
				<span class="count">{i18n.m.common.species(members.length)}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
		gap: var(--stack-gap) var(--card-gap);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto;
		column-gap: var(--space-3);
		align-content: center;
		align-items: center;
		/* Fixed, so every tile matches whatever its name's length: room for a two-line name. */
		height: 4.75rem;
		padding: var(--space-2);
		--fill: var(--panel);
		--edge: var(--border);
		--drop: var(--shadow-color);
		border: var(--border-width) solid transparent;
		color: var(--ink);
		text-decoration: none;
	}

	a:hover {
		--fill: var(--panel-hover);
	}

	.art {
		grid-row: span 2;
		width: 3rem;
		height: 3rem;
		clip-path: var(--pixel-corners);
	}

	.art :global(.backdrop) {
		height: 100%;
	}

	.sprite {
		display: grid;
		place-items: center;
		height: 100%;
		padding: var(--space-2);
	}

	.sprite :global(svg) {
		filter: drop-shadow(0 1px 0 rgb(0 0 0 / 0.12));
	}

	.name {
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		font-size: var(--text-s);
		font-weight: 600;
		line-height: 1.2;
	}

	.count {
		color: var(--muted);
		font-size: var(--text-s);
	}
</style>
