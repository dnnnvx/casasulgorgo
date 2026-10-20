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
		it: 'Celebre per la sua astuzia e furtività, questo canide rossastro dalla folta coda si può avvistare sia nei centri abitati che nelle campagne. Adattabile e opportunista, mangia quasi di tutto. In primavera la femmina alleva i cuccioli in una tana, spesso scavata negli argini.',
		en: 'Famous for its cunning and stealth, this reddish, bushy-tailed canid can be seen in towns as well as the countryside. Adaptable and opportunistic, it eats almost anything. In spring the vixen raises her cubs in a den, often dug into the embankments.'
	},
	habitat: {
		it: 'Campi, siepi, argini e margini dei boschi.',
		en: 'Fields, hedgerows, embankments and woodland edges.'
	},
	spotting: {
		it: "Preferisce uscire di notte: cercala al tramonto o all'alba ai margini dei campi, ma con un po' di fortuna la scorgi anche in pieno giorno. Più spesso trovi le sue impronte nel fango, simili a quelle di un piccolo cane.",
		en: 'It prefers to come out at night: look along field edges at dusk or dawn, though with a little luck you may spot one in broad daylight. More often you will find its tracks in the mud, like a small dog’s.'
	},
	curiosity: {
		it: "Le volpi hanno un'estensione vocale di circa 5 ottave, come Mariah Carey. Quella media di un essere umano è di circa 3 ottave e un terzo.",
		en: 'Foxes have a vocal range of about 5 octaves, like Mariah Carey. The average human manages about 3⅓.'
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
