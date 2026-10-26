import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Nycticorax nycticorax',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Nycticorax_nycticorax',
				en: 'https://en.wikipedia.org/wiki/Black-crowned_night_heron'
			}
		}
	],
	status: 'LC',
	name: { it: 'Nitticora', en: 'Night heron' },
	summary: {
		it: 'Il "corvo notturno": un airone tozzo che si sveglia al tramonto.',
		en: 'The "night raven": a stocky heron that wakes up at sunset.'
	},
	description: {
		it: "Arriva ad aprile e si nasconde nei boschetti di salici: cercarla è emozionante come una caccia alle uova di Pasqua. Di giorno riposa immobile sugli alberi in riva all'acqua, al crepuscolo vola sui prati umidi e lungo i fossi in cerca di cibo.",
		en: 'It arrives in April and hides in the willow thickets: finding one is as exciting as an Easter egg hunt. By day it rests motionless in waterside trees; at dusk it flies over wet meadows and along ditches to feed.'
	},
	habitat: {
		it: 'Salici e alberi sulle rive, prati umidi e fossi.',
		en: 'Willows and waterside trees, wet meadows and ditches.'
	},
	spotting: {
		it: 'Scruta i salici sulle rive di giorno, o ascolta il suo gracchio rauco al tramonto quando passa in volo.',
		en: 'Scan the bankside willows by day, or listen for its harsh croak at dusk as it flies over.'
	},
	curiosity: {
		it: 'Il nome scientifico, Nycticorax, vuol dire "corvo notturno", per il richiamo gracchiante e le abitudini notturne.',
		en: 'Its scientific name, Nycticorax, means "night raven", after its croaking call and nocturnal habits.'
	},
	size: { it: '58–65 cm', en: '58–65 cm' },
	diet: { it: 'Pesci, rane, insetti acquatici', en: 'Fish, frogs, water insects' },
	activeAt: ['dusk', 'night'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'breeding', from: 'apr', to: 'aug' },
			{ phase: 'passage', from: 'sep', to: 'sep' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Nycticorax_nycticorax_457953189.jpg/960px-Nycticorax_nycticorax_457953189.jpg',
			alt: { it: 'Nitticora (Nycticorax nycticorax)', en: 'Night heron (Nycticorax nycticorax)' },
			author: 'ramidos',
			license: 'CC BY 4.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nycticorax_nycticorax_457953189.jpg',
			width: 800,
			height: 659
		}
	],
	sprite: {
		palette: { k: '#1f2a32', w: '#f4f1e6', g: '#9aa1a8', r: '#c0302a', y: '#e8d040', l: '#a8844c' },
		rows: [
			'.......kkk..',
			'......kkrkkk',
			'......wwkk..',
			'w....wwww...',
			'.w.kkkwww...',
			'..kkkkkww...',
			'.ggkkkgww...',
			'gggggggg....',
			'....y.y.....',
			'...y..y.....'
		]
	}
})
