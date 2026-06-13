import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Pfade definieren
const INDEX_PATH = path.resolve(__dirname, 'dist/static/index.html')
const SERVER_PATH = path.resolve(__dirname, 'dist/server/entry-server.js')

async function run() {
  // 1. Die vom Client gebaute, leere HTML-Vorlage einlesen
  const template = fs.readFileSync(INDEX_PATH, 'utf-8')

  // 2. Das serverseitige Render-Skript importieren
  const { render } = await import(SERVER_PATH)

  // 3. App zu HTML-String konvertieren
  const { html, helmet } = render()

  // 4. Platzhalter in der index.html ersetzen (Inklusive React Helmet Tags)
  const finalHtml = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace('<!---HELMET_TITLE--->', helmet.title.toString())
    .replace('<!---HELMET_META--->', helmet.meta.toString())
    .replace('<!---HELMET_LINK--->', helmet.link.toString())

  // 5. Die fertige, statische HTML-Datei abspeichern
  fs.writeFileSync(INDEX_PATH, finalHtml)
  console.log('🎉 Prerendering erfolgreich! Statische index.html für Google generiert.')
}

run()
