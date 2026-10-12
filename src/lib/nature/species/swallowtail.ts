import { animal } from '../types.ts'

export const species = animal({
	group: 'insects',
	scientificName: 'Papilio machaon',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Papilio_machaon',
				en: 'https://en.wikipedia.org/wiki/Papilio_machaon'
			}
		}
	],
	status: 'LC',
	name: { it: 'Macaone', en: 'Swallowtail' },
	summary: {
		it: 'Grande farfalla gialla e nera, con le "code" sulle ali posteriori.',
		en: 'A large yellow-and-black butterfly with "tails" on its hind wings.'
	},
	description: {
		it: 'Il bruco, verde a strisce nere e punti arancio, cresce su finocchio selvatico e carota. Passa l’inverno come crisalide, appesa a uno stelo secco.',
		en: 'The caterpillar, green with black stripes and orange dots, feeds on wild fennel and carrot. It spends the winter as a chrysalis hanging from a dry stem.'
	},
	habitat: {
		it: 'Prati fioriti, orti e incolti soleggiati.',
		en: 'Flowery meadows, vegetable gardens and sunny wasteland.'
	},
	spotting: {
		it: 'Nelle giornate di sole, mentre si nutre sui fiori o vola in cerchio sopra gli argini.',
		en: 'On sunny days, feeding on flowers or circling above the embankments.'
	},
	size: { it: '6,5–8 cm di apertura alare', en: '6.5–8 cm wingspan' },
	diet: {
		it: 'Nettare (adulti); ombrellifere (bruchi)',
		en: 'Nectar (adults); carrot-family plants (caterpillars)'
	},
	activeAt: ['day'],
	calendar: {
		base: 'dormant',
		periods: [
			{ phase: 'present', from: 'apr', to: 'sep' },
			{ phase: 'breeding', from: 'may', to: 'aug' }
		]
	},
	sprite: {
		palette: { y: '#f0d040', k: '#1f2226', b: '#3a6ab0', r: '#d0402a' },
		rows: [
			'....k...k....',
			'.....k.k.....',
			'kkkk..k..kkkk',
			'kyyykkkkkyyyk',
			'kyykyykyykyyk',
			'.kyyyykyyyyk.',
			'..kbyykyybk..',
			'..kyrkkkryk..',
			'...kk.k.kk...',
			'...k.....k...'
		]
	}
})
