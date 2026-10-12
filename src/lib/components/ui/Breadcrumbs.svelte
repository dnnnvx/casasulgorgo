<script lang="ts">
	/** The last item is the current page and is not linked. */
	let { items, label }: { items: readonly { label: string; href?: string }[]; label: string } =
		$props()
</script>

<nav aria-label={label}>
	<ol>
		{#each items as item, i (i)}
			<li>
				{#if item.href && i < items.length - 1}
					<a href={item.href}>{item.label}</a>
				{:else}
					<span aria-current="page">{item.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	ol {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin: 0;
		padding: 0;
		list-style: none;
		color: var(--muted);
		font-size: 0.85rem;
	}

	li + li::before {
		content: "/";
		margin-right: 0.4rem;
		opacity: 0.5;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		color: var(--ink);
		text-decoration: underline;
	}

	[aria-current] {
		color: var(--ink);
	}
</style>
