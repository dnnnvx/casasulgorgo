<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		tone?: 'neutral' | 'primary' | 'accent' | 'soon'
		/** A custom dot colour, e.g. a season or a calendar phase. */
		dot?: string | undefined
		title?: string | undefined
	}

	let { children, tone = 'neutral', dot, title }: Props = $props()
</script>

<span class="badge {tone}" {title}>
	{#if dot}
		<span class="dot" style:background={dot}></span>
	{/if}
	{@render children()}
</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-pill);
		font-size: var(--text-xs);
		font-weight: 700;
		line-height: 1.3;
		white-space: nowrap;
		border: 1.5px solid color-mix(in srgb, currentColor 30%, transparent);
		box-shadow: 0 2px 0 color-mix(in srgb, currentColor 18%, transparent);
	}

	.neutral {
		background: var(--chip-bg, var(--chip));
		color: var(--muted);
	}

	.primary {
		background: var(--primary-soft);
		color: var(--primary-ink);
	}

	.accent {
		background: color-mix(in srgb, var(--accent) 15%, transparent);
		color: var(--accent);
	}

	.soon {
		border-style: dashed;
		color: var(--muted);
	}

	.dot {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
	}
</style>
