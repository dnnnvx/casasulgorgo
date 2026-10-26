import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Gallinula chloropus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Gallinula_chloropus',
				en: 'https://en.wikipedia.org/wiki/Common_moorhen'
			}
		}
	],
	status: 'LC',
	name: { it: "Gallinella d'acqua", en: 'Common moorhen' },
	summary: {
		it: 'Becco rosso a punta gialla e coda che scatta a ogni passo.',
		en: 'A red, yellow-tipped bill and a tail that flicks with every step.'
	},
	description: {
		it: 'Scura, con una linea bianca sui fianchi e il sottocoda bianco che mostra di continuo muovendo la coda. Nuota ondeggiando la testa avanti e indietro e cammina sulle foglie galleggianti con le sue lunghe dita verdi.',
		en: 'Dark, with a white line along the flanks and a white undertail it keeps flashing as it flicks its tail. It swims bobbing its head back and forth and walks over floating leaves on long green toes.'
	},
	habitat: {
		it: 'Gorghi, fossi e canali con rive vegetate.',
		en: 'Ponds, ditches and canals with vegetated banks.'
	},
	spotting: {
		it: 'Facile da vedere tutto l’anno lungo le rive e sui prati vicini all’acqua. Se si spaventa corre a nascondersi tra le canne.',
		en: 'Easy to see all year along the banks and on grass near the water. When startled it runs off to hide in the reeds.'
	},
	rarity: 'common',
	size: { it: '30–38 cm', en: '30–38 cm' },
	diet: {
		it: 'Piante acquatiche, semi, insetti, lumache',
		en: 'Water plants, seeds, insects, snails'
	},
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'apr', to: 'aug' }] },
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Common_moorhen_%28Gallinula_chloropus%29_France.jpg/960px-Common_moorhen_%28Gallinula_chloropus%29_France.jpg',
			alt: {
				it: "Gallinella d'acqua (Gallinula chloropus)",
				en: 'Common moorhen (Gallinula chloropus)'
			},
			author: 'Alexis Lours',
			license: 'CC BY 4.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Common_moorhen_(Gallinula_chloropus)_France.jpg',
			width: 800,
			height: 563
		}
	],
	sprite: {
		palette: { k: '#2a2a32', b: '#4a4436', w: '#f4f1e6', r: '#c0302a', y: '#e8d040', g: '#9ab040' },
		rows: [
			'......kkk..',
			'.....kkkrry',
			'.....kkk...',
			'w.bbbbkk...',
			'wbbbbbbbkk.',
			'.bwwwwwkk..',
			'....g.g....',
			'...g..g....'
		]
	}
})
