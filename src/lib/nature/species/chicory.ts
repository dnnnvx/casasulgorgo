import { plant } from '../types.ts'

export const species = plant({
	group: 'wildflowers',
	scientificName: 'Cichorium intybus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Cichorium_intybus',
				en: 'https://en.wikipedia.org/wiki/Cichorium_intybus'
			}
		}
	],
	form: 'herb',
	name: { it: 'Cicoria selvatica', en: 'Chicory' },
	summary: {
		it: 'Fiori azzurro cielo che si aprono al mattino e si chiudono a mezzogiorno.',
		en: 'Sky-blue flowers that open in the morning and close by midday.'
	},
	description: {
		it: 'Pianta perenne robusta, dalle radici profonde, che resiste alla siccità estiva. I fiori seguono il sole e sono molto visitati da api selvatiche.',
		en: 'A tough perennial with deep roots that withstands the summer drought. Its flowers follow the sun and are popular with wild bees.'
	},
	habitat: {
		it: 'Bordi delle strade, argini, prati asciutti.',
		en: 'Roadsides, embankments, dry meadows.'
	},
	spotting: {
		it: 'Nelle mattine di luglio–settembre lungo la strada d’accesso: dopo pranzo i fiori sono già chiusi.',
		en: 'On July–September mornings along the access road: after lunch the flowers have closed.'
	},
	height: { it: '30–120 cm', en: '30–120 cm' },
	calendar: {
		base: 'leaf',
		periods: [
			{ phase: 'dormant', from: 'dec', to: 'feb' },
			{ phase: 'flowering', from: 'jul', to: 'sep' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Cichorium_intybus-alvesgaspar1.jpg/960px-Cichorium_intybus-alvesgaspar1.jpg',
			alt: { it: 'Cicoria selvatica (Cichorium intybus)', en: 'Chicory (Cichorium intybus)' },
			author: 'Alvesgaspar',
			license: 'CC BY 2.5',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cichorium_intybus-alvesgaspar1.jpg',
			width: 800,
			height: 633
		}
	],
	sprite: {
		palette: { b: '#6a8ad8', B: '#4a6ac0', w: '#f6f3ea', g: '#6a9a3a' },
		rows: [
			'...b.b...',
			'.b.bbb.b.',
			'..bbwbb..',
			'bbbwBwbbb',
			'..bbwbb..',
			'.b.bbb.b.',
			'...b.b...',
			'....g....',
			'...gg....',
			'....g.g..',
			'....gg...',
			'....g....'
		]
	}
})
