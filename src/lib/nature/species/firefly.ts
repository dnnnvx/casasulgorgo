import { animal } from '../types.ts'

export const species = animal({
	group: 'insects',
	scientificName: 'Luciola italica',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Lucciola',
				en: 'https://en.wikipedia.org/wiki/Firefly'
			}
		}
	],
	name: { it: 'Lucciola', en: 'Italian firefly' },
	summary: {
		it: 'Per poche settimane a inizio estate, i prati brillano di piccole luci.',
		en: 'For a few weeks in early summer, the meadows twinkle with tiny lights.'
	},
	description: {
		it: 'I lampi sono messaggi d’amore tra maschi e femmine. Le lucciole stanno diminuendo ovunque per l’inquinamento luminoso e i pesticidi: un prato buio e naturale è il loro rifugio.',
		en: 'The flashes are love messages between males and females. Fireflies are declining everywhere because of light pollution and pesticides: a dark, natural meadow is their refuge.'
	},
	habitat: {
		it: 'Prati umidi, siepi e margini dei campi lontano dalle luci.',
		en: 'Damp meadows, hedgerows and field edges away from lights.'
	},
	spotting: {
		it: 'Nelle notti calde di giugno, un’ora dopo il tramonto. Spegni la torcia e lascia abituare gli occhi.',
		en: 'On warm June nights, an hour after sunset. Switch off your torch and let your eyes adjust.'
	},
	size: { it: '7–10 mm', en: '7–10 mm' },
	diet: {
		it: 'Le larve mangiano chiocciole; gli adulti quasi nulla',
		en: 'Larvae eat snails; adults barely feed'
	},
	activeAt: ['night'],
	calendar: {
		base: 'dormant',
		periods: [
			{ phase: 'present', from: 'may', to: 'may' },
			{ phase: 'breeding', from: 'jun', to: 'jun' },
			{ phase: 'present', from: 'jul', to: 'jul' }
		]
	},
	sprite: {
		palette: { k: '#2b2a28', r: '#c0402a', w: '#c8c0b0', y: '#f4e04a', Y: '#fff8b0' },
		rows: [
			'....k....',
			'...krk...',
			'..wkkkw..',
			'.wwkkkww.',
			'..wkkkw..',
			'...yyy...',
			'..yYYYy..',
			'...yyy...'
		]
	}
})
