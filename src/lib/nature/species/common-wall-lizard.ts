import { animal } from '../types.ts'

export const species = animal({
	group: 'reptiles',
	scientificName: 'Podarcis muralis',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Podarcis_muralis',
				en: 'https://en.wikipedia.org/wiki/Podarcis_muralis'
			}
		}
	],
	status: 'LC',
	name: { it: 'Lucertola muraiola', en: 'Common wall lizard' },
	summary: {
		it: 'Si scalda sui muretti e sparisce in una fessura in un lampo.',
		en: 'It warms up on walls and vanishes into a crack in a flash.'
	},
	description: {
		it: 'Agile e curiosa, caccia piccoli insetti tra sassi e cortecce. Se catturata per la coda può staccarla: ricresce, ma più corta.',
		en: 'Agile and curious, it hunts small insects among stones and bark. If grabbed by the tail it can shed it: it grows back, but shorter.'
	},
	habitat: {
		it: 'Muretti, cascine, cataste di legna e argini assolati.',
		en: 'Walls, farm buildings, woodpiles and sunny embankments.'
	},
	spotting: {
		it: 'Nelle ore calde, su qualsiasi superficie esposta al sole. Fermati: tornerà fuori dopo pochi secondi.',
		en: 'In the warm hours, on any sun-facing surface. Stand still: it will come back out within seconds.'
	},
	size: { it: '15–20 cm, coda compresa', en: '15–20 cm, including the tail' },
	diet: { it: 'Insetti, ragni, piccoli invertebrati', en: 'Insects, spiders, small invertebrates' },
	activeAt: ['day'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'dormant', from: 'dec', to: 'feb' },
			{ phase: 'breeding', from: 'apr', to: 'jun' }
		]
	},
	sprite: {
		palette: { b: '#8a6a48', B: '#5a4430', k: '#1f2226' },
		rows: ['............bbb.', '.....bBbBbBbbkbb', 'BBbbbBbBbBbbbbb.', '....b..b..b..b..']
	}
})
