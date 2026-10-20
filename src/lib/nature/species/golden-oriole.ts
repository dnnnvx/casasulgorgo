import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Oriolus oriolus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Oriolus_oriolus',
				en: 'https://en.wikipedia.org/wiki/Eurasian_golden_oriole'
			}
		}
	],
	status: 'LC',
	name: { it: 'Rigogolo', en: 'Golden oriole' },
	summary: {
		it: 'Giallo oro e nero, ma quasi invisibile tra le foglie.',
		en: 'Golden yellow and black, yet nearly invisible among the leaves.'
	},
	description: {
		it: 'Il maschio è giallo brillante con ali e coda nere, la femmina verdastra. Nonostante i colori vive in alto, tra le chiome dei pioppi, e si fa vedere poco. Arriva dall’Africa a fine aprile.',
		en: 'The male is brilliant yellow with black wings and tail, the female greenish. Despite the colours it lives high in the poplar canopy and is rarely seen. It arrives from Africa in late April.'
	},
	habitat: {
		it: 'Chiome di pioppi e salici alti, filari e boschetti.',
		en: 'The canopy of tall poplars and willows, tree rows and copses.'
	},
	spotting: {
		it: 'Da maggio a luglio ascolta il suo fischio flautato, un "uò-dle-uò" liquido, dalle cime degli alberi.',
		en: 'From May to July listen for its fluty whistle, a liquid "weela-weeoo", from the treetops.'
	},
	size: { it: '22–25 cm', en: '22–25 cm' },
	diet: { it: 'Insetti, bruchi, frutta', en: 'Insects, caterpillars, fruit' },
	activeAt: ['dawn', 'day'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'apr', to: 'apr' },
			{ phase: 'breeding', from: 'may', to: 'jul' },
			{ phase: 'passage', from: 'aug', to: 'sep' }
		]
	},
	sprite: {
		palette: { b: '#1f2226', f: '#f0c020', k: '#1f2226', y: '#c0402a', g: '#6a8a3a' },
		rows: [
			'......fff...',
			'.....ffkfyy.',
			'.....ffff...',
			'..bbbbfff...',
			'.bbbbbfff...',
			'bbb..fff....',
			'.....k.k....',
			'gggggggggggg'
		]
	}
})
