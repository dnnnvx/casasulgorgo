import type { Messages } from '#lib/i18n/messages/it/index.ts'
import { phases } from './catalog.ts'
import { animalPhases, type Group, type Phase, plantPhases, type Species } from './types.ts'

export const speciesPath = (s: Species) => `/nature/${s.group}/${s.slug}`
export const groupPath = (group: Group) => `/nature/${group}`

export type Kind = Species['kind']

export const phasesOf = (kind: Kind): readonly Phase[] =>
	kind === 'animal' ? animalPhases : plantPhases

export const phaseLabel = (m: Messages, kind: Kind, phase: Phase) => {
	const labels: Partial<Record<Phase, string>> = m.phases[kind]
	return labels[phase] ?? phase
}

/** One row of a year timeline. */
export type YearRow = {
	key: string
	kind: Kind
	phases: readonly Phase[]
	label?: string
	href?: string
	species?: Species
}

export const yearRow = (s: Species, label: string, href: string): YearRow => ({
	key: s.slug,
	kind: s.kind,
	phases: phases(s.calendar),
	label,
	href,
	species: s
})
