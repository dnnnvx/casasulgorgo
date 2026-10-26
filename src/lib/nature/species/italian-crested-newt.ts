import { animal } from '../types.ts'

export const species = animal({
	group: 'amphibians',
	scientificName: 'Triturus carnifex',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Triturus_carnifex',
				en: 'https://en.wikipedia.org/wiki/Triturus_carnifex'
			}
		}
	],
	status: 'LC',
	name: { it: 'Tritone crestato italiano', en: 'Italian crested newt' },
	summary: {
		it: 'Un piccolo drago d’acqua dolce, con la pancia arancio a macchie nere.',
		en: 'A tiny freshwater dragon with a black-spotted orange belly.'
	},
	description: {
		it: 'In primavera torna in acqua per riprodursi e il maschio sfoggia un’alta cresta frastagliata. Il resto dell’anno vive nascosto sotto tronchi e pietre.',
		en: 'In spring it returns to the water to breed, and the male grows a tall, jagged crest. The rest of the year it hides under logs and stones.'
	},
	habitat: {
		it: 'Stagni senza pesci e boschetti umidi vicini.',
		en: 'Fish-free ponds and nearby damp woodland.'
	},
	spotting: {
		it: 'Di notte, con una torcia, guardando nell’acqua bassa a marzo–maggio. Non toccarlo: la sua pelle è delicata.',
		en: 'At night with a torch, looking into shallow water in March–May. Do not handle it: its skin is delicate.'
	},
	size: { it: '12–15 cm', en: '12–15 cm' },
	diet: {
		it: 'Larve, piccoli crostacei, girini',
		en: 'Larvae, small crustaceans, tadpoles'
	},
	activeAt: ['dusk', 'night'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'dormant', from: 'nov', to: 'feb' },
			{ phase: 'breeding', from: 'mar', to: 'jun' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Alpen_Kammmolch%2C_Triturus_carnifex_7.JPG/960px-Alpen_Kammmolch%2C_Triturus_carnifex_7.JPG',
			alt: {
				it: 'Tritone crestato italiano (Triturus carnifex)',
				en: 'Italian crested newt (Triturus carnifex)'
			},
			author: 'Böhringer Friedrich',
			license: 'CC BY-SA 2.5',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alpen_Kammmolch,_Triturus_carnifex_7.JPG',
			width: 800,
			height: 533
		}
	],
	sprite: {
		palette: { k: '#2f2b28', o: '#e88a2a', w: '#f4f1e6' },
		rows: [
			'.....k.k.k.k....',
			'....kkkkkkkkkk..',
			'kkkkkkkkkkkkkwkk',
			'.kk.koooooookkk.',
			'....k..k..k..k..'
		]
	}
})
