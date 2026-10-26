import { animal } from '../types.ts'
import { species as mallard } from './mallard.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Anas crecca',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Anas_crecca',
				en: 'https://en.wikipedia.org/wiki/Eurasian_teal'
			}
		}
	],
	status: 'LC',
	name: { it: 'Alzavola', en: 'Eurasian teal' },
	summary: {
		it: 'La più piccola anatra europea, e in volo la più agile.',
		en: 'Europe’s smallest duck, and the most agile in flight.'
	},
	description: {
		it: "Si solleva dall'acqua leggera come una piuma e può decollare quasi in verticale. Il maschio ha la testa castana con una larga mascherina verde. I suoi richiami flautati, dolci e rotolanti, servono anche a dare l'allarme.",
		en: 'It lifts off the water light as a feather and can take off almost vertically. The drake has a chestnut head with a broad green mask. Its soft, rolling, fluty calls also serve as an alarm.'
	},
	habitat: {
		it: 'Acque basse con rive fangose e vegetazione.',
		en: 'Shallow water with muddy, vegetated edges.'
	},
	spotting: {
		it: "Da ottobre a marzo, ai margini dell'acqua. In un gruppo di anatre, le alzavole sono sempre le prime a prendere il volo.",
		en: 'From October to March, along the water’s edge. In a mixed flock, teal are always the first to take off.'
	},
	size: { it: '34–38 cm', en: '34–38 cm' },
	diet: { it: 'Semi, piccoli invertebrati', en: 'Seeds, small invertebrates' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'sep', to: 'oct' },
			{ phase: 'wintering', from: 'nov', to: 'feb' },
			{ phase: 'passage', from: 'mar', to: 'apr' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Eurasian_teal_%28Anas_crecca_crecca%29_male_Qingshui.jpg/960px-Eurasian_teal_%28Anas_crecca_crecca%29_male_Qingshui.jpg',
			alt: { it: 'Alzavola (Anas crecca)', en: 'Eurasian teal (Anas crecca)' },
			author: 'Charles J. Sharp',
			license: 'CC BY-SA 4.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Eurasian_teal_(Anas_crecca_crecca)_male_Qingshui.jpg',
			width: 800,
			height: 534
		}
	],
	sprite: {
		palette: { m: '#8a3a22', k: '#2f7a52', y: '#3a3a3a', w: '#8a3a22', b: '#a8a8a0', B: '#e8d090' },
		rows: mallard.sprite.rows
	}
})
