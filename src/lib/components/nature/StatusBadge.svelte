<script lang="ts">
	import { getI18n } from '#lib/i18n/index.ts'
	import type { Status } from '#lib/nature/types.ts'
	import Badge from '../ui/Badge.svelte'

	let { status }: { status: Status } = $props()
	const i18n = getI18n()

	const colors: Record<Status, string> = {
		LC: '#6a9a2a',
		NT: '#b8b030',
		VU: '#e8a530',
		EN: '#d8642a',
		CR: '#c0302a',
		DD: '#9a9a90',
		NE: '#c8c4b8'
	}
</script>

<Badge dot={colors[status]} title="{i18n.m.species.statusSource}: {i18n.m.status[status]}">
	{status}
	· {i18n.m.status[status]}
</Badge>
