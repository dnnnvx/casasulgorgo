import { animal } from '../types.ts'

export const species = animal({
	group: 'mammals',
	scientificName: 'Arvicola amphibius',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Arvicola_amphibius',
				en: 'https://en.wikipedia.org/wiki/European_water_vole'
			}
		}
	],
	status: 'LC',
	name: { it: 'Arvicola acquatica', en: 'Water vole' },
	summary: {
		it: 'Il "ratto d\'acqua": un roditore semi-acquatico, nuotatore esperto.',
		en: 'The "water rat": a semi-aquatic rodent and an expert swimmer.'
	},
	description: {
		it: 'In acqua si confonde facilmente con il ratto, perché ha dimensioni e colore simili. Sulla terraferma si riconosce subito: ha il muso tondo, le orecchie quasi nascoste e la coda più corta.',
		en: 'In the water it is easily mistaken for a rat, being a similar size and colour. On land it is easy to tell apart: a blunt, rounded face, ears almost hidden in the fur and a shorter tail.'
	},
	habitat: {
		it: 'Rive erbose e argini morbidi, dove scava le tane.',
		en: 'Grassy banks and soft embankments, where it digs its burrows.'
	},
	spotting: {
		it: 'Ascolta il "plop" di un tuffo lungo la riva. Cerca piccoli prati brucati vicino ai buchi delle tane e mucchietti di steli tagliati.',
		en: 'Listen for a "plop" as it dives off the bank. Look for small grazed lawns by burrow holes and piles of neatly cut stems.'
	},
	curiosity: {
		it: "D'inverno si rifugia sottoterra e dorme più a lungo. Tappa alcuni ingressi con fango e piante e tiene una stanza per avanzi ed escrementi che, compattandosi, scaldano la tana. Riscaldamento centrale!",
		en: 'In winter it shelters underground and sleeps longer. It plugs some entrances with mud and plants and keeps a room for food scraps and droppings that warm the burrow as they compact. Central heating!'
	},
	size: { it: '14–22 cm, più 8–12 cm di coda', en: '14–22 cm, plus an 8–12 cm tail' },
	diet: { it: 'Erbe, giunchi, radici, cortecce', en: 'Grasses, rushes, roots, bark' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'mar', to: 'sep' }] },
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Water_Vole_on_Boot_Hill_%285592665124%29.jpg/960px-Water_Vole_on_Boot_Hill_%285592665124%29.jpg',
			alt: { it: 'Arvicola acquatica (Arvicola amphibius)', en: 'Water vole (Arvicola amphibius)' },
			author: 'Peter Trimming from Croydon, England',
			license: 'CC BY 2.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Water_Vole_on_Boot_Hill_(5592665124).jpg',
			width: 800,
			height: 553
		}
	],
	sprite: {
		palette: { b: '#6a4e36', B: '#4a3626', k: '#1f2226', w: '#5aa0c8' },
		rows: [
			'.....bbbbb..',
			'...bbbbbbbb.',
			'..bbbbbbbkbb',
			'.BBbbbbbbbbb',
			'BBwwwwwwwwww',
			'wwwwwwwwwwww'
		]
	}
})
