import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Cuculus canorus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Cuculus_canorus',
				en: 'https://en.wikipedia.org/wiki/Common_cuckoo'
			}
		}
	],
	status: 'LC',
	name: { it: 'Cuculo', en: 'Common cuckoo' },
	summary: {
		it: 'Il suo "cu-cù" annuncia la primavera.',
		en: 'Its "cuck-oo" announces the spring.'
	},
	description: {
		it: "Passa l'inverno nelle foreste tropicali dell'Africa e torna in Europa con la bella stagione: in Italia il suo canto riecheggia all'improvviso tra fine marzo e inizio aprile. Un tempo, quando la migrazione non era compresa, si pensava che d'inverno si trasformasse in uno sparviero.",
		en: 'It spends the winter in tropical African forests and returns to Europe with the fine weather: in Italy its song suddenly rings out between late March and early April. Before migration was understood, people thought it turned into a sparrowhawk in winter.'
	},
	habitat: {
		it: 'Canneti, siepi e margini dei boschi, dove trova i nidi da parassitare.',
		en: 'Reed beds, hedgerows and woodland edges, where it finds nests to parasitise.'
	},
	spotting: {
		it: 'Il canto è familiare, ma vederlo non è facile: è schivo. Guarda in volo, sopra il canneto: sembra un piccolo rapace grigio con la coda lunga.',
		en: 'The song is familiar, but seeing it is not easy: it is shy. Watch for it flying over the reeds, like a small grey hawk with a long tail.'
	},
	curiosity: {
		it: "È l'unico uccello europeo che non alleva i propri piccoli: depone le uova nei nidi di altre specie, come la cannaiola. Il giovane cuculo butta fuori dal nido uova e pulcini legittimi e poi migra da solo in Africa, senza aiuto degli adulti.",
		en: 'It is the only European bird that does not raise its own young: it lays its eggs in other birds’ nests, such as reed warblers’. The young cuckoo pushes the rightful eggs and chicks out of the nest, then migrates to Africa alone, with no help from adults.'
	},
	size: { it: '32–34 cm', en: '32–34 cm' },
	diet: { it: 'Bruchi pelosi, insetti', en: 'Hairy caterpillars, insects' },
	activeAt: ['dawn', 'day'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'mar', to: 'mar' },
			{ phase: 'breeding', from: 'apr', to: 'jul' },
			{ phase: 'passage', from: 'aug', to: 'sep' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Cuckoo_%2851169010335%29.jpg/960px-Cuckoo_%2851169010335%29.jpg',
			alt: { it: 'Cuculo (Cuculus canorus)', en: 'Common cuckoo (Cuculus canorus)' },
			author: 'Andy Morffew from Itchen Abbas, Hampshire, UK',
			license: 'CC BY 2.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cuckoo_(51169010335).jpg',
			width: 800,
			height: 640
		}
	],
	sprite: {
		palette: { g: '#7a8088', w: '#f4f1e6', k: '#3a3d42', y: '#e8b23a' },
		rows: [
			'........ggg..',
			'.......ggyggk',
			'.......ggg...',
			'....ggggww...',
			'..gggggwkw...',
			'gggggggkwk...',
			'.......wkw...',
			'........y.y..'
		]
	}
})
