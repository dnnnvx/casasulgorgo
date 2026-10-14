import type { Messages } from './it.ts'

export const en: Messages = {
	site: {
		name: 'Casa sul Gorgo',
		place: 'Gorgo della Sposa',
		region: 'Trecenta (RO), Italy',
		description:
			'Gorgo della Sposa, a pond in the Po Valley: its nature season by season, and how to visit it with respect.'
	},
	nav: {
		label: 'Main',
		nature: 'Nature',
		seasons: 'Seasons',
		visit: 'Visit',
		menu: 'Menu',
		language: 'Language',
		skip: 'Skip to content',
		home: 'Home',
		breadcrumb: 'Breadcrumb',
		theme: 'Theme'
	},
	common: {
		soon: 'Coming soon',
		seeAll: 'See all',
		details: 'Learn more',
		species: (n: number) => (n === 1 ? '1 species' : `${n} species`),
		today: 'Today',
		thisMonth: 'This month',
		allYear: 'All year',
		back: 'Back',
		draft: 'Content under review: descriptions and calendars are indicative and will be updated.'
	},
	months: {
		jan: 'January',
		feb: 'February',
		mar: 'March',
		apr: 'April',
		may: 'May',
		jun: 'June',
		jul: 'July',
		aug: 'August',
		sep: 'September',
		oct: 'October',
		nov: 'November',
		dec: 'December'
	},
	monthsShort: {
		jan: 'Jan',
		feb: 'Feb',
		mar: 'Mar',
		apr: 'Apr',
		may: 'May',
		jun: 'Jun',
		jul: 'Jul',
		aug: 'Aug',
		sep: 'Sep',
		oct: 'Oct',
		nov: 'Nov',
		dec: 'Dec'
	},
	seasons: {
		winter: 'Winter',
		spring: 'Spring',
		summer: 'Summer',
		autumn: 'Autumn'
	},
	seasonNotes: {
		winter:
			'The gorgo rests: bare trees, many animals hibernating. Among the dry reeds it is the best time to see herons and ducks.',
		spring:
			'Swallows return, frogs sing at night and the hedges blossom. It is nesting season: move gently.',
		summer:
			'Dragonflies over the water, water lilies in bloom and fireflies in the meadows in June. Come early in the morning or towards evening.',
		autumn:
			'Swallows leave, berries ripen and the reed beds turn golden. Low, warm light, perfect for watching wildlife.'
	},
	themes: { system: 'Automatic', light: 'Light', dark: 'Dark' },
	kinds: { animal: 'Fauna', plant: 'Flora' },
	groups: {
		birds: { name: 'Birds', description: 'Residents, breeders and travellers passing through.' },
		mammals: { name: 'Mammals', description: 'Discreet neighbours, mostly active at night.' },
		amphibians: { name: 'Amphibians', description: 'Frogs and newts: the voice of spring nights.' },
		reptiles: { name: 'Reptiles', description: 'Sun lovers, on the banks and among the stones.' },
		fish: { name: 'Fish', description: 'The hidden life beneath the surface.' },
		insects: { name: 'Insects', description: 'Dragonflies, butterflies and fireflies.' },
		trees: { name: 'Trees', description: 'Willows, poplars and country hedgerows.' },
		'water-plants': {
			name: 'Water plants',
			description: 'Reed beds, water lilies and bank plants.'
		},
		wildflowers: { name: 'Wildflowers', description: 'The colours of meadows and embankments.' }
	},
	phases: {
		animal: {
			present: 'Present',
			breeding: 'Breeding',
			passage: 'Passing through',
			wintering: 'Wintering',
			dormant: 'Hibernating or hidden',
			absent: 'Away'
		},
		plant: {
			leaf: 'Growing',
			flowering: 'Flowering',
			fruiting: 'Fruit and seed',
			dormant: 'Dormant'
		}
	},
	times: { dawn: 'Dawn', day: 'Day', dusk: 'Dusk', night: 'Night' },
	forms: { tree: 'Tree', shrub: 'Shrub', herb: 'Herb', aquatic: 'Aquatic' },
	status: {
		LC: 'Least concern',
		NT: 'Near threatened',
		VU: 'Vulnerable',
		EN: 'Endangered',
		CR: 'Critically endangered',
		DD: 'Data deficient',
		NE: 'Not evaluated'
	},
	species: {
		size: 'Size',
		diet: 'Diet',
		activeAt: 'Active at',
		height: 'Height',
		form: 'Form',
		habitat: 'Habitat',
		spotting: 'How to spot it',
		status: 'Conservation status',
		statusSource: 'IUCN Red List',
		year: 'Its year at the gorgo',
		now: 'Now',
		related: 'In the same group',
		seasonal: 'Seasonal',
		resident: 'All year',
		links: 'Read more'
	},
	home: {
		title: 'Casa sul Gorgo · Nature and visits at Gorgo della Sposa',
		eyebrow: 'Gorgo della Sposa · Trecenta',
		heading: 'A small pond, full of life.',
		scene:
			'The gorgo in isometric pixel art: the house and its vegetable garden, the jetty, a grey heron and a pair of mallards on the water, reeds, poplars and fields all around',
		lead: 'The plain, the fields, a sheet of water. Many animals and plants make their home here: we follow them season by season, for anyone who wants to know and respect them.',
		explore: 'Explore nature',
		plan: 'Plan your visit',
		stats: { species: 'species', groups: 'groups', seasons: 'seasons' },
		ofTheDay: 'Species of the day',
		ofTheDayNote: 'A different species every day.',
		now: 'Now at the gorgo',
		nowEmpty: 'A quiet time: look for the species that stay all year.',
		highlights: 'Don’t miss',
		visitTitle: 'Before you come',
		visitPoints: [
			'Dawn and dusk are the best times',
			'Bring binoculars and move slowly',
			'Stay on the paths, dogs on a lead'
		],
		groupsTitle: 'Who lives at the gorgo',
		groupsLead: 'Animals and plants, by group.',
		yearTitle: 'A year at the gorgo',
		yearLead: 'Every season has its stars.',
		aboutTitle: 'The gorgo',
		about:
			'We live next to Gorgo della Sposa and want to look after it. This site gathers what lives there, season by season, and how to visit it while respecting nature.',
		origin:
			'A gorgo forms where a flood meets an embankment and digs: here it was the Tartaro river, spilling out of its bed, that left a wide hollow along the Argine della Sposa. Today it is fed by rain and springs.',
		facts: [
			{ value: '7 ha', label: 'The largest gorgo in the provinces of Rovigo and Ferrara' },
			{ value: '12 m', label: 'deep in the northern basin, the larger of its two' },
			{ value: '1269', label: 'The year of a grant deed that already mentions it' },
			{ value: 'Natura 2000', label: 'Protected since 1989 as a site of community importance' }
		],
		legendTitle: 'The legend of the bride',
		legend:
			'The story goes that a young woman, promised by her family to a rich man, loved a poor boy instead. On her wedding day she chose the waters of the gorgo over that marriage. On moonless nights, they say, her lament can still be heard.'
	},
	nature: {
		title: 'Nature',
		lead: 'Every species at the gorgo. Pick a month to see who is active.',
		filter: 'Active in',
		empty: 'No species in this group are active in this month.',
		yearView: 'Group calendar',
		cards: 'Species'
	},
	seasonsPage: {
		title: 'Seasons',
		lead: 'Seasons are nature’s clock. Here is what happens at the gorgo through the year.',
		current: 'Current season',
		highlights: 'Stars of the season',
		calendar: 'Full calendar',
		legend: 'Legend'
	},
	visit: {
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
	},
	notFound: {
		title: 'Page not found',
		text: 'This page has flown away. Go back home or explore the nature of the gorgo.',
		home: 'Back home'
	},
	footer: {
		rights: 'Gorgo della Sposa',
		explore: 'Explore',
		languages: 'Languages'
	}
}
