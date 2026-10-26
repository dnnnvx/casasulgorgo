import { animal } from '../types.ts'

export const species = animal({
	group: 'reptiles',
	scientificName: 'Natrix helvetica',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Natrix_helvetica',
				en: 'https://en.wikipedia.org/wiki/Natrix_helvetica'
			}
		}
	],
	status: 'LC',
	name: { it: 'Natrice dal collare', en: 'Barred grass snake' },
	summary: {
		it: 'Un serpente innocuo e ottimo nuotatore, con un collare giallo dietro la testa.',
		en: 'A harmless snake and a strong swimmer, with a yellow collar behind its head.'
	},
	description: {
		it: 'Non è velenosa e fugge appena può. Se disturbata finge di essere morta o emette un liquido maleodorante. Caccia rane e pesci nuotando con la testa fuori dall’acqua.',
		en: 'It is not venomous and flees whenever it can. If disturbed it plays dead or releases a foul-smelling liquid. It hunts frogs and fish, swimming with its head above water.'
	},
	habitat: {
		it: 'Rive di stagni e canali, prati umidi, cumuli di vegetazione.',
		en: 'Pond and canal banks, damp meadows, heaps of vegetation.'
	},
	spotting: {
		it: 'Nelle mattine di sole mentre si scalda sulle rive, oppure mentre attraversa il gorgo a nuoto.',
		en: 'On sunny mornings basking on the banks, or swimming across the gorgo.'
	},
	size: { it: '70–120 cm', en: '70–120 cm' },
	diet: { it: 'Rane, rospi, piccoli pesci', en: 'Frogs, toads, small fish' },
	activeAt: ['day'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'dormant', from: 'nov', to: 'feb' },
			{ phase: 'breeding', from: 'apr', to: 'jun' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/BennyTrapp_Natrix_helvetica.jpg/960px-BennyTrapp_Natrix_helvetica.jpg',
			alt: {
				it: 'Natrice dal collare (Natrix helvetica)',
				en: 'Barred grass snake (Natrix helvetica)'
			},
			author: 'Benny Trapp',
			license: 'CC BY-SA 4.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:BennyTrapp_Natrix_helvetica.jpg',
			width: 800,
			height: 532
		}
	],
	sprite: {
		palette: { g: '#5c6b3a', G: '#3f4a28', y: '#e8d36a', k: '#1f2226' },
		rows: [
			'...gg.......gg.',
			'..gGGg.....gykg',
			'.gG..Gg...gGgg.',
			'gG....GgggG....',
			'g......GGG.....'
		]
	}
})
