import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Anas acuta',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Anas_acuta',
				en: 'https://en.wikipedia.org/wiki/Northern_pintail'
			}
		}
	],
	status: 'LC',
	name: { it: 'Codone', en: 'Northern pintail' },
	summary: {
		it: 'L’anatra più elegante, con una coda lunga come un ago.',
		en: 'The most elegant duck, with a tail as sharp as a needle.'
	},
	description: {
		it: 'Il maschio ha il collo lungo e slanciato, la testa piccola, le ali strette e soprattutto le timoniere centrali allungate, di circa 10 cm, ben visibili sia in acqua che in volo.',
		en: 'The drake has a long, slender neck, a small head, narrow wings and above all its long central tail feathers, about 10 cm, easy to see both on the water and in flight.'
	},
	habitat: {
		it: 'Acque basse aperte, prati allagati.',
		en: 'Open shallow water and flooded meadows.'
	},
	spotting: {
		it: "D'inverno, tra i gruppi di altre anatre: cerca la striscia bianca che sale lungo il collo bruno del maschio.",
		en: 'In winter, among flocks of other ducks: look for the white stripe running up the drake’s brown neck.'
	},
	curiosity: {
		it: 'È una delle specie di uccelli raffigurate più spesso nei dipinti dell’antico Egitto.',
		en: 'It is one of the birds painted most often in ancient Egyptian art.'
	},
	size: { it: '51–66 cm, con la coda', en: '51–66 cm, including the tail' },
	diet: { it: 'Semi, piante acquatiche, invertebrati', en: 'Seeds, water plants, invertebrates' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'oct', to: 'oct' },
			{ phase: 'wintering', from: 'nov', to: 'feb' },
			{ phase: 'passage', from: 'mar', to: 'mar' }
		]
	},
	photos: [
		{
			src: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Northern_Pintails_%28Male_%26_Female%29_I_IMG_0911.jpg',
			alt: { it: 'Codone (Anas acuta)', en: 'Northern pintail (Anas acuta)' },
			author: 'J.M.Garg',
			license: 'CC BY-SA 3.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Northern_Pintails_(Male_%26_Female)_I_IMG_0911.jpg',
			width: 800,
			height: 468
		}
	],
	sprite: {
		palette: { m: '#6a4a32', k: '#1f2226', y: '#6a7a8a', w: '#f4f1e6', b: '#b8b8b0', B: '#6a6a68' },
		rows: [
			'.........mm..',
			'........mmmm.',
			'........mkmyy',
			'.........mw..',
			'.........mw..',
			'.........ww..',
			'kk.bbbbbbbww.',
			'.kkbBBBBbbbbb',
			'...bbbbbbbbb.'
		]
	}
})
