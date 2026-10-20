export const visit = {
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
}
