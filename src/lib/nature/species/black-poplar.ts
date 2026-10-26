import { plant } from '../types.ts'

export const species = plant({
	group: 'trees',
	scientificName: 'Populus nigra',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Populus_nigra',
				en: 'https://en.wikipedia.org/wiki/Populus_nigra'
			}
		}
	],
	form: 'tree',
	name: { it: 'Pioppo nero', en: 'Black poplar' },
	summary: {
		it: 'Il simbolo della pianura: filari alti e stretti che segnano l’orizzonte.',
		en: 'The emblem of the plain: tall, narrow rows marking the horizon.'
	},
	description: {
		it: 'La forma colonnare (pioppo cipressino) è la più riconoscibile nel paesaggio padano. A fine primavera libera semi avvolti in una lanugine bianca che vola come neve.',
		en: 'Its columnar form (the Lombardy poplar) is the most recognisable tree in the Po landscape. In late spring it releases seeds wrapped in white fluff that drifts like snow.'
	},
	habitat: {
		it: 'Golene, argini e filari lungo campi e strade.',
		en: 'Floodplains, embankments and rows along fields and roads.'
	},
	spotting: {
		it: 'Impossibile non vederlo: i filari dietro il gorgo. Ascolta il fruscio delle foglie anche con poco vento.',
		en: 'Impossible to miss: the rows behind the gorgo. Listen to its leaves rustling in even a light breeze.'
	},
	height: { it: '20–30 m', en: '20–30 m' },
	calendar: {
		base: 'leaf',
		periods: [
			{ phase: 'dormant', from: 'nov', to: 'feb' },
			{ phase: 'flowering', from: 'mar', to: 'mar' },
			{ phase: 'fruiting', from: 'apr', to: 'may' }
		]
	},
	photos: [
		{
			src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Populus_nigra_kz1.jpg/960px-Populus_nigra_kz1.jpg',
			alt: { it: 'Pioppo nero (Populus nigra)', en: 'Black poplar (Populus nigra)' },
			author: 'Kenraiz',
			license: 'CC BY-SA 3.0',
			sourceUrl: 'https://commons.wikimedia.org/wiki/File:Populus_nigra_kz1.jpg',
			width: 800,
			height: 408
		}
	],
	sprite: {
		palette: { g: '#4f8040', G: '#355e34', l: '#79a856', t: '#5a4030' },
		rows: [
			'...l...',
			'..lgg..',
			'..lgG..',
			'.llgGG.',
			'.lggGG.',
			'.lggGG.',
			'llggGGG',
			'.lggGG.',
			'.lgggG.',
			'llggGGG',
			'.lggGG.',
			'.lggGG.',
			'..lgG..',
			'...t...',
			'...t...',
			'..ttt..'
		]
	}
})
