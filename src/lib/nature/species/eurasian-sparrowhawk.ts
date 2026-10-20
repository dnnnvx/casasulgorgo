import { animal } from '../types.ts'
import { species as buzzard } from './common-buzzard.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Accipiter nisus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Accipiter_nisus',
				en: 'https://en.wikipedia.org/wiki/Eurasian_sparrowhawk'
			}
		}
	],
	status: 'LC',
	name: { it: 'Sparviere', en: 'Eurasian sparrowhawk' },
	summary: {
		it: 'Un agguato fulmineo lungo la siepe: e i passeri spariscono.',
		en: 'A lightning ambush along the hedge, and the sparrows scatter.'
	},
	description: {
		it: 'Piccolo rapace dalle ali corte e la coda lunga, fatto per manovrare tra rami e siepi. Il maschio è grigio-azzurro sopra con il petto barrato di arancio, la femmina più grande e bruna. Caccia di sorpresa, volando basso e veloce.',
		en: 'A small hawk with short wings and a long tail, built to dodge through branches and hedges. The male is blue-grey above with an orange-barred breast; the female is larger and browner. It hunts by surprise, flying low and fast.'
	},
	habitat: {
		it: 'Siepi, boschetti e margini dei campi.',
		en: 'Hedgerows, copses and field edges.'
	},
	spotting: {
		it: "Di solito lo vedi un attimo, mentre sfreccia lungo una siepe. D'inverno segue i gruppi di piccoli uccelli che si rifugiano nelle siepi del gorgo.",
		en: 'Usually just a glimpse as it races along a hedge. In winter it follows the flocks of small birds sheltering in the gorgo’s hedges.'
	},
	size: { it: '28–38 cm', en: '28–38 cm' },
	diet: { it: 'Piccoli uccelli', en: 'Small birds' },
	activeAt: ['dawn', 'day'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'apr', to: 'jul' }] },
	sprite: {
		palette: { b: '#6a7a8a', f: '#e8b890', k: '#1f2226', y: '#e8c030', l: '#8a6a4a' },
		rows: buzzard.sprite.rows
	}
})
