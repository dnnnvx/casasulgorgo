import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Streptopelia turtur',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Streptopelia_turtur',
				en: 'https://en.wikipedia.org/wiki/European_turtle_dove'
			}
		}
	],
	status: 'VU',
	name: { it: 'Tortora selvatica', en: 'European turtle dove' },
	summary: {
		it: 'Un tubare dolce e ronzante dalle siepi d’estate.',
		en: 'A soft, purring coo from the summer hedgerows.'
	},
	description: {
		it: 'Più piccola e slanciata della tortora dal collare, ha le ali a scaglie arancio e nere e una macchia a righe bianche e nere sul collo. È una migratrice: sverna a sud del Sahara. In Europa è in forte calo per la perdita di siepi e la caccia.',
		en: 'Smaller and slimmer than the collared dove, it has orange-and-black scaled wings and a black-and-white striped patch on the neck. A migrant, it winters south of the Sahara. In Europe it is declining fast through loss of hedgerows and hunting.'
	},
	habitat: {
		it: 'Siepi alte, filari e boschetti vicino ai campi.',
		en: 'Tall hedgerows, tree rows and copses near fields.'
	},
	spotting: {
		it: 'Da maggio ad agosto: ascolta il suo "turrr turrr" ronzante dalle siepi, e cerca la coda scura bordata di bianco quando vola via.',
		en: 'From May to August: listen for its purring "turrr turrr" from the hedges, and look for the dark, white-edged tail as it flies off.'
	},
	size: { it: '26–28 cm', en: '26–28 cm' },
	diet: { it: 'Semi di piante selvatiche', en: 'Wild plant seeds' },
	activeAt: ['dawn', 'day'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'apr', to: 'apr' },
			{ phase: 'breeding', from: 'may', to: 'aug' },
			{ phase: 'passage', from: 'sep', to: 'sep' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Turtle_dove_%28Streptopelia_turtur_turtur%29_Hungary.jpg/960px-Turtle_dove_%28Streptopelia_turtur_turtur%29_Hungary.jpg',
			alt: {
				it: 'Tortora selvatica (Streptopelia turtur)',
				en: 'European turtle dove (Streptopelia turtur)'
			},
			author: 'Charles J. Sharp',
			license: 'CC BY-SA 4.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Turtle_dove_(Streptopelia_turtur_turtur)_Hungary.jpg',
			width: 800,
			height: 800
		}
	],
	sprite: {
		palette: { g: '#9a9aa8', p: '#d8a8a0', o: '#c8803a', k: '#1f2226', w: '#f4f1e6', r: '#c06a6a' },
		rows: [
			'.......ggg..',
			'......ggkgk.',
			'......wkpp..',
			'...ookopp...',
			'..okookpp...',
			'kkoookopp...',
			'w.kkooppp...',
			'.......r.r..'
		]
	}
})
