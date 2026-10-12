import { plant } from '../types.ts'

export const species = plant({
	group: 'water-plants',
	scientificName: 'Nymphaea alba',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Nymphaea_alba',
				en: 'https://en.wikipedia.org/wiki/Nymphaea_alba'
			}
		}
	],
	status: 'LC',
	form: 'aquatic',
	name: { it: 'Ninfea bianca', en: 'White water lily' },
	summary: {
		it: 'Fiori bianchi galleggianti che si aprono al sole e si chiudono la sera.',
		en: 'Floating white flowers that open in the sun and close in the evening.'
	},
	description: {
		it: 'Le radici affondano nel fango fino a due metri di profondità. Le grandi foglie rotonde fanno ombra all’acqua e offrono un appoggio a rane e libellule.',
		en: 'Its roots reach into the mud up to two metres deep. The large round leaves shade the water and give frogs and dragonflies somewhere to rest.'
	},
	habitat: {
		it: 'Acque ferme o lente, profonde 0,5–2 m.',
		en: 'Still or slow water, 0.5–2 m deep.'
	},
	spotting: {
		it: 'Nelle mattine d’estate, sull’acqua aperta del gorgo. Non raccoglierla: è protetta in molte regioni.',
		en: 'On summer mornings, on the open water of the gorgo. Do not pick it: it is protected in many regions.'
	},
	height: {
		it: 'Galleggiante, fusti lunghi fino a 2 m',
		en: 'Floating, with stems up to 2 m long'
	},
	calendar: {
		base: 'dormant',
		periods: [
			{ phase: 'leaf', from: 'apr', to: 'oct' },
			{ phase: 'flowering', from: 'jun', to: 'aug' }
		]
	},
	sprite: {
		palette: { g: '#4f8f4f', G: '#3d7440', w: '#f6f3ea', W: '#e0d8c8', y: '#f0c030' },
		rows: [
			'....w..w....',
			'...wWwwWw...',
			'..wwWyyWww..',
			'.gGwwwwwwGg.',
			'ggGgGggGgGgg',
			'.ggggggggg..'
		]
	}
})
