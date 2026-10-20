import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Ardea cinerea',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Ardea_cinerea',
				en: 'https://en.wikipedia.org/wiki/Ardea_cinerea'
			}
		}
	],
	status: 'LC',
	name: { it: 'Airone cenerino', en: 'Grey heron' },
	summary: {
		it: 'Pescatore paziente: immobile tra le canne, aspetta il momento giusto.',
		en: 'A patient fisher: perfectly still among the reeds, waiting for the right moment.'
	},
	description: {
		it: "Il più grande degli aironi europei. Grazie alla sua notevole capacità di adattamento ha imparato a sfruttare la presenza umana. Cacciatore paziente e metodico, trascorre molto tempo da solo vicino all'acqua: resta immobile a lungo, poi cattura topi, rane o pesci con un rapido colpo di becco. In volo tiene il collo ripiegato a S.",
		en: "Europe's largest heron. Highly adaptable, it has learned to make the most of people. A patient, methodical hunter, it spends long periods alone by the water: it stands motionless, then catches mice, frogs or fish with a swift jab of the bill. In flight it folds its neck into an S."
	},
	habitat: {
		it: 'Rive basse, canneti e fossi; nidifica in colonie (garzaie) sugli alberi alti.',
		en: 'Shallow banks, reed beds and ditches; nests in colonies (heronries) in tall trees.'
	},
	spotting: {
		it: "All'alba e al tramonto lungo le sponde. In volo è inconfondibile, con il battito d'ali lento e le lunghe zampe distese. Se ti vede si alza in volo con un verso rauco: osservalo da lontano.",
		en: 'At dawn and dusk along the banks. In flight it is unmistakable, with slow wingbeats and long legs trailing. If it sees you it takes off with a hoarse call: watch from a distance.'
	},
	rarity: 'common',
	curiosity: {
		it: 'È il protagonista del film "Il ragazzo e l\'airone" del premio Oscar Hayao Miyazaki.',
		en: 'It is the title character of "The Boy and the Heron" by Oscar winner Hayao Miyazaki.'
	},
	size: { it: '90–100 cm, apertura alare fino a 1,9 m', en: '90–100 cm, wingspan up to 1.9 m' },
	diet: {
		it: 'Pesci, rane, piccoli mammiferi come topi e talpe, insetti',
		en: 'Fish, frogs, small mammals such as mice and moles, insects'
	},
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'mar', to: 'jun' }] },
	sprite: {
		palette: { k: '#1f2226', w: '#eef0ea', g: '#9aa1a8', G: '#6b737d', y: '#e8b23a', l: '#a8844c' },
		rows: [
			'......kk............',
			'.....wwwkkkk........',
			'yyyyywkwww..........',
			'.....wwww...........',
			'......www...........',
			'.......ww...........',
			'.......ww...........',
			'......ww............',
			'......wkw...........',
			'......wkw...........',
			'......wwgg..........',
			'......wgggggg.......',
			'.....wwggggggGG.....',
			'.....wggggggggGGG...',
			'.....wwgggggggGGGG..',
			'......wggggggGGGGGG.',
			'.......gggggGGGGGkkk',
			'........gggGGGGkk...',
			'..........gGGk......',
			'...........l........',
			'...........ll.......',
			'...........l.l......',
			'...........l.l......',
			'...........l.l......',
			'...........l.l......'
		]
	}
})
