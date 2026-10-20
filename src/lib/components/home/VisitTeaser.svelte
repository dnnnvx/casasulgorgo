<script lang="ts">
	import Button from '#lib/components/ui/Button.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Icon from '#lib/components/ui/Icon.svelte'
	import { getI18n } from '#lib/i18n/index.ts'

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
		gap: var(--space-2);
		color: var(--primary);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: var(--text-s);
	}

	li {
		display: flex;
		gap: var(--space-2);
	}

	li :global(svg) {
		margin-top: var(--space-1);
		color: var(--primary);
	}

	.foot {
		margin-top: auto;
	}
</style>
