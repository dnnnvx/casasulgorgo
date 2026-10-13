/** Italian interface text. Its shape is the contract every other language follows. */
export const it = {
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
		eyebrow: 'Gorgo della Sposa · Trecenta',
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
			'Viviamo accanto al Gorgo della Sposa e vogliamo prendercene cura. Questo sito raccoglie ciò che vi abita, stagione per stagione, e come visitarlo nel rispetto della natura.',
		origin:
			'Un gorgo nasce dove una piena incontra un argine e scava: qui furono le acque del Tartaro, uscite dal loro letto, a lasciare un’ampia cavità lungo l’Argine della Sposa. Oggi lo alimentano la pioggia e le risorgive.',
		facts: [
			{ value: '7 ha', label: 'Il più grande tra i gorghi delle province di Rovigo e Ferrara' },
			{ value: '12 m', label: 'di profondità nel bacino a nord, il più ampio dei due' },
			{ value: '1269', label: 'L’anno di un atto di concessione che già lo nomina' },
			{ value: 'Natura 2000', label: 'Tutelato dal 1989 come sito di interesse comunitario' }
		],
		legendTitle: 'La leggenda della sposa',
		legend:
			'Si racconta che una giovane, promessa dalla famiglia a un ricco signore, amasse invece un ragazzo povero. Nel giorno delle nozze scelse le acque del gorgo piuttosto che quel matrimonio. Nelle notti senza luna, dicono, se ne sente ancora il lamento.'
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
		map: {
			label: 'Mappa del Gorgo della Sposa',
			openIn: 'Apri in:'
		},
		reach: {
			car: {
				title: 'In auto',
				routes: [
					{
						from: 'Da Verona / Rovigo / Autostrada A31',
						steps: [
							'Immettiti sulla Strada Statale 434 Transpolesana (direzione Verona - Rovigo).',
							'Prendi l’uscita per Canda oppure Crocetta.',
							'Segui le indicazioni stradali per Trecenta.',
							'Procedi lungo Via Raffaello Sanzio fino alla destinazione, che troverai sulla destra.'
						]
					},
					{
						from: 'Da Ferrara / Autostrada A13',
						steps: [
							'Dall’autostrada A13, prendi l’uscita Occhiobello.',
							'Prosegui in direzione Stienta e poi Salara.',
							'Continua lungo la strada principale fino a Trecenta: troverai la destinazione sulla sinistra.'
						]
					}
				]
			},
			bike: {
				title: 'In bicicletta',
				route: 'La via dell’acqua',
				facts: [
					{ label: 'Percorso', value: 'Cicloturistico (gravel / trekking / MTB)' },
					{ label: 'Fondo', value: 'Misto: asfalto a basso traffico e strade bianche' },
					{ label: 'Difficoltà', value: 'Facile, pianeggiante' }
				],
				stops: [
					{
						place: 'Fratta Polesine · partenza',
						text: 'Villa Badoer, capolavoro del Palladio. Segui le indicazioni per Canda.'
					},
					{
						place: 'Canda · prima tappa',
						text: 'Villa Nani-Mocenigo. Imbocca i tratti sterrati in direzione Trecenta.'
					},
					{
						place: 'Trecenta · arrivo',
						text: 'Pochi chilometri su tranquille strade bianche, tra campagna, argini e macchie d’alberi. In centro a Trecenta, parti da Villa Pepoli (“El Palazzòn”) e segui la Strada dei Gorghi, costeggiando i Gorghi di Trecenta fino al Gorgo della Sposa.'
					}
				],
				funFact:
					'Lo sapevi? Trecenta è la città natale di Luigi Masetti, il primo cicloviaggiatore italiano.'
			},
			walk: {
				title: 'A piedi',
				text: 'Ti consigliamo l’ultimo tratto del percorso in bici: dal centro di Trecenta, parti da Villa Pepoli e segui la Strada dei Gorghi, costeggiando i Gorghi di Trecenta fino al Gorgo della Sposa.'
			}
		},
		whenTitle: 'Quando venire',
		when: [
			{ title: 'All’alba', text: 'Animali più attivi, luce morbida e aria più fresca.' },
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
			access: {
				title: 'Accesso libero',
				text: 'Area aperta, sempre accessibile: niente orari né biglietto. Conta il modo in cui si visita: leggi le regole qui sopra.'
			},
			picnic: {
				title: 'Tavoli da picnic',
				text: 'Alcuni tavoli per una pausa all’aperto. Riporta a casa tutti i rifiuti.'
			},
			hide: {
				title: 'Capanno per il birdwatching',
				text: 'Un piccolo capanno in legno per osservare gli uccelli senza disturbarli.'
			},
			shop: {
				title: 'Mira Market',
				text: 'Un piccolo negozio con il necessario, che prepara anche panini freschi.'
			}
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
