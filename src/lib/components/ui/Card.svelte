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
	}

	.soft {
		background: var(--primary-soft);
	}

	.primary {
		background: var(--noise), linear-gradient(150deg, #c2d778, var(--primary) 55%, #93ad45);
		background-blend-mode: soft-light, normal;
		color: var(--on-primary);
	}

	.forest {
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
