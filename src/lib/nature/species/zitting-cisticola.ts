import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Cisticola juncidis',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Cisticola_juncidis',
				en: 'https://en.wikipedia.org/wiki/Zitting_cisticola'
			}
		}
	],
	status: 'LC',
	name: { it: 'Beccamoschino', en: 'Zitting cisticola' },
	summary: {
		it: 'Un piccolo "zip, zip" che rimbalza nel cielo sopra i prati.',
		en: 'A tiny "zip, zip" bouncing across the sky above the meadows.'
	},
	description: {
		it: "È l'unica specie europea di un genere quasi tutto africano. Stanziale, negli inverni rigidi subisce forti perdite, ma le recupera presto: nel sud Europa le femmine possono già covare a 40 giorni di vita.",
		en: 'It is the only European member of a mostly African genus. A resident, it suffers heavy losses in hard winters, but soon recovers: in southern Europe females can breed when just 40 days old.'
	},
	habitat: {
		it: 'Prati, incolti, erbe alte e margini dei campi.',
		en: 'Meadows, rough grassland, tall grass and field edges.'
	},
	spotting: {
		it: 'Da aprile ad agosto, quando il maschio canta in volo ondulato, a ogni sobbalzo un "zip". Il resto del tempo è difficilissimo da scovare.',
		en: 'From April to August, when the male sings in bouncing flight, one "zip" with every dip. The rest of the time it is very hard to find.'
	},
	size: { it: '10–11 cm', en: '10–11 cm' },
	diet: { it: 'Insetti, ragni', en: 'Insects, spiders' },
	activeAt: ['day'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'apr', to: 'aug' }] },
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Zitting_cisticola_2024_04_19_%28cropped%29.jpg/960px-Zitting_cisticola_2024_04_19_%28cropped%29.jpg',
			alt: {
				it: 'Beccamoschino (Cisticola juncidis)',
				en: 'Zitting cisticola (Cisticola juncidis)'
			},
			author: 'Alexis Lours',
			license: 'CC BY 4.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Zitting_cisticola_2024_04_19_(cropped).jpg',
			width: 800,
			height: 605
		}
	],
	sprite: {
		palette: { b: '#b8905a', s: '#4a3a26', f: '#f0e0c0', k: '#1f2226', y: '#c8a070', g: '#c8b060' },
		rows: [
			'.....sbs..',
			'....bbkbyy',
			'....fbbb..',
			'.sbsbfff..',
			'sbsbbfff..',
			'.....k.k..',
			'gggggggggg'
		]
	}
})
