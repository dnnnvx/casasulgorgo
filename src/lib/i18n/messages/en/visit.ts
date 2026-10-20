import type { Messages } from '../it/index.ts'

export const visit: Messages['visit'] = {
	title: 'Visit',
	lead: 'How to get here, when to come, and how to behave so the gorgo stays as it is.',
	reachTitle: 'Getting here',
	map: {
		label: 'Map of the Gorgo della Sposa',
		openIn: 'Open in:'
	},
	reach: {
		car: {
			title: 'By car',
			routes: [
				{
					from: 'From Verona / Rovigo / A31 motorway',
					steps: [
						'Join the Strada Statale 434 Transpolesana (towards Verona - Rovigo).',
						'Take the exit for Canda or Crocetta.',
						'Follow the signs for Trecenta.',
						'Continue along Via Raffaello Sanzio until you reach the destination, on your right.'
					]
				},
				{
					from: 'From Ferrara / A13 motorway',
					steps: [
						'From the A13, take the Occhiobello exit.',
						'Continue towards Stienta and then Salara.',
						'Stay on the main road to Trecenta: the destination is on your left.'
					]
				}
			]
		},
		bike: {
			title: 'By bike',
			route: 'The water route',
			facts: [
				{ label: 'Type', value: 'Cycle touring (gravel / trekking / MTB)' },
				{ label: 'Surface', value: 'Mixed: quiet roads and gravel tracks' },
				{ label: 'Difficulty', value: 'Easy, flat' }
			],
			stops: [
				{
					place: 'Fratta Polesine · start',
					text: 'Villa Badoer, a Palladio masterpiece. Follow the signs for Canda.'
				},
				{
					place: 'Canda · first stop',
					text: 'Villa Nani-Mocenigo. Take the unpaved sections towards Trecenta.'
				},
				{
					place: 'Trecenta · finish',
					text: 'A few kilometres on quiet gravel roads, between farmland, embankments and clumps of trees. In Trecenta’s centre, set off from the Villa Pepoli (“El Palazzòn”) and follow the Strada dei Gorghi, along the Gorghi di Trecenta, to the Gorgo della Sposa.'
				}
			],
			funFact:
				'Fun fact: Trecenta is the hometown of Luigi Masetti, the first Italian cycle traveller.'
		},
		walk: {
			title: 'On foot',
			text: 'We recommend the last part of the bike route: from the centre of Trecenta, set off from the Villa Pepoli and follow the Strada dei Gorghi, along the Gorghi di Trecenta, to the Gorgo della Sposa.'
		}
	},
	whenTitle: 'When to come',
	when: [
		{ title: 'At dawn', text: 'The most active wildlife, soft light and fresh air.' },
		{ title: 'At dusk', text: 'Hunting herons, bats and the frog chorus.' },
		{ title: 'On warm days', text: 'Dragonflies, butterflies and reptiles in the sun.' }
	],
	respectTitle: 'Respect nature',
	respectLead: 'A few simple rules, so the gorgo stays home to those who live there.',
	respect: [
		{ title: 'Stay on the paths', text: 'Banks and reed beds hide nests.' },
		{ title: 'Keep your distance', text: 'Watch through binoculars, without getting close.' },
		{ title: 'Keep quiet', text: 'Low voices: you will see far more wildlife.' },
		{ title: 'Dogs on a lead', text: 'Even the calmest dog frightens wildlife.' },
		{ title: 'Don’t feed the animals', text: 'Bread harms ducks and pollutes the water.' },
		{
			title: 'Don’t pick anything',
			text: 'Flowers, plants, eggs and animals stay where they are.'
		},
		{
			title: 'Don’t release animals',
			text: 'Pet fish and turtles threaten native species.'
		},
		{ title: 'Take your rubbish home', text: 'Leave the gorgo as you found it, or better.' }
	],
	bringTitle: 'What to bring',
	bring: [
		'Binoculars',
		'Comfortable shoes that can get muddy',
		'Water',
		'Insect repellent in summer',
		'A torch for spring evenings'
	],
	infoTitle: 'Practical information',
	info: {
		access: {
			title: 'Free access',
			text: 'An open area, always accessible: no opening times, no ticket. What matters is how you visit: read the rules above.'
		},
		picnic: {
			title: 'Picnic tables',
			text: 'A few tables for a break outdoors. Take all your rubbish home.'
		},
		hide: {
			title: 'Bird-watching hide',
			text: 'A small wooden hut for watching birds without disturbing them.'
		},
		shop: {
			title: 'Mira Market',
			text: 'A small shop with the essentials, which also makes fresh sandwiches.'
		}
	}
}
