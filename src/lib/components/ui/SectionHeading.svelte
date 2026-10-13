<script lang="ts">
	type Props = {
		title: string
		id?: string | undefined
		eyebrow?: string | undefined
		lead?: string | undefined
		action?: { href: string; label: string } | undefined
	}

	let { title, id, eyebrow, lead, action }: Props = $props()
</script>

<header>
	<div>
		{#if eyebrow}
			<p class="eyebrow">{eyebrow}</p>
		{/if}
		<h2 {id}>{title}</h2>
		{#if lead}
			<p class="lead">{lead}</p>
		{/if}
	</div>
	{#if action}
		<a class="action" href={action.href}>{action.label} →</a>
	{/if}
</header>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		align-items: end;
		justify-content: space-between;
		gap: var(--space-2) var(--space-5);
		margin-bottom: var(--space-4);
	}

	.eyebrow {
		margin-bottom: var(--space-1);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
	}

	h2 {
		font-size: var(--text-2xl);
	}

	.lead {
		margin-top: var(--space-1);
		color: var(--muted);
	}

	.action {
		font-size: var(--text-s);
		font-weight: 600;
		text-decoration: none;
	}

	.action:hover {
		text-decoration: underline;
	}
</style>
