import React from 'react'
import ReactDOMServer from 'react-dom/server'
import * as ReactRouterDom from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Ihre Seiten-Komponenten
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ErstGespraech from './pages/ErstGespraech'
import Hagenlanding from './pages/Hagenlanding'
import Wuppertallanding from './pages/Wuppertallanding'

// 🔥 Die originalen Kontexte direkt aus dem Bundle extrahieren
const NavigationContext = ReactRouterDom.UNSAFE_NavigationContext || React.createContext(null)
const LocationContext = ReactRouterDom.UNSAFE_LocationContext || React.createContext(null)

export function render(url = '/') {
  const helmetContext = {}

  // Ihre händische Seitensteuerung
  let ComponentToRender = <HomePage />

  switch (url) {
    case '/':
      ComponentToRender = <HomePage />
      break
    case '/ueber-mich':
      ComponentToRender = <AboutPage />
      break
    case '/website-analyse':
      ComponentToRender = <ErstGespraech />
      break
    case '/hagen':
      ComponentToRender = <Hagenlanding />
      break
    case '/wuppertal':
      ComponentToRender = <Wuppertallanding />
      break
    default:
      ComponentToRender = <HomePage />
  }

  // Dummy-Navigator für useNavigate()
  const dummyNavigator = {
    createHref: () => '',
    push: () => {},
    replace: () => {},
    go: () => {},
    back: () => {},
    forward: () => {},
  }

  const dummyLocation = {
    pathname: url,
    search: '',
    hash: '',
    state: null,
    key: 'default',
  }

  // Wir füttern die originalen Kontext-Provider aus dem Bundle mit unseren Dummies
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <NavigationContext.Provider value={{ navigator: dummyNavigator }}>
        <LocationContext.Provider value={{ location: dummyLocation, navigationType: 'POP' }}>
          {ComponentToRender}
        </LocationContext.Provider>
      </NavigationContext.Provider>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  return { html, helmet }
}
