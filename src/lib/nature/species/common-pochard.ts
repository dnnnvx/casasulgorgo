import { animal } from '../types.ts'
import { species as mallard } from './mallard.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Aythya ferina',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Aythya_ferina',
				en: 'https://en.wikipedia.org/wiki/Common_pochard'
			}
		}
	],
	status: 'VU',
	name: { it: 'Moriglione', en: 'Common pochard' },
	summary: {
		it: 'Testa rossa, petto nero, dorso grigio: un’anatra tuffatrice.',
		en: 'Red head, black breast, grey back: a diving duck.'
	},
	description: {
		it: "Ha le zampe molto arretrate, perfette per tuffarsi. Per decollare deve prima prendere la rincorsa correndo sull'acqua, perciò in caso di pericolo preferisce allontanarsi a nuoto. In volo è veloce e si muove in gruppi compatti.",
		en: 'Its legs are set far back, perfect for diving. To take off it must first run along the surface, so when in danger it prefers to swim away. In flight it is fast and moves in tight flocks.'
	},
	habitat: {
		it: 'Acque aperte e profonde abbastanza per immergersi.',
		en: 'Open water deep enough to dive in.'
	},
	spotting: {
		it: "D'inverno, al centro dello specchio d'acqua, spesso insieme alle morette. Guarda chi sparisce sott'acqua e riemerge poco dopo.",
		en: 'In winter, out in the middle of the water, often with tufted ducks. Watch for birds that vanish below and pop back up.'
	},
	curiosity: {
		it: 'Alcuni dei moriglioni che svernano da noi arrivano dalle regioni più remote della Siberia.',
		en: 'Some of the pochards that winter here come from the most remote parts of Siberia.'
	},
	size: { it: '42–49 cm', en: '42–49 cm' },
	diet: {
		it: 'Piante sommerse, semi, piccoli molluschi',
		en: 'Submerged plants, seeds, small molluscs'
	},
	activeAt: ['dawn', 'day', 'dusk', 'night'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'oct', to: 'oct' },
			{ phase: 'wintering', from: 'nov', to: 'feb' },
			{ phase: 'passage', from: 'mar', to: 'mar' }
		]
	},
	sprite: {
		palette: { m: '#9a3a22', k: '#c0302a', y: '#4a4a52', w: '#1f2226', b: '#b8b8b0', B: '#8a8a88' },
		rows: mallard.sprite.rows
	}
})
