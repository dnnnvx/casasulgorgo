import { animal } from '../types.ts'

export const species = animal({
	group: 'mammals',
	scientificName: 'Mustela nivalis',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Mustela_nivalis',
				en: 'https://en.wikipedia.org/wiki/Least_weasel'
			}
		}
	],
	status: 'LC',
	name: { it: 'Donnola', en: 'Least weasel' },
	summary: {
		it: 'Il carnivoro più piccolo del mondo, sempre affamato.',
		en: "The world's smallest carnivore, and always hungry."
	},
	description: {
		it: "Ciò che le manca in dimensioni lo compensa con l'appetito: ogni giorno mangia un terzo del proprio peso. Dagli uccelli alle arvicole, tutte le piccole creature del sottobosco devono stare in guardia da questa cacciatrice instancabile.",
		en: 'What it lacks in size it makes up for in appetite, eating a third of its own weight every day. From birds to voles, every small creature in the undergrowth must watch out for this tireless hunter.'
	},
	habitat: {
		it: 'Siepi, argini, cumuli di legna e margini dei campi.',
		en: 'Hedgerows, embankments, woodpiles and field edges.'
	},
	spotting: {
		it: 'Di solito è un lampo marrone che attraversa il sentiero. Se resti fermo, a volte si alza sulle zampe posteriori per guardarti.',
		en: 'Usually just a brown streak darting across the path. If you keep still it may stand up on its hind legs to look at you.'
	},
	size: { it: '15–20 cm, più 3–5 cm di coda', en: '15–20 cm, plus a 3–5 cm tail' },
	diet: { it: 'Topi, arvicole, piccoli uccelli, uova', en: 'Mice, voles, small birds, eggs' },
	activeAt: ['day', 'dusk', 'night'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'apr', to: 'jul' }] },
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Mustela_nivalis_-British_Wildlife_Centre-4.jpg/960px-Mustela_nivalis_-British_Wildlife_Centre-4.jpg',
			alt: { it: 'Donnola (Mustela nivalis)', en: 'Least weasel (Mustela nivalis)' },
			author: 'Keven Law',
			license: 'CC BY-SA 2.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Mustela_nivalis_-British_Wildlife_Centre-4.jpg',
			width: 800,
			height: 684
		}
	],
	sprite: {
		palette: { o: '#a8683a', w: '#f4f1e6', k: '#1f2226' },
		rows: ['...........o.', '..........oook', 'ooooooooooooww', '.wwwwwwwwwww..', '..k.k....k.k..']
	}
})
