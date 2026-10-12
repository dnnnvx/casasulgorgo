import { animalGroups, type Group, plantGroups, type Species } from './types.ts'

// Kept apart from the catalog so the route matchers can use it without loading every species.

export const groups: readonly Group[] = [...animalGroups, ...plantGroups]

export const isGroup = (value: string): value is Group =>
	(groups as readonly string[]).includes(value)

export const kindOf = (group: Group): Species['kind'] =>
	(animalGroups as readonly string[]).includes(group) ? 'animal' : 'plant'
