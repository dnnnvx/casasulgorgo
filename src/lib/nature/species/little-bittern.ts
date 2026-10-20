import { animal } from '../types.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Ixobrychus minutus',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Ixobrychus_minutus',
				en: 'https://en.wikipedia.org/wiki/Little_bittern'
			}
		}
	],
	status: 'LC',
	name: { it: 'Tarabusino', en: 'Little bittern' },
	summary: {
		it: 'Il più piccolo dei nostri aironi, nascosto tra le canne.',
		en: 'The smallest of our herons, hidden in the reeds.'
	},
	description: {
		it: 'Solitario e diffidente, resta tra i canneti e la vegetazione fitta, uscendo allo scoperto soprattutto al crepuscolo. Durante la cova si fa vedere più spesso anche di giorno.',
		en: 'Solitary and wary, it keeps to reed beds and dense vegetation, coming out mostly at dusk. While nesting it shows itself more often, even by day.'
	},
	habitat: {
		it: 'Canneti allagati e rive con vegetazione fitta.',
		en: 'Flooded reed beds and densely vegetated banks.'
	},
	spotting: {
		it: 'Da maggio ad agosto, al crepuscolo, quando vola basso e veloce sul canneto. Il canto del maschio, simile a un lieve abbaiare, aiuta a trovarlo.',
		en: 'From May to August, at dusk, as it flies low and fast over the reeds. The male’s call, like a soft bark, helps you find it.'
	},
	curiosity: {
		it: 'Per mimetizzarsi allunga il collo e punta il becco verso l’alto, confondendosi con le canne.',
		en: 'To hide, it stretches its neck and points its bill skywards, melting into the reeds.'
	},
	size: { it: '33–38 cm', en: '33–38 cm' },
	diet: { it: 'Piccoli pesci, rane, insetti', en: 'Small fish, frogs, insects' },
	activeAt: ['dawn', 'dusk'],
	calendar: {
		base: 'absent',
		periods: [
			{ phase: 'passage', from: 'apr', to: 'apr' },
			{ phase: 'breeding', from: 'may', to: 'aug' },
			{ phase: 'passage', from: 'sep', to: 'sep' }
		]
	},
	sprite: {
		palette: { k: '#1f2226', o: '#e0b080', y: '#d8b040', g: '#9ab040', r: '#c8a060' },
		rows: [
			'.....y....',
			'.....y....',
			'....kk....',
			'....kok...',
			'....oo....',
			'...ooo....',
			'..kkoo....',
			'.kkkoor...',
			'.kkoooo...',
			'..kooo....',
			'...g.g....',
			'..g..g....'
		]
	}
})
