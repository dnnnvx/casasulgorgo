import { plant } from '../types.ts'

export const species = plant({
	group: 'wildflowers',
	scientificName: 'Lythrum salicaria',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Lythrum_salicaria',
				en: 'https://en.wikipedia.org/wiki/Lythrum_salicaria'
			}
		}
	],
	status: 'LC',
	form: 'herb',
	name: { it: 'Salcerella', en: 'Purple loosestrife' },
	summary: {
		it: 'Spighe viola che colorano le rive in piena estate.',
		en: 'Purple spikes that colour the banks in high summer.'
	},
	description: {
		it: 'Una delle fioriture più vistose delle zone umide. Le farfalle e le api la visitano per tutta l’estate, quando altri fiori scarseggiano.',
		en: 'One of the showiest blooms of the wetlands. Butterflies and bees visit it all summer, when other flowers are scarce.'
	},
	habitat: {
		it: 'Rive umide, fossi e prati allagati.',
		en: 'Damp banks, ditches and flooded meadows.'
	},
	spotting: {
		it: 'Da luglio a settembre lungo il bordo del gorgo, spesso tra le canne.',
		en: 'From July to September along the edge of the gorgo, often among the reeds.'
	},
	height: { it: '50–150 cm', en: '50–150 cm' },
	calendar: {
		base: 'leaf',
		periods: [
			{ phase: 'dormant', from: 'dec', to: 'mar' },
			{ phase: 'flowering', from: 'jul', to: 'sep' },
			{ phase: 'fruiting', from: 'oct', to: 'oct' }
		]
	},
	sprite: {
		palette: { p: '#b04a9a', P: '#d070b8', g: '#5a8a3a' },
		rows: [
			'...p...',
			'..pPp..',
			'..PpP..',
			'.pPpPp.',
			'..pPp..',
			'.PpPpP.',
			'..pPp..',
			'.pPpPp.',
			'..gpg..',
			'.g.g.g.',
			'g..g..g',
			'...g...',
			'...g...'
		]
	}
})
