import { animal } from '../types.ts'
import { species as greyHeron } from './grey-heron.ts'

export const species = animal({
	group: 'birds',
	scientificName: 'Ardea purpurea',
	links: [
		{
			label: 'Wikipedia',
			url: {
				it: 'https://it.wikipedia.org/wiki/Ardea_purpurea',
				en: 'https://en.wikipedia.org/wiki/Purple_heron'
			}
		}
	],
	status: 'LC',
	name: { it: 'Airone rosso', en: 'Purple heron' },
	summary: {
		it: 'Il più colorato dei nostri aironi, e il più discreto.',
		en: 'The most colourful of our herons, and the most secretive.'
	},
	description: {
		it: 'Il piumaggio si mimetizza perfettamente tra le canne e spesso passa inosservato finché non si alza in volo. Il collo serpentiforme, il corpo slanciato e le lunghe dita gli permettono di arrampicarsi tra gli steli, aggrappandosi mentre si muove.',
		en: 'Its plumage blends perfectly into the reeds, so it often goes unnoticed until it takes off. Its snake-like neck, slender body and long toes let it clamber through the stems, gripping them as it moves.'
	},
	habitat: {
		it: 'Vasti canneti tranquilli, un habitat sempre più raro in Europa.',
		en: 'Large, undisturbed reed beds, a habitat growing ever rarer in Europe.'
	},
	spotting: {
		it: 'Da aprile a settembre, quando sorvola il canneto con il collo ripiegato e le zampe distese. Più scuro e sottile dell’airone cenerino.',
		en: 'From April to September, as it flies over the reeds with neck folded and legs trailing. Darker and slimmer than the grey heron.'
	},
	size: { it: '78–90 cm', en: '78–90 cm' },
	diet: { it: 'Pesci, rane, insetti', en: 'Fish, frogs, insects' },
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
		palette: { k: '#1f2226', w: '#c87a4a', g: '#8a6a5a', G: '#5a4a52', y: '#e8b23a', l: '#a8844c' },
		rows: greyHeron.sprite.rows
	}
})
