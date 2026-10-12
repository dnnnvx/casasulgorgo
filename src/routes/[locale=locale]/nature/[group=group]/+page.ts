import { inGroup } from '#lib/nature/catalog.ts'
import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => ({
	group: params.group,
	species: inGroup(params.group)
})
