import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Ardeola ralloides',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Ardeola_ralloides',
				en: 'https://en.wikipedia.org/wiki/Squacco_heron'
			}
		}
	],
	status: 'LC',
	name: { it: 'Sgarza ciuffetto', en: 'Squacco heron' },
	summary: {
		it: 'Color sabbia a terra, bianca come la neve quando vola.',
		en: 'Sand-coloured on the ground, snow-white in flight.'
	},
	description: {
		it: 'Piccolo airone coloniale, poco appariscente quando è posato: ama la copertura di cespugli e canneti. Quando spicca il volo le ali bianche la fanno sembrare una garzetta. Un tempo era perseguitata per le sue piume ornamentali.',
		en: 'A small colonial heron, easily missed when perched: it loves the cover of bushes and reeds. When it takes off its white wings make it look like a little egret. It was once hunted for its ornamental plumes.'
	},
	habitat: {
		it: 'Canneti, cespugli sulle rive e risaie.',
		en: 'Reed beds, bankside bushes and rice paddies.'
	},
	spotting: {
		it: 'È una specie piuttosto rara: in primavera guarda i margini del canneto e aspetta il lampo bianco quando si alza in volo.',
		en: 'It is quite rare: in spring watch the edge of the reeds and wait for the flash of white as it takes off.'
	},
	rarity: 'rare',
	size: { it: '44–47 cm', en: '44–47 cm' },
	diet: { it: 'Insetti, rane, piccoli pesci', en: 'Insects, frogs, small fish' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'apr', to: 'may' },
			{ phase: 'passage', from: 'aug', to: 'sep' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Crabier_chevelu.jpg/960px-Crabier_chevelu.jpg',
			alt: { it: 'Sgarza ciuffetto (Ardeola ralloides)', en: 'Squacco heron (Ardeola ralloides)' },
			author: 'Pierre Dalous',
			license: 'CC BY-SA 3.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Crabier_chevelu.jpg',
			width: 800,
			height: 533
		}
	],
	sprite: {
		palette: { o: '#d8b07a', O: '#b8905a', w: '#f4f1e6', k: '#1f2226', b: '#5a8ab0', y: '#e8b23a' },
		rows: [
			'......oo....',
			'.....okobbk.',
			'....Oooo....',
			'....Ooo.....',
			'...Oooo.....',
			'..wOooo.....',
			'.wwwwoo.....',
			'wwwwww......',
			'.....y......',
			'....y.y.....'
		]
	}
})
