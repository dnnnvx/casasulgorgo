import { animal } from '../types.ts'

export const species = animal({
	group: 'mammals',
	scientificName: 'Pipistrellus kuhlii',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Pipistrellus_kuhlii',
				en: 'https://en.wikipedia.org/wiki/Pipistrellus_kuhlii'
			}
		}
	],
	status: 'LC',
	name: { it: 'Pipistrello albolimbato', en: "Kuhl's pipistrelle" },
	summary: {
		it: 'Piccolissimo cacciatore di zanzare che volteggia sopra l’acqua al tramonto.',
		en: 'A tiny mosquito hunter, looping over the water at sunset.'
	},
	description: {
		it: "Il pipistrello più comune della pianura. Si orienta con l'eco dei suoi ultrasuoni e in una notte può mangiare migliaia di piccoli insetti.",
		en: 'The most common bat of the plain. It finds its way by the echoes of its ultrasound calls and can eat thousands of small insects in a night.'
	},
	habitat: {
		it: 'Si rifugia in fessure di case e cascine; caccia sopra acqua, giardini e lampioni.',
		en: 'Roosts in cracks in houses and farm buildings; hunts over water, gardens and street lights.'
	},
	spotting: {
		it: 'Nelle sere d’estate, subito dopo il tramonto, contro il cielo ancora chiaro sopra il gorgo.',
		en: 'On summer evenings, just after sunset, against the still-bright sky over the gorgo.'
	},
	size: { it: '4–5 cm di corpo, 21–24 cm di apertura alare', en: '4–5 cm body, 21–24 cm wingspan' },
	diet: {
		it: 'Zanzare, falene e altri piccoli insetti',
		en: 'Mosquitoes, moths and other small insects'
	},
	activeAt: ['dusk', 'night'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'dormant', from: 'dec', to: 'feb' },
			{ phase: 'breeding', from: 'jun', to: 'jul' }
		]
	},
	sprite: {
		palette: { k: '#3b2e2a', b: '#6a5246', p: '#c99a8a' },
		rows: [
			'....k..k....',
			'....kkkk....',
			'k..kbppbk..k',
			'kk.kbbbbk.kk',
			'kkkkbbbbkkkk',
			'.kkkbbbbkkk.',
			'..k.kbbk.k..',
			'.....kk.....'
		]
	}
})
