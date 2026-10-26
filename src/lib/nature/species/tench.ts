import { animal } from '../types.ts'

export const species = animal({
	group: 'fish',
	scientificName: 'Tinca tinca',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Tinca_tinca',
				en: 'https://en.wikipedia.org/wiki/Tinca_tinca'
			}
		}
	],
	status: 'LC',
	name: { it: 'Tinca', en: 'Tench' },
	summary: {
		it: 'Pesce placido del fondo, verde oliva e con gli occhi rossi.',
		en: 'A placid bottom-dweller, olive green with red eyes.'
	},
	description: {
		it: 'Ama le acque calme e fangose, povere di ossigeno, dove pochi altri pesci resistono. D’inverno rallenta e resta quasi immobile nel fango.',
		en: 'It loves calm, muddy, oxygen-poor water where few other fish can cope. In winter it slows down and rests almost motionless in the mud.'
	},
	habitat: {
		it: 'Fondali fangosi con molta vegetazione sommersa.',
		en: 'Muddy bottoms with plenty of submerged plants.'
	},
	spotting: {
		it: 'Difficile da vedere: cerca le bollicine che risalgono quando fruga nel fango, nelle sere d’estate.',
		en: 'Hard to see: look for trails of bubbles rising as it roots in the mud on summer evenings.'
	},
	size: { it: '20–50 cm', en: '20–50 cm' },
	diet: {
		it: 'Larve, molluschi e piccoli invertebrati del fondo',
		en: 'Larvae, snails and small bottom invertebrates'
	},
	activeAt: ['dawn', 'dusk', 'night'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'dormant', from: 'dec', to: 'feb' },
			{ phase: 'breeding', from: 'may', to: 'jul' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Tinca_tinca_Natural_History_Museum_University_of_Pisa.jpg/960px-Tinca_tinca_Natural_History_Museum_University_of_Pisa.jpg',
			alt: { it: 'Tinca (Tinca tinca)', en: 'Tench (Tinca tinca)' },
			author: 'Mattia Nocciola',
			license: 'CC BY-SA 4.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Tinca_tinca_Natural_History_Museum_University_of_Pisa.jpg',
			width: 800,
			height: 533
		}
	],
	sprite: {
		palette: { g: '#6b7a3a', G: '#4f5a2a', y: '#b8b060', r: '#c0392b' },
		rows: [
			'....GGGG......',
			'G..GgggggGG...',
			'GGGgggggggrgG.',
			'GGGgyyyyyyygg.',
			'G..GgyyyyyGG..',
			'.....GG.G.....'
		]
	}
})
