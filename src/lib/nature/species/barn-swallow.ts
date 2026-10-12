import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Hirundo rustica',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Hirundo_rustica',
				en: 'https://en.wikipedia.org/wiki/Hirundo_rustica'
			}
		}
	],
	status: 'LC',
	name: { it: 'Rondine', en: 'Barn swallow' },
	summary: {
		it: "Torna dall'Africa a fine inverno e annuncia la primavera.",
		en: 'Back from Africa at the end of winter, announcing spring.'
	},
	description: {
		it: "Caccia insetti in volo radente sull'acqua e sui campi. Costruisce il nido di fango sotto tetti, stalle e portici, spesso tornando allo stesso ogni anno.",
		en: 'It hunts insects in low, swooping flight over water and fields. It builds a mud nest under roofs, barns and porches, often returning to the same one every year.'
	},
	habitat: {
		it: 'Campagne aperte con edifici rurali e acqua vicina.',
		en: 'Open farmland with rural buildings and water nearby.'
	},
	spotting: {
		it: 'Da aprile a settembre, nelle ore calde, mentre sfiora la superficie del gorgo per bere al volo.',
		en: 'From April to September, in the warm hours, as it skims the gorgo to drink on the wing.'
	},
	size: { it: '17–19 cm, con la coda', en: '17–19 cm, including the tail' },
	diet: { it: 'Insetti catturati in volo', en: 'Insects caught in flight' },
	activeAt: ['day', 'dusk'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'mar', to: 'mar' },
			{ phase: 'breeding', from: 'apr', to: 'aug' },
			{ phase: 'passage', from: 'sep', to: 'oct' }
		]
	},
	sprite: {
		palette: { k: '#1d2a4a', r: '#b8402a', w: '#f4f1e6' },
		rows: [
			'.....kk.....',
			'....krrk....',
			'kk..kwwk..kk',
			'.kkkkwwkkkk.',
			'..kkkwwkkk..',
			'.....kk.....',
			'....k..k....',
			'...k....k...'
		]
	}
})
