import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const SERVER_PATH = path.resolve(__dirname, 'dist/server/entry-server.js')
const serverUrl = pathToFileURL(SERVER_PATH).href

const routes = [
  { path: '/', output: 'dist/static/index.html' },
  { path: '/ueber-mich', output: 'dist/static/ueber-mich/index.html' },
  { path: '/website-analyse', output: 'dist/static/website-analyse/index.html' },
  { path: '/hagen', output: 'dist/static/hagen/index.html' },
  { path: '/wuppertal', output: 'dist/static/wuppertal/index.html' }
]

async function run() {
  const templatePath = path.resolve(__dirname, 'dist/static/index.html')
  const template = fs.readFileSync(templatePath, 'utf-8')

  const { render } = await import(serverUrl)

  for (const route of routes) {
    const { html, helmet } = render(route.path)

    const finalHtml = template
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      .replace('<!---HELMET_TITLE--->', helmet?.title?.toString() || '')
      .replace('<!---HELMET_META--->', helmet?.meta?.toString() || '')
      .replace('<!---HELMET_LINK--->', helmet?.link?.toString() || '')

    const outputDir = path.dirname(path.resolve(__dirname, route.output))
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    fs.writeFileSync(path.resolve(__dirname, route.output), finalHtml)
    console.log(`🎉 Prerendering erfolgreich: "${route.path}" generiert.`)
  }
}

run().catch((err) => {
  console.error('❌ Fehler beim Prerendering:', err)
})
