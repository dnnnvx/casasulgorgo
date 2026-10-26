import { plant } from '../types.ts'

export const species = plant({
	group: 'trees',
	scientificName: 'Crataegus monogyna',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Crataegus_monogyna',
				en: 'https://en.wikipedia.org/wiki/Crataegus_monogyna'
			}
		}
	],
	status: 'LC',
	form: 'shrub',
	name: { it: 'Biancospino', en: 'Hawthorn' },
	summary: {
		it: 'Nuvole di fiori bianchi in primavera, bacche rosse per gli uccelli in autunno.',
		en: 'Clouds of white blossom in spring, red berries for the birds in autumn.'
	},
	description: {
		it: 'Arbusto spinoso tipico delle siepi di campagna. Le spine proteggono i nidi dei piccoli uccelli e le bacche li nutrono per tutto l’inverno.',
		en: 'A thorny shrub typical of country hedgerows. Its thorns protect the nests of small birds and its berries feed them through the winter.'
	},
	habitat: {
		it: 'Siepi, margini dei campi e boschetti.',
		en: 'Hedgerows, field margins and copses.'
	},
	spotting: {
		it: 'Ad aprile, quando è coperto di fiori profumati; in autunno, dai grappoli di bacche rosse.',
		en: 'In April, when it is covered in scented blossom; in autumn, by its clusters of red berries.'
	},
	height: { it: '2–8 m', en: '2–8 m' },
	calendar: {
		base: 'leaf',
		periods: [
			{ phase: 'dormant', from: 'dec', to: 'feb' },
			{ phase: 'flowering', from: 'apr', to: 'may' },
			{ phase: 'fruiting', from: 'sep', to: 'nov' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Hawthorn_fruit.JPG/960px-Hawthorn_fruit.JPG',
			alt: { it: 'Biancospino (Crataegus monogyna)', en: 'Hawthorn (Crataegus monogyna)' },
			author: 'Elstro',
			license: 'CC BY 3.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hawthorn_fruit.JPG',
			width: 800,
			height: 600
		}
	],
	sprite: {
		palette: { g: '#5b8f45', G: '#3c6a37', w: '#f6f3ea', r: '#c0392b', t: '#5a4030' },
		rows: [
			'...gwgg.....',
			'..gggGgwgg..',
			'.wgGgggGggg.',
			'gggrgGwgGgrg',
			'.gGgggggrgG.',
			'..gGgwgGgg..',
			'....tt.t....',
			'.....tt.....',
			'.....t......'
		]
	}
})
