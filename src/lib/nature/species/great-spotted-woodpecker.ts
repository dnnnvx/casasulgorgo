import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Dendrocopos major',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Dendrocopos_major',
				en: 'https://en.wikipedia.org/wiki/Great_spotted_woodpecker'
			}
		}
	],
	status: 'LC',
	name: { it: 'Picchio rosso maggiore', en: 'Great spotted woodpecker' },
	summary: {
		it: 'Il batterista del bosco: tamburella sui rami secchi.',
		en: 'The drummer of the woods, rattling on dead branches.'
	},
	description: {
		it: 'Bianco e nero, con il sottocoda rosso acceso; il maschio ha anche una macchia rossa sulla nuca. Si arrampica sui tronchi appoggiandosi alla coda rigida e scava il nido nel legno.',
		en: 'Black and white with a bright red undertail; the male also has a red patch on the nape. It climbs trunks propped on its stiff tail and chisels its nest out of the wood.'
	},
	habitat: {
		it: 'Pioppi, salici e alberi maturi lungo le rive e le siepi.',
		en: 'Poplars, willows and mature trees along banks and hedgerows.'
	},
	spotting: {
		it: 'A fine inverno e in primavera ascolta il tambureggiare rapido sui rami. Il volo è ondulato, a balzi.',
		en: 'In late winter and spring listen for its fast drumming on branches. Its flight is bounding and undulating.'
	},
	size: { it: '22–23 cm', en: '22–23 cm' },
	diet: {
		it: 'Larve nel legno, insetti, semi, uova',
		en: 'Wood-boring larvae, insects, seeds, eggs'
	},
	activeAt: ['day'],
	calendar: { base: 'present', periods: [{ phase: 'breeding', from: 'apr', to: 'jun' }] },
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Great_spotted_woodpecker_%28Dendrocopos_major%29_male_Drenthe.jpg/960px-Great_spotted_woodpecker_%28Dendrocopos_major%29_male_Drenthe.jpg',
			alt: {
				it: 'Picchio rosso maggiore (Dendrocopos major)',
				en: 'Great spotted woodpecker (Dendrocopos major)'
			},
			author: 'Charles J. Sharp',
			license: 'CC BY-SA 4.0',
			sourceUrl:
				'https://commons.wikimedia.org/wiki/File:Great_spotted_woodpecker_(Dendrocopos_major)_male_Drenthe.jpg',
			width: 800,
			height: 533
		}
	],
	sprite: {
		palette: { k: '#1f2226', w: '#f4f1e6', r: '#c0302a', l: '#8a6a4a' },
		rows: [
			'l....rkk....',
			'l....kwwkk..',
			'l...kwwwk...',
			'lkkwkkww....',
			'lkwkkkww....',
			'lkkwkkww....',
			'l.kkkkrr....',
			'l..kkrr.....',
			'l..kk.......'
		]
	}
})
