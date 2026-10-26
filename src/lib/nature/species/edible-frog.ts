import { animal } from '../types.ts'

export const species = animal({
	group: 'amphibians',
	scientificName: 'Pelophylax kl. esculentus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Pelophylax_kl._esculentus',
				en: 'https://en.wikipedia.org/wiki/Pelophylax_kl._esculentus'
			}
		}
	],
	status: 'LC',
	name: { it: 'Rana verde', en: 'Edible frog' },
	summary: {
		it: 'La voce delle sere d’estate: gracida a sacche vocali gonfie.',
		en: 'The voice of summer evenings, croaking with puffed-up vocal sacs.'
	},
	description: {
		it: 'Passa le giornate al sole sulle foglie galleggianti e si tuffa al minimo rumore. In realtà è un ibrido naturale tra due specie di rane verdi.',
		en: 'It spends the day basking on floating leaves and dives at the slightest sound. It is actually a natural hybrid of two green frog species.'
	},
	habitat: {
		it: 'Stagni, fossi e canali con molta vegetazione.',
		en: 'Ponds, ditches and canals with plenty of vegetation.'
	},
	spotting: {
		it: 'Avvicinati piano alla riva nelle giornate calde: vedrai occhi e muso che spuntano dall’acqua.',
		en: 'Approach the bank slowly on warm days: you will see eyes and snouts poking out of the water.'
	},
	size: { it: '6–11 cm', en: '6–11 cm' },
	diet: { it: 'Insetti, vermi, piccoli invertebrati', en: 'Insects, worms, small invertebrates' },
	activeAt: ['day', 'dusk', 'night'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'dormant', from: 'nov', to: 'feb' },
			{ phase: 'breeding', from: 'may', to: 'jun' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Rana_esculenta_on_Nymphaea_edit.JPG/960px-Rana_esculenta_on_Nymphaea_edit.JPG',
			alt: {
				it: 'Rana verde (Pelophylax kl. esculentus)',
				en: 'Edible frog (Pelophylax kl. esculentus)'
			},
			author: 'Grand-Duc, Niabot (edit)',
			license: 'CC BY 3.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rana_esculenta_on_Nymphaea_edit.JPG',
			width: 800,
			height: 600
		}
	],
	sprite: {
		palette: { g: '#7da848', G: '#4f6e2c', k: '#1f2226', y: '#e9e2b0' },
		rows: [
			'...gg..gg...',
			'..gkggggkg..',
			'.ggGggggGgg.',
			'gggggyyggggg',
			'gGggyyyyggGg',
			'.gggyyyyggg.',
			'gg..g..g..gg'
		]
	}
})
