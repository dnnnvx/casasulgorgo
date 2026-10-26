import { plant } from '../types.ts'

export const species = plant({
	group: 'trees',
	scientificName: 'Salix alba',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Salix_alba',
				en: 'https://en.wikipedia.org/wiki/Salix_alba'
			}
		}
	],
	status: 'LC',
	form: 'tree',
	name: { it: 'Salice bianco', en: 'White willow' },
	summary: {
		it: 'Le foglie argentate tremolano al vento lungo le rive.',
		en: 'Its silvery leaves shimmer in the wind along the banks.'
	},
	description: {
		it: 'Le radici trattengono la terra degli argini e i rami ospitano nidi e insetti. In primavera fiorisce con amenti chiari, preziosi per le prime api.',
		en: 'Its roots hold the earth of the banks together and its branches shelter nests and insects. In spring it flowers with pale catkins, precious food for the first bees.'
	},
	habitat: {
		it: 'Rive di fiumi, fossi e stagni, terreni umidi.',
		en: 'Banks of rivers, ditches and ponds; damp ground.'
	},
	spotting: {
		it: 'Lungo il perimetro del gorgo: riconoscilo dal riflesso argenteo del rovescio delle foglie.',
		en: 'Around the edge of the gorgo: recognise it by the silver undersides of its leaves.'
	},
	height: { it: '10–25 m', en: '10–25 m' },
	calendar: {
		base: 'leaf',
		periods: [
			{ phase: 'dormant', from: 'dec', to: 'feb' },
			{ phase: 'flowering', from: 'mar', to: 'apr' },
			{ phase: 'fruiting', from: 'may', to: 'may' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Salix_alba_leaves.jpg/960px-Salix_alba_leaves.jpg',
			alt: { it: 'Salice bianco (Salix alba)', en: 'White willow (Salix alba)' },
			author: 'MPF',
			license: 'CC BY-SA 3.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Salix_alba_leaves.jpg',
			width: 800,
			height: 600
		}
	],
	sprite: {
		palette: { l: '#a9c08a', L: '#7f9a66', t: '#6a5038' },
		rows: [
			'....llll....',
			'..llLlllll..',
			'.lLllLlLlll.',
			'lllLllllLlLl',
			'lLlllLlllllL',
			'llLlLllLlLll',
			'.LlLllLllLL.',
			'.L.LL.LL.L..',
			'.L..ttt..L..',
			'.....tt.....',
			'.....tt.....',
			'....tttt....'
		]
	}
})
