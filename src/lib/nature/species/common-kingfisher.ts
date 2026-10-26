import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Alcedo atthis',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Alcedo_atthis',
				en: 'https://en.wikipedia.org/wiki/Alcedo_atthis'
			}
		}
	],
	status: 'LC',
	name: { it: 'Martin pescatore', en: 'Common kingfisher' },
	summary: {
		it: "Un lampo blu e arancio a pelo d'acqua. Se lo vedi, è una giornata fortunata.",
		en: "A flash of blue and orange skimming the water. If you see one, it's a lucky day."
	},
	description: {
		it: "Si apposta su un ramo sopra l'acqua e si tuffa a capofitto sui piccoli pesci. Scava il nido in fondo a una galleria lunga fino a un metro, nelle rive di terra.",
		en: 'It perches on a branch above the water and dives headfirst after small fish. It nests at the end of a tunnel up to a metre long, dug into earth banks.'
	},
	habitat: {
		it: 'Acque limpide e calme con rami sporgenti e argini di terra.',
		en: 'Clear, calm water with overhanging branches and earth banks.'
	},
	spotting: {
		it: 'Ascolta il fischio acuto e cerca il volo dritto e basso sull’acqua. Siediti in silenzio vicino a un posatoio.',
		en: 'Listen for its sharp whistle and watch for a fast, low, straight flight over the water. Sit quietly near a perch.'
	},
	size: { it: '16–17 cm', en: '16–17 cm' },
	diet: { it: 'Piccoli pesci, insetti acquatici', en: 'Small fish, water insects' },
	activeAt: ['dawn', 'day'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'apr', to: 'jul' }] },
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Alcedo_atthis_-England-8_%28cropped%29.jpg/960px-Alcedo_atthis_-England-8_%28cropped%29.jpg',
			alt: { it: 'Martin pescatore (Alcedo atthis)', en: 'Common kingfisher (Alcedo atthis)' },
			author: 'Tony Wood',
			license: 'CC BY 2.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alcedo_atthis_-England-8_(cropped).jpg',
			width: 800,
			height: 800
		}
	],
	sprite: {
		palette: { B: '#1f8fc4', b: '#56c1e6', o: '#e8742c', w: '#f4f1e6', k: '#1f2226' },
		rows: [
			'....BBB.....',
			'...BbBBB....',
			'...BBwBkkkk.',
			'...BooBB....',
			'..BBoooB....',
			'.BbBoooo....',
			'BBB.ooo.....',
			'....k.k.....'
		]
	}
})
