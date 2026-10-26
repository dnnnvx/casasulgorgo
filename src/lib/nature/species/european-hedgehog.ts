import { animal } from '../types.ts'

export const species = animal({
	group: 'mammals',
	scientificName: 'Erinaceus europaeus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Erinaceus_europaeus',
				en: 'https://en.wikipedia.org/wiki/Erinaceus_europaeus'
			}
		}
	],
	status: 'LC',
	name: { it: 'Riccio europeo occidentale', en: 'European hedgehog' },
	summary: {
		it: 'Il giardiniere notturno: va a caccia di lumache tra siepi e orti.',
		en: 'The night-time gardener: it hunts snails among hedges and vegetable plots.'
	},
	description: {
		it: 'Mammifero notturno, si muove tra siepi e sottobosco in cerca del suo cibo preferito. Ha circa 6.000 aculei e si appallottola quando si sente in pericolo. Da novembre a marzo va in letargo in un nido di foglie secche.',
		en: 'A nocturnal mammal, it moves through hedgerows and undergrowth in search of its favourite food. It carries around 6,000 spines and rolls into a ball when threatened. From November to March it hibernates in a nest of dry leaves.'
	},
	habitat: {
		it: 'Siepi, orti, prati e cumuli di foglie e legna.',
		en: 'Hedgerows, gardens, meadows and piles of leaves and wood.'
	},
	spotting: {
		it: 'Nelle sere tiepide, ascoltando il fruscio e lo sbuffo tra l’erba. Non dargli latte: gli fa male.',
		en: 'On mild evenings, listening for rustling and snuffling in the grass. Never give it milk: it makes hedgehogs ill.'
	},
	curiosity: {
		it: "Ci vede poco e si orienta soprattutto con gusto e olfatto, grazie a un organo speciale nel palato: l'organo di Jacobson (o vomeronasale).",
		en: 'It sees poorly and finds its way mostly by taste and smell, thanks to a special organ in the roof of its mouth: the Jacobson’s (vomeronasal) organ.'
	},
	size: { it: '20–30 cm', en: '20–30 cm' },
	diet: {
		it: 'Lumache, lombrichi, insetti, coleotteri',
		en: 'Snails, earthworms, insects, beetles'
	},
	activeAt: ['dusk', 'night'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'dormant', from: 'nov', to: 'mar' },
			{ phase: 'breeding', from: 'may', to: 'jul' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/960px-Erinaceus_europaeus_LC0119.jpg',
			alt: {
				it: 'Riccio europeo occidentale (Erinaceus europaeus)',
				en: 'European hedgehog (Erinaceus europaeus)'
			},
			author: 'Jörg Hempel',
			license: 'CC BY-SA 2.0 de',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Erinaceus_europaeus_LC0119.jpg',
			width: 800,
			height: 599
		}
	],
	sprite: {
		palette: { b: '#6a4e34', B: '#a8845c', f: '#d9b98c', k: '#1f2226' },
		rows: [
			'...bBbBb....',
			'..bBbBbBbB..',
			'.bBbBbBbBbf.',
			'bBbBbBbBbfkf',
			'BbBbBbBbfffk',
			'.ffffffffff.',
			'..k...k..k..'
		]
	}
})
