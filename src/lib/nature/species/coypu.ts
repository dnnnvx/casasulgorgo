import { animal } from '../types.ts'

export const species = animal({
	group: 'mammals',
	scientificName: 'Myocastor coypus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Myocastor_coypus',
				en: 'https://en.wikipedia.org/wiki/Coypu'
			}
		}
	],
	status: 'LC',
	name: { it: 'Nutria', en: 'Coypu' },
	summary: {
		it: 'Un roditore sudamericano arrivato per la pelliccia e mai più andato via.',
		en: 'A South American rodent that came for its fur and never left.'
	},
	description: {
		it: 'Introdotta in Italia per la sua pelliccia pregiata, ha trovato qui un habitat ideale. Gli esemplari fuggiti dagli allevamenti o liberati si sono stabiliti per sempre, diventando una specie invasiva. A prima vista ricorda un castoro, ma ha la coda lunga e sottile e grandi denti arancioni.',
		en: 'Brought to Italy for its valuable fur, it found an ideal home here. Animals that escaped from fur farms or were released settled for good and became an invasive species. At first sight it looks like a beaver, but it has a long thin tail and big orange teeth.'
	},
	habitat: {
		it: 'Gorghi, canali e fossi con rive morbide, dove scava le tane.',
		en: 'Ponds, canals and ditches with soft banks, where it digs its burrows.'
	},
	spotting: {
		it: 'Facile da vedere tutto l’anno: nuota con solo la testa fuori dall’acqua, o bruca sulla riva al mattino presto e al tramonto.',
		en: 'Easy to see all year: it swims with only its head above water, or grazes on the bank early in the morning and at dusk.'
	},
	rarity: 'common',
	curiosity: {
		it: 'Nei suoi habitat d’origine la nutria è utile: tiene a bada la crescita delle piante acquatiche e favorisce la biodiversità delle zone umide.',
		en: 'In its native range the coypu is useful: it keeps water plants in check and helps wetland biodiversity.'
	},
	size: { it: '40–60 cm, più 30–45 cm di coda', en: '40–60 cm, plus a 30–45 cm tail' },
	diet: { it: 'Piante acquatiche, radici, colture', en: 'Water plants, roots, crops' },
	activeAt: ['dawn', 'dusk', 'night'],
	calendar: { base: 'present' },
	sprite: {
		palette: { b: '#7a5a3a', B: '#5a4028', o: '#e8742c', w: '#f4f1e6', k: '#1f2226' },
		rows: [
			'......bbbbb...',
			'....bbbbbbbbb.',
			'..bbbbbbbbbkbw',
			'.BbbbbbbbbbbbB',
			'B..BBbbbbbBBo.',
			'B...k.....k...'
		]
	}
})
