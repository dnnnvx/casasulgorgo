import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Asio otus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Asio_otus',
				en: 'https://en.wikipedia.org/wiki/Long-eared_owl'
			}
		}
	],
	status: 'LC',
	name: { it: 'Gufo comune', en: 'Long-eared owl' },
	summary: {
		it: 'Occhi arancio e lunghi ciuffi a forma di orecchie.',
		en: 'Orange eyes and long, ear-like tufts.'
	},
	description: {
		it: 'I "ciuffi" sulla testa non sono orecchie ma piume, che alza quando è all’erta. Di giorno resta immobile contro il tronco, perfettamente mimetico. D’inverno più gufi si radunano negli stessi alberi per dormire.',
		en: 'The "ears" on its head are not ears but feathers, raised when it is alert. By day it stays motionless against a trunk, perfectly camouflaged. In winter several owls gather to roost in the same trees.'
	},
	habitat: {
		it: 'Boschetti, siepi alte e filari, con campi aperti dove cacciare.',
		en: 'Copses, tall hedges and tree rows, with open fields to hunt over.'
	},
	spotting: {
		it: "Di giorno è difficile: d'inverno cerca borre e macchie bianche sotto alberi fitti. A fine primavera, di notte, ascolta i giovani che chiamano con un cigolio simile a un cancello arrugginito.",
		en: 'Hard to find by day: in winter look for pellets and white splashes under dense trees. In late spring, at night, listen for the young calling with a squeak like a rusty gate.'
	},
	curiosity: {
		it: 'Nel sito trovano riparo d’inverno molti piccoli uccelli: per questo è frequentato da rapaci come il gufo comune.',
		en: 'In winter many small birds shelter here, which is why owls like this one visit.'
	},
	size: { it: '35–37 cm', en: '35–37 cm' },
	diet: { it: 'Arvicole, topi, piccoli uccelli', en: 'Voles, mice, small birds' },
	activeAt: ['dusk', 'night'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'mar', to: 'jun' }] },
	sprite: {
		palette: { b: '#8a6a42', B: '#5a4428', o: '#e8742c', k: '#1f2226', f: '#d8b88a', l: '#6a4a32' },
		rows: [
			'.B.....B..l',
			'.BB...BB..l',
			'.bbbbbbb..l',
			'bfokffokb.l',
			'bffffkfffbl',
			'.bfBffBfb.l',
			'.bBfBfBfb.l',
			'..bBfBfb..l',
			'...bbbb...l',
			'..k.k.k...l'
		]
	}
})
