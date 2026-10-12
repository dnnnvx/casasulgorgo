import { plant } from '../types.ts'

export const species = plant({
	group: 'wildflowers',
	scientificName: 'Papaver rhoeas',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Papaver_rhoeas',
				en: 'https://en.wikipedia.org/wiki/Papaver_rhoeas'
			}
		}
	],
	form: 'herb',
	name: { it: 'Papavero comune', en: 'Common poppy' },
	summary: {
		it: 'Il rosso di maggio ai bordi dei campi di grano.',
		en: 'The red of May along the edges of wheat fields.'
	},
	description: {
		it: 'Pianta annuale: i semi possono attendere nel terreno per anni e germogliano quando la terra viene smossa. Ogni fiore dura appena un giorno o due.',
		en: 'An annual: its seeds can wait in the soil for years and sprout when the ground is disturbed. Each flower lasts barely a day or two.'
	},
	habitat: {
		it: 'Margini dei campi, argini e terreni smossi.',
		en: 'Field edges, embankments and disturbed ground.'
	},
	spotting: {
		it: 'Da maggio a giugno lungo le carraie e i campi intorno al gorgo.',
		en: 'From May to June along the farm tracks and fields around the gorgo.'
	},
	height: { it: '30–80 cm', en: '30–80 cm' },
	calendar: {
		base: 'dormant',
		periods: [
			{ phase: 'leaf', from: 'mar', to: 'apr' },
			{ phase: 'flowering', from: 'may', to: 'jun' },
			{ phase: 'fruiting', from: 'jul', to: 'aug' }
		]
	},
	sprite: {
		palette: { r: '#d8352a', R: '#a82418', k: '#1f2226', g: '#6a9a3a' },
		rows: [
			'..rrrrr..',
			'.rRrrrRr.',
			'rrrRkRrrr',
			'rrrkkkrrr',
			'.rRrkrRr.',
			'..rrrrr..',
			'....g....',
			'....g.g..',
			'...g..gg.',
			'..gg..g..',
			'....g....',
			'....g....'
		]
	}
})
