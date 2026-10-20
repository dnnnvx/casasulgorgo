import { animal } from '../types.ts'
import { species as reedWarbler } from './eurasian-reed-warbler.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Cettia cetti',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Cettia_cetti',
				en: 'https://en.wikipedia.org/wiki/Cetti%27s_warbler'
			}
		}
	],
	status: 'LC',
	name: { it: 'Usignolo di fiume', en: "Cetti's warbler" },
	summary: {
		it: 'Un’esplosione di canto dal cespuglio, e poi silenzio.',
		en: 'A sudden burst of song from the bushes, then silence.'
	},
	description: {
		it: 'Esce raramente allo scoperto, ma quasi tutto l’anno tradisce la sua presenza con il canto: inizia all’improvviso forte e chiaro, cala di volume e si interrompe di colpo, com’era iniziato. È bruno rossiccio sopra e grigiastro sotto.',
		en: 'It rarely comes into the open, but gives itself away almost all year with its song: it starts suddenly, loud and clear, fades, then stops as abruptly as it began. It is rufous-brown above and greyish below.'
	},
	habitat: {
		it: 'Cespugli fitti e rovi vicino all’acqua.',
		en: 'Dense bushes and brambles near water.'
	},
	spotting: {
		it: 'Si sente tutto l’anno. A volte sale come uno scricciolo fin quasi in cima a un cespuglio, muove a scatti ali e coda, canta e sparisce di nuovo.',
		en: 'Heard all year. Sometimes it climbs like a wren almost to the top of a bush, flicks its wings and tail, sings and disappears again.'
	},
	size: { it: '13–14 cm', en: '13–14 cm' },
	diet: { it: 'Insetti, ragni, piccole lumache', en: 'Insects, spiders, small snails' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'apr', to: 'jul' }] },
	sprite: {
		palette: { b: '#8a5a3a', f: '#cfc6b8', k: '#1f2226', y: '#6a4a32', g: '#6a8a3a' },
		rows: reedWarbler.sprite.rows
	}
})
