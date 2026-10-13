<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { localeNames, locales, switchLocale } from '#lib/i18n/locales.ts'
	import { page } from '$app/state'

	const i18n = getI18n()
</script>

<nav aria-label={i18n.m.nav.language}>
	{#each locales as locale (locale)}
		<a
			href={switchLocale(page.url.pathname, locale)}
			hreflang={locale}
			lang={locale}
			title={localeNames[locale]}
			aria-current={locale === i18n.locale ? 'true' : undefined}
			data-sveltekit-noscroll
		>
			{locale.toUpperCase()}
		</a>
	{/each}
</nav>

<style>
	nav {
		display: inline-flex;
		padding: 3px;
		border-radius: var(--radius-pill);
		background: var(--chip);
	}

	a {
		display: grid;
		place-items: center;
		width: var(--switch-size);
		height: var(--switch-size);
		border-radius: 50%;
		color: var(--muted);
		font-size: var(--text-xs);
		font-weight: 700;
		text-decoration: none;
	}

	a:hover {
		color: var(--ink);
	}

	[aria-current] {
		background: var(--surface);
		color: var(--ink);
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.1);
	}
</style>
