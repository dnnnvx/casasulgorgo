<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { IconName } from '#lib/assets/icons.ts'
	import Icon from './Icon.svelte'

	type Props = {
		children: Snippet
		/** Renders a link when set, a button otherwise. */
		href?: string | undefined
		/** Opens the link in a new tab. */
		external?: boolean
		variant?: 'primary' | 'dark' | 'outline' | 'ghost'
		size?: 's' | 'm'
		icon?: IconName | undefined
		iconAfter?: IconName | undefined
		type?: 'button' | 'submit'
		onclick?: (() => void) | undefined
	}

	let {
		children,
		href,
		external = false,
		variant = 'primary',
		size = 'm',
		icon,
		iconAfter,
		type = 'button',
		onclick
	}: Props = $props()
</script>

{#snippet content()}
	{#if icon}
		<Icon name={icon} size={size === 's' ? 16 : 18} />
	{/if}
	<span>{@render children()}</span>
	{#if iconAfter}
		<Icon name={iconAfter} size={size === 's' ? 16 : 18} />
	{/if}
{/snippet}

{#if href}
	<a
		class="button {variant} {size}"
		{href}
		target={external ? '_blank' : null}
		rel={external ? 'noopener noreferrer' : null}
		>{@render content()}</a
	>
{:else}
	<button class="button {variant} {size}" {type} {onclick}>{@render content()}</button>
{/if}

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		border: 1.5px solid transparent;
		border-radius: var(--radius-pill);
		font: inherit;
		font-weight: 600;
		line-height: 1;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		transition:
			background-color 0.15s,
			border-color 0.15s,
			transform 0.15s;
	}

	.button:active {
		transform: translateY(1px);
	}

	.m {
		padding: var(--space-3) var(--space-4);
		font-size: var(--text-s);
	}

	.s {
		padding: var(--space-2) var(--space-3);
		font-size: var(--text-s);
	}

	.primary {
		background: var(--primary);
		color: var(--on-primary);
	}

	.primary:hover {
		background: var(--primary-hover);
	}

	.dark {
		background: var(--on-primary);
		color: var(--primary);
	}

	.dark:hover {
		background: #2d3a1c;
	}

	.outline {
		border-color: currentColor;
		color: inherit;
		background: transparent;
	}

	.outline:hover {
		background: rgb(0 0 0 / 0.06);
	}

	.ghost {
		color: var(--primary-ink);
		background: transparent;
	}

	.ghost:hover {
		background: var(--primary-soft);
	}
</style>
