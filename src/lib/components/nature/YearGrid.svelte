<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import { phaseLabel, type YearRow } from '#lib/nature/labels.ts'
	import { months, seasonOf } from '#lib/seasons.ts'
	import SpriteIcon from '../SpriteIcon.svelte'
	import PhaseCell from './PhaseCell.svelte'

	type Props = {
		rows: readonly YearRow[]
		caption: string
		/** Highlights this month (0 = January). */
		current?: number | undefined
		/** Hide the label column, for a single species. */
		bare?: boolean
	}

	let { rows, caption, current, bare = false }: Props = $props()
	const i18n = getI18n()
</script>

<div class="scroll">
	<table class:bare>
		<caption class="visually-hidden">
			{caption}
		</caption>
		<thead>
			<tr>
				{#if !bare}
					<td class="label-col"></td>
				{/if}
				{#each months as month, i (month)}
					<th
						scope="col"
						class:current={i === current}
						style:--season="var(--{seasonOf(i)})"
						title={i18n.m.months[month]}
					>
						<span aria-hidden="true">{i18n.m.monthsShort[month]}</span>
						<span class="visually-hidden">{i18n.m.months[month]}</span>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row (row.key)}
				<tr>
					{#if !bare}
						<th scope="row">
							<a href={row.href}>
								{#if row.species}
									<span class="sprite"><SpriteIcon art={row.species.sprite} /></span>
								{/if}
								<span class="name">{row.label}</span>
							</a>
						</th>
					{/if}
					{#each row.phases as phase, i (i)}
						{@const label = phaseLabel(i18n.m, row.kind, phase)}
						<td title={label}>
							<PhaseCell {phase} current={i === current} />
							<span class="visually-hidden">{label}</span>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	/*
	 * Positioned, so the visually hidden labels inside the table (which are absolutely placed)
	 * are clipped with it instead of stretching the whole page on narrow screens.
	 */
	.scroll {
		position: relative;
		overflow-x: auto;
	}

	table {
		width: 100%;
		min-width: 34rem;
		border-collapse: separate;
		border-spacing: 2px 3px;
		table-layout: fixed;
	}

	table.bare {
		min-width: 18rem;
	}

	thead th {
		padding: 0 0 var(--space-1);
		border-top: 4px solid var(--season);
		border-radius: 2px;
		color: var(--muted);
		font-size: var(--text-xs);
		font-weight: 600;
		text-align: center;
	}

	thead th.current {
		color: var(--ink);
	}

	.label-col {
		width: 11.5rem;
	}

	tbody th {
		padding-right: var(--space-2);
		font-weight: 500;
		text-align: left;
	}

	tbody th a {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--ink);
		font-size: var(--text-s);
		text-decoration: none;
	}

	.name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	tbody th a:hover .name {
		text-decoration: underline;
	}

	.sprite {
		flex: none;
		width: 1.6rem;
		padding: 2px;
		border-radius: 6px;
		background: var(--tile);
	}

	td {
		padding: 0;
		height: 1.25rem;
	}
</style>
