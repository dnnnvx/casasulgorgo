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

	const year = new Date().getFullYear();
	const stripes = ['#ff9150', '#ffab62', '#ffc581', '#86b257', '#4f8f4f', '#4589b8', '#33709f'];
</script>

<svelte:head>
	<title>Casa sul Gorgo</title>
	<meta name="description" content="Gorgo Della Sposa. Lo abitiamo e vogliamo proteggerlo.">
</svelte:head>

<header class="site">
	<div class="wrap bar">
		<a class="brand" href="/">Casa sul Gorgo</a>
		<nav aria-label="Principale">
			<a href="#chi-abita">Chi abita il gorgo</a>
		</nav>
	</div>
</header>

<main>
	<section class="hero wrap">
		<div class="intro">
			<p class="eyebrow">Gorgo Della Sposa</p>
			<h1>Accanto all'acqua, dalla parte degli uccelli.</h1>
			<p class="lead">
				La pianura, le campagne, uno specchio d'acqua. Tanti uccelli qui trovano casa. Viviamo
				accanto al Gorgo Della Sposa e vogliamo prendercene cura.
			</p>
			<a class="button" href="#chi-abita">Scopri chi lo abita</a>
		</div>

		<figure class="scene">
			<Scene />
		</figure>
	</section>

	<section id="chi-abita" class="birds wrap" aria-labelledby="chi-abita-title">
		<header>
			<p class="eyebrow">Fauna</p>
			<h2 id="chi-abita-title">Chi abita il gorgo</h2>
		</header>
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
		<span class="brand">Casa sul Gorgo</span>
		<span>© {year} · Gorgo Della Sposa</span>
	</div>
</footer>

<style>
	.wrap {
		width: min(72rem, 100% - 3rem);
		margin-inline: auto;
	}

	.site {
		border-bottom: 1px solid var(--line);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-block: 1.1rem;
	}

	.brand {
		font-family: var(--font-display);
		font-size: 1.15rem;
		font-weight: 600;
		letter-spacing: -0.01em;
		color: inherit;
		text-decoration: none;
	}

	nav a {
		font-size: 0.925rem;
		color: var(--muted);
		text-decoration: none;
	}

	nav a:hover {
		color: var(--ink);
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
		align-items: center;
		gap: clamp(2rem, 5vw, 4rem);
		padding-block: clamp(3rem, 8vw, 6rem);
	}

	@media (max-width: 52rem) {
		.hero {
			grid-template-columns: 1fr;
		}
	}

	.eyebrow {
		margin: 0 0 1rem;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--accent);
	}

	h1,
	h2,
	h3 {
		font-family: var(--font-display);
		font-weight: 500;
		letter-spacing: -0.015em;
		text-wrap: balance;
	}

	h1 {
		margin: 0;
		font-size: clamp(2.4rem, 5vw, 3.75rem);
		line-height: 1.08;
	}

	.lead {
		max-width: 34rem;
		margin: 1.5rem 0 2rem;
		font-size: clamp(1.05rem, 1.6vw, 1.2rem);
		color: var(--muted);
	}

	.button {
		display: inline-block;
		padding: 0.75rem 1.25rem;
		border-radius: 999px;
		background: var(--ink);
		color: var(--bg);
		font-size: 0.95rem;
		font-weight: 500;
		text-decoration: none;
		transition: opacity 0.15s;
	}

	.button:hover {
		opacity: 0.85;
	}

	.scene {
		margin: 0;
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: 1rem;
		box-shadow:
			0 1px 2px rgb(0 0 0 / 0.04),
			0 12px 32px -12px rgb(28 42 33 / 0.18);
	}

	.birds {
		padding-block: clamp(3rem, 7vw, 5rem);
		border-top: 1px solid var(--line);
	}

	.birds h2 {
		margin: 0 0 2.5rem;
		font-size: clamp(1.8rem, 3.5vw, 2.4rem);
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 1.25rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		padding: 1.5rem;
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: 0.75rem;
	}

	.icon {
		width: 3.5rem;
		margin-bottom: 1.25rem;
		padding: 0.25rem;
		border-radius: 0.5rem;
		background: var(--tile);
	}

	h3 {
		margin: 0;
		font-size: 1.25rem;
	}

	li p {
		margin: 0.5rem 0 0;
		font-size: 0.95rem;
		color: var(--muted);
	}

	li .latin {
		margin-top: 0.1rem;
		font-family: var(--font-display);
		font-style: italic;
		color: var(--accent);
	}

	footer {
		background: #1f3a2a;
		color: #ffeccb;
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
		align-items: center;
		padding-block: 1.5rem 2rem;
		font-size: 0.875rem;
	}

	.foot .brand {
		font-size: 1rem;
	}
</style>
