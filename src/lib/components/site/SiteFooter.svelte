<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { localeNames, locales, switchLocale } from '#lib/i18n/locales.ts'
	import { page } from '$app/state'
	import Button from '../ui/Button.svelte'
	import Logo from './Logo.svelte'

	const i18n = getI18n()
	const year = new Date().getFullYear()
</script>

<footer class="wrap">
	<div class="panel">
		<div class="top">
			<div class="about">
				<a class="brand" href={i18n.path()}>
					<Logo />
					<span>{i18n.m.site.name}</span>
				</a>
				<p>{i18n.m.site.description}</p>
				<Button href={i18n.path('/visit')} size="s" iconAfter="arrowRight">
					{i18n.m.home.plan}
				</Button>
			</div>

			<nav aria-label={i18n.m.footer.explore}>
				<h2>{i18n.m.footer.explore}</h2>
				<a href={i18n.path('/nature')}>{i18n.m.nav.nature}</a>
				<a href={i18n.path('/seasons')}>{i18n.m.nav.seasons}</a>
				<a href={i18n.path('/visit')}>{i18n.m.nav.visit}</a>
			</nav>

			<nav aria-label={i18n.m.footer.languages}>
				<h2>{i18n.m.footer.languages}</h2>
				{#each locales as locale (locale)}
					<a href={switchLocale(page.url.pathname, locale)} hreflang={locale} lang={locale}>
						{localeNames[locale]}
					</a>
				{/each}
			</nav>
		</div>
		<div class="legal">
			<span>© {year} · {i18n.m.footer.rights}</span>
			<span>{i18n.m.site.region}</span>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: clamp(2.5rem, 6vw, 4rem);
		padding-bottom: 1.25rem;
	}

	.panel {
		overflow: hidden;
		border-radius: var(--radius-m);
		background:
			var(--noise), radial-gradient(circle at 85% 0%, rgb(172 196 86 / 0.28), transparent 55%),
			linear-gradient(160deg, #26462f, var(--forest) 60%, #182e21);
		background-blend-mode: soft-light, normal, normal;
		color: var(--on-forest);
	}

	.top {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 2rem;
		padding: clamp(1.5rem, 4vw, 2.5rem);
	}

	@media (max-width: 40rem) {
		.top {
			grid-template-columns: 1fr 1fr;
		}

		.about {
			grid-column: 1 / -1;
		}
	}

	.about {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		color: inherit;
		font-family: var(--font-display);
		font-size: 1.2rem;
		font-weight: 600;
		text-decoration: none;
	}

	.about p {
		max-width: 26rem;
		font-size: 0.9rem;
		opacity: 0.8;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	h2 {
		margin-bottom: 0.25rem;
		color: var(--primary);
		font-family: var(--font-body);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	nav a {
		color: inherit;
		font-size: 0.9rem;
		text-decoration: none;
		opacity: 0.85;
	}

	nav a:hover {
		text-decoration: underline;
		opacity: 1;
	}

	.legal {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.5rem 1rem;
		margin-inline: clamp(1.5rem, 4vw, 2.5rem);
		padding-block: 1rem 1.25rem;
		border-top: 1px solid rgb(255 255 255 / 0.14);
		font-size: 0.8rem;
		opacity: 0.7;
	}
</style>
