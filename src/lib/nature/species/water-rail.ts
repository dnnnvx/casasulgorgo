import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Rallus aquaticus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Rallus_aquaticus',
				en: 'https://en.wikipedia.org/wiki/Water_rail'
			}
		}
	],
	status: 'LC',
	name: { it: 'Porciglione', en: 'Water rail' },
	summary: {
		it: 'Si sente molto più di quanto si veda: il suo verso ricorda un maialino.',
		en: 'Heard far more than seen: its call sounds like a squealing piglet.'
	},
	description: {
		it: 'Abitante discreto ma piuttosto comune delle zone umide. Ha il dorso bruno e nero, faccia e petto grigio-azzurri, fianchi barrati di bianco e nero e un lungo becco rosso. Il corpo stretto gli permette di scivolare tra le canne.',
		en: 'A discreet but fairly common wetland resident. It is brown and black above, blue-grey on the face and breast, with black-and-white barred flanks and a long red bill. Its narrow body lets it slip between the reeds.'
	},
	habitat: {
		it: 'Canneti fitti, fossi e rive fangose.',
		en: 'Dense reed beds, ditches and muddy banks.'
	},
	spotting: {
		it: "In primavera è quasi invisibile. D'inverno, quando arrivano altri esemplari, guardalo ai margini del canneto, sul fango, al mattino presto.",
		en: 'In spring it is almost invisible. In winter, when more birds arrive, watch the edge of the reeds on the mud, early in the morning.'
	},
	curiosity: {
		it: 'Cacciato per millenni, era già apprezzato dai Romani: la sua sagoma inconfondibile compare negli affreschi di Pompei.',
		en: 'Hunted for thousands of years, it was already prized by the Romans: its unmistakable shape appears in the frescoes of Pompeii.'
	},
	size: { it: '23–28 cm', en: '23–28 cm' },
	diet: {
		it: 'Insetti, lumache, vermi, semi',
		en: 'Insects, snails, worms, seeds'
	},
	activeAt: ['dawn', 'dusk'],
	calendar: {
		base: 'present',
		periods: [
			{ phase: 'breeding', from: 'apr', to: 'jul' },
			{ phase: 'wintering', from: 'nov', to: 'feb' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Water_rail_2022_04_30_01.jpg/960px-Water_rail_2022_04_30_01.jpg',
			alt: { it: 'Porciglione (Rallus aquaticus)', en: 'Water rail (Rallus aquaticus)' },
			author: 'Alexis Lours',
			license: 'CC BY 4.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Water_rail_2022_04_30_01.jpg',
			width: 800,
			height: 527
		}
	],
	sprite: {
		palette: { b: '#7a5a3a', k: '#2a2622', g: '#7a8a9a', r: '#c0302a', w: '#f4f1e6', l: '#c08a6a' },
		rows: [
			'.......bbb...',
			'......bgkgrrr',
			'......ggg....',
			'..bbkbbgg....',
			'.bkbbkbgg....',
			'bbbkwkwkg....',
			'....l..l.....',
			'...l...l.....'
		]
	}
})
