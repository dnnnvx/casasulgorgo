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
	<a class="card link {tone} {padding}" {href}>{@render children()}</a>
{:else}
	<div class="card {tone} {padding}">{@render children()}</div>
{/if}

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		min-width: 0;
		border-radius: var(--radius-m);
		color: var(--ink);
		text-decoration: none;
		/* Each tone sets --edge to a darker shade of its own background. */
		border: var(--border-width) solid var(--edge, var(--border));
		box-shadow:
			0 4px 0 var(--drop, var(--edge, var(--shadow-color))),
			var(--card-sheen, var(--sheen));
	}

	.m {
		padding: var(--space-4);
	}

	.s {
		padding: var(--space-3);
	}

	.surface {
		--chip-bg: var(--chip-on-panel);
		background: var(--panel);
		--edge: var(--border);
		box-shadow: var(--shadow);
	}

	.soft {
		--edge: light-dark(#bccb8a, #4a5c2a);
		background: var(--primary-soft);
	}

	.primary {
		--edge: #7f9638;
		background: var(--noise), linear-gradient(150deg, #c2d778, var(--primary) 55%, #93ad45);
		background-blend-mode: soft-light, normal;
		color: var(--on-primary);
	}

	.forest {
		--edge: var(--forest-edge);
		--drop: var(--forest-drop);
		--card-sheen: var(--dark-card-sheen);
		background: var(--noise), linear-gradient(160deg, #26462f, var(--forest) 60%, #182e21);
		background-blend-mode: soft-light, normal;
		color: var(--on-forest);
	}

	.link {
		transition: background-color 0.15s;
	}

	.link.surface:hover {
		background: var(--panel-hover);
	}
</style>
