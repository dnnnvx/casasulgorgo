import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Tachybaptus ruficollis',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Tachybaptus_ruficollis',
				en: 'https://en.wikipedia.org/wiki/Little_grebe'
			}
		}
	],
	status: 'LC',
	name: { it: 'Tuffetto', en: 'Little grebe' },
	summary: {
		it: 'Piccolo e rotondo, sparisce sott’acqua e riemerge metri più in là.',
		en: 'Small and round, it vanishes underwater and pops up metres away.'
	},
	description: {
		it: "D'estate l'adulto ha il dorso scuro, collo, guance e fianchi color ruggine e una macchia gialla brillante alla base del becco. Nuota e si immerge benissimo, inseguendo pesci e invertebrati sotto la superficie. Ha le zampe così arretrate che a terra cammina a fatica, perciò nidifica sull'acqua vicino alla riva.",
		en: 'In summer the adult is dark above, with rusty neck, cheeks and flanks and a bright yellow spot at the base of the bill. A superb swimmer and diver, it chases fish and invertebrates below the surface. Its legs are set so far back that it can barely walk, so it nests on the water close to the bank.'
	},
	habitat: {
		it: 'Acque calme con canneti e vegetazione sommersa.',
		en: 'Calm water with reed beds and submerged plants.'
	},
	spotting: {
		it: 'Cerca una pallina scura che si tuffa di continuo vicino al canneto. In primavera ascolta il suo trillo, simile a una risata.',
		en: 'Look for a small dark ball diving again and again near the reeds. In spring listen for its whinnying, laugh-like trill.'
	},
	curiosity: {
		it: 'I piccoli nuotano appena nati e spesso viaggiano sul dorso dei genitori.',
		en: 'The chicks can swim as soon as they hatch, and often ride on their parents’ backs.'
	},
	size: { it: '25–29 cm', en: '25–29 cm' },
	diet: {
		it: 'Piccoli pesci, insetti acquatici, girini',
		en: 'Small fish, water insects, tadpoles'
	},
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'apr', to: 'jul' }] },
	sprite: {
		palette: { k: '#2a2622', r: '#a8482a', y: '#e8d040', b: '#5a4a3a', w: '#5aa0c8' },
		rows: [
			'......kk..',
			'.....kkkk.',
			'.....rkrky',
			'.....rr...',
			'.bbbbrrb..',
			'bbbbbbbbb.',
			'wwwwwwwwww'
		]
	}
})
