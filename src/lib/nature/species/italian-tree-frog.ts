import { animal } from '../types.ts'

export const species = animal({
	group: 'amphibians',
	scientificName: 'Hyla intermedia',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Hyla_intermedia',
				en: 'https://en.wikipedia.org/wiki/Hyla_intermedia'
			}
		}
	],
	status: 'LC',
	name: { it: 'Raganella italiana', en: 'Italian tree frog' },
	summary: {
		it: 'Verde brillante e grande quanto un pollice, ma canta fortissimo.',
		en: 'Bright green and the size of a thumb, but it sings incredibly loud.'
	},
	description: {
		it: 'Grazie ai polpastrelli adesivi si arrampica su canne e cespugli. Nelle notti di primavera i maschi formano cori che si sentono a centinaia di metri.',
		en: 'Sticky toe pads let it climb reeds and shrubs. On spring nights the males form choruses that carry for hundreds of metres.'
	},
	habitat: {
		it: 'Canneti, siepi e cespugli vicino a stagni senza pesci predatori.',
		en: 'Reed beds, hedges and shrubs near ponds without predatory fish.'
	},
	spotting: {
		it: 'Si sente più che vedersi: ascolta il coro dopo il tramonto tra aprile e giugno.',
		en: 'Heard more than seen: listen for the chorus after sunset from April to June.'
	},
	size: { it: '3–5 cm', en: '3–5 cm' },
	diet: { it: 'Piccoli insetti e ragni', en: 'Small insects and spiders' },
	activeAt: ['dusk', 'night'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'dormant', from: 'nov', to: 'feb' },
			{ phase: 'breeding', from: 'apr', to: 'jun' }
		]
	},
	sprite: {
		palette: { g: '#5fae3c', G: '#3f6a2a', k: '#1f2226', y: '#e8e2a8' },
		rows: [
			'..gg..gg..',
			'.gkggggkg.',
			'.gggggggg.',
			'gGgyyyygGg',
			'gGgyyyygGg',
			'.gGggggGg.',
			'gg.g..g.gg'
		]
	}
})
