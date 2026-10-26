import { animal } from '../types.ts'
import { species as littleBittern } from './little-bittern.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Botaurus stellaris',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Botaurus_stellaris',
				en: 'https://en.wikipedia.org/wiki/Eurasian_bittern'
			}
		}
	],
	status: 'LC',
	name: { it: 'Tarabuso', en: 'Eurasian bittern' },
	summary: {
		it: 'Il "signore" delle zone umide: rarissimo, e quasi invisibile.',
		en: 'The "lord" of the wetlands: very rare, and nearly invisible.'
	},
	description: {
		it: "Estremamente schivo e mimetico, si muove con grande lentezza tra le canne. Se minacciato allunga collo e becco verso l'alto e diventa un'imitazione perfetta del canneto. In Italia è rigorosamente protetto, nella Lista Rossa nazionale e nella Direttiva Uccelli.",
		en: 'Extremely shy and camouflaged, it moves very slowly through the reeds. When threatened it points neck and bill skywards and becomes a perfect copy of the reed bed. In Italy it is strictly protected, on the national Red List and the EU Birds Directive.'
	},
	habitat: {
		it: 'Grandi canneti allagati.',
		en: 'Large flooded reed beds.'
	},
	spotting: {
		it: "Osservato di recente al gorgo, ma è una vera rarità. Più facile sentirlo che vederlo: il suo canto si ode di notte e all'alba, anche da lontano.",
		en: 'Recently seen at the gorgo, but a true rarity. You are more likely to hear it than see it: its call carries at night and at dawn, even from far away.'
	},
	rarity: 'rare',
	curiosity: {
		it: 'Emette il "booming", un muggito cupo prodotto a becco chiuso facendo passare l’aria nei sacchi aerei. È tra i suoni più tipici delle paludi e si sente fino a 4 km di distanza.',
		en: 'It makes a "boom", a deep foghorn call produced with its bill closed by pushing air through its air sacs. One of the classic sounds of marshes, it carries up to 4 km.'
	},
	size: { it: '70–80 cm', en: '70–80 cm' },
	diet: { it: 'Pesci, rane, anguille, insetti', en: 'Fish, frogs, eels, insects' },
	activeAt: ['dawn', 'dusk', 'night'],
	calendar: { base: 'absent', periods: [{ phase: 'wintering', from: 'nov', to: 'feb' }] },
	photos: [
		{
			src: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Eurasian_Bittern_-_Torrile_-_Italy_4528_%2815409347121%29.jpg',
			alt: { it: 'Tarabuso (Botaurus stellaris)', en: 'Eurasian bittern (Botaurus stellaris)' },
			author: 'Francesco Veronesi from Italy',
			license: 'CC BY-SA 2.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Eurasian_Bittern_-_Torrile_-_Italy_4528_(15409347121).jpg',
			width: 800,
			height: 1200
		}
	],
	sprite: {
		palette: { k: '#4a3a26', o: '#c8a06a', y: '#c8b050', g: '#8a9a40', r: '#8a6a40' },
		rows: littleBittern.sprite.rows
	}
})
