<script lang="ts">
	import Scene from '#lib/components/Scene.svelte';
	import SpriteIcon from '#lib/components/SpriteIcon.svelte';
	import { duck, heron, kingfisher, moorhen } from '#lib/sprites.ts';

	const birds = [
		{
			art: heron,
			name: 'Airone cenerino',
			latin: 'Ardea cinerea',
			note: 'Pescatore paziente: immobile tra le canne, aspetta il momento giusto.'
		},
		{
			art: duck,
			name: 'Germano reale',
			latin: 'Anas platyrhynchos',
			note: 'Il più chiacchierone del gorgo, quasi sempre in coppia.'
		},
		{
			art: kingfisher,
			name: 'Martin pescatore',
			latin: 'Alcedo atthis',
			note: "Un lampo blu e arancio a pelo d'acqua. Se lo vedi, è una giornata fortunata."
		},
		{
			art: moorhen,
			name: "Gallinella d'acqua",
			latin: 'Gallinula chloropus',
			note: 'Cammina sulle foglie galleggianti e sparisce nel canneto al primo rumore.'
		}
	];

	const stripes = ['#ff9150', '#ffab62', '#ffc581', '#86b257', '#4f8f4f', '#4589b8', '#33709f'];
</script>

<svelte:head>
	<title>Casa sul Gorgo</title>
	<meta
		name="description"
		content="Gorgo Della Sposa. Lo abitiamo e vogliamo proteggerlo."
	>
</svelte:head>

<header class="wrap">
	<a class="brand" href="/">
		<span class="dot" aria-hidden="true"></span>
		Casa sul Gorgo
	</a>
</header>

<main>
	<section class="hero wrap">
		<p class="eyebrow">Accanto all'acqua, dalla parte degli uccelli</p>
		<h1>Casa sul Gorgo</h1>
		<p class="lead">
			La pianura, le campagne, uno specchio d'acqua. Tanti uccelli qui trovano casa.
			Viviamo accanto al Gorgo Della Sposa e vogliamo prendercene cura.
		</p>
	</section>

	<figure class="scene wrap">
		<Scene />
	</figure>

	<div class="stripes" aria-hidden="true">
		{#each stripes as c (c)}
			<span style:background={c}></span>
		{/each}
	</div>

	<section class="birds wrap" aria-labelledby="chi-abita">
		<h2 id="chi-abita">Chi abita il gorgo</h2>
		<ul>
			{#each birds as bird (bird.name)}
				<li>
					<div class="icon">
						<SpriteIcon art={bird.art} label={bird.name} />
					</div>
					<h3>{bird.name}</h3>
					<p class="latin">{bird.latin}</p>
					<p>{bird.note}</p>
				</li>
			{/each}
		</ul>
	</section>
</main>

<footer>
	<div class="stairs" aria-hidden="true">
		{#each stripes as c, i (c)}
			<span style:background={c} style:height="{(i + 1) * 3}px"></span>
		{/each}
	</div>
	<div class="wrap foot">
		<span>Casa sul Gorgo</span>
		<span>Accanto all'acqua, dalla parte degli uccelli.</span>
	</div>
</footer>

<style>
	.wrap {
		width: min(72rem, 100% - 2rem);
		margin-inline: auto;
	}

	header {
		padding-block: 1.25rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font-pixel);
		font-size: 1.1rem;
		color: inherit;
		text-decoration: none;
	}

	.dot {
		width: 0.9rem;
		height: 0.9rem;
		background: var(--sun);
		box-shadow:
			0.45rem 0.45rem 0 var(--water),
			-0.45rem 0.45rem 0 var(--reed);
		margin-right: 0.45rem;
	}

	.hero {
		padding-block: clamp(2rem, 8vw, 5rem) clamp(1.5rem, 4vw, 2.5rem);
	}

	.eyebrow {
		margin: 0 0 1rem;
		font-family: var(--font-pixel);
		font-size: 0.95rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--accent);
	}

	h1 {
		margin: 0;
		font-family: var(--font-pixel);
		font-size: clamp(3rem, 11vw, 7.5rem);
		font-weight: 600;
		line-height: 0.95;
		letter-spacing: -0.01em;
	}

	.lead {
		max-width: 36rem;
		margin: 1.5rem 0 0;
		font-size: clamp(1.1rem, 2.2vw, 1.35rem);
		color: var(--muted);
	}

	.scene {
		margin-block: 0;
		padding: 0;
		clip-path: polygon(
			0 8px,
			8px 8px,
			8px 0,
			calc(100% - 8px) 0,
			calc(100% - 8px) 8px,
			100% 8px,
			100% calc(100% - 8px),
			calc(100% - 8px) calc(100% - 8px),
			calc(100% - 8px) 100%,
			8px 100%,
			8px calc(100% - 8px),
			0 calc(100% - 8px)
		);
	}

	.stripes {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		height: 1rem;
		margin-block: clamp(3rem, 8vw, 5rem);
	}

	.birds h2 {
		margin: 0 0 2rem;
		font-family: var(--font-pixel);
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		font-weight: 600;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 1.25rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		padding: 1.5rem;
		background: var(--card);
		border: 2px solid var(--line);
		box-shadow: 6px 6px 0 var(--line);
	}

	.icon {
		width: 4.5rem;
		margin-bottom: 1rem;
		padding: 0.25rem;
		background: var(--icon-bg);
	}

	h3 {
		margin: 0;
		font-family: var(--font-pixel);
		font-size: 1.3rem;
		font-weight: 500;
	}

	li p {
		margin: 0.5rem 0 0;
		color: var(--muted);
	}

	li .latin {
		margin-top: 0.15rem;
		font-style: italic;
		font-size: 0.9rem;
		color: var(--accent);
	}

	footer {
		margin-top: clamp(4rem, 10vw, 7rem);
		background: var(--footer-bg);
		color: var(--footer-ink);
	}

	.stairs {
		display: flex;
		flex-direction: column;
	}

	.stairs span {
		display: block;
	}

	.foot {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.5rem 2rem;
		padding-block: 1.5rem 2rem;
		font-family: var(--font-pixel);
		font-size: 0.95rem;
	}
</style>
