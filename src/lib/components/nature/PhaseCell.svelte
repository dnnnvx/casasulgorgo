<script lang="ts">
	import type { Phase } from '#lib/nature/types.ts'

	/**
	 * One month of a species' calendar. Every calendar on the site (the full grids and the mini
	 * strips on cards) draws its months with this, so the colours and the "this month" ring are
	 * identical everywhere.
	 */
	type Props = {
		phase: Phase
		/** What the phase means in words, shown as a tooltip. */
		title?: string | undefined
		/** Draws the ring that marks the current month. */
		current?: boolean
		/** `m` fills its row in a grid; `s` is a thin segment of a strip. */
		size?: 'm' | 's'
	}

	let { phase, title, current = false, size = 'm' }: Props = $props()
</script>

<span
	class="cell {size} swatch-{phase}"
	class:current
	style:background-color="var(--phase-{phase})"
	{title}
></span>

<style>
	.cell {
		display: block;
		height: var(--cell-height);
		border-radius: var(--cell-radius);
	}

	.m {
		--cell-height: 1.25rem;
		--cell-radius: 3px;
	}

	.s {
		--cell-height: 5px;
		--cell-radius: 2px;
	}

	/* The ring is an outline, so it sits outside the cell and keeps the swatch's own look. */
	.current {
		outline: 3px solid var(--ink);
		outline-offset: 0;
	}

	/* On a thin strip the current month also grows, so its ring has room to read. */
	.s.current {
		height: 9px;
		margin-block: -2px;
	}
</style>
