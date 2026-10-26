import { animal } from '../types.ts'
import { species as mallard } from './mallard.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Spatula querquedula',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Spatula_querquedula',
				en: 'https://en.wikipedia.org/wiki/Garganey'
			}
		}
	],
	status: 'LC',
	name: { it: 'Marzaiola', en: 'Garganey' },
	summary: {
		it: 'Torna a marzo dall’Africa e annuncia la primavera.',
		en: 'Back from Africa in March, announcing spring.'
	},
	description: {
		it: 'Tra le anatre del nord del mondo è la migratrice per eccellenza: vola senza scalo sopra il Mediterraneo e il Sahara. Il maschio ha la testa bruna con un largo sopracciglio bianco che arriva fino alla nuca.',
		en: 'Of all northern ducks it is the migrant par excellence, flying non-stop over the Mediterranean and the Sahara. The drake has a brown head with a broad white eyebrow sweeping back to the nape.'
	},
	habitat: {
		it: 'Acque basse con molta vegetazione, prati allagati.',
		en: 'Shallow, well-vegetated water and flooded meadows.'
	},
	spotting: {
		it: 'Tra marzo e aprile, e di nuovo a fine estate, quando passa in migrazione. Cerca il sopracciglio bianco del maschio.',
		en: 'In March and April, and again in late summer, as it passes through. Look for the drake’s white eyebrow.'
	},
	curiosity: {
		it: 'Il nome italiano viene da marzo, il mese in cui ritorna dall’Africa.',
		en: 'Its Italian name, marzaiola, comes from marzo (March), the month it returns from Africa.'
	},
	size: { it: '37–41 cm', en: '37–41 cm' },
	diet: { it: 'Insetti acquatici, semi, piante', en: 'Water insects, seeds, plants' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'mar', to: 'apr' },
			{ phase: 'passage', from: 'aug', to: 'sep' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Garganey%2C_Israel.jpg/960px-Garganey%2C_Israel.jpg',
			alt: { it: 'Marzaiola (Spatula querquedula)', en: 'Garganey (Spatula querquedula)' },
			author: 'YedidyaPopper',
			license: 'CC BY 4.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Garganey,_Israel.jpg',
			width: 800,
			height: 533
		}
	],
	sprite: {
		palette: { m: '#6a4a32', k: '#f4f1e6', y: '#3a3a3a', w: '#6a4a32', b: '#b8b0a0', B: '#8a9aa8' },
		rows: mallard.sprite.rows
	}
})
