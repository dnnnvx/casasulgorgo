<script lang="ts">
	import SiteFooter from '#lib/components/site/SiteFooter.svelte'
	import SiteHeader from '#lib/components/site/SiteHeader.svelte'
	import { i18n, setI18n } from '#lib/i18n/index.ts'
	import type { LayoutProps } from './$types'

	let { children, params }: LayoutProps = $props()

	setI18n(i18n(() => params.locale))
</script>

<SiteHeader />
<main id="main">
	{@render children()}
</main>
<SiteFooter />
