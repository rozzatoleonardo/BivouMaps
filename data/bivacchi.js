/**
 * ═══════════════════════════════════════════════════════════════
 * DATABASE BIVACCHI — VENETO (CAI) e TRENTINO (SAT)
 * ═══════════════════════════════════════════════════════════════
 * 
 * Dati compilati dai registri ufficiali CAI GR Veneto e SAT Trentino.
 * Le coordinate sono in formato WGS84 (lat/lng).
 * 
 * ⚠️  VERIFICARE SEMPRE le condizioni reali presso:
 *     - Sezioni CAI locali / SAT
 *     - Gestori dei rifugi di riferimento
 *     - Bollettini meteo e valanghe
 * 
 * Fonti:
 *   - https://organizzazione.cai.it/gr-veneto/strutture/rifugi-bivacchi
 *   - https://www.sat.tn.it/elenco-bivacchi/
 * 
 * Ultimo aggiornamento: 2026-09-18
 * ═══════════════════════════════════════════════════════════════
 */

window.BIVACCHI_DATA = [

    // ═══════════════════════════════════════════════════
    //  VENETO — CAI Gruppo Regionale Veneto (43 bivacchi)
    // ═══════════════════════════════════════════════════

    {
        id: 1,
        nome: "Bivacco Fiamme Gialle",
        gruppo_montuoso: "Pale di San Martino",
        coordinate: { lat: 46.28391, lng: 11.82727 },
        quota_m: 3005,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Nevaio stagionale. Portare scorte d'acqua.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: true, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EEA",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Rifugio Rosetta (2581 m)",
            dislivello: "+424 m",
            tempo: "2h 30min",
            segnavia: "CAI 707",
            descrizione: "Dal Rifugio Rosetta si attraversa l'altopiano carsico delle Pale. Percorso su terreno lunare con punti esposti e tratti attrezzati. Necessario set da ferrata per l'ultimo tratto. Orientamento difficile in caso di nebbia."
        }]
    },
    {
        id: 2,
        nome: "Bivacco Tofana (Baracca degli Alpini)",
        gruppo_montuoso: "Tofane",
        coordinate: { lat: 46.56250, lng: 12.06794 },
        quota_m: 2922,
        posti_letto: { numero: 7, tipologia: "Tavolato in legno" },
        stato_acqua: "Assente. Portare tutta l'acqua necessaria.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EEA",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Rifugio Giussani (2580 m)",
            dislivello: "+342 m",
            tempo: "1h 30min",
            segnavia: "Sentiero attrezzato",
            descrizione: "Dal Rifugio Giussani si risale per sentiero attrezzato sulla Tofana di Rozes. Passaggi su roccia e tratti esposti con cavi. Necessario set da ferrata completo. Solo in condizioni meteo stabili."
        }]
    },
    {
        id: 3,
        nome: "Bivacco Tomè Cesare",
        gruppo_montuoso: "Dolomiti Agordine",
        coordinate: { lat: 46.36860, lng: 12.04690 },
        quota_m: 2860,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Nevaio stagionale nelle vicinanze. Portare scorte.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EEA",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Malga Ciapela (1450 m)",
            dislivello: "+1410 m",
            tempo: "5h 30min",
            segnavia: "CAI 610",
            descrizione: "Itinerario lungo e impegnativo. Da Malga Ciapela si risale la Val Ombretta fino alla Forcella Marmolada e oltre. Ultimi tratti su terreno alpinistico. Solo per escursionisti molto esperti."
        }]
    },
    {
        id: 4,
        nome: "Bivacco Fanton Fratelli",
        gruppo_montuoso: "Marmarole",
        coordinate: { lat: 46.50500, lng: 12.28580 },
        quota_m: 2667,
        posti_letto: { numero: 12, tipologia: "Tavolato con materassi e coperte" },
        stato_acqua: "Ruscello di fusione nivale a 15 minuti, attivo da giugno ad agosto.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: true, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Calalzo di Cadore (900 m) via Rif. Chiggiato",
            dislivello: "+1767 m",
            tempo: "6h 00min",
            segnavia: "CAI 260 - 261",
            descrizione: "Itinerario lungo da Calalzo. Si sale al Rifugio Chiggiato (possibile tappa) e poi si prosegue tra ghiaioni e cenge panoramiche fino al bivacco, in un anfiteatro di crode."
        }]
    },
    {
        id: 5,
        nome: "Bivacco Biasin Giancarlo",
        gruppo_montuoso: "Dolomiti Agordine",
        coordinate: { lat: 46.27310, lng: 11.96810 },
        quota_m: 2650,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Nevaio stagionale. Portare scorte.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Passo San Pellegrino (1918 m)",
            dislivello: "+732 m",
            tempo: "3h 00min",
            segnavia: "CAI 628",
            descrizione: "Dal Passo San Pellegrino si segue il sentiero 628 risalendo verso le cime agordine. Percorso su terreno alpino con panorami sulla Marmolada."
        }]
    },
    {
        id: 6,
        nome: "Bivacco Reali Renato",
        gruppo_montuoso: "Pale di San Martino",
        coordinate: { lat: 46.28420, lng: 11.90560 },
        quota_m: 2650,
        posti_letto: { numero: 6, tipologia: "Tavolato in legno" },
        stato_acqua: "Assente. Portare tutta l'acqua necessaria.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Rifugio Rosetta (2581 m)",
            dislivello: "+200 m / -130 m",
            tempo: "1h 30min",
            segnavia: "CAI 707",
            descrizione: "Traversata sull'altopiano delle Pale. Paesaggio lunare e orientamento impegnativo in caso di nebbia. Seguire con attenzione ometti e segnavia."
        }]
    },
    {
        id: 7,
        nome: "Bivacco Ghedini Giuseppe",
        gruppo_montuoso: "Cristallo",
        coordinate: { lat: 46.54140, lng: 12.24720 },
        quota_m: 2601,
        posti_letto: { numero: 6, tipologia: "Tavolato in legno essenziale" },
        stato_acqua: "Assente. Portare scorte.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EEA",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Rifugio Lorenzi (2932 m)",
            dislivello: "-331 m",
            tempo: "1h 30min",
            segnavia: "Sentiero attrezzato",
            descrizione: "Dal Rifugio Lorenzi al Cristallo si scende per sentiero attrezzato. Passaggi esposti con cavi. Necessario set da ferrata."
        }]
    },
    {
        id: 8,
        nome: "Bivacco De Toni Antonio e Tonino",
        gruppo_montuoso: "Civetta - Pelmo",
        coordinate: { lat: 46.40220, lng: 12.16440 },
        quota_m: 2570,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Ruscello stagionale nelle vicinanze.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Palafavera (1520 m)",
            dislivello: "+1050 m",
            tempo: "4h 00min",
            segnavia: "CAI 563",
            descrizione: "Da Palafavera si risale verso i piedi della muraglia del Civetta. Percorso impegnativo per dislivello ma senza difficoltà tecniche particolari."
        }]
    },
    {
        id: 9,
        nome: "Bivacco Moro Aldo",
        gruppo_montuoso: "Pale di San Martino",
        coordinate: { lat: 46.26250, lng: 11.87920 },
        quota_m: 2565,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Nevaio stagionale. Portare scorte.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Passo Rolle (2004 m)",
            dislivello: "+561 m",
            tempo: "2h 30min",
            segnavia: "CAI 756",
            descrizione: "Dal Passo Rolle si sale sull'altopiano delle Pale. Paesaggio carsico unico con doline e campi solcati. Attenzione all'orientamento."
        }]
    },
    {
        id: 10,
        nome: "Bivacco Bontadini Ernesto",
        gruppo_montuoso: "Marmolada",
        coordinate: { lat: 46.49500, lng: 11.86080 },
        quota_m: 2552,
        posti_letto: { numero: 6, tipologia: "Tavolato in legno" },
        stato_acqua: "Ruscello glaciale nelle vicinanze (stagionale).",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Malga Ciapela (1450 m)",
            dislivello: "+1102 m",
            tempo: "4h 00min",
            segnavia: "CAI 610",
            descrizione: "Da Malga Ciapela si risale la Val Ombretta. Percorso lungo ma grandioso con vista sulla parete sud della Marmolada."
        }]
    },
    {
        id: 11,
        nome: "Bivacco Minazio",
        gruppo_montuoso: "Schiara",
        coordinate: { lat: 46.27200, lng: 12.08200 },
        quota_m: 2250,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi e coperte" },
        stato_acqua: "Sorgente a 10 minuti dal bivacco, attiva da giugno a ottobre.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Rifugio 7° Alpini (1502 m)",
            dislivello: "+748 m",
            tempo: "2h 30min",
            segnavia: "CAI 503",
            descrizione: "Dal Rifugio 7° Alpini si risale attraverso bosco di larici e poi prati d'alta quota sotto le pareti della Schiara. Il tratto finale presenta brevi passaggi su terreno esposto."
        }]
    },
    {
        id: 12,
        nome: "Bivacco Dalla Bernardina Ugo",
        gruppo_montuoso: "Schiara - Monti del Sole",
        coordinate: { lat: 46.22822, lng: 12.17999 },
        quota_m: 2320,
        posti_letto: { numero: 6, tipologia: "Tavolato con materassi" },
        stato_acqua: "Sorgente a 5 minuti, attiva nella stagione estiva.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Rifugio 7° Alpini (1502 m)",
            dislivello: "+818 m",
            tempo: "3h 00min",
            segnavia: "CAI 501",
            descrizione: "Dal Rifugio 7° Alpini si prende il sentiero 501 lungo il versante meridionale della Schiara. Il bivacco offre vista sull'intera catena delle Dolomiti Bellunesi."
        }]
    },
    {
        id: 13,
        nome: "Bivacco Brunner",
        gruppo_montuoso: "Marmarole",
        coordinate: { lat: 46.48500, lng: 12.31000 },
        quota_m: 2350,
        posti_letto: { numero: 6, tipologia: "Tavolato in legno con coperte" },
        stato_acqua: "Ruscello stagionale a 5 minuti, attivo da giugno a settembre.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Ponte de la Maura, Vigo di Cadore (1050 m)",
            dislivello: "+1300 m",
            tempo: "4h 30min",
            segnavia: "CAI 269",
            descrizione: "Itinerario lungo attraverso boschi di abete rosso fino ai pascoli superiori. Panorama sulle creste delle Marmarole."
        }]
    },
    {
        id: 14,
        nome: "Bivacco Bocco Sandro / Zago Marco",
        gruppo_montuoso: "Schiara",
        coordinate: { lat: 46.23100, lng: 12.19069 },
        quota_m: 2266,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Sorgente nelle vicinanze (stagionale).",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Val Cordevole (700 m)",
            dislivello: "+1566 m",
            tempo: "5h 00min",
            segnavia: "CAI 505",
            descrizione: "Salita impegnativa dalla Val Cordevole attraverso i boschi delle Dolomiti Bellunesi. Dislivello notevole ma sentiero ben segnato."
        }]
    },
    {
        id: 15,
        nome: "Bivacco Tiziano",
        gruppo_montuoso: "Marmarole",
        coordinate: { lat: 46.49000, lng: 12.29000 },
        quota_m: 2217,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi e coperte" },
        stato_acqua: "Sorgente perenne a 3 minuti dal bivacco.",
        dotazioni: { stufa: true, radio_emergenza: true, fotovoltaico: true, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "San Vito di Cadore (1011 m)",
            dislivello: "+1206 m",
            tempo: "4h 00min",
            segnavia: "CAI 254",
            descrizione: "Da San Vito si risale la Val d'Oten. Dopo il limite del bosco il panorama si apre sulle guglie delle Marmarole. Bivacco ben attrezzato e accogliente."
        }]
    },
    {
        id: 16,
        nome: "Bivacco Piovan Franco",
        gruppo_montuoso: "Comelico",
        coordinate: { lat: 46.61470, lng: 12.42727 },
        quota_m: 2070,
        posti_letto: { numero: 5, tipologia: "Tavolato in legno" },
        stato_acqua: "Ruscello nelle vicinanze.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Padola (1215 m)",
            dislivello: "+855 m",
            tempo: "3h 00min",
            segnavia: "CAI 173",
            descrizione: "Da Padola in Comelico si sale attraverso boschi e pascoli alpini fino al bivacco in posizione panoramica sui Cadin dei Bagni."
        }]
    },
    {
        id: 17,
        nome: "Bivacco Toffolon Alessio",
        gruppo_montuoso: "Prealpi Venete - Alpago",
        coordinate: { lat: 46.17647, lng: 12.45218 },
        quota_m: 1993,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Sorgente a 15 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "E",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Alpago (800 m)",
            dislivello: "+1193 m",
            tempo: "3h 30min",
            segnavia: "CAI 924",
            descrizione: "Dalla zona dell'Alpago si risale per boschi e prati fino al bivacco nelle Prealpi Bellunesi. Percorso per escursionisti."
        }]
    },
    {
        id: 18,
        nome: "Bivacco Menegazzi",
        gruppo_montuoso: "Pale di San Martino",
        coordinate: { lat: 46.24200, lng: 11.86000 },
        quota_m: 2567,
        posti_letto: { numero: 6, tipologia: "Tavolato in legno" },
        stato_acqua: "Assente. Non ci sono sorgenti raggiungibili nelle vicinanze.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Passo Rolle (2004 m)",
            dislivello: "+563 m",
            tempo: "2h 30min",
            segnavia: "CAI 756",
            descrizione: "Dal Passo Rolle si risale l'altopiano delle Pale, paesaggio lunare tra rocce e doline carsiche. Orientamento impegnativo in caso di nebbia."
        }]
    },
    {
        id: 19,
        nome: "Bivacco Costapiana",
        gruppo_montuoso: "Civetta",
        coordinate: { lat: 46.38500, lng: 12.05500 },
        quota_m: 2080,
        posti_letto: { numero: 6, tipologia: "Tavolato in legno con coperte" },
        stato_acqua: "Ruscello a 8 minuti, attivo da giugno a ottobre.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Palafavera (1520 m)",
            dislivello: "+560 m",
            tempo: "2h 00min",
            segnavia: "CAI 563",
            descrizione: "Accesso relativamente breve e panoramico ai piedi della parete nord-ovest del Civetta."
        }]
    },
    {
        id: 20,
        nome: "Bivacco Valdo Matilde e Umberto",
        gruppo_montuoso: "Monti del Sole - Dolomiti Bellunesi",
        coordinate: { lat: 46.21401, lng: 12.06305 },
        quota_m: 1590,
        posti_letto: { numero: 6, tipologia: "Tavolato in legno" },
        stato_acqua: "Sorgente nelle vicinanze.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "E",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Val del Mis (430 m)",
            dislivello: "+1160 m",
            tempo: "3h 30min",
            segnavia: "CAI 802",
            descrizione: "Dalla Val del Mis si risale nel Parco Nazionale Dolomiti Bellunesi. Sentiero attraverso boschi lussureggianti. Dislivello notevole."
        }]
    },
    {
        id: 21,
        nome: "Bivacco Comici",
        gruppo_montuoso: "Dolomiti di Sesto",
        coordinate: { lat: 46.62100, lng: 12.30800 },
        quota_m: 2450,
        posti_letto: { numero: 4, tipologia: "Tavolato in legno essenziale" },
        stato_acqua: "Nevaio solo a inizio estate. Portare scorte.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EEA",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Rifugio Auronzo - Tre Cime (2320 m)",
            dislivello: "+400 m / -270 m",
            tempo: "3h 00min",
            segnavia: "CAI 101 - Cengia Gabriella",
            descrizione: "Dal Rifugio Auronzo lungo la Cengia Gabriella sulla Croda dei Toni. Passaggi attrezzati con cavo d'acciaio. Necessario set da ferrata."
        }]
    },
    {
        id: 22,
        nome: "Bivacco Slataper",
        gruppo_montuoso: "Dolomiti di Sesto",
        coordinate: { lat: 46.63000, lng: 12.33500 },
        quota_m: 2600,
        posti_letto: { numero: 5, tipologia: "Tavolato in legno essenziale" },
        stato_acqua: "Nevaio stagionale. Acqua non garantita da agosto in poi.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EEA",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Rifugio Zsigmondy-Comici (2224 m)",
            dislivello: "+376 m",
            tempo: "2h 00min",
            segnavia: "CAI 103 - Cengia attrezzata",
            descrizione: "Dal Rifugio Zsigmondy per sentiero 103 con tratti attrezzati. Necessario set da ferrata. Solo con buona visibilità e assenza di neve."
        }]
    },
    {
        id: 23,
        nome: "Bivacco Bedin",
        gruppo_montuoso: "Pale di San Martino",
        coordinate: { lat: 46.25800, lng: 11.85100 },
        quota_m: 2650,
        posti_letto: { numero: 4, tipologia: "Tavolato in legno senza materassi" },
        stato_acqua: "Nevaio nelle vicinanze, disponibilità stagionale. Portare scorte.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Malga Venegiota (1780 m)",
            dislivello: "+870 m",
            tempo: "3h 30min",
            segnavia: "CAI 751",
            descrizione: "Da Malga Venegiota si risale la Val delle Lede attraverso pascoli e ghiaioni. Superato il Passo delle Lede si raggiunge il bivacco sotto la Cima dei Bureloni."
        }]
    },

    // ═══════════════════════════════════════════════════
    //  TRENTINO — SAT Società Alpinisti Tridentini (18 bivacchi)
    // ═══════════════════════════════════════════════════

    // --- Trentino Ovest ---

    {
        id: 24,
        nome: "Casina Dosson",
        gruppo_montuoso: "Dolomiti di Brenta",
        coordinate: { lat: 46.16140, lng: 10.89570 },
        quota_m: 2501,
        posti_letto: { numero: 6, tipologia: "Tavolato con materassi" },
        stato_acqua: "Nevaio stagionale. Portare scorte d'acqua.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Rifugio Grostè (2442 m)",
            dislivello: "+200 m / -140 m",
            tempo: "1h 30min",
            segnavia: "SAT 303",
            descrizione: "Breve traversata dalle cime di Campiglio. Sentiero panoramico sulle Dolomiti di Brenta occidentali."
        }]
    },
    {
        id: 25,
        nome: "Bivacco al Campanil Basso",
        gruppo_montuoso: "Dolomiti di Brenta",
        coordinate: { lat: 46.17100, lng: 10.89800 },
        quota_m: 2600,
        posti_letto: { numero: 4, tipologia: "Tavolato essenziale" },
        stato_acqua: "Assente. Portare tutta l'acqua necessaria.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EEA",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Rifugio Brentei (2182 m)",
            dislivello: "+418 m",
            tempo: "2h 00min",
            segnavia: "SAT 318 - Bocchette",
            descrizione: "Accesso per le celebri Bocchette del Brenta. Necessario set da ferrata completo. Solo per alpinisti esperti."
        }]
    },
    {
        id: 26,
        nome: "Bivacco Bonvecchio",
        gruppo_montuoso: "Adamello - Presanella",
        coordinate: { lat: 46.17500, lng: 10.63800 },
        quota_m: 2790,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Acqua da fusione glaciale nelle vicinanze (stagionale).",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: true, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Rifugio Mandrone (2449 m)",
            dislivello: "+341 m",
            tempo: "1h 30min",
            segnavia: "SAT 212",
            descrizione: "Dal Rifugio Mandrone si sale verso il ghiacciaio dell'Adamello. Panorama sulle cime della Presanella."
        }]
    },
    {
        id: 27,
        nome: "Bivacco al Garbari",
        gruppo_montuoso: "Adamello - Presanella",
        coordinate: { lat: 46.19200, lng: 10.68300 },
        quota_m: 2826,
        posti_letto: { numero: 6, tipologia: "Tavolato in legno" },
        stato_acqua: "Acqua da nevaio stagionale.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Rifugio Carè Alto (2459 m)",
            dislivello: "+367 m",
            tempo: "1h 30min",
            segnavia: "SAT 238",
            descrizione: "Dal Rifugio Carè Alto si sale verso le cime dell'Adamello-Presanella. Terreno alpino con vista sulle Dolomiti di Brenta."
        }]
    },
    {
        id: 28,
        nome: "Bivacco Malga Stabli",
        gruppo_montuoso: "Val Rendena",
        coordinate: { lat: 46.10000, lng: 10.75500 },
        quota_m: 1576,
        posti_letto: { numero: 8, tipologia: "Tavolato con materassi e coperte" },
        stato_acqua: "Sorgente perenne nelle vicinanze.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "E",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Pinzolo (800 m)",
            dislivello: "+776 m",
            tempo: "2h 30min",
            segnavia: "SAT 219",
            descrizione: "Da Pinzolo si sale per mulattiera e sentiero nel bosco fino alla malga ristrutturata come bivacco. Percorso per tutti."
        }]
    },
    {
        id: 29,
        nome: "Bivacco CARE Palon",
        gruppo_montuoso: "Paganella",
        coordinate: { lat: 46.16700, lng: 11.02300 },
        quota_m: 1980,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Sorgente a 10 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: true, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "E",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Fai della Paganella (958 m)",
            dislivello: "+1022 m",
            tempo: "3h 00min",
            segnavia: "SAT 604",
            descrizione: "Da Fai della Paganella si sale per sentiero ben segnato attraverso i boschi della Paganella. Adatto a escursionisti di media esperienza."
        }]
    },
    {
        id: 30,
        nome: "Bivacco Vigilio Marchetti",
        gruppo_montuoso: "Alpi di Ledro",
        coordinate: { lat: 45.91600, lng: 10.71100 },
        quota_m: 1750,
        posti_letto: { numero: 6, tipologia: "Tavolato con materassi" },
        stato_acqua: "Sorgente a 5 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "E",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Rifugio Pernici (1600 m)",
            dislivello: "+150 m",
            tempo: "0h 45min",
            segnavia: "SAT 419",
            descrizione: "Breve salita dal Rifugio Pernici lungo il sentiero ALPIEDI Ledro Alps Trek."
        }]
    },

    // --- Trentino Est ---

    {
        id: 31,
        nome: "Bivacco Aldo Moro",
        gruppo_montuoso: "Lagorai",
        coordinate: { lat: 46.26600, lng: 11.56700 },
        quota_m: 2560,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi e coperte" },
        stato_acqua: "Lago alpino nelle vicinanze.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: true, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Passo Manghen (2047 m)",
            dislivello: "+513 m",
            tempo: "2h 00min",
            segnavia: "SAT E5 - Translagorai",
            descrizione: "Dal Passo Manghen si segue la Translagorai. Percorso panoramico sulla catena del Lagorai con vista sulle Pale di San Martino."
        }]
    },
    {
        id: 32,
        nome: "Bivacco Paolo e Nicola",
        gruppo_montuoso: "Lagorai",
        coordinate: { lat: 46.24800, lng: 11.52600 },
        quota_m: 2570,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Laghetto alpino a 5 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: true, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Passo Manghen (2047 m)",
            dislivello: "+523 m",
            tempo: "2h 30min",
            segnavia: "SAT 322",
            descrizione: "Dal Passo Manghen lungo la dorsale del Lagorai. Percorso su cresta con panorami a 360°."
        }]
    },
    {
        id: 33,
        nome: "Bivacco Caldenave",
        gruppo_montuoso: "Lagorai",
        coordinate: { lat: 46.20800, lng: 11.48900 },
        quota_m: 2146,
        posti_letto: { numero: 12, tipologia: "Tavolato con materassi e coperte" },
        stato_acqua: "Sorgente perenne a 3 minuti.",
        dotazioni: { stufa: true, radio_emergenza: true, fotovoltaico: true, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "E",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Malga Cagnon di Sotto (1300 m)",
            dislivello: "+846 m",
            tempo: "2h 30min",
            segnavia: "SAT 320",
            descrizione: "Da Malga Cagnon si sale attraverso boschi di larici e pascoli alpini. Bivacco molto ben attrezzato, ideale come tappa sulla Translagorai."
        }]
    },
    {
        id: 34,
        nome: "Bivacco Caorame",
        gruppo_montuoso: "Lagorai",
        coordinate: { lat: 46.22200, lng: 11.63400 },
        quota_m: 2150,
        posti_letto: { numero: 6, tipologia: "Tavolato con materassi" },
        stato_acqua: "Ruscello a 5 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Val Campelle (1100 m)",
            dislivello: "+1050 m",
            tempo: "3h 30min",
            segnavia: "SAT 325",
            descrizione: "Dalla Val Campelle si risale per sentiero nel bosco e poi su terreno aperto fino al bivacco nella catena del Lagorai."
        }]
    },
    {
        id: 35,
        nome: "Bivacco Pio Sbicego",
        gruppo_montuoso: "Lagorai",
        coordinate: { lat: 46.18300, lng: 11.43900 },
        quota_m: 2285,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Lago alpino a 10 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: true, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Vetriolo Terme (1500 m)",
            dislivello: "+785 m",
            tempo: "2h 30min",
            segnavia: "SAT 348",
            descrizione: "Da Vetriolo Terme si sale sulla catena del Lagorai. Tappa sulla Translagorai."
        }]
    },
    {
        id: 36,
        nome: "Bivacco Manghen",
        gruppo_montuoso: "Lagorai",
        coordinate: { lat: 46.17500, lng: 11.45300 },
        quota_m: 2541,
        posti_letto: { numero: 6, tipologia: "Tavolato in legno" },
        stato_acqua: "Lago alpino nelle vicinanze.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Passo Manghen (2047 m)",
            dislivello: "+494 m",
            tempo: "2h 00min",
            segnavia: "SAT 327",
            descrizione: "Dal Passo Manghen lungo il versante sud del Lagorai. Percorso in cresta con panorami eccezionali."
        }]
    },
    {
        id: 37,
        nome: "Bivacco Nino Sebastiani",
        gruppo_montuoso: "Lagorai",
        coordinate: { lat: 46.23500, lng: 11.59600 },
        quota_m: 2386,
        posti_letto: { numero: 9, tipologia: "Tavolato con materassi" },
        stato_acqua: "Sorgente a 10 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: true, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Malga Valmaggiore (1590 m)",
            dislivello: "+796 m",
            tempo: "2h 30min",
            segnavia: "SAT 325 - Translagorai",
            descrizione: "Da Malga Valmaggiore lungo la Translagorai orientale. Panorama sulla catena del Lagorai."
        }]
    },
    {
        id: 38,
        nome: "Bivacco M. e C. Tremalzo",
        gruppo_montuoso: "Prealpi Gardesane",
        coordinate: { lat: 45.87500, lng: 10.67500 },
        quota_m: 1630,
        posti_letto: { numero: 6, tipologia: "Tavolato con materassi" },
        stato_acqua: "Sorgente perenne a 3 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "E",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Passo Tremalzo (1665 m)",
            dislivello: "+50 m / -85 m",
            tempo: "0h 30min",
            segnavia: "SAT 421",
            descrizione: "Breve percorso dal Passo Tremalzo nelle Prealpi Gardesane. Adatto a tutti."
        }]
    },
    {
        id: 39,
        nome: "Bivacco Dorigoni",
        gruppo_montuoso: "Ortles - Cevedale",
        coordinate: { lat: 46.37200, lng: 10.72300 },
        quota_m: 2520,
        posti_letto: { numero: 8, tipologia: "Tavolato con materassi" },
        stato_acqua: "Ruscello glaciale stagionale.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: true, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Rifugio Larcher al Cevedale (2608 m)",
            dislivello: "+100 m / -188 m",
            tempo: "1h 00min",
            segnavia: "SAT 108",
            descrizione: "Dal Rifugio Larcher, breve traversata nel gruppo Ortles-Cevedale. Panorama glaciale mozzafiato."
        }]
    },
    {
        id: 40,
        nome: "Bivacco Lago Nero",
        gruppo_montuoso: "Lagorai",
        coordinate: { lat: 46.19800, lng: 11.50200 },
        quota_m: 2234,
        posti_letto: { numero: 8, tipologia: "Tavolato con materassi e coperte" },
        stato_acqua: "Lago Nero a 2 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: true, stoviglie: true, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Passo Manghen (2047 m)",
            dislivello: "+187 m",
            tempo: "1h 00min",
            segnavia: "SAT 320 - Translagorai",
            descrizione: "Breve tappa sulla Translagorai. Il bivacco è situato presso il pittoresco Lago Nero."
        }]
    },
    {
        id: 41,
        nome: "Bivacco Monte Fibbion",
        gruppo_montuoso: "Dolomiti di Brenta",
        coordinate: { lat: 46.14900, lng: 10.92200 },
        quota_m: 2220,
        posti_letto: { numero: 6, tipologia: "Tavolato in legno" },
        stato_acqua: "Sorgente a 15 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "E",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Madonna di Campiglio (1550 m)",
            dislivello: "+670 m",
            tempo: "2h 30min",
            segnavia: "SAT 340",
            descrizione: "Da Campiglio si sale per sentiero nel bosco e poi su prati alpini con vista sulle Dolomiti di Brenta."
        }]
    },
    {
        id: 42,
        nome: "Bivacco Donato Zeni",
        gruppo_montuoso: "Marmolada",
        coordinate: { lat: 46.425833, lng: 11.796389 },
        quota_m: 2100,
        posti_letto: { numero: 5, tipologia: "Tavolato" },
        stato_acqua: "Sorgente a 10 minuti.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EEA",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Passo San Nicolò (2338 m)",
            dislivello: "-238 m",
            tempo: "1h 30min",
            segnavia: "SAT 615",
            descrizione: "Itinerario alpinistico facile. Si scende in Val San Nicolò. Vista sul gruppo della Marmolada."
        }]
    },
    {
        id: 43,
        nome: "Bivacco Pra Castron (Claudio Costanzi)",
        gruppo_montuoso: "Dolomiti di Brenta",
        coordinate: { lat: 46.223889, lng: 10.908056 },
        quota_m: 2365,
        posti_letto: { numero: 4, tipologia: "Tavolato in legno" },
        stato_acqua: "Assente.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EEA",
        regione: "Trentino",
        fonte: "SAT",
        itinerari: [{
            partenza: "Malga Mondifrà (1632 m)",
            dislivello: "+733 m",
            tempo: "3h",
            segnavia: "SAT 336",
            descrizione: "Sentiero alpinistico Claudio Costanzi, richiede esperienza. In ambiente severo."
        }]
    },
    {
        id: 44,
        nome: "Bivacco Palia",
        gruppo_montuoso: "Schiara",
        coordinate: { lat: 46.216389, lng: 12.167222 },
        quota_m: 1577,
        posti_letto: { numero: 4, tipologia: "Cuccette" },
        stato_acqua: "Sorgente a 5 minuti.",
        dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto",
        difficolta_accesso: "EE",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Case Bortot (694 m)",
            dislivello: "+883 m",
            tempo: "2h 30min",
            segnavia: "CAI 501",
            descrizione: "Salita in ambiente boschivo molto selvaggio, verso le pareti della Schiara."
        }]
    },
    {
        id: 45,
        nome: "Bivacco Invernale Rifugio Nuvolau",
        gruppo_montuoso: "Nuvolau",
        coordinate: { lat: 46.495000, lng: 12.045000 },
        quota_m: 2575,
        posti_letto: { numero: 4, tipologia: "Tavolato" },
        stato_acqua: "Assente.",
        dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Aperto in periodo invernale (quando rifugio chiuso)",
        difficolta_accesso: "E",
        regione: "Veneto",
        fonte: "CAI",
        itinerari: [{
            partenza: "Passo Giau (2236 m)",
            dislivello: "+339 m",
            tempo: "1h 30min",
            segnavia: "CAI 439",
            descrizione: "Itinerario molto frequentato. Offre uno dei panorami più spettacolari a 360 gradi sulle Dolomiti d'Ampezzo."
        }]
    }
    ,{
        id: 46, nome: "Centro Glaciologico Julius Payer", gruppo_montuoso: "Adamello-Presanella",
        coordinate: { lat: 46.216, lng: 10.601 }, quota_m: 2434,
        posti_letto: { numero: 0, tipologia: "N/A" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Val di Genova", dislivello: "+1000m", tempo: "3h", segnavia: "SAT", descrizione: "Centro studi glaciologici." }]
    },
    {
        id: 47, nome: "Bivacco Cima Presanella - Brigata Orobica", gruppo_montuoso: "Presanella",
        coordinate: { lat: 46.218, lng: 10.666 }, quota_m: 3382,
        posti_letto: { numero: 8, tipologia: "Cuccette" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Rifugio Stavel", dislivello: "+1400m", tempo: "4h", segnavia: "SAT", descrizione: "Percorso alpinistico." }]
    },
    {
        id: 48, nome: "Bivacco Crozzon - Ettore Castiglioni", gruppo_montuoso: "Dolomiti di Brenta",
        coordinate: { lat: 46.166, lng: 10.871 }, quota_m: 3135,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Rifugio Pedrotti", dislivello: "+600m", tempo: "3h", segnavia: "Alpinistico", descrizione: "Impegnativo percorso alpinistico." }]
    },
    {
        id: 49, nome: "Bivacco Cunella - Giovan Battista Cova", gruppo_montuoso: "Adamello",
        coordinate: { lat: 46.103, lng: 10.608 }, quota_m: 2280,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Val Fumo", dislivello: "+800m", tempo: "2h 30min", segnavia: "SAT", descrizione: "Accesso dalla Val Stracciola." }]
    },
    {
        id: 50, nome: "Bivacco Maddalene - Pozze", gruppo_montuoso: "Maddalene",
        coordinate: { lat: 46.435, lng: 10.985 }, quota_m: 1989,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Proves", dislivello: "+500m", tempo: "2h", segnavia: "SAT", descrizione: "Percorso escursionistico." }]
    },
    {
        id: 51, nome: "Bivacco Passo delle Vacche - Eugenio Segalla", gruppo_montuoso: "Adamello",
        coordinate: { lat: 46.126, lng: 10.612 }, quota_m: 3050,
        posti_letto: { numero: 6, tipologia: "Cuccette" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Rifugio Car� Alto", dislivello: "+600m", tempo: "2h", segnavia: "SAT", descrizione: "Alpinistico su ghiacciaio." }]
    },
    {
        id: 52, nome: "Bivacco Presanella - Vittorio Roberti", gruppo_montuoso: "Presanella",
        coordinate: { lat: 46.212, lng: 10.722 }, quota_m: 2204,
        posti_letto: { numero: 12, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Val Nardis", dislivello: "+1000m", tempo: "3h", segnavia: "SAT", descrizione: "Salita in Val Nardis." }]
    },
    {
        id: 53, nome: "Bivacco Vegaia-Tremenesca - D. Marinelli", gruppo_montuoso: "Vegaia - Tremenesca",
        coordinate: { lat: 46.305, lng: 10.741 }, quota_m: 2075,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Peio", dislivello: "+600m", tempo: "2h", segnavia: "SAT", descrizione: "Percorso nei boschi." }]
    },
    {
        id: 54, nome: "Bivacco Casetta Forestale Raffaele Bailoni", gruppo_montuoso: "Marzola",
        coordinate: { lat: 46.038, lng: 11.171 }, quota_m: 1635,
        posti_letto: { numero: 6, tipologia: "Tavolato" }, stato_acqua: "Assente", dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Passo Marzola", dislivello: "+300m", tempo: "1h", segnavia: "SAT", descrizione: "Facile escursione." }]
    },
    {
        id: 55, nome: "Bivacco Cima d'asta - Giuseppe Cavinato", gruppo_montuoso: "Lagorai",
        coordinate: { lat: 46.177, lng: 11.602 }, quota_m: 2840,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Rifugio Brentari", dislivello: "+400m", tempo: "1h 30min", segnavia: "SAT", descrizione: "Nei pressi della vetta." }]
    },
    {
        id: 56, nome: "Bivacco Forcella Grande - Mario Rigatti", gruppo_montuoso: "Latemar",
        coordinate: { lat: 46.368, lng: 11.579 }, quota_m: 2620,
        posti_letto: { numero: 9, tipologia: "Cuccette" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Passo Costalunga", dislivello: "+1000m", tempo: "3h", segnavia: "SAT", descrizione: "Percorso attrezzato." }]
    },
    {
        id: 57, nome: "Bivacco Latemar - Attilio Sieff", gruppo_montuoso: "Latemar",
        coordinate: { lat: 46.353, lng: 11.554 }, quota_m: 2365,
        posti_letto: { numero: 10, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Forno", dislivello: "+900m", tempo: "2h 30min", segnavia: "SAT", descrizione: "Laste di Valsorda." }]
    },
    {
        id: 58, nome: "Bivacco Sinel - Gianni Pedrinolla", gruppo_montuoso: "Piccole Dolomiti",
        coordinate: { lat: 45.748, lng: 11.125 }, quota_m: 1990,
        posti_letto: { numero: 6, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Passo Campogrosso", dislivello: "+500m", tempo: "2h", segnavia: "SAT", descrizione: "Pra del Sinel." }]
    },
    {
        id: 59, nome: "Bivacco Vigolana - Alla Madonnina", gruppo_montuoso: "Vigolana",
        coordinate: { lat: 45.989, lng: 11.196 }, quota_m: 2030,
        posti_letto: { numero: 8, tipologia: "Tavolato" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Trentino", fonte: "SAT",
        itinerari: [{ partenza: "Sindech", dislivello: "+1000m", tempo: "3h", segnavia: "SAT", descrizione: "Percorso panoramico." }]
    }
    ,{
        id: 60, nome: "Bivacco Battaglione Cadore", gruppo_montuoso: "Marmarole", coordinate: { lat: 46.529, lng: 12.339 }, quota_m: 2250,
        posti_letto: { numero: 9, tipologia: "Cuccette" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Val d'Ansiei", dislivello: "+1200m", tempo: "3h 30min", segnavia: "CAI", descrizione: "Impegnativo." }]
    },
    {
        id: 61, nome: "Bivacco F.lli Dino e Plinio Toso", gruppo_montuoso: "Civetta", coordinate: { lat: 46.368, lng: 12.012 }, quota_m: 2246,
        posti_letto: { numero: 6, tipologia: "Tavolato" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Pecol", dislivello: "+800m", tempo: "2h 30min", segnavia: "CAI", descrizione: "Lungo itinerario dolomitico." }]
    },
    {
        id: 62, nome: "Bivacco Gera Carlo", gruppo_montuoso: "Pale di San Martino", coordinate: { lat: 46.262, lng: 11.966 }, quota_m: 2240,
        posti_letto: { numero: 6, tipologia: "Cuccette" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Val Canali", dislivello: "+900m", tempo: "3h", segnavia: "CAI", descrizione: "Ambiente solitario." }]
    },
    {
        id: 63, nome: "Bivacco Piva Armando", gruppo_montuoso: "Vette Feltrine", coordinate: { lat: 46.128, lng: 11.890 }, quota_m: 2216,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Val di Lamen", dislivello: "+1100m", tempo: "3h 30min", segnavia: "CAI", descrizione: "Lunga ascesa." }]
    },
    {
        id: 64, nome: "Bivacco Da Rin Chiaurei al Monte Tudaio", gruppo_montuoso: "Dolomiti di Brenta", coordinate: { lat: 46.526, lng: 12.443 }, quota_m: 2140,
        posti_letto: { numero: 6, tipologia: "Cuccette" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Laggio di Cadore", dislivello: "+1200m", tempo: "3h", segnavia: "CAI", descrizione: "Lunga carrareccia militare." }]
    },
    {
        id: 65, nome: "Bivacco Musatti Alberto", gruppo_montuoso: "Marmarole", coordinate: { lat: 46.516, lng: 12.308 }, quota_m: 2111,
        posti_letto: { numero: 9, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Somadida", dislivello: "+1000m", tempo: "3h", segnavia: "CAI", descrizione: "Bosco e roccette." }]
    },
    {
        id: 66, nome: "Bivacco Voltolina Leo e Gino", gruppo_montuoso: "Marmarole", coordinate: { lat: 46.491, lng: 12.285 }, quota_m: 2082,
        posti_letto: { numero: 6, tipologia: "Cuccette" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Val da Rin", dislivello: "+900m", tempo: "3h", segnavia: "CAI", descrizione: "Impegnativo." }]
    },
    {
        id: 67, nome: "Bivacco Grisetti Giovannino", gruppo_montuoso: "Civetta", coordinate: { lat: 46.284, lng: 12.016 }, quota_m: 2050,
        posti_letto: { numero: 9, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Chiesa", dislivello: "+800m", tempo: "2h 30min", segnavia: "CAI", descrizione: "Val Corpassa." }]
    },
    {
        id: 68, nome: "Bivacco Vaccari Aldo e Miranda", gruppo_montuoso: "Pasubio", coordinate: { lat: 46.123, lng: 11.135 }, quota_m: 2050,
        posti_letto: { numero: 6, tipologia: "Tavolato" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Bocchetta Campiglia", dislivello: "+800m", tempo: "3h", segnavia: "CAI", descrizione: "Panoramico." }]
    },
    {
        id: 69, nome: "Bivacco Spagnolli Giovanni", gruppo_montuoso: "Pasubio", coordinate: { lat: 45.811, lng: 11.189 }, quota_m: 2047,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Strada degli Eroi", dislivello: "+700m", tempo: "2h", segnavia: "CAI", descrizione: "Storico." }]
    },
    {
        id: 70, nome: "Bivacco Cornon", gruppo_montuoso: "Dolomiti Ampezzane", coordinate: { lat: 46.305, lng: 11.517 }, quota_m: 2045,
        posti_letto: { numero: 6, tipologia: "Cuccette" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Val di Fiemme", dislivello: "+600m", tempo: "2h", segnavia: "CAI", descrizione: "Foresta." }]
    },
    {
        id: 71, nome: "Bivacco Marta Franco", gruppo_montuoso: "Alpago", coordinate: { lat: 46.185, lng: 12.435 }, quota_m: 2045,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Chies d'Alpago", dislivello: "+900m", tempo: "3h", segnavia: "CAI", descrizione: "Panoramico." }]
    },
    {
        id: 72, nome: "Bivacco Carnielli Gian Mario / De Marchi Giuliano", gruppo_montuoso: "Spalti di Toro", coordinate: { lat: 46.353, lng: 12.290 }, quota_m: 2010,
        posti_letto: { numero: 6, tipologia: "Cuccette" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Rifugio Padova", dislivello: "+800m", tempo: "2h 30min", segnavia: "CAI", descrizione: "Impegnativo." }]
    },
    {
        id: 73, nome: "Bivacco Montanel", gruppo_montuoso: "Cridola", coordinate: { lat: 46.438, lng: 12.411 }, quota_m: 2008,
        posti_letto: { numero: 9, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Domegge di Cadore", dislivello: "+1000m", tempo: "3h", segnavia: "CAI", descrizione: "Lungo pendio." }]
    },
    {
        id: 74, nome: "Bivacco Sperti Gianangelo e Iris", gruppo_montuoso: "Schiara", coordinate: { lat: 46.215, lng: 12.106 }, quota_m: 2000,
        posti_letto: { numero: 6, tipologia: "Tavolato" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Case Bortot", dislivello: "+1300m", tempo: "4h", segnavia: "CAI", descrizione: "Via ferrata." }]
    },
    {
        id: 75, nome: "Bivacco Ursella Angelo / Zandonella Mario", gruppo_montuoso: "Popera", coordinate: { lat: 46.592, lng: 12.483 }, quota_m: 2000,
        posti_letto: { numero: 4, tipologia: "Cuccette" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Padola", dislivello: "+700m", tempo: "2h 30min", segnavia: "CAI", descrizione: "Bosco e ghiaioni." }]
    },
    {
        id: 76, nome: "Bivacco Del Gobbo Damiana", gruppo_montuoso: "Spalti di Toro", coordinate: { lat: 46.375, lng: 12.516 }, quota_m: 1985,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Val Settimana", dislivello: "+1000m", tempo: "3h", segnavia: "CAI", descrizione: "Selvaggio." }]
    },
    {
        id: 77, nome: "Bivacco Feltre", gruppo_montuoso: "Vette Feltrine", coordinate: { lat: 46.162, lng: 11.921 }, quota_m: 1930,
        posti_letto: { numero: 15, tipologia: "Cuccette" }, stato_acqua: "Sorgente", dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Val di San Martino", dislivello: "+1100m", tempo: "3h", segnavia: "CAI", descrizione: "Ampio." }]
    },
    {
        id: 78, nome: "Bivacco Bodo Walter", gruppo_montuoso: "Carega", coordinate: { lat: 45.719, lng: 11.160 }, quota_m: 1930,
        posti_letto: { numero: 6, tipologia: "Tavolato" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Campogrosso", dislivello: "+500m", tempo: "2h", segnavia: "CAI", descrizione: "Molto frequentato." }]
    },
    {
        id: 79, nome: "Bivacco Greselin Paolo", gruppo_montuoso: "Cridola", coordinate: { lat: 46.335, lng: 12.428 }, quota_m: 1920,
        posti_letto: { numero: 9, tipologia: "Cuccette" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EEA", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Lorenzago", dislivello: "+1000m", tempo: "3h", segnavia: "CAI", descrizione: "Impegnativo." }]
    },
    {
        id: 80, nome: "Bivacco Milan Giancarlo", gruppo_montuoso: "Schiara", coordinate: { lat: 46.176, lng: 12.259 }, quota_m: 1745,
        posti_letto: { numero: 6, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Val Pramp�r", dislivello: "+700m", tempo: "2h", segnavia: "CAI", descrizione: "Boschivo." }]
    },
    {
        id: 81, nome: "Bivacco Baroni Sergio", gruppo_montuoso: "Bosconero", coordinate: { lat: 46.195, lng: 12.203 }, quota_m: 1732,
        posti_letto: { numero: 4, tipologia: "Cuccette" }, stato_acqua: "Assente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "EE", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Ospitale", dislivello: "+1000m", tempo: "3h", segnavia: "CAI", descrizione: "Roccioso." }]
    },
    {
        id: 82, nome: "Bivacco Tovanella Osvaldo", gruppo_montuoso: "Schiara", coordinate: { lat: 46.291, lng: 12.290 }, quota_m: 1688,
        posti_letto: { numero: 6, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: true },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Ospitale di Cadore", dislivello: "+900m", tempo: "2h 30min", segnavia: "CAI", descrizione: "Parco Nazionale." }]
    },
    {
        id: 83, nome: "Bivacco Valentino Angelini", gruppo_montuoso: "Schiara", coordinate: { lat: 46.332, lng: 12.133 }, quota_m: 1680,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Forno di Zoldo", dislivello: "+700m", tempo: "2h", segnavia: "CAI", descrizione: "Facile e panoramico." }]
    },
    {
        id: 84, nome: "Bivacco Dal Mas Renzo", gruppo_montuoso: "Schiara", coordinate: { lat: 46.194, lng: 12.251 }, quota_m: 1632,
        posti_letto: { numero: 4, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: false, radio_emergenza: false, fotovoltaico: false, stoviglie: false, legnaia: false },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "La Muda", dislivello: "+800m", tempo: "2h 30min", segnavia: "CAI", descrizione: "Bosco ceduo." }]
    },
    {
        id: 85, nome: "Bivacco Casera Medassa", gruppo_montuoso: "Schiara", coordinate: { lat: 46.177, lng: 12.235 }, quota_m: 1342,
        posti_letto: { numero: 8, tipologia: "Tavolato" }, stato_acqua: "Sorgente", dotazioni: { stufa: true, radio_emergenza: false, fotovoltaico: false, stoviglie: true, legnaia: true },
        stato_apertura: "Sempre aperto", difficolta_accesso: "E", regione: "Veneto", fonte: "CAI",
        itinerari: [{ partenza: "Val di Piero", dislivello: "+500m", tempo: "1h 30min", segnavia: "CAI", descrizione: "Bassa quota, verdeggiante." }]
    }
];
