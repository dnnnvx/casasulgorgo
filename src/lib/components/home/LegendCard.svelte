<script lang="ts">
	/** The legend on a moonless night: the whole card is the scene, with the text on top. */
	let { title, text }: { title: string; text: string } = $props()

	// Stars gather in the top-right corner, leaving the left clear for the text.
	const stars = [
		[10, 6, 0.5],
		[24, 14, 0.4],
		[36, 5, 0.6],
		[50, 12, 0.45],
		[60, 4, 0.5],
		[68, 17, 0.4],
		[78, 8, 0.6],
		[88, 15, 0.45],
		[94, 4, 0.5],
		[32, 22, 0.35],
		[72, 25, 0.35]
	] as const
</script>

<section>
	<!-- The sky is a corner of its own, so a tall (narrow) card keeps the stars off the text. -->
	<svg class="sky" viewBox="0 0 100 40" preserveAspectRatio="xMaxYMin slice" aria-hidden="true">
		{#each stars as [x, y, r] (`${x}-${y}`)}
			<circle cx={x} cy={y} {r} />
		{/each}
	</svg>
	<div class="text">
		<h3>{title}</h3>
		<p>{text}</p>
	</div>
</section>

<style>
	section {
		position: relative;
		overflow: hidden;
		min-height: 11rem;
		padding: var(--space-fluid-s);
		border-radius: var(--radius-m);
		background: var(--noise), linear-gradient(170deg, var(--night-from), var(--night-to));
		background-blend-mode: soft-light, normal;
		color: var(--on-forest);
	}

	/* Still water along the bottom. */
	section::after {
		content: "";
		position: absolute;
		inset: auto 0 0;
		height: 28%;
		background: rgb(255 255 255 / 0.08);
	}

	.sky {
		position: absolute;
		top: 0;
		right: 0;
		width: min(60%, 34rem);
		height: 100%;
		fill: rgb(255 255 255 / 0.6);
	}

	@media (max-width: 40rem) {
		/* Stars in a strip above the text, and a thin band of water, so neither crosses it. */
		section {
			padding-top: var(--space-7);
			padding-bottom: var(--space-7);
		}

		section::after {
			height: 2.25rem;
		}

		.sky {
			width: 100%;
			height: 2.5rem;
			fill: rgb(255 255 255 / 0.5);
		}
	}

	.text {
		position: relative;
		max-width: 38rem;
	}

	h3 {
		margin-bottom: var(--space-2);
		font-size: var(--text-xl);
	}

	p {
		opacity: 0.9;
	}
</style>
