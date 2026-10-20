import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Anas platyrhynchos',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Anas_platyrhynchos',
				en: 'https://en.wikipedia.org/wiki/Anas_platyrhynchos'
			}
		}
	],
	status: 'LC',
	name: { it: 'Germano reale', en: 'Mallard' },
	summary: {
		it: 'Il più chiacchierone del gorgo, quasi sempre in coppia.',
		en: 'The chattiest bird on the gorgo, almost always in pairs.'
	},
	description: {
		it: "L'anatra selvatica più diffusa in Europa e in Italia. Estremamente adattabile, nidifica dalla Siberia fino alle zone subtropicali ed è la forma originaria di molte anatre domestiche: non è raro vedere ibridi con piume in parte bianche o nere. Il maschio ha la testa verde metallico e il collare bianco; la femmina è bruna e mimetica. Si nutre capovolgendosi, immergendo testa e collo per raggiungere le piante del fondo.",
		en: "Europe's and Italy's most widespread wild duck. Extremely adaptable, it breeds from Siberia to the subtropics and is the ancestor of many farmyard ducks: hybrids with patches of white or black are not unusual. The drake has a glossy green head and a white collar; the female is mottled brown for camouflage. It feeds by up-ending, tipping head and neck under to reach plants on the bottom."
	},
	habitat: {
		it: 'Qualsiasi specchio d’acqua tranquillo con rive vegetate.',
		en: 'Any calm water with vegetated banks.'
	},
	spotting: {
		it: 'Facile da vedere tutto l’anno. In primavera cerca le femmine seguite dalla fila di anatroccoli.',
		en: 'Easy to see all year. In spring look for females followed by a line of ducklings.'
	},
	rarity: 'common',
	curiosity: {
		it: 'I maschi non fanno "qua qua": il loro verso è rauco e profondo. Il classico starnazzo è della femmina, che sa anche fare il "decrescendo": da 2 a 10 qua sempre più deboli e brevi.',
		en: 'Drakes do not quack: their call is deep and rasping. The classic quack is the female’s, who also does a "decrescendo": 2 to 10 quacks, each softer and shorter than the last.'
	},
	size: { it: '50–65 cm', en: '50–65 cm' },
	diet: {
		it: 'Piante acquatiche, semi, piccoli invertebrati',
		en: 'Water plants, seeds, small invertebrates'
	},
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'mar', to: 'jun' }] },
	sprite: {
		palette: { m: '#2f7a52', k: '#1f2226', y: '#f0b030', w: '#f4f1e6', b: '#9a6a4a', B: '#8d8a80' },
		rows: [
			'.......mm..',
			'......mmmm.',
			'......mkmyy',
			'.......mm..',
			'.......ww..',
			'.bbbbbbbbb.',
			'bBBBBBbbbbb',
			'.bbbbbbbbb.'
		]
	}
})
