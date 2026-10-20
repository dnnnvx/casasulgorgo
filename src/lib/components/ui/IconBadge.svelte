<script lang="ts">
	import type { IconName } from '#lib/assets/icons.ts'
	import Icon from '#lib/components/ui/Icon.svelte'

	type Props = {
		name: IconName
		/** soft: green tile on the page; glass: see-through tile on a coloured card. */
		tone?: 'soft' | 'glass'
	}

	let { name, tone = 'soft' }: Props = $props()
</script>

<span class={tone}><Icon {name} /></span>

<style>
	span {
		display: inline-flex;
		flex: none;
		align-self: flex-start;
		padding: var(--space-2);
		border-radius: var(--radius-s);
	}

	.soft {
		background: var(--primary-soft);
		color: var(--primary-ink);
	}

	.glass {
		background: rgb(255 255 255 / 0.4);
	}
</style>
