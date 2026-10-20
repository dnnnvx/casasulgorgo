<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		/** IconItem children. */
		children: Snippet
		/** rows: divided rows on the page; grid: tiles on a coloured card. */
		layout?: 'rows' | 'grid'
		/** Rows only: side by side on wide screens. */
		columns?: 1 | 2
	}

	let { children, layout = 'rows', columns = 1 }: Props = $props()
</script>

<ul class={layout} class:two={columns === 2}>
	{@render children()}
</ul>

<style>
	ul {
		display: grid;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.rows {
		column-gap: var(--space-fluid-m);
		--item-padding: var(--space-3);
		--item-border: 1px solid var(--line);
	}

	.rows.two {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (max-width: 40rem) {
		.rows.two {
			grid-template-columns: 1fr;
		}
	}

	.grid {
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
		gap: var(--space-4) var(--space-5);
		/* currentColor, not inherit: on a custom property inherit copies the parent's variable, not its colour. */
		--item-text: currentColor;
		--item-text-opacity: 0.8;
	}
</style>
