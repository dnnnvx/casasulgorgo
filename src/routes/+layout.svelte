<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon}>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..600&family=Inter:wght@400..600&display=swap"
	>
</svelte:head>

{@render children()}

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(html) {
		color-scheme: light dark;
		font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;

		--font-display: Fraunces, Georgia, "Times New Roman", serif;
		--ink: light-dark(#1c2a21, #ece6d8);
		--muted: light-dark(#55615a, #a9b0a6);
		--accent: light-dark(#a8481f, #e59a6b);
		--bg: light-dark(#f8f6f0, #121612);
		--surface: light-dark(#ffffff, #1a201a);
		--tile: light-dark(#f1ede3, #232a22);
		--line: light-dark(#e3dfd4, #2a3229);
	}

	:global(body) {
		margin: 0;
		background: var(--bg);
		color: var(--ink);
	}
</style>
