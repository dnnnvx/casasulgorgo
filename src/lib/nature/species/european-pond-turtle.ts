import { animal } from '../types.ts'

export const species = animal({
	group: 'reptiles',
	scientificName: 'Emys orbicularis',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Emys_orbicularis',
				en: 'https://en.wikipedia.org/wiki/Emys_orbicularis'
			}
		}
	],
	status: 'NT',
	name: { it: 'Testuggine palustre europea', en: 'European pond turtle' },
	summary: {
		it: 'L’unica tartaruga d’acqua dolce nativa: rara, timida e da proteggere.',
		en: 'The only native freshwater turtle: rare, shy and in need of protection.'
	},
	description: {
		it: 'Il carapace scuro è punteggiato di giallo. È minacciata dalla perdita degli stagni e dalla concorrenza delle tartarughe esotiche liberate dagli acquari.',
		en: 'Its dark shell is speckled with yellow. It is threatened by the loss of ponds and by competition from exotic pet turtles released into the wild.'
	},
	habitat: {
		it: 'Acque calme e fangose con tronchi affioranti; depone le uova in terreni assolati vicini.',
		en: 'Calm, muddy water with emerging logs; lays its eggs in sunny ground nearby.'
	},
	spotting: {
		it: 'In primavera, al sole su tronchi e rive. Guarda con il binocolo: al minimo movimento si tuffa.',
		en: 'In spring, basking on logs and banks. Use binoculars: it dives at the slightest movement.'
	},
	size: { it: '12–20 cm di carapace', en: '12–20 cm shell' },
	diet: {
		it: 'Insetti acquatici, molluschi, piccoli pesci, carcasse',
		en: 'Water insects, snails, small fish, carrion'
	},
	activeAt: ['day'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'dormant', from: 'nov', to: 'feb' },
			{ phase: 'breeding', from: 'may', to: 'jun' }
		]
	},
	sprite: {
		palette: { k: '#2b2f2a', y: '#d8c04a', s: '#5a5f44' },
		rows: ['...kkkkkk.....', '..kykkykkk....', '.kkkykkkykk.ss', '.kkkkkkkkkkssk', '..s..s..s.s...']
	}
})
