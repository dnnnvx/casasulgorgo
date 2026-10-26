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
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/%D0%AF%D1%81%D1%82%D1%80%D0%B5%D0%B1-%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%28Accipiter_nisus%2C_m%29%2C_%D0%98%D0%B7%D0%BC%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B0%D1%80%D0%BA.jpg/960px-%D0%AF%D1%81%D1%82%D1%80%D0%B5%D0%B1-%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%28Accipiter_nisus%2C_m%29%2C_%D0%98%D0%B7%D0%BC%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B0%D1%80%D0%BA.jpg',
			alt: { it: 'Sparviere (Accipiter nisus)', en: 'Eurasian sparrowhawk (Accipiter nisus)' },
			author: 'Dion Art',
			license: 'CC BY-SA 4.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:%D0%AF%D1%81%D1%82%D1%80%D0%B5%D0%B1-%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_(Accipiter_nisus,_m),_%D0%98%D0%B7%D0%BC%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B0%D1%80%D0%BA.jpg',
			width: 800,
			height: 1190
		}
	],
	sprite: {
		palette: { b: '#6a7a8a', f: '#e8b890', k: '#1f2226', y: '#e8c030', l: '#8a6a4a' },
		rows: buzzard.sprite.rows
	}
})
