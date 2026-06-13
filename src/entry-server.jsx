import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './pages/HomePage' // Passen Sie den Pfad zu Ihrer HomePage an

export function render() {
  const helmetContext = {}

  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <HomePage />
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  return { html, helmet }
}
