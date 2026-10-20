import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Fulica atra',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Fulica_atra',
				en: 'https://en.wikipedia.org/wiki/Eurasian_coot'
			}
		}
	],
	status: 'LC',
	name: { it: 'Folaga', en: 'Eurasian coot' },
	summary: {
		it: 'Nera, con becco e fronte bianchi: e un pessimo carattere.',
		en: 'Black, with a white bill and forehead, and a terrible temper.'
	},
	description: {
		it: 'A prima vista sembra un’anatra, ma non ha le zampe palmate: le dita hanno lembi di pelle lobati che si aprono come pinne quando nuota. Il corpo è nero fuliggine, la testa lucida e il becco bianco brillante.',
		en: 'At first glance it looks like a duck, but its feet are not webbed: its toes have lobed flaps of skin that open like paddles as it swims. Its body is sooty black, with a glossy head and a bright white bill.'
	},
	habitat: {
		it: 'Acque calme con vegetazione, anche piccoli stagni.',
		en: 'Calm, vegetated water, even small ponds.'
	},
	spotting: {
		it: 'Facile da vedere tutto l’anno, in acqua aperta. In primavera la senti prima ancora di vederla: litiga rumorosamente con chiunque.',
		en: 'Easy to see all year on open water. In spring you hear it before you see it: it loudly picks fights with everyone.'
	},
	rarity: 'common',
	curiosity: {
		it: 'È tra gli uccelli acquatici più litigiosi: in primavera passa gran parte del tempo in battaglie rumorose e feroci contro chiunque si avvicini al suo territorio.',
		en: 'It is one of the most quarrelsome waterbirds: in spring it spends much of its time in noisy, fierce battles with anyone who comes near its territory.'
	},
	size: { it: '36–38 cm', en: '36–38 cm' },
	diet: {
		it: 'Piante acquatiche, semi, piccoli invertebrati',
		en: 'Water plants, seeds, small invertebrates'
	},
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'mar', to: 'jul' }] },
	sprite: {
		palette: { k: '#1f2226', K: '#3a3d42', w: '#f4f1e6', r: '#c0302a', b: '#5aa0c8' },
		rows: [
			'......kkk..',
			'.....kkwww.',
			'.....krkkww',
			'......kk...',
			'.KKKKKkk...',
			'KKKKKKKKKk.',
			'bbbbbbbbbbb'
		]
	}
})
