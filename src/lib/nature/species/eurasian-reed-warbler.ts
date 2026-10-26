import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Acrocephalus scirpaceus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Acrocephalus_scirpaceus',
				en: 'https://en.wikipedia.org/wiki/Common_reed_warbler'
			}
		}
	],
	status: 'LC',
	name: { it: 'Cannaiola comune', en: 'Eurasian reed warbler' },
	summary: {
		it: 'Per lei nessun canneto è troppo piccolo.',
		en: 'For this bird, no reed bed is too small.'
	},
	description: {
		it: "È perfettamente adattata alla vita nel canneto: con il corpo snello si arrampica nell'intrico degli steli, scivola su e giù lungo le canne e salta da uno stelo all'altro. Viene spesso parassitata dal cuculo.",
		en: 'It is perfectly adapted to life in the reeds: its slim body clambers through the tangle of stems, sliding up and down and hopping from one to the next. It is often parasitised by the cuckoo.'
	},
	habitat: {
		it: 'Canneti, anche piccole fasce lungo i fossi.',
		en: 'Reed beds, even narrow strips along ditches.'
	},
	spotting: {
		it: 'Da maggio ad agosto, all’alba e al tramonto, quando i canneti si riempiono di un vero canto corale, ritmico e chiacchierato.',
		en: 'From May to August, at dawn and dusk, when the reeds fill with a real chorus of rhythmic, chattering song.'
	},
	size: { it: '12–13 cm', en: '12–13 cm' },
	diet: { it: 'Insetti, ragni', en: 'Insects, spiders' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'apr', to: 'apr' },
			{ phase: 'breeding', from: 'may', to: 'aug' },
			{ phase: 'passage', from: 'sep', to: 'sep' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/PleidelsheimerWiesentalTeichrohrsaenger.jpg/960px-PleidelsheimerWiesentalTeichrohrsaenger.jpg',
			alt: {
				it: 'Cannaiola comune (Acrocephalus scirpaceus)',
				en: 'Eurasian reed warbler (Acrocephalus scirpaceus)'
			},
			author: 'Jürgen Freisinger',
			license: 'CC BY 3.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:PleidelsheimerWiesentalTeichrohrsaenger.jpg',
			width: 800,
			height: 800
		}
	],
	sprite: {
		palette: { b: '#9a7a52', f: '#efe2c4', k: '#1f2226', y: '#c8a060', g: '#c8b060' },
		rows: [
			'......bbb...',
			'.....bbkbyy.',
			'.....fbbb...',
			'..bbbbfff...',
			'.bbbbbfff...',
			'bbb..fff....',
			'.....k.k....',
			'gggggggggggg'
		]
	}
})
