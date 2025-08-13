import React from 'react'
import { Helmet } from 'react-helmet'

const NotFoundHead = () => {
  return (
    <Helmet>
        <title>Seite nicht gefunden – Franco Cipolla</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:image" content="https://franco-cipolla.de/og-homepage.JPG" />

      </Helmet>
  )
}

export default NotFoundHead
