/** Italian interface text. Its shape is the contract every other language follows. */
export const it = {
	site: {
		name: 'Casa sul Gorgo',
		place: 'Gorgo della Sposa',
		region: 'Pianura Padana',
		description:
			'Il Gorgo della Sposa, uno specchio d’acqua nella Pianura Padana: la sua natura stagione per stagione e come visitarlo con rispetto.'
	},
	nav: {
		label: 'Principale',
		nature: 'Natura',
		seasons: 'Stagioni',
		visit: 'Visita',
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
		trees: { name: 'Alberi e arbusti', description: 'Salici, pioppi e siepi di campagna.' },
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
	home: {
		title: 'Casa sul Gorgo · Natura e visite al Gorgo della Sposa',
		eyebrow: 'Gorgo della Sposa · Pianura Padana',
		heading: 'Un piccolo stagno, tanta vita.',
		scene:
			'Il gorgo in pixel art isometrica: la casa con l’orto, il pontile, un airone cenerino e una coppia di germani reali nell’acqua, canneti, pioppi e campi intorno',
		lead: 'La pianura, le campagne, uno specchio d’acqua. Tanti animali e piante qui trovano casa: li raccontiamo stagione per stagione, per chi vuole conoscerli e rispettarli.',
		explore: 'Esplora la natura',
		plan: 'Pianifica la visita',
		stats: { species: 'specie', groups: 'gruppi', seasons: 'stagioni' },
		ofTheDay: 'Specie del giorno',
		ofTheDayNote: 'Ogni giorno una specie diversa.',
		now: 'Adesso al gorgo',
		nowEmpty: 'Un periodo tranquillo: osserva le specie presenti tutto l’anno.',
		highlights: 'Da non perdere',
		visitTitle: 'Prima di venire',
		visitPoints: [
			'Alba e tramonto sono i momenti migliori',
			'Porta un binocolo e muoviti piano',
			'Resta sui sentieri, cani al guinzaglio'
		],
		groupsTitle: 'Chi abita il gorgo',
		groupsLead: 'Animali e piante, divisi per gruppo.',
		yearTitle: 'Un anno al gorgo',
		yearLead: 'Ogni stagione ha i suoi protagonisti.',
		aboutTitle: 'Il gorgo',
		about:
			'Viviamo accanto al Gorgo della Sposa e vogliamo prendercene cura. Questo sito raccoglie ciò che vi abita, stagione per stagione, e come visitarlo nel rispetto della natura.'
	},
	nature: {
		title: 'Natura',
		lead: 'Tutte le specie del gorgo. Scegli un mese per vedere chi è attivo.',
		filter: 'Attive in',
		empty: 'Nessuna specie attiva in questo mese per questo gruppo.',
		yearView: 'Calendario del gruppo',
		cards: 'Specie'
	},
	seasonsPage: {
		title: 'Stagioni',
		lead: 'La stagione è l’orologio della natura. Ecco cosa succede al gorgo nel corso dell’anno.',
		current: 'Stagione attuale',
		highlights: 'Protagonisti',
		calendar: 'Calendario completo',
		legend: 'Legenda'
	},
	visit: {
		title: 'Visita',
		lead: 'Come arrivare, quando venire e come comportarsi per lasciare il gorgo com’è.',
		reachTitle: 'Come arrivare',
		reachNote: 'Indirizzo e indicazioni dettagliate in arrivo.',
		reach: {
			car: { title: 'In auto', text: 'Indicazioni e parcheggio in arrivo.' },
			bike: { title: 'In bicicletta', text: 'Percorsi ciclabili consigliati in arrivo.' },
			train: { title: 'In treno o bus', text: 'Stazioni e fermate più vicine in arrivo.' },
			walk: { title: 'A piedi', text: 'Sentieri e punti di accesso in arrivo.' }
		},
		whenTitle: 'Quando venire',
		when: [
			{ title: 'All’alba', text: 'Animali più attivi, luce morbida e pochi visitatori.' },
			{ title: 'Al tramonto', text: 'Aironi in caccia, pipistrelli e il coro delle rane.' },
			{ title: 'Nelle giornate calde', text: 'Libellule, farfalle e rettili al sole.' }
		],
		respectTitle: 'Rispetta la natura',
		respectLead: 'Poche regole semplici, perché il gorgo resti casa di chi ci vive.',
		respect: [
			{ title: 'Resta sui sentieri', text: 'Le rive e i canneti ospitano nidi nascosti.' },
			{ title: 'Mantieni le distanze', text: 'Osserva con il binocolo, senza avvicinarti.' },
			{ title: 'Fai silenzio', text: 'Voci basse: vedrai molti più animali.' },
			{ title: 'Cani al guinzaglio', text: 'Anche il cane più tranquillo spaventa gli animali.' },
			{ title: 'Non dare da mangiare', text: 'Il pane fa male alle anatre e inquina l’acqua.' },
			{ title: 'Non raccogliere', text: 'Fiori, piante, uova e animali restano dove sono.' },
			{
				title: 'Non liberare animali',
				text: 'Pesci e tartarughe domestiche minacciano le specie native.'
			},
			{ title: 'Riporta i rifiuti', text: 'Lascia il gorgo come l’hai trovato, o meglio.' }
		],
		bringTitle: 'Cosa portare',
		bring: [
			'Binocolo',
			'Scarpe comode, anche da fango',
			'Acqua',
			'Repellente per zanzare in estate',
			'Una torcia per le sere di primavera'
		],
		infoTitle: 'Informazioni pratiche',
		info: {
			access: { title: 'Accesso', text: 'Orari e regole di accesso in arrivo.' },
			services: { title: 'Servizi', text: 'Parcheggio e servizi in arrivo.' },
			contact: { title: 'Contatti', text: 'Contatti in arrivo.' }
		}
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

export type Messages = typeof it
