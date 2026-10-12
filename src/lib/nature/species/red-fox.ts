import { animal } from '../types.ts'

export const species = animal({
	group: 'mammals',
	scientificName: 'Vulpes vulpes',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Vulpes_vulpes',
				en: 'https://en.wikipedia.org/wiki/Vulpes_vulpes'
			}
		}
	],
	status: 'LC',
	name: { it: 'Volpe', en: 'Red fox' },
	summary: {
		it: 'Furba e prudente, passa tra i campi al calar della sera.',
		en: 'Clever and cautious, it crosses the fields as evening falls.'
	},
	description: {
		it: 'Adattabile e opportunista, mangia quasi di tutto. In primavera la femmina alleva i cuccioli in una tana, spesso scavata negli argini.',
		en: 'Adaptable and opportunistic, it eats almost anything. In spring the vixen raises her cubs in a den, often dug into the embankments.'
	},
	habitat: {
		it: 'Campi, siepi, argini e margini dei boschi.',
		en: 'Fields, hedgerows, embankments and woodland edges.'
	},
	spotting: {
		it: "Al tramonto o all'alba ai margini dei campi. Più spesso trovi le sue impronte nel fango, simili a quelle di un piccolo cane.",
		en: 'At dusk or dawn along field edges. More often you will find its tracks in the mud, like a small dog’s.'
	},
	size: { it: '60–90 cm, più 30–45 cm di coda', en: '60–90 cm, plus a 30–45 cm tail' },
	diet: {
		it: 'Piccoli roditori, insetti, frutta, uova',
		en: 'Small rodents, insects, fruit, eggs'
	},
	activeAt: ['dawn', 'dusk', 'night'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'mar', to: 'may' }] },
	sprite: {
		palette: { o: '#d4692c', O: '#a84a1c', w: '#f4f1e6', k: '#1f2226' },
		rows: [
			'...........o.o..',
			'..........oooo..',
			'..........okooo.',
			'..oooooooooooowk',
			'OOoooooooooooww.',
			'wOOowwwwwwwoo...',
			'w...oo.o..o.o...',
			'....k..k..k.k...'
		]
	}
})
