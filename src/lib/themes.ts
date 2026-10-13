import type { Group } from './nature/types.ts'
import { type Season, seasons } from './seasons.ts'

/** A decorative pattern drawn over a theme's gradient. */
export type Motif = 'waves' | 'clouds' | 'grass' | 'leaves' | 'sun' | 'snow' | 'blossom'

export type Theme = Season | Group

/** Season and habitat backdrops: the pattern each one draws. Colours live in global.css. */
export const motifs: Record<Theme, Motif> = {
	winter: 'snow',
	spring: 'blossom',
	summer: 'sun',
	autumn: 'leaves',
	birds: 'clouds',
	mammals: 'grass',
	amphibians: 'waves',
	reptiles: 'grass',
	fish: 'waves',
	insects: 'blossom',
	trees: 'leaves',
	'water-plants': 'waves',
	wildflowers: 'blossom'
}

/**
 * The gradient of a theme, as CSS variables from global.css: seasons own both ends,
 * groups share one end colour and only change the start (unless they define their own `-to`).
 */
export const gradientOf = (theme: Theme) => ({
	from: `var(--theme-${theme}-from)`,
	to: (seasons as readonly string[]).includes(theme)
		? `var(--theme-${theme}-to)`
		: `var(--theme-${theme}-to, var(--theme-group-to))`
})
