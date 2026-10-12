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
		gap: 0.35rem;
		padding: 0.2rem 0.55rem;
		border-radius: var(--radius-pill);
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 1.3;
		white-space: nowrap;
	}

	.neutral {
		background: var(--surface-2);
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
		border: 1px dashed var(--line);
		color: var(--muted);
	}

	.dot {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
	}
</style>
