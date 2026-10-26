import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Vanellus vanellus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Vanellus_vanellus',
				en: 'https://en.wikipedia.org/wiki/Northern_lapwing'
			}
		}
	],
	status: 'NT',
	name: { it: 'Pavoncella', en: 'Northern lapwing' },
	summary: {
		it: 'Un ciuffo all’insù e un acuto "pi-vi!" che risuona sui campi.',
		en: 'An upswept crest and a shrill "pee-wit!" ringing over the fields.'
	},
	description: {
		it: 'Il più grande della sua famiglia, grande come un piccione. Il dorso brilla di verde, viola e bronzo, il ventre è bianco e la gola nera. Per proteggere il nido si finge ferita e trascina un’ala, allontanando i predatori.',
		en: 'The largest of its family, about the size of a pigeon. Its back shimmers green, purple and bronze, its belly is white and its throat black. To protect its nest it pretends to be injured, dragging a wing to lure predators away.'
	},
	habitat: {
		it: 'Campi arati, prati umidi e rive fangose.',
		en: 'Ploughed fields, wet meadows and muddy shores.'
	},
	spotting: {
		it: "Nei campi aperti intorno al gorgo, soprattutto d'inverno in gruppi. Il volo è ondeggiante, con ali larghe e arrotondate.",
		en: 'In the open fields around the gorgo, especially in winter flocks. Its flight is floppy, on broad, rounded wings.'
	},
	size: { it: '28–31 cm', en: '28–31 cm' },
	diet: { it: 'Insetti, lombrichi, larve', en: 'Insects, earthworms, larvae' },
	activeAt: ['dawn', 'day', 'dusk', 'night'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'breeding', from: 'mar', to: 'jun' },
			{ phase: 'wintering', from: 'nov', to: 'feb' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Northern-Lapwing-Vanellus-vanellus.jpg/960px-Northern-Lapwing-Vanellus-vanellus.jpg',
			alt: { it: 'Pavoncella (Vanellus vanellus)', en: 'Northern lapwing (Vanellus vanellus)' },
			author: 'Andreas Trepte',
			license: 'CC BY-SA 2.5',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Northern-Lapwing-Vanellus-vanellus.jpg',
			width: 800,
			height: 533
		}
	],
	sprite: {
		palette: { k: '#1f2226', g: '#2f6a52', w: '#f4f1e6', o: '#c87a3a', l: '#d48a8a' },
		rows: [
			'k...........',
			'.kk.........',
			'...kkkk.....',
			'...kwkwk....',
			'....kkkk....',
			'.gggggkk....',
			'ggggggww....',
			'.oowwww.....',
			'....l.l.....',
			'....l.l.....'
		]
	}
})
