import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Ciconia ciconia',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Ciconia_ciconia',
				en: 'https://en.wikipedia.org/wiki/White_stork'
			}
		}
	],
	status: 'LC',
	name: { it: 'Cicogna bianca', en: 'White stork' },
	summary: {
		it: 'La viaggiatrice che ci ha insegnato come migrano gli uccelli.',
		en: 'The traveller that taught us how birds migrate.'
	},
	description: {
		it: 'Vive tra Europa, Asia e Africa e nidifica volentieri vicino alle case, dove è tradizionalmente benvenuta. Di solito silenziosa, in primavera rompe il silenzio con fischi e con il "battere del becco", un rumoroso picchiettio ritmico che fa parte del corteggiamento.',
		en: 'It ranges across Europe, Asia and Africa and happily nests near houses, where it is traditionally welcome. Usually silent, in spring it breaks its silence with hisses and "bill-clattering", a loud rhythmic rattle that is part of courtship.'
	},
	habitat: {
		it: 'Campi aperti, prati umidi e risaie.',
		en: 'Open fields, wet meadows and rice paddies.'
	},
	spotting: {
		it: 'Osservata di recente al gorgo, ma è rara. Guarda i campi arati e il cielo in primavera e a fine estate, quando passa in migrazione.',
		en: 'Recently seen at the gorgo, but it is rare. Check ploughed fields and the sky in spring and late summer, when it passes on migration.'
	},
	rarity: 'rare',
	curiosity: {
		it: 'Nel 1822 in Germania fu trovata una cicogna con una freccia africana nel collo: la Pfeilstorch, la "cicogna-freccia". Fu la prima prova che gli uccelli migrano per migliaia di chilometri, e non vanno in letargo sott’acqua né si trasformano in topi. Fino al 2003 se ne sono contate circa 25.',
		en: 'In 1822 a stork was found in Germany with an African arrow through its neck: the Pfeilstorch, or "arrow stork". It was the first proof that birds migrate thousands of kilometres, rather than sleeping underwater or turning into mice. About 25 more had been recorded by 2003.'
	},
	size: { it: '100–115 cm, apertura alare fino a 2,2 m', en: '100–115 cm, wingspan up to 2.2 m' },
	diet: {
		it: 'Rane, insetti, lombrichi, piccoli roditori',
		en: 'Frogs, insects, earthworms, small rodents'
	},
	activeAt: ['day'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'mar', to: 'apr' },
			{ phase: 'passage', from: 'aug', to: 'sep' }
		]
	},
	sprite: {
		palette: { w: '#f4f1e6', k: '#1f2226', r: '#d8402a' },
		rows: [
			'......ww....',
			'.....wkwrrrr',
			'......ww....',
			'......ww....',
			'.....www....',
			'..kkwwwww...',
			'.kkkkwwwww..',
			'kkkkkkwww...',
			'......r.....',
			'......r.....',
			'.....r.r....',
			'.....r.r....'
		]
	}
})
