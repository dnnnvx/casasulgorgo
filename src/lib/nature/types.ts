import type { Localized } from '#lib/i18n/locales.ts'
import type { Sprite } from '#lib/pixel.ts'
import type { Month } from '#lib/seasons.ts'

export const animalGroups = [
	'birds',
	'mammals',
	'amphibians',
	'reptiles',
	'fish',
	'insects'
] as const
export const plantGroups = ['trees', 'water-plants', 'wildflowers'] as const
export type AnimalGroup = (typeof animalGroups)[number]
export type PlantGroup = (typeof plantGroups)[number]
export type Group = AnimalGroup | PlantGroup

/** What an animal is doing in a given month. `absent` means it is not at the gorgo. */
export const animalPhases = [
	'present',
	'breeding',
	'passage',
	'wintering',
	'dormant',
	'absent'
] as const
/** What a plant is doing in a given month. */
export const plantPhases = ['leaf', 'flowering', 'fruiting', 'dormant'] as const
export type AnimalPhase = (typeof animalPhases)[number]
export type PlantPhase = (typeof plantPhases)[number]
export type Phase = AnimalPhase | PlantPhase

/**
 * A species' year: `base` fills every month, then each period overrides its
 * months, in order. Periods may wrap the new year (from: 'nov', to: 'feb').
 */
export type Calendar<P extends Phase> = {
	base: P
	periods?: readonly { phase: P; from: Month; to: Month }[]
}

/** IUCN Red List categories. */
export type Status = 'LC' | 'NT' | 'VU' | 'EN' | 'CR' | 'DD' | 'NE'

/** An external page about the species, in each language. */
export type Link = { label: string; url: Localized }

export type TimeOfDay = 'dawn' | 'day' | 'dusk' | 'night'
export type PlantForm = 'tree' | 'shrub' | 'herb' | 'aquatic'

/** The template every species follows, whatever its kind. */
export type BaseSpecies = {
	scientificName: string
	name: Localized
	/** One line, shown on cards. */
	summary: Localized
	/** A short paragraph for the species page. */
	description: Localized
	/** Where it lives, at the gorgo and in general. */
	habitat: Localized
	/** How and where to see it. */
	spotting: Localized
	/** IUCN global status; leave out until verified. */
	status?: Status
	/** Further reading, per language (Wikipedia for now). */
	links?: readonly Link[]
	sprite: Sprite
}

export type Animal = BaseSpecies & {
	kind: 'animal'
	group: AnimalGroup
	size: Localized
	diet: Localized
	activeAt: readonly TimeOfDay[]
	calendar: Calendar<AnimalPhase>
}

export type Plant = BaseSpecies & {
	kind: 'plant'
	group: PlantGroup
	form: PlantForm
	height: Localized
	calendar: Calendar<PlantPhase>
}

export type SpeciesData = Animal | Plant

/** A catalogued species: the file name is its slug. */
export type Species = SpeciesData & { slug: string }

export const animal = (data: Omit<Animal, 'kind'>): Animal => ({ kind: 'animal', ...data })
export const plant = (data: Omit<Plant, 'kind'>): Plant => ({ kind: 'plant', ...data })
