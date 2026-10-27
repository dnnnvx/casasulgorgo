<script lang="ts">
	// Inlined (not <img>) so the pixels can be animated.
	import logo from '#lib/assets/favicon.svg?raw'
</script>

<span class="logo" aria-hidden="true">{@html logo}</span>

<style>
	.logo {
		display: inline-flex;
		width: 1.75rem;
		height: 1.75rem;
		overflow: hidden;
		border-radius: 6px;
	}

	.logo :global(svg) {
		width: 100%;
		height: 100%;
	}

	@media (prefers-reduced-motion: no-preference) {
		/* Boots in one pixel row at a time, like an old screen drawing it. */
		.logo :global(svg) {
			animation: boot 0.6s steps(16) both;
		}

		.logo :global(.glint) {
			animation: glint 1.2s steps(1) infinite paused;
		}

		.logo :global(.glint.late) {
			animation-delay: -0.6s;
		}

		:global(:hover) > .logo :global(.glint) {
			animation-play-state: running;
		}
	}

	@keyframes boot {
		from {
			clip-path: inset(0 0 100% 0);
		}
		to {
			clip-path: inset(0);
		}
	}

	@keyframes glint {
		50% {
			opacity: 0;
		}
	}
</style>
