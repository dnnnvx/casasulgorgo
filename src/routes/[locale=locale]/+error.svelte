<script lang="ts">
	import Button from '#lib/components/ui/Button.svelte'
	import PageHeader from '#lib/components/ui/PageHeader.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { page } from '$app/state'

	const i18n = getI18n()
</script>

<svelte:head>
	<title>{i18n.m.notFound.title} · {i18n.m.site.name}</title>
	<meta name="robots" content="noindex">
</svelte:head>

<div class="error">
	<PageHeader
		title={page.status === 404 ? i18n.m.notFound.title : (page.error?.message ?? '')}
		lead={i18n.m.notFound.text}
	>
		{#snippet above()}
			<p class="code">{page.status}</p>
		{/snippet}
		<div class="cluster actions">
			<Button href={i18n.path()} variant="primary" icon="arrowLeft">{i18n.m.notFound.home}</Button>
			<Button href={i18n.path('/nature')} variant="ghost">{i18n.m.nav.nature}</Button>
		</div>
	</PageHeader>
</div>

<style>
	.error {
		padding-block: var(--space-fluid-l);
	}

	.code {
		color: var(--primary-ink);
		font-family: var(--font-display);
		font-size: var(--text-5xl);
		line-height: 1;
	}

	.actions {
		margin-top: var(--space-3);
	}
</style>
