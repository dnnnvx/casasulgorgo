import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Podiceps cristatus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Podiceps_cristatus',
				en: 'https://en.wikipedia.org/wiki/Great_crested_grebe'
			}
		}
	],
	status: 'LC',
	name: { it: 'Svasso maggiore', en: 'Great crested grebe' },
	summary: {
		it: 'Il ballerino del canneto, celebre per le sue parate nuziali.',
		en: 'The dancer of the reed beds, famous for its courtship displays.'
	},
	description: {
		it: 'In primavera entrambi i sessi sfoggiano guance arancio e ciuffi neri simili a "orecchie". Le coppie restano insieme tutto l’anno e si corteggiano con movimenti sincronizzati e scuotimenti del capo. Nella "danza del pinguino" si sollevano fuori dall’acqua petto contro petto, offrendosi alghe raccolte sul fondo.',
		en: 'In spring both sexes grow orange cheeks and black "ear" tufts. Pairs stay together all year and court with mirrored moves and head-shaking. In the "penguin dance" they rise out of the water breast to breast, offering each other weed fetched from the bottom.'
	},
	habitat: {
		it: 'Specchi d’acqua aperti con canneti sulle rive.',
		en: 'Open water fringed with reed beds.'
	},
	spotting: {
		it: 'Guarda l’acqua aperta tra marzo e maggio, al mattino: con un po’ di fortuna vedrai la danza delle coppie.',
		en: 'Scan the open water between March and May, in the morning: with luck you will see a pair dancing.'
	},
	size: { it: '46–51 cm', en: '46–51 cm' },
	diet: { it: 'Pesci, insetti acquatici', en: 'Fish, water insects' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'mar', to: 'jul' }] },
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Podiceps_cristatus_2_-_Lake_Dulverton.jpg/960px-Podiceps_cristatus_2_-_Lake_Dulverton.jpg',
			alt: {
				it: 'Svasso maggiore (Podiceps cristatus)',
				en: 'Great crested grebe (Podiceps cristatus)'
			},
			author: 'JJ Harrison',
			license: 'CC BY-SA 3.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Podiceps_cristatus_2_-_Lake_Dulverton.jpg',
			width: 800,
			height: 533
		}
	],
	sprite: {
		palette: { k: '#2a2622', o: '#d4692c', w: '#f4f1e6', p: '#e89a9a', g: '#8a7a6a', b: '#5aa0c8' },
		rows: [
			'......kk.....',
			'.....kkkk....',
			'....okwkkpp..',
			'....oow......',
			'......w......',
			'......ww.....',
			'.gggggwwg....',
			'ggggggggggg..',
			'bbbbbbbbbbbbb'
		]
	}
})
