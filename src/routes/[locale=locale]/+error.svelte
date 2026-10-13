<script lang="ts">
	import Button from '#lib/components/ui/Button.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import { page } from '$app/state'

	const i18n = getI18n()
</script>

<svelte:head>
	<title>{i18n.m.notFound.title} · {i18n.m.site.name}</title>
	<meta name="robots" content="noindex">
</svelte:head>

<div class="wrap page-head error">
	<p class="code">{page.status}</p>
	<h1>{page.status === 404 ? i18n.m.notFound.title : page.error?.message}</h1>
	<p>{i18n.m.notFound.text}</p>
	<div class="actions">
		<Button href={i18n.path()} variant="primary" icon="arrowLeft">{i18n.m.notFound.home}</Button>
		<Button href={i18n.path('/nature')} variant="ghost">{i18n.m.nav.nature}</Button>
	</div>
</div>

<style>
	.error {
		padding-block: var(--space-fluid-xl);
	}

	.code {
		color: var(--primary-ink);
		font-family: var(--font-display);
		font-size: var(--text-5xl);
		line-height: 1;
	}

	.actions {
		display: flex;
		gap: var(--space-2);
		margin-top: var(--space-5);
	}
</style>
