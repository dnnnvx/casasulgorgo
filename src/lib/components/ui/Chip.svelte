<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		/** Renders a link when set; otherwise a toggle button. */
		href?: string | undefined
		active?: boolean
		count?: number | undefined
		onclick?: (() => void) | undefined
	}

	let { children, href, active = false, count, onclick }: Props = $props()
</script>

{#snippet content()}
	{@render children()}
	{#if count !== undefined}
		<span class="count">{count}</span>
	{/if}
{/snippet}

{#if href}
	<a class="chip" class:active {href} aria-current={active ? 'page' : undefined}>
		{@render content()}
	</a>
{:else}
	<button class="chip" class:active type="button" aria-pressed={active} {onclick}>
		{@render content()}
	</button>
{/if}

<style>
	.chip {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--chip);
		color: var(--ink);
		font: inherit;
		font-size: var(--text-s);
		font-weight: 500;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		transition: background-color 0.15s;
	}

	.chip:hover {
		background: var(--chip-hover);
	}

	.active,
	.active:hover {
		background: var(--primary);
		color: var(--on-primary);
	}

	.count {
		min-width: 1.4rem;
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-pill);
		background: var(--bg);
		color: var(--muted);
		font-size: var(--text-xs);
		text-align: center;
	}

	.active .count {
		background: rgb(255 255 255 / 0.45);
		color: var(--on-primary);
	}
</style>
