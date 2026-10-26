import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Parus major',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Parus_major',
				en: 'https://en.wikipedia.org/wiki/Great_tit'
			}
		}
	],
	status: 'LC',
	name: { it: 'Cinciallegra', en: 'Great tit' },
	summary: {
		it: 'Guance bianche, cravatta nera e un canto da altalena: "ti-ciù, ti-ciù".',
		en: 'White cheeks, a black tie and a see-saw song: "tea-cher, tea-cher".'
	},
	description: {
		it: 'Petto giallo con una striscia nera al centro (più larga nel maschio), testa nera e guance bianche. Curiosa e acrobatica, si appende a testa in giù ai rametti per cercare insetti. Nidifica nei buchi degli alberi e nelle cassette nido.',
		en: 'Yellow breast with a black stripe down the middle (broader in males), black head and white cheeks. Curious and acrobatic, it hangs upside down from twigs to hunt insects. It nests in tree holes and nest boxes.'
	},
	habitat: {
		it: 'Siepi, alberi sulle rive, giardini e frutteti.',
		en: 'Hedgerows, bankside trees, gardens and orchards.'
	},
	spotting: {
		it: 'Facile da vedere tutto l’anno nelle siepi e sugli alberi. Il canto si sente già a fine inverno.',
		en: 'Easy to see all year in hedges and trees. Its song starts as early as late winter.'
	},
	size: { it: '13,5–15 cm', en: '13.5–15 cm' },
	diet: { it: 'Insetti, bruchi, semi', en: 'Insects, caterpillars, seeds' },
	activeAt: ['dawn', 'day'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'mar', to: 'jun' }] },
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Great_tit_%28Parus_major%29%2C_Parc_du_Rouge-Cloitre%2C_For%C3%AAt_de_Soignes%2C_Brussels_%2826194636951%29.jpg/960px-Great_tit_%28Parus_major%29%2C_Parc_du_Rouge-Cloitre%2C_For%C3%AAt_de_Soignes%2C_Brussels_%2826194636951%29.jpg',
			alt: { it: 'Cinciallegra (Parus major)', en: 'Great tit (Parus major)' },
			author: 'Frank Vassen from Brussels, Belgium',
			license: 'CC BY 2.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Great_tit_(Parus_major),_Parc_du_Rouge-Cloitre,_For%C3%AAt_de_Soignes,_Brussels_(26194636951).jpg',
			width: 800,
			height: 489
		}
	],
	sprite: {
		palette: { k: '#1f2226', w: '#f4f1e6', y: '#e8c830', g: '#7a9a4a', b: '#6a7a9a', l: '#8a6a4a' },
		rows: [
			'......kkk...',
			'.....kwwkkk.',
			'.....kwwk...',
			'..gggykky...',
			'.bggyykyy...',
			'bbb..yky....',
			'.....l.l....',
			'llllllllllll'
		]
	}
})
