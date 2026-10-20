<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		title: string
		lead?: string | undefined
		/** Rendered above the title: breadcrumbs, an error code. */
		above?: Snippet
		/** Rendered after the lead: actions, filters. */
		children?: Snippet
	}

	let { title, lead, above, children }: Props = $props()
</script>

<header class="wrap">
	{@render above?.()}
	<h1>{title}</h1>
	{#if lead}
		<p>{lead}</p>
	{/if}
	{@render children?.()}
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-2);
		padding-block: var(--space-fluid-m) var(--space-4);
	}

	h1 {
		font-size: var(--text-3xl);
	}

	p {
		max-width: 40rem;
		color: var(--muted);
	}
</style>
