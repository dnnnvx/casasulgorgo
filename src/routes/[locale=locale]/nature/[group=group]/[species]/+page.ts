import { error } from '@sveltejs/kit'
import { findSpecies, inGroup } from '#lib/nature/catalog.ts'
import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
	const species = findSpecies(params.species)
	if (species?.group !== params.group) {
		error(404)
	}
	return {
		species,
		related: inGroup(species.group).filter((s) => s.slug !== species.slug)
	}
}
