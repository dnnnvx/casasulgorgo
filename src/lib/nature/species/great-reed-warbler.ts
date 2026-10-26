import { animal } from '../types.ts'
import { species as reedWarbler } from './eurasian-reed-warbler.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Acrocephalus arundinaceus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Acrocephalus_arundinaceus',
				en: 'https://en.wikipedia.org/wiki/Great_reed_warbler'
			}
		}
	],
	status: 'LC',
	name: { it: 'Cannareccione', en: 'Great reed warbler' },
	summary: {
		it: 'Il più rumoroso del canneto: canta stridulo dalla cima di una canna.',
		en: 'The loudest voice in the reeds, grating away from the top of a stem.'
	},
	description: {
		it: 'Nei canneti allagati il maschio difende il territorio con la sua voce forte e stridente. Può essere poligamo: i maschi che arrivano per primi hanno più possibilità di attirare più di una femmina. È spesso vittima del cuculo, che depone le uova nel suo nido.',
		en: 'In flooded reed beds the male marks his territory with a loud, grating song. It can be polygamous: males that arrive first have a better chance of attracting more than one female. It is often a victim of the cuckoo, which lays its eggs in its nest.'
	},
	habitat: {
		it: 'Canneti fitti e allagati.',
		en: 'Dense, flooded reed beds.'
	},
	spotting: {
		it: 'Da maggio a luglio. Segui il canto: con un po’ di pazienza lo vedrai appollaiato sulla cima di una canna alta.',
		en: 'From May to July. Follow the song: with a little patience you will see it perched on top of a tall reed.'
	},
	size: { it: '19–20 cm', en: '19–20 cm' },
	diet: { it: 'Insetti, ragni, piccole rane', en: 'Insects, spiders, small frogs' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'apr', to: 'apr' },
			{ phase: 'breeding', from: 'may', to: 'jul' },
			{ phase: 'passage', from: 'aug', to: 'sep' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Drosselrohrs%C3%A4nger_Great_reed_warbler.jpg/960px-Drosselrohrs%C3%A4nger_Great_reed_warbler.jpg',
			alt: {
				it: 'Cannareccione (Acrocephalus arundinaceus)',
				en: 'Great reed warbler (Acrocephalus arundinaceus)'
			},
			author: 'Andreas Trepte',
			license: 'CC BY-SA 2.5',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Drosselrohrs%C3%A4nger_Great_reed_warbler.jpg',
			width: 800,
			height: 1200
		}
	],
	sprite: {
		palette: { b: '#8a6a42', f: '#e8d4aa', k: '#1f2226', y: '#b8905a', g: '#c8b060' },
		rows: reedWarbler.sprite.rows
	}
})
