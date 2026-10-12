import type { Group } from './nature/types.ts'
import type { Season } from './seasons.ts'

/** A decorative pattern drawn over a theme's gradient. */
export type Motif = 'waves' | 'clouds' | 'grass' | 'leaves' | 'sun' | 'snow' | 'blossom' | 'stones'

export type Theme = Season | Group

/**
 * Season and habitat backdrops: a two-stop gradient, grain on top, and a motif.
 * Light enough for dark text and pixel sprites in both colour schemes.
 */
export const themes: Record<Theme, { from: string; to: string; motif: Motif }> = {
	winter: { from: '#dbe6ea', to: '#93b3c4', motif: 'snow' },
	spring: { from: '#e6efc0', to: '#a9c45a', motif: 'blossom' },
	summer: { from: '#f8e3a0', to: '#e7a94b', motif: 'sun' },
	autumn: { from: '#f1c39a', to: '#c0663a', motif: 'leaves' },
	birds: { from: '#e3f0f6', to: '#8fc1dd', motif: 'clouds' },
	mammals: { from: '#e8e0bc', to: '#a99a63', motif: 'grass' },
	amphibians: { from: '#d3e8bf', to: '#5f9f83', motif: 'waves' },
	reptiles: { from: '#f2e1b6', to: '#c7955a', motif: 'stones' },
	fish: { from: '#bfe1ea', to: '#3f86a8', motif: 'waves' },
	insects: { from: '#eef0c2', to: '#b8c96a', motif: 'blossom' },
	trees: { from: '#d6e6b0', to: '#5f8d4b', motif: 'leaves' },
	'water-plants': { from: '#cdeadf', to: '#4d9a82', motif: 'waves' },
	wildflowers: { from: '#f6e0d6', to: '#d58fac', motif: 'blossom' }
}
