<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { IconName } from '#lib/assets/icons.ts'
	import IconBadge from '#lib/components/ui/IconBadge.svelte'

	type Props = {
		icon: IconName
		title?: string | undefined
		text?: string | undefined
		/** Glass icon for items on a coloured card. */
		tone?: 'soft' | 'glass'
		/** Extra content under the text (routes, stops, badges). */
		children?: Snippet
	}

	let { icon, title, text, tone = 'soft', children }: Props = $props()
</script>

<!-- One row of an IconList, which sets the --item-* variables for its layout. -->
<li>
	<IconBadge name={icon} {tone} />
	<span class="body">
		{#if title}
			<strong>{title}</strong>
		{/if}
		{#if text}
			<span class="text">{text}</span>
		{/if}
		{@render children?.()}
	</span>
</li>

<style>
	li {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		padding-block: var(--item-padding, 0);
		border-top: var(--item-border, 0);
	}

	.body {
		display: flex;
		flex-direction: column;
	}

	strong {
		font-weight: 600;
	}

	.text {
		color: var(--item-text, var(--muted));
		font-size: var(--text-s);
		opacity: var(--item-text-opacity, 1);
	}
</style>
