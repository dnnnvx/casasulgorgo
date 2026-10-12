import type { Sprite } from './pixel.ts'

// Sprites used by the isometric scene. Species sprites live with each species.
export const birdUp: Sprite = {
	palette: { k: '#3b2a2a' },
	rows: ['k.....k', '.k...k.', '..kkk..']
}

export const birdDown: Sprite = {
	palette: { k: '#3b2a2a' },
	rows: ['..kkk..', '.k...k.', 'k.....k']
}

// Scene-scale versions, sized for the isometric gorgo.
export const heronSmall: Sprite = {
	palette: { k: '#1f2226', w: '#eef0ea', g: '#9aa1a8', G: '#6b737d', y: '#e8b23a', l: '#a8844c' },
	rows: [
		'..kk......',
		'.wwwkkk...',
		'yywkw.....',
		'..www.....',
		'...ww.....',
		'...w......',
		'...ww.....',
		'...wgg....',
		'..wwgggG..',
		'..wgggGGG.',
		'...ggGGGkk',
		'....gGGk..',
		'.....l....',
		'.....l....',
		'....l.l...'
	]
}

export const drake: Sprite = {
	palette: { m: '#2f7a52', k: '#1f2226', y: '#f0b030', w: '#f4f1e6', b: '#9a6a4a', B: '#8d8a80' },
	rows: ['.....mm.', '.....mky', '.bbbbww.', 'bBBBbbb.', '.bbbbb..']
}

export const hen: Sprite = {
	palette: { h: '#8a6a48', k: '#1f2226', y: '#d08a30', b: '#a07a52', B: '#7d5c3c' },
	rows: ['.....hh.', '.....hky', '.bbbbhh.', 'bBBBbbb.', '.bbbbb..']
}
