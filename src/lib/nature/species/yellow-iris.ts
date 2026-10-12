import { plant } from '../types.ts'

export const species = plant({
	group: 'water-plants',
	scientificName: 'Iris pseudacorus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Iris_pseudacorus',
				en: 'https://en.wikipedia.org/wiki/Iris_pseudacorus'
			}
		}
	],
	status: 'LC',
	form: 'aquatic',
	name: { it: 'Giaggiolo acquatico', en: 'Yellow iris' },
	summary: {
		it: 'Macchie di giallo acceso tra le canne a inizio estate.',
		en: 'Splashes of bright yellow among the reeds in early summer.'
	},
	description: {
		it: 'Le foglie a spada crescono fitte lungo le rive e le consolidano. I fiori sono visitati da bombi e grandi api, gli unici abbastanza forti da raggiungere il nettare.',
		en: 'Its sword-shaped leaves grow thickly along the banks and help hold them together. Bumblebees and large bees visit the flowers, the only ones strong enough to reach the nectar.'
	},
	habitat: {
		it: 'Rive fangose e acque basse.',
		en: 'Muddy banks and shallow water.'
	},
	spotting: {
		it: 'A maggio e giugno, lungo il bordo dell’acqua.',
		en: 'In May and June, along the water’s edge.'
	},
	height: { it: '50–150 cm', en: '50–150 cm' },
	calendar: {
		base: 'leaf',
		periods: [
			{ phase: 'dormant', from: 'dec', to: 'feb' },
			{ phase: 'flowering', from: 'may', to: 'jun' },
			{ phase: 'fruiting', from: 'jul', to: 'sep' }
		]
	},
	sprite: {
		palette: { y: '#f0c830', Y: '#d8a020', k: '#7a5a20', g: '#5a8a3a', G: '#3f6a2a' },
		rows: [
			'...yy...',
			'..yyyy..',
			'yyyYYyyy',
			'.yYkkYy.',
			'..y..y..',
			'..g.Gg..',
			'.Gg.gG..',
			'.Gg.gGg.',
			'Ggg.ggG.',
			'Gg.gg.Gg',
			'g..gg..g'
		]
	}
})
