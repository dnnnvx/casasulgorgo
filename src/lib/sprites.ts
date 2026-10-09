import type { Sprite } from './pixel.ts'

// Airone cenerino (Ardea cinerea), facing left.
export const heron: Sprite = {
	palette: {
		k: '#1f2226',
		w: '#eef0ea',
		g: '#9aa1a8',
		G: '#6b737d',
		y: '#e8b23a',
		l: '#a8844c'
	},
	rows: [
		'......kk............',
		'.....wwwkkkk........',
		'yyyyywkwww..........',
		'.....wwww...........',
		'......www...........',
		'.......ww...........',
		'.......ww...........',
		'......ww............',
		'......wkw...........',
		'......wkw...........',
		'......wwgg..........',
		'......wgggggg.......',
		'.....wwggggggGG.....',
		'.....wggggggggGGG...',
		'.....wwgggggggGGGG..',
		'......wggggggGGGGGG.',
		'.......gggggGGGGGkkk',
		'........gggGGGGkk...',
		'..........gGGk......',
		'...........l........',
		'...........ll.......',
		'...........l.l......',
		'...........l.l......',
		'...........l.l......',
		'...........l.l......'
	]
}

// Germano reale (Anas platyrhynchos), facing right.
export const duck: Sprite = {
	palette: {
		m: '#2f7a52',
		k: '#1f2226',
		y: '#f0b030',
		w: '#f4f1e6',
		b: '#9a6a4a',
		B: '#8d8a80'
	},
	rows: [
		'.......mm..',
		'......mmmm.',
		'......mkmyy',
		'.......mm..',
		'.......ww..',
		'.bbbbbbbbb.',
		'bBBBBBbbbbb',
		'.bbbbbbbbb.'
	]
}

// Martin pescatore (Alcedo atthis), perched, facing right.
export const kingfisher: Sprite = {
	palette: {
		B: '#1f8fc4',
		b: '#56c1e6',
		o: '#e8742c',
		w: '#f4f1e6',
		k: '#1f2226'
	},
	rows: [
		'....BBB.....',
		'...BbBBB....',
		'...BBwBkkkk.',
		'...BooBB....',
		'..BBoooB....',
		'.BbBoooo....',
		'BBB.ooo.....',
		'....k.k.....'
	]
}

// Gallinella d'acqua (Gallinula chloropus), facing right.
export const moorhen: Sprite = {
	palette: {
		k: '#2a2a33',
		r: '#d8352a',
		y: '#f0c030',
		w: '#f4f1e6',
		g: '#b5c23a'
	},
	rows: [
		'...kkk.....',
		'..kkkkrr...',
		'..kkkkryy..',
		'...kkk.....',
		'.kkkkkk....',
		'kkkkkkkk...',
		'wkkwwwkk...',
		'.kkkkkk....',
		'...g..g....',
		'..gg.gg....'
	]
}

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
	palette: heron.palette,
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
	palette: duck.palette,
	rows: ['.....mm.', '.....mky', '.bbbbww.', 'bBBBbbb.', '.bbbbb..']
}

export const hen: Sprite = {
	palette: { h: '#8a6a48', k: '#1f2226', y: '#d08a30', b: '#a07a52', B: '#7d5c3c' },
	rows: ['.....hh.', '.....hky', '.bbbbhh.', 'bBBBbbb.', '.bbbbb..']
}
