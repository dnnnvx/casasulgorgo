<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		/** Makes the whole card a link. */
		href?: string | undefined
		tone?: 'surface' | 'soft' | 'primary' | 'forest'
		padding?: 's' | 'm'
	}

	let { children, href, tone = 'surface', padding = 'm' }: Props = $props()
</script>

{#if href}
	<a class="card pixel-box link {tone} {padding}" {href}>{@render children()}</a>
{:else}
	<div class="card pixel-box {tone} {padding}">{@render children()}</div>
{/if}

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		min-width: 0;
		color: var(--ink);
		text-decoration: none;
		/* The edge, drop and fill are drawn by .pixel-box; the border only keeps the spacing. */
		border: var(--border-width) solid transparent;
		/* Each tone sets --edge to a darker shade of its own --fill; the drop defaults to the edge. */
		--drop: var(--edge);
	}

	.m {
		padding: var(--space-4);
	}

	.s {
		padding: var(--space-3);
	}

	.surface {
		--chip-bg: var(--chip-on-panel);
		--fill: var(--panel);
		--edge: var(--border);
		--drop: var(--shadow-color);
	}

	.soft {
		--edge: light-dark(#bccb8a, #4a5c2a);
		--fill: var(--primary-soft);
	}

	.primary {
		--edge: #7f9638;
		--fill: var(--fill-primary);
		color: var(--on-primary);
	}

	.forest {
		--edge: var(--forest-edge);
		--drop: var(--forest-drop);
		--card-sheen: var(--dark-card-sheen);
		--fill: var(--fill-forest);
		color: var(--on-forest);
	}

	.link.surface:hover {
		--fill: var(--panel-hover);
	}
</style>
