import { animal } from '../types.ts'

export const species = animal({
	group: 'mammals',
	scientificName: 'Martes foina',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Martes_foina',
				en: 'https://en.wikipedia.org/wiki/Beech_marten'
			}
		}
	],
	status: 'LC',
	name: { it: 'Faina', en: 'Stone marten' },
	summary: {
		it: 'Veloce e feroce, affronta prede anche cinque volte più grandi.',
		en: 'Fast and fierce, it takes on prey up to five times its size.'
	},
	description: {
		it: 'Sugli alberi o sottoterra, non ci sono molti luoghi in cui questo potente predatore non si avventuri per trovare il prossimo pasto. Ha il pelo bruno scuro e una macchia bianca sulla gola che scende sulle zampe anteriori.',
		en: 'Up trees or underground, there are few places this powerful predator will not go for its next meal. Its fur is dark brown, with a white bib that runs down onto the front legs.'
	},
	habitat: {
		it: 'Siepi, boschetti, fienili e case di campagna.',
		en: 'Hedgerows, copses, barns and farmhouses.'
	},
	spotting: {
		it: 'Di notte, nella luce dei fari o di una torcia. Di giorno cerca i suoi escrementi attorcigliati sui sassi e sui muretti.',
		en: 'At night, caught in headlights or torchlight. By day look for its twisted droppings on stones and low walls.'
	},
	curiosity: {
		it: "Il 29 aprile e il 21 novembre 2016 due faine hanno messo fuori uso il Large Hadron Collider del CERN, l'acceleratore di particelle più potente al mondo, arrampicandosi sui trasformatori elettrici in superficie.",
		en: "On 29 April and 21 November 2016, two stone martens knocked out CERN's Large Hadron Collider, the world's most powerful particle accelerator, by climbing onto its surface electrical transformers."
	},
	size: { it: '40–55 cm, più 22–30 cm di coda', en: '40–55 cm, plus a 22–30 cm tail' },
	diet: {
		it: 'Piccoli mammiferi, uccelli, uova, frutta',
		en: 'Small mammals, birds, eggs, fruit'
	},
	activeAt: ['dusk', 'night'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'mar', to: 'may' }] },
	sprite: {
		palette: { b: '#6a4a32', B: '#4a3222', w: '#f4f1e6', k: '#1f2226' },
		rows: [
			'...........b.b',
			'..........bbbb',
			'..........bkbb',
			'..bbbbbbbbbwwk',
			'BBbbbbbbbbbw..',
			'B...bb..bb.w..',
			'....k...k..k..'
		]
	}
})
