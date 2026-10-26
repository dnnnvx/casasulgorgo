import { animal } from '../types.ts'

export const species = animal({
	group: 'mammals',
	scientificName: 'Micromys minutus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Micromys_minutus',
				en: 'https://en.wikipedia.org/wiki/Eurasian_harvest_mouse'
			}
		}
	],
	status: 'LC',
	name: { it: 'Topolino delle risaie', en: 'Harvest mouse' },
	summary: {
		it: "Uno dei roditori più piccoli d'Italia: pesa meno di una moneta da 1 euro.",
		en: "One of Italy's smallest rodents: it weighs less than a 1 euro coin."
	},
	description: {
		it: 'Anche se il nome lo lega alle coltivazioni, vive in molti ambienti: dai canneti ai margini delle strade, fino alle praterie. Si arrampica sugli steli aiutandosi con la coda prensile e intreccia un nido a palla tra le erbe alte.',
		en: 'Despite its name it lives in many places: from reed beds to roadside verges and grasslands. It climbs stems using its grasping tail and weaves a ball-shaped nest among tall grasses.'
	},
	habitat: {
		it: 'Canneti, erbe alte, margini dei campi e dei fossi.',
		en: 'Reed beds, tall grass, field and ditch edges.'
	},
	spotting: {
		it: 'Difficile da vedere. In autunno e inverno, quando le erbe calano, cerca i suoi nidi a palla intrecciati tra gli steli.',
		en: 'Hard to see. In autumn and winter, when the grass dies back, look for its woven ball nests among the stems.'
	},
	curiosity: {
		it: 'Le palline da tennis usate a Wimbledon vengono riciclate per creare nidi artificiali per i topolini delle risaie.',
		en: 'Used Wimbledon tennis balls are recycled into artificial nests for harvest mice.'
	},
	size: { it: '5–7 cm, più altrettanto di coda', en: '5–7 cm, plus a tail as long' },
	diet: { it: 'Semi, bacche, insetti', en: 'Seeds, berries, insects' },
	activeAt: ['dusk', 'night'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'may', to: 'sep' }] },
	photos: [
		{
			src: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Micromysminutus1.jpg',
			alt: {
				it: 'Topolino delle risaie (Micromys minutus)',
				en: 'Harvest mouse (Micromys minutus)'
			},
			author: 'Hecke',
			license: 'CC BY-SA 3.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Micromysminutus1.jpg',
			width: 800,
			height: 554
		}
	],
	sprite: {
		palette: { o: '#c87a3a', f: '#f0dcb0', k: '#1f2226', g: '#8aa04a' },
		rows: [
			'..g.......o.',
			'..g....oooo.',
			'..g..ooooook',
			'..gooooofff.',
			'..g.k..k....',
			'.og.........',
			'..o.........'
		]
	}
})
