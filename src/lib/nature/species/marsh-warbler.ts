import { animal } from '../types.ts'
import { species as reedWarbler } from './eurasian-reed-warbler.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Acrocephalus palustris',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Acrocephalus_palustris',
				en: 'https://en.wikipedia.org/wiki/Marsh_warbler'
			}
		}
	],
	status: 'LC',
	name: { it: 'Cannaiola verdognola', en: 'Marsh warbler' },
	summary: {
		it: 'La gemella della cannaiola, ma con un canto pieno di imitazioni.',
		en: 'The reed warbler’s twin, but with a song full of imitations.'
	},
	description: {
		it: 'È una "specie gemella" della cannaiola comune e quasi identica d\'aspetto. Al contrario del canto monotono di quest\'ultima, ha un repertorio variato, ricco di imitazioni magistrali di altri uccelli mescolate a trilli, note chiacchierate, suoni rauchi e una tipica nota nasale.',
		en: 'A "twin species" of the reed warbler, and almost identical in looks. Unlike the reed warbler’s monotonous song, its repertoire is varied, full of masterful imitations of other birds mixed with trills, chatter, harsh notes and a typical nasal call.'
	},
	habitat: {
		it: 'Erbe alte, ortiche e cespugli ai margini dei fossi, più che il canneto vero.',
		en: 'Tall herbs, nettles and bushes along ditches, rather than true reed beds.'
	},
	spotting: {
		it: 'Da fine maggio a luglio. Ascolta: se senti un canto che imita altri uccelli tra le erbe alte, è lei.',
		en: 'From late May to July. Listen: a song that imitates other birds from the tall herbs is this one.'
	},
	curiosity: {
		it: 'Si ferma nei luoghi di nidificazione solo per circa tre mesi, poi riparte per l’Africa.',
		en: 'It stays at its breeding grounds for only about three months before heading back to Africa.'
	},
	size: { it: '13–15 cm', en: '13–15 cm' },
	diet: { it: 'Insetti, ragni', en: 'Insects, spiders' },
	activeAt: ['dawn', 'day', 'dusk', 'night'],
	calendar: { base: 'absent', periods: [{ phase: 'breeding', from: 'may', to: 'jul' }] },
	sprite: {
		palette: { b: '#8a8a5a', f: '#eee8c4', k: '#1f2226', y: '#b8a870', g: '#8aa04a' },
		rows: reedWarbler.sprite.rows
	}
})
