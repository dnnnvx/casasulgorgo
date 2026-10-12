<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { type Kind, phaseLabel, phasesOf } from '#lib/nature/labels.ts'

	let { kinds }: { kinds: readonly Kind[] } = $props()
	const i18n = getI18n()
</script>

<ul>
	{#each kinds as kind (kind)}
		{#each phasesOf(kind) as phase (phase)}
			<li>
				<span class="swatch swatch-{phase}" style:background-color="var(--phase-{phase})"></span>
				{phaseLabel(i18n.m, kind, phase)}
			</li>
		{/each}
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 1rem;
		margin: 0.5rem 0 0;
		padding: 0;
		list-style: none;
		color: var(--muted);
		font-size: 0.8rem;
	}

	li {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
	}

	.swatch {
		width: 0.9rem;
		height: 0.7rem;
		border-radius: 2px;
	}
</style>
