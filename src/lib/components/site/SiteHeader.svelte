<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { afterNavigate } from '$app/navigation'
	import { page } from '$app/state'
	import Icon from '../ui/Icon.svelte'
	import LanguageSwitch from './LanguageSwitch.svelte'
	import Logo from './Logo.svelte'
	import ThemeSwitch from './ThemeSwitch.svelte'

	const i18n = getI18n()
	let open = $state(false)

	let links = $derived([
		{ path: '/nature', label: i18n.m.nav.nature },
		{ path: '/seasons', label: i18n.m.nav.seasons },
		{ path: '/visit', label: i18n.m.nav.visit }
	])

	const isCurrent = (path: string) => page.url.pathname.startsWith(i18n.path(path))

	afterNavigate(() => {
		open = false
	})
</script>

<a class="skip" href="#main">{i18n.m.nav.skip}</a>

<header>
	<div class="wrap bar">
		<a class="brand" href={i18n.path()}>
			<Logo />
			<span>{i18n.m.site.name}</span>
		</a>

		<button
			class="toggle"
			type="button"
			aria-expanded={open}
			aria-controls="site-nav"
			onclick={() => {
				open = !open
			}}
		>
			<Icon name={open ? 'close' : 'menu'} label={i18n.m.nav.menu} />
		</button>

		<div id="site-nav" class="nav" class:open>
			<nav aria-label={i18n.m.nav.label}>
				{#each links as link (link.path)}
					<a href={i18n.path(link.path)} aria-current={isCurrent(link.path) ? 'page' : undefined}>
						{link.label}
					</a>
				{/each}
			</nav>
			<div class="switches">
				<ThemeSwitch />
				<LanguageSwitch />
			</div>
		</div>
	</div>
</header>

<style>
	.skip {
		position: absolute;
		top: -3rem;
		left: 1rem;
		z-index: 10;
		padding: 0.5rem 1rem;
		border-radius: var(--radius-pill);
		background: var(--on-primary);
		color: var(--primary);
	}

	.skip:focus {
		top: 0.5rem;
	}

	header {
		position: sticky;
		top: 0;
		z-index: 5;
		border-bottom: 1px solid var(--line);
		background: color-mix(in srgb, var(--bg) 88%, transparent);
		backdrop-filter: blur(10px);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 3.75rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--ink);
		font-family: var(--font-display);
		font-size: 1.15rem;
		font-weight: 600;
		text-decoration: none;
	}

	.nav {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	nav {
		display: flex;
		gap: 0.25rem;
	}

	nav a {
		padding: 0.4rem 0.8rem;
		border-radius: var(--radius-pill);
		color: var(--muted);
		font-size: 0.925rem;
		font-weight: 500;
		text-decoration: none;
	}

	nav a:hover {
		color: var(--ink);
		background: var(--surface-2);
	}

	nav a[aria-current] {
		background: var(--primary);
		color: var(--on-primary);
	}

	.switches {
		display: flex;
		gap: 0.4rem;
	}

	.toggle {
		display: none;
		padding: 0.4rem;
		border: 0;
		border-radius: var(--radius-s);
		background: transparent;
		color: var(--ink);
		cursor: pointer;
	}

	@media (max-width: 40rem) {
		.toggle {
			display: inline-flex;
		}

		.nav {
			position: absolute;
			top: 100%;
			right: 0;
			left: 0;
			display: none;
			flex-direction: column;
			align-items: stretch;
			gap: 0.75rem;
			padding: 0.75rem 1.25rem 1.25rem;
			border-bottom: 1px solid var(--line);
			background: var(--bg);
		}

		.nav.open {
			display: flex;
		}

		nav {
			flex-direction: column;
		}

		nav a {
			padding: 0.65rem 0.9rem;
		}
	}
</style>
