import { plant } from '../types.ts'

export const species = plant({
	group: 'water-plants',
	scientificName: 'Phragmites australis',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Phragmites_australis',
				en: 'https://en.wikipedia.org/wiki/Phragmites_australis'
			}
		}
	],
	status: 'LC',
	form: 'aquatic',
	name: { it: 'Cannuccia di palude', en: 'Common reed' },
	summary: {
		it: 'Il canneto: casa, rifugio e nursery per mezzo gorgo.',
		en: 'The reed bed: home, shelter and nursery for half the gorgo.'
	},
	description: {
		it: 'Forma fitte distese che filtrano l’acqua e ospitano nidi, insetti e anfibi. In inverno i fusti secchi restano in piedi e danno riparo agli animali.',
		en: 'It forms dense stands that filter the water and host nests, insects and amphibians. In winter the dry stems stay upright and give animals shelter.'
	},
	habitat: {
		it: 'Acque basse e rive fangose.',
		en: 'Shallow water and muddy banks.'
	},
	spotting: {
		it: 'Tutto intorno alle rive. A fine estate riconosci i pennacchi bruni che ondeggiano al vento.',
		en: 'All around the banks. In late summer look for the brown plumes swaying in the wind.'
	},
	height: { it: '1–4 m', en: '1–4 m' },
	calendar: {
		base: 'leaf',
		periods: [
			{ phase: 'dormant', from: 'dec', to: 'mar' },
			{ phase: 'flowering', from: 'aug', to: 'sep' },
			{ phase: 'fruiting', from: 'oct', to: 'nov' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Reed_panicle_at_Brodalen_1.jpg/960px-Reed_panicle_at_Brodalen_1.jpg',
			alt: {
				it: 'Cannuccia di palude (Phragmites australis)',
				en: 'Common reed (Phragmites australis)'
			},
			author: 'W.carter',
			license: 'CC0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Reed_panicle_at_Brodalen_1.jpg',
			width: 800,
			height: 634
		}
	],
	sprite: {
		palette: { g: '#7aa34a', G: '#5a8038', p: '#a07850', P: '#c9a77a' },
		rows: [
			'.P.....P...',
			'pPp...pPp..',
			'.p.P...p...',
			'.g.pP..g.P.',
			'.g.p...g.p.',
			'.g.g...g.g.',
			'.gg.g.gg.g.',
			'g.g.gg.g.g.',
			'..g.g..g.gg',
			'.G.g.G.g.g.',
			'.G.G.G.G.G.',
			'.G.G.G.G.G.'
		]
	}
})
