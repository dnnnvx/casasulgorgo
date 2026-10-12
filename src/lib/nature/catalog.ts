import { type Day, dayNumber, monthIndex, type Season, seasonMonths } from '#lib/seasons.ts'
import type { Calendar, Group, Phase, Species, SpeciesData } from './types.ts'

const quiet: readonly Phase[] = ['absent', 'dormant']
const routine: readonly Phase[] = ['present', 'leaf']

// Every file in ./species is one species; its file name becomes the URL slug.
const modules = import.meta.glob<SpeciesData>('./species/*.ts', { eager: true, import: 'species' })

export const catalog: readonly Species[] = Object.entries(modules)
	.map(([path, data]) => ({ ...data, slug: path.slice(path.lastIndexOf('/') + 1, -3) }))
	.sort((a, b) => a.scientificName.localeCompare(b.scientificName))

export const inGroup = (group: Group) => catalog.filter((s) => s.group === group)

export const findSpecies = (slug: string) => catalog.find((s) => s.slug === slug)

/** Expands a calendar into one phase per month, January first. */
export const phases = <P extends Phase>({ base, periods = [] }: Calendar<P>): P[] => {
	const year: P[] = Array.from({ length: 12 }, () => base)
	for (const { phase, from, to } of periods) {
		const start = monthIndex(from)
		const span = (monthIndex(to) - start + 12) % 12
		for (let i = 0; i <= span; i++) {
			year[(start + i) % 12] = phase
		}
	}
	return year
}

/** Whether the species can be seen (or found active) in a month. */
export const isActive = (s: Species, month: number) =>
	!quiet.includes(phases(s.calendar)[month] ?? 'absent')

/** Something worth going out for: breeding, migrating, flowering, fruiting… */
export const isHighlight = (s: Species, month: number) => {
	const phase = phases(s.calendar)[month] ?? 'absent'
	return !(quiet.includes(phase) || routine.includes(phase))
}

/** Species that come and go: absent or dormant for part of the year. */
export const isSeasonal = (s: Species) => phases(s.calendar).some((p) => quiet.includes(p))

export const highlightsIn = (season: Season) =>
	catalog.filter((s) => seasonMonths[season].some((m) => isHighlight(s, monthIndex(m))))

/**
 * The species to show for a season: highlights first, then those active all
 * season long (so quiet winters still have something to see), up to `max`.
 */
export const starsOf = (season: Season, max: number) => {
	const months = seasonMonths[season].map(monthIndex)
	const highlights = highlightsIn(season)
	const steady = catalog.filter(
		(s) => !highlights.includes(s) && months.every((m) => isActive(s, m))
	)
	const all = [...highlights, ...steady]
	return { shown: all.slice(0, max), more: Math.max(0, all.length - max) }
}

/**
 * Species of the day: the day number times a large prime, modulo the number of
 * species active this month. Not random — the same date always gives the same
 * species — but it hops around instead of walking through the list in order,
 * and never suggests something that is hibernating or out of season.
 */
export const speciesOfDay = (day: Day): Species => {
	const active = catalog.filter((s) => isActive(s, day.month))
	const pool = active.length > 0 ? active : catalog
	const species = pool[(dayNumber(day) * 7919) % pool.length] ?? catalog[0]
	if (!species) {
		throw new Error('The species catalog is empty')
	}
	return species
}
