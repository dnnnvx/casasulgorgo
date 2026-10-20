import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Acrocephalus schoenobaenus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Acrocephalus_schoenobaenus',
				en: 'https://en.wikipedia.org/wiki/Sedge_warbler'
			}
		}
	],
	status: 'LC',
	name: { it: 'Forapaglie comune', en: 'Sedge warbler' },
	summary: {
		it: 'Un sopracciglio chiaro e un volo canoro da farfalla.',
		en: 'A pale eyebrow and a butterfly-like song flight.'
	},
	description: {
		it: 'Rispetto agli altri Acrocephalus ha un piumaggio quasi "variopinto": dorso striato e un evidente sopracciglio chiaro. Il maschio canta da posatoi alti o in volo: sale, svolazza per qualche secondo come una farfalla con coda e ali aperte, poi plana verso il basso.',
		en: 'Compared with other Acrocephalus warblers its plumage is almost "colourful": a streaked back and a bold pale eyebrow. The male sings from high perches or in flight: he rises, flutters for a few seconds like a butterfly with tail and wings spread, then glides down.'
	},
	habitat: {
		it: 'Vegetazione palustre alta, carici e margini del canneto.',
		en: 'Tall marsh vegetation, sedges and reed-bed edges.'
	},
	spotting: {
		it: 'Soprattutto di passo in primavera, quando canta con insistenza. Quando non canta si nasconde tra le erbe palustri ed è difficile da vedere.',
		en: 'Mostly on passage in spring, when it sings persistently. When not singing it hides in the marsh vegetation and is hard to see.'
	},
	curiosity: {
		it: 'In primavera canta così tanto da far pensare che nidifichi: ma è probabile solo se lo si vede ancora a giugno.',
		en: 'In spring it sings so much you might think it is nesting: but that is only likely if it is still around in June.'
	},
	size: { it: '11,5–13 cm', en: '11.5–13 cm' },
	diet: { it: 'Insetti, afidi, ragni', en: 'Insects, aphids, spiders' },
	activeAt: ['dawn', 'day', 'dusk'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'apr', to: 'may' },
			{ phase: 'passage', from: 'aug', to: 'sep' }
		]
	},
	sprite: {
		palette: {
			b: '#8a6a42',
			s: '#4a3a26',
			w: '#f0e4c0',
			f: '#efe2c4',
			k: '#1f2226',
			y: '#b8905a',
			g: '#c8b060'
		},
		rows: [
			'......sss...',
			'.....wwkwyy.',
			'.....fbbb...',
			'..bsbsfff...',
			'.bsbsbfff...',
			'bbb..fff....',
			'.....k.k....',
			'gggggggggggg'
		]
	}
})
