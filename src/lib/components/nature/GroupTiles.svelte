<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { inGroup } from '#lib/nature/catalog.ts'
	import { groupPath } from '#lib/nature/labels.ts'
	import type { Group } from '#lib/nature/types.ts'
	import SpriteIcon from '../SpriteIcon.svelte'
	import Backdrop from '../ui/Backdrop.svelte'

	/** One tile per group: its habitat backdrop with the first species, name and count. */
	let { groups }: { groups: readonly Group[] } = $props()
	const i18n = getI18n()
</script>

<ul>
	{#each groups as group (group)}
		{@const members = inGroup(group)}
		<li>
			<a href={i18n.path(groupPath(group))}>
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
		gap: var(--space-2);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto;
		column-gap: var(--space-3);
		align-items: center;
		padding: var(--space-2);
		border-radius: var(--radius-m);
		background: var(--panel);
		border: var(--border-width) solid var(--border);
		box-shadow: var(--shadow);
		color: var(--ink);
		text-decoration: none;
		transition: background-color 0.15s;
	}

	a:hover {
		background: var(--panel-hover);
	}

	.art {
		grid-row: span 2;
		width: 3rem;
		height: 3rem;
		overflow: hidden;
		border-radius: var(--radius-s);
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
		font-size: var(--text-s);
		font-weight: 600;
		line-height: 1.2;
	}

	.count {
		color: var(--muted);
		font-size: var(--text-s);
	}
</style>
