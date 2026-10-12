<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import Button from '../ui/Button.svelte'
	import Card from '../ui/Card.svelte'
	import Icon from '../ui/Icon.svelte'

	const i18n = getI18n()
</script>

<Card tone="forest">
	<p class="label"><Icon name="binoculars" size={16} /> {i18n.m.home.visitTitle}</p>
	<ul>
		{#each i18n.m.home.visitPoints as point (point)}
			<li><Icon name="check" size={16} /> {point}</li>
		{/each}
	</ul>
	<div class="foot">
		<Button href={i18n.path('/visit')} size="s" iconAfter="arrowRight">{i18n.m.home.plan}</Button>
	</div>
</Card>

<style>
	.label {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--primary);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 0.925rem;
	}

	li {
		display: flex;
		gap: 0.5rem;
	}

	li :global(svg) {
		margin-top: 0.2rem;
		color: var(--primary);
	}

	.foot {
		margin-top: auto;
	}
</style>
