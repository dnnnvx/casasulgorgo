/** Shared text: navigation, labels, nature vocabulary, layout. */
export const common = {
	site: {
		name: 'Casa sul Gorgo',
		place: 'Gorgo della Sposa',
		region: 'Trecenta (RO), Italy',
		description:
			'Gorgo della Sposa, the largest of the Gorghi of Trecenta in Polesine (Rovigo, Italy): its nature season by season, and how to visit it with respect.'
	},
	nav: {
		label: 'Main',
		nature: 'Nature',
		seasons: 'Seasons',
		visit: 'Visit',
		about: 'About us',
		contact: 'Contact',
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
	rarity: {
		common: 'Common, easy to see',
		uncommon: 'Uncommon',
		rare: 'Rare here'
	},
	species: {
		size: 'Size',
		diet: 'Diet',
		activeAt: 'Active at',
		height: 'Height',
		form: 'Form',
		habitat: 'Habitat',
		spotting: 'Sightings',
		curiosity: 'Did you know?',
		status: 'Conservation status',
		statusSource: 'IUCN Red List',
		year: 'Its year at the gorgo',
		now: 'Now',
		related: 'In the same group',
		seasonal: 'Seasonal',
		resident: 'All year',
		links: 'Read more'
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
