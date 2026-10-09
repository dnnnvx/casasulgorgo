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
		href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
	>
</svelte:head>

{@render children()}

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(html) {
		color-scheme: light dark;
		font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
		line-height: 1.5;

		--font-pixel: "Pixelify Sans", ui-monospace, monospace;
		--ink: light-dark(#1d2a1f, #f3ead6);
		--muted: light-dark(#4a5547, #c9c0ac);
		--accent: light-dark(#c4561f, #ffab62);
		--card: light-dark(#fffaf0, #1b2219);
		--line: light-dark(#1d2a1f, #0a0d09);
		--icon-bg: light-dark(#ffeccb, #2a3326);
		--footer-bg: #1f3a2a;
		--footer-ink: #ffeccb;
		--sun: #ffab62;
		--water: #4589b8;
		--reed: #6f8f4c;
	}

	:global(body) {
		margin: 0;
		background: light-dark(#fff6e5, #12160f);
		color: var(--ink);
	}
</style>
