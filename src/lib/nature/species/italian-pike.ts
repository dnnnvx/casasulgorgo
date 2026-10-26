import { animal } from '../types.ts'

export const species = animal({
	group: 'fish',
	scientificName: 'Esox cisalpinus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Esox_cisalpinus',
				en: 'https://en.wikipedia.org/wiki/Esox_cisalpinus'
			}
		}
	],
	name: { it: 'Luccio italico', en: 'Italian pike' },
	summary: {
		it: 'Il predatore in agguato tra le piante sommerse.',
		en: 'The predator lying in wait among the underwater plants.'
	},
	description: {
		it: 'Corpo affusolato e muso a becco d’anatra pieno di denti. Resta immobile, mimetizzato, e scatta sulle prede con un’accelerazione improvvisa. È la specie di luccio nativa del nord Italia.',
		en: 'A streamlined body and a duck-bill snout full of teeth. It waits motionless and camouflaged, then lunges at prey with a sudden burst. It is the pike species native to northern Italy.'
	},
	habitat: {
		it: 'Acque limpide e ferme con canneti e vegetazione sommersa.',
		en: 'Clear, still water with reed beds and submerged plants.'
	},
	spotting: {
		it: 'Alla fine dell’inverno, quando si avvicina alle rive basse e allagate per deporre le uova.',
		en: 'At the end of winter, when it moves into shallow, flooded margins to spawn.'
	},
	size: { it: '50–100 cm', en: '50–100 cm' },
	diet: { it: 'Pesci, rane, talvolta piccoli uccelli', en: 'Fish, frogs, sometimes small birds' },
	activeAt: ['dawn', 'day'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'feb', to: 'apr' }] },
	photos: [
		{
			src: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Esox_cisalpinus.jpg',
			alt: { it: 'Luccio italico (Esox cisalpinus)', en: 'Italian pike (Esox cisalpinus)' },
			author: 'Etrusko25',
			license: 'CC BY-SA 3.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Esox_cisalpinus.jpg',
			width: 800,
			height: 494
		}
	],
	sprite: {
		palette: { g: '#5a7a3a', G: '#3d5a28', y: '#d8d08a', w: '#e8e8d8', k: '#1f2226' },
		rows: [
			'.G.....GG.......',
			'GGGgggggggggggg.',
			'GGgygggygggygkgg',
			'GGGgwwwwwwwwwwgg',
			'.G....G...G.....'
		]
	}
})
