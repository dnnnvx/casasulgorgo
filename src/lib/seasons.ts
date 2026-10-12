/** Month keys in calendar order; index 0 is January. */
export const months = [
	'jan',
	'feb',
	'mar',
	'apr',
	'may',
	'jun',
	'jul',
	'aug',
	'sep',
	'oct',
	'nov',
	'dec'
] as const
export type Month = (typeof months)[number]

/** Meteorological seasons, as used in the Po plain. */
export const seasons = ['winter', 'spring', 'summer', 'autumn'] as const
export type Season = (typeof seasons)[number]

export const seasonMonths: Record<Season, readonly Month[]> = {
	winter: ['dec', 'jan', 'feb'],
	spring: ['mar', 'apr', 'may'],
	summer: ['jun', 'jul', 'aug'],
	autumn: ['sep', 'oct', 'nov']
}

export const monthIndex = (month: Month) => months.indexOf(month)

export const seasonOf = (month: number): Season => {
	if (month === 11 || month < 2) {
		return 'winter'
	}
	if (month < 5) {
		return 'spring'
	}
	return month < 8 ? 'summer' : 'autumn'
}

/** A calendar day, fixed to the gorgo's own time zone so everyone shares the same "today". */
export type Day = { year: number; month: number; day: number }

export const today = (date = new Date()): Day => {
	const parts = new Intl.DateTimeFormat('en-GB', {
		timeZone: 'Europe/Rome',
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	}).formatToParts(date)
	const get = (type: string) => Number(parts.find((p) => p.type === type)?.value)
	return { year: get('year'), month: get('month') - 1, day: get('day') }
}

/** Days since 1 January 1970 — a simple, ever-increasing number for the date. */
export const dayNumber = ({ year, month, day }: Day) =>
	Math.floor(Date.UTC(year, month, day) / 86_400_000)
