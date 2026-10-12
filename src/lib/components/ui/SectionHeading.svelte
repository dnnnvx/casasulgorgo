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
		gap: 0.5rem 1.5rem;
		margin-bottom: 1rem;
	}

	.eyebrow {
		margin-bottom: 0.3rem;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
	}

	h2 {
		font-size: clamp(1.4rem, 2.6vw, 1.85rem);
	}

	.lead {
		margin-top: 0.25rem;
		color: var(--muted);
	}

	.action {
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
	}

	.action:hover {
		text-decoration: underline;
	}
</style>
