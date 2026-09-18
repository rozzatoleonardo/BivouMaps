# 🏔️ Bivacchi Dolomiti Explorer

Database interattivo e guida ai bivacchi delle Dolomiti. Esplora su mappa, filtra per gruppo montuoso e difficoltà, scopri dotazioni e itinerari di accesso dettagliati.

## ✨ Funzionalità

- **Mappa Interattiva** — Leaflet.js con tile OpenTopoMap per visualizzazione topografica
- **Filtri Avanzati** — Per gruppo montuoso, difficoltà (E/EE/EEA), acqua e posti letto
- **Ricerca Istantanea** — Trova bivacchi per nome o gruppo montuoso
- **Schede Dettaglio** — Dotazioni complete, coordinate copiabili, itinerari con accordion
- **Dark Mode** — Con salvataggio preferenza, rispetta le impostazioni di sistema
- **Responsive** — Layout split-screen su desktop, tabs su mobile
- **Zero Server** — 100% statico, funziona su GitHub Pages

## 📁 Struttura Progetto

```
bivacchi-website/
├── index.html           # App principale
├── data/
│   └── bivacchi.js      # Dataset 10 bivacchi reali
├── .nojekyll            # Disabilita Jekyll su GitHub Pages
└── README.md            # Questo file
```

## 🚀 Deploy su GitHub Pages

1. **Crea un repository** su GitHub (pubblico)
2. **Carica i file** del progetto:
   ```bash
   git init
   git add .
   git commit -m "Bivacchi Dolomiti Explorer"
   git branch -M main
   git remote add origin https://github.com/TUO_USERNAME/bivacchi-dolomiti.git
   git push -u origin main
   ```
3. **Attiva GitHub Pages:**
   - Vai su **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / Folder: `/ (root)`
   - Clicca **Save**
4. Il sito sarà disponibile su `https://tuousername.github.io/bivacchi-dolomiti/`

## 🛠️ Stack Tecnico

| Tecnologia | Versione | Utilizzo |
|---|---|---|
| HTML5 | — | Struttura semantica |
| Tailwind CSS | CDN | Stile e responsive |
| Leaflet.js | 1.9.4 | Mappa interattiva |
| OpenTopoMap | — | Tile topografici |
| Vanilla JS | ES6+ | Logica applicativa |
| Google Fonts | Inter | Tipografia |

## ⚠️ Disclaimer

I dati sui bivacchi sono forniti a **scopo dimostrativo ed educativo**. Le coordinate, le quote e le informazioni sugli itinerari sono indicative. **Verificare sempre** le condizioni reali presso le sezioni CAI locali e i gestori dei rifugi prima di intraprendere escursioni in montagna.

## 📄 Licenza

Questo progetto è distribuito con licenza MIT.
