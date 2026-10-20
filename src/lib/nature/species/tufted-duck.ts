import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Aythya fuligula',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Aythya_fuligula',
				en: 'https://en.wikipedia.org/wiki/Tufted_duck'
			}
		}
	],
	status: 'LC',
	name: { it: 'Moretta', en: 'Tufted duck' },
	summary: {
		it: 'Bianca e nera, con un ciuffo che pende dietro la testa.',
		en: 'Black and white, with a tuft hanging off the back of its head.'
	},
	description: {
		it: 'Anatra tuffatrice: il maschio è nero con i fianchi bianchi e gli occhi gialli, la femmina bruna. La caratteristica più nota è il ciuffo nero sulla nuca, che le vale il nome inglese "tufted duck", anatra col ciuffo.',
		en: 'A diving duck: the drake is black with white flanks and yellow eyes, the female brown. Its best-known feature is the black tuft on the nape, which gives it its English name.'
	},
	habitat: {
		it: 'Acque aperte, anche piccoli specchi d’acqua.',
		en: 'Open water, even small ponds.'
	},
	spotting: {
		it: "D'inverno, in acqua aperta, spesso insieme ai moriglioni. Si tuffa con un piccolo salto in avanti.",
		en: 'In winter, on open water, often with pochards. It dives with a neat little forward jump.'
	},
	size: { it: '40–47 cm', en: '40–47 cm' },
	diet: { it: 'Molluschi, insetti acquatici, piante', en: 'Molluscs, water insects, plants' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: { base: 'absent', periods: [{ phase: 'wintering', from: 'nov', to: 'feb' }] },
	sprite: {
		palette: { k: '#1f2226', y: '#e8d040', b: '#7a8aa0', w: '#f4f1e6' },
		rows: [
			'.......kk..',
			'......kkkk.',
			'.....kkykbb',
			'.....k.kk..',
			'.......kk..',
			'.kkkkkkkkk.',
			'kwwwwwwwkkk',
			'.kkkkkkkkk.'
		]
	}
})
