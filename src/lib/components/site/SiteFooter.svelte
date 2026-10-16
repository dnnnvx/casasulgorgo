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
				<div class="cta">
					<Button href={i18n.path('/visit')} size="s" iconAfter="arrowRight">
						{i18n.m.home.plan}
					</Button>
					<Button href={i18n.path('/contact')} size="s" variant="outline" icon="mail">
						{i18n.m.nav.contact}
					</Button>
				</div>
			</div>

			<nav aria-label={i18n.m.footer.explore}>
				<h2>{i18n.m.footer.explore}</h2>
				<a href={i18n.path('/nature')}>{i18n.m.nav.nature}</a>
				<a href={i18n.path('/seasons')}>{i18n.m.nav.seasons}</a>
				<a href={i18n.path('/visit')}>{i18n.m.nav.visit}</a>
				<a href={i18n.path('/about')}>{i18n.m.nav.about}</a>
				<a href={i18n.path('/contact')}>{i18n.m.nav.contact}</a>
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
		margin-top: var(--space-fluid-xl);
		padding-bottom: var(--space-4);
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
		gap: var(--space-6);
		padding: var(--space-fluid-m);
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
		gap: var(--space-3);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		color: inherit;
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: 600;
		text-decoration: none;
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.about p {
		max-width: 26rem;
		font-size: var(--text-s);
		opacity: 0.8;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	h2 {
		margin-bottom: var(--space-1);
		color: var(--primary);
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	nav a {
		color: inherit;
		font-size: var(--text-s);
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
		gap: var(--space-2) var(--space-4);
		margin-inline: var(--space-fluid-m);
		padding-block: var(--space-4) var(--space-4);
		border-top: 1px solid rgb(255 255 255 / 0.14);
		font-size: var(--text-s);
		opacity: 0.7;
	}
</style>
