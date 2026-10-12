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
		it: "Il più grande airone d'Italia. Resta immobile per minuti in acqua bassa, poi colpisce con uno scatto fulmineo del collo. In volo tiene il collo ripiegato a S.",
		en: "Italy's largest heron. It stands motionless in shallow water for minutes, then strikes with a lightning-fast neck. In flight it folds its neck into an S."
	},
	habitat: {
		it: 'Rive basse, canneti e fossi; nidifica in colonie (garzaie) sugli alberi alti.',
		en: 'Shallow banks, reed beds and ditches; nests in colonies (heronries) in tall trees.'
	},
	spotting: {
		it: "All'alba e al tramonto lungo le sponde. Se ti vede si alza in volo con un verso rauco: osservalo da lontano.",
		en: 'At dawn and dusk along the banks. If it sees you it takes off with a hoarse call: watch from a distance.'
	},
	size: { it: '90–100 cm, apertura alare fino a 1,9 m', en: '90–100 cm, wingspan up to 1.9 m' },
	diet: {
		it: 'Pesci, rane, piccoli mammiferi, insetti',
		en: 'Fish, frogs, small mammals, insects'
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
