import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Buteo buteo',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Buteo_buteo',
				en: 'https://en.wikipedia.org/wiki/Common_buzzard'
			}
		}
	],
	status: 'LC',
	name: { it: 'Poiana', en: 'Common buzzard' },
	summary: {
		it: 'Il rapace che vedi più spesso, appollaiato sui pali lungo i campi.',
		en: 'The raptor you see most often, perched on posts along the fields.'
	},
	description: {
		it: 'Robusta, con ali larghe e arrotondate e coda corta. Il piumaggio varia molto da individuo a individuo, dal quasi bianco al bruno scuro. Volteggia in ampi cerchi sfruttando le correnti calde e caccia piccoli mammiferi nei campi.',
		en: 'Stocky, with broad rounded wings and a short tail. Its plumage varies hugely between birds, from almost white to dark brown. It soars in wide circles on warm air and hunts small mammals in the fields.'
	},
	habitat: {
		it: 'Campi aperti con filari, siepi e boschetti dove nidificare.',
		en: 'Open farmland with tree rows, hedges and copses to nest in.'
	},
	spotting: {
		it: 'Guarda pali, alberi isolati e il cielo nelle ore calde. Il suo richiamo è un miagolio lamentoso, "piiiu".',
		en: 'Check posts, lone trees and the sky in the warm hours. Its call is a plaintive, mewing "peeyou".'
	},
	size: { it: '48–56 cm, apertura alare fino a 1,3 m', en: '48–56 cm, wingspan up to 1.3 m' },
	diet: { it: 'Arvicole, topi, rane, grossi insetti', en: 'Voles, mice, frogs, large insects' },
	activeAt: ['day'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'breeding', from: 'mar', to: 'jun' },
			{ phase: 'wintering', from: 'nov', to: 'feb' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Common_Buzzard_by_caroline_legg_%28cropped%29.jpg/960px-Common_Buzzard_by_caroline_legg_%28cropped%29.jpg',
			alt: { it: 'Poiana (Buteo buteo)', en: 'Common buzzard (Buteo buteo)' },
			author: 'caroline legg',
			license: 'CC BY 2.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Common_Buzzard_by_caroline_legg_(cropped).jpg',
			width: 800,
			height: 1065
		}
	],
	sprite: {
		palette: { b: '#6a4a32', f: '#e8d8b8', k: '#1f2226', y: '#e8c030', l: '#8a6a4a' },
		rows: [
			'.......bbb..',
			'......bbkbky',
			'......bfbb..',
			'....bbffb...',
			'..bbbbfbf...',
			'.bbbbbffb...',
			'bbb.bbfb....',
			'.....y.y....',
			'llllllllllll'
		]
	}
})
