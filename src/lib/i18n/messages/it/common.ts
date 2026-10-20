/** Shared text: navigation, labels, nature vocabulary, layout. */
export const common = {
	site: {
		name: 'Casa sul Gorgo',
		place: 'Gorgo della Sposa',
		region: 'Trecenta (RO), Italia',
		description:
			'Il Gorgo della Sposa, uno specchio d’acqua nella Pianura Padana: la sua natura stagione per stagione e come visitarlo con rispetto.'
	},
	nav: {
		label: 'Principale',
		nature: 'Natura',
		seasons: 'Stagioni',
		visit: 'Visita',
		about: 'Chi siamo',
		contact: 'Contatti',
		menu: 'Menu',
		language: 'Lingua',
		skip: 'Vai al contenuto',
		home: 'Home',
		breadcrumb: 'Percorso',
		theme: 'Tema'
	},
	common: {
		soon: 'In arrivo',
		seeAll: 'Vedi tutto',
		details: 'Scopri di più',
		species: (n: number) => (n === 1 ? '1 specie' : `${n} specie`),
		today: 'Oggi',
		thisMonth: 'Questo mese',
		allYear: 'Tutto l’anno',
		back: 'Indietro',
		draft:
			'Contenuto in fase di verifica: descrizioni e calendari sono indicativi e verranno aggiornati.'
	},
	months: {
		jan: 'Gennaio',
		feb: 'Febbraio',
		mar: 'Marzo',
		apr: 'Aprile',
		may: 'Maggio',
		jun: 'Giugno',
		jul: 'Luglio',
		aug: 'Agosto',
		sep: 'Settembre',
		oct: 'Ottobre',
		nov: 'Novembre',
		dec: 'Dicembre'
	},
	monthsShort: {
		jan: 'Gen',
		feb: 'Feb',
		mar: 'Mar',
		apr: 'Apr',
		may: 'Mag',
		jun: 'Giu',
		jul: 'Lug',
		aug: 'Ago',
		sep: 'Set',
		oct: 'Ott',
		nov: 'Nov',
		dec: 'Dic'
	},
	seasons: {
		winter: 'Inverno',
		spring: 'Primavera',
		summer: 'Estate',
		autumn: 'Autunno'
	},
	seasonNotes: {
		winter:
			'Il gorgo riposa: alberi spogli, molti animali in letargo. Tra le canne secche è il momento migliore per vedere aironi e anatre.',
		spring:
			'Tornano le rondini, le rane cantano di notte e le siepi fioriscono. È la stagione dei nidi: muoviti piano.',
		summer:
			'Libellule sull’acqua, ninfee in fiore e lucciole nei prati a giugno. Vieni al mattino presto o verso sera.',
		autumn:
			'Le rondini ripartono, le bacche maturano e i canneti si fanno dorati. Luce bassa e calda, perfetta per osservare.'
	},
	themes: { system: 'Automatico', light: 'Chiaro', dark: 'Scuro' },
	kinds: { animal: 'Fauna', plant: 'Flora' },
	groups: {
		birds: { name: 'Uccelli', description: 'Residenti, nidificanti e viaggiatori di passaggio.' },
		mammals: { name: 'Mammiferi', description: 'Abitanti discreti, attivi soprattutto di notte.' },
		amphibians: {
			name: 'Anfibi',
			description: 'Rane e tritoni: la voce delle notti di primavera.'
		},
		reptiles: { name: 'Rettili', description: 'Amanti del sole, sulle rive e tra i sassi.' },
		fish: { name: 'Pesci', description: 'La vita nascosta sotto la superficie.' },
		insects: { name: 'Insetti', description: 'Libellule, farfalle e lucciole.' },
		trees: { name: 'Alberi', description: 'Salici, pioppi e siepi di campagna.' },
		'water-plants': {
			name: 'Piante acquatiche',
			description: 'Canneti, ninfee e piante di riva.'
		},
		wildflowers: { name: 'Fiori di campo', description: 'I colori dei prati e degli argini.' }
	},
	phases: {
		animal: {
			present: 'Presente',
			breeding: 'Riproduzione',
			passage: 'Di passaggio',
			wintering: 'Svernante',
			dormant: 'Letargo o nascosto',
			absent: 'Assente'
		},
		plant: {
			leaf: 'Vegetazione',
			flowering: 'Fioritura',
			fruiting: 'Frutti e semi',
			dormant: 'Riposo'
		}
	},
	times: { dawn: 'Alba', day: 'Giorno', dusk: 'Tramonto', night: 'Notte' },
	forms: { tree: 'Albero', shrub: 'Arbusto', herb: 'Erbacea', aquatic: 'Acquatica' },
	status: {
		LC: 'Minor preoccupazione',
		NT: 'Quasi minacciata',
		VU: 'Vulnerabile',
		EN: 'In pericolo',
		CR: 'In pericolo critico',
		DD: 'Dati insufficienti',
		NE: 'Non valutata'
	},
	species: {
		size: 'Dimensioni',
		diet: 'Alimentazione',
		activeAt: 'Quando è attivo',
		height: 'Altezza',
		form: 'Portamento',
		habitat: 'Habitat',
		spotting: 'Come osservarlo',
		status: 'Stato di conservazione',
		statusSource: 'Lista Rossa IUCN',
		year: 'Il suo anno al gorgo',
		now: 'Adesso',
		related: 'Nello stesso gruppo',
		seasonal: 'Stagionale',
		resident: 'Tutto l’anno',
		links: 'Approfondisci'
	},
	notFound: {
		title: 'Pagina non trovata',
		text: 'Questa pagina è volata via. Torna alla home o esplora la natura del gorgo.',
		home: 'Torna alla home'
	},
	footer: {
		rights: 'Gorgo della Sposa',
		explore: 'Esplora',
		languages: 'Lingue'
	}
}
