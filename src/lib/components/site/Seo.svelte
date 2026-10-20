<script lang="ts">
	import { siteUrl } from '#lib/config/site.ts'
	import { getI18n } from '#lib/i18n/index.ts'
	import { defaultLocale, locales, localeTags, switchLocale } from '#lib/i18n/locales.ts'
	import { page } from '$app/state'

	type Props = {
		title: string
		description: string
		/** Structured data for search engines (schema.org). */
		jsonLd?: Record<string, unknown> | undefined
	}

	let { title, description, jsonLd }: Props = $props()
	const i18n = getI18n()

	let fullTitle = $derived(
		title === i18n.m.site.name || title.startsWith(i18n.m.site.name)
			? title
			: `${title} · ${i18n.m.site.name}`
	)
	let url = $derived(siteUrl + page.url.pathname)
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description}>
	<link rel="canonical" href={url}>
	{#each locales as locale (locale)}
		<link
			rel="alternate"
			hreflang={localeTags[locale]}
			href={siteUrl + switchLocale(page.url.pathname, locale)}
		>
	{/each}
	<link
		rel="alternate"
		hreflang="x-default"
		href={siteUrl + switchLocale(page.url.pathname, defaultLocale)}
	>

	<meta property="og:type" content="website">
	<meta property="og:site_name" content={i18n.m.site.name}>
	<meta property="og:locale" content={localeTags[i18n.locale].replace('-', '_')}>
	<meta property="og:url" content={url}>
	<meta property="og:title" content={fullTitle}>
	<meta property="og:description" content={description}>
	<meta property="og:image" content="{siteUrl}/og.png">
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="630">
	<meta name="twitter:card" content="summary_large_image">

	{#if jsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(jsonLd).replaceAll('<', '\\u003c')}</script>`}
	{/if}
</svelte:head>
