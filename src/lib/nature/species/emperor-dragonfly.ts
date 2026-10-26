import { animal } from '../types.ts'

export const species = animal({
	group: 'insects',
	scientificName: 'Anax imperator',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Anax_imperator',
				en: 'https://en.wikipedia.org/wiki/Anax_imperator'
			}
		}
	],
	status: 'LC',
	name: { it: 'Imperatore', en: 'Emperor dragonfly' },
	summary: {
		it: 'Una delle libellule più grandi d’Europa, azzurra e instancabile.',
		en: "One of Europe's largest dragonflies, bright blue and tireless."
	},
	description: {
		it: 'Il maschio pattuglia il gorgo avanti e indietro, difendendo il suo tratto di riva. Vive fino a due anni sott’acqua come larva predatrice, poi solo qualche settimana in volo.',
		en: 'The male patrols the gorgo back and forth, defending his stretch of bank. It lives up to two years underwater as a predatory larva, then just a few weeks on the wing.'
	},
	habitat: {
		it: 'Stagni soleggiati con piante acquatiche.',
		en: 'Sunny ponds with water plants.'
	},
	spotting: {
		it: 'Nelle ore più calde, da maggio a settembre, sopra l’acqua aperta. Cerca anche le esuvie vuote sulle canne.',
		en: 'In the hottest hours from May to September, over open water. Look for empty larval skins on the reeds too.'
	},
	size: { it: '7–8 cm, apertura alare fino a 11 cm', en: '7–8 cm, wingspan up to 11 cm' },
	diet: { it: 'Insetti catturati in volo', en: 'Insects caught in flight' },
	activeAt: ['day'],
	calendar: {
		base: 'dormant',
		periods: [
			{ phase: 'present', from: 'may', to: 'sep' },
			{ phase: 'breeding', from: 'jun', to: 'aug' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Anax_imperator_qtl2.jpg/960px-Anax_imperator_qtl2.jpg',
			alt: { it: 'Imperatore (Anax imperator)', en: 'Emperor dragonfly (Anax imperator)' },
			author: 'Quartl',
			license: 'CC BY 3.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anax_imperator_qtl2.jpg',
			width: 800,
			height: 613
		}
	],
	sprite: {
		palette: { b: '#3a8ac4', g: '#6aa84f', w: '#d8eef5', k: '#1f2226' },
		rows: [
			'.....kgk.....',
			'.....ggg.....',
			'wwwwwwgwwwwww',
			'.wwwwwgwwwww.',
			'wwwwwwgwwwwww',
			'.wwwwwbwwwww.',
			'......b......',
			'......b......',
			'......b......',
			'......k......'
		]
	}
})
