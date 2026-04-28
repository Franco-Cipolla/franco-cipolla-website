import React from "react";
import { Helmet } from "react-helmet-async";

const SEOJsonLD = ({ page }) => {
  const domain = "https://www.franco-cipolla.de";

  const basePerson = {
    "@type": "Person",
    "@id": `${domain}/#person`,
    "name": "Franco Cipolla",
    "url": domain,
    "image": `${domain}/Franco2.jpeg`,
    "jobTitle": "Webdesigner",
    "worksFor": { "@id": `${domain}/#localbusiness` },
    "sameAs": [
      "https://www.instagram.com/francocipolla.de",
      "https://www.linkedin.com/in/franco-cipolla-00217a37a/",
      "https://www.facebook.com/profile.php?id=61579454284278"
    ]
  };

  const baseBusiness = {
    "@type": "LocalBusiness",
    "@id": `${domain}/#localbusiness`,
    "name": "Franco Cipolla Webdesign",
    "image": `${domain}/Franco2.jpeg`,
    "logo": `${domain}/Franco2.jpeg`,
    "url": domain,
    "telephone": "+4917675398004",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wuppermannstraße 14",
      "addressLocality": "Ennepetal",
      "postalCode": "58256",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.2965,
      "longitude": 7.3508
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "15:00",
        "closes": "20:00"
      }
    ],
    "sameAs": basePerson.sameAs
  };

  const offerCatalog = {
    "@type": "OfferCatalog",
    "name": "Leistungen & Angebote",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Lokale-Anfragen-System",
        "description": "Conversion-optimierte Website, die auf Anfragen ausgerichtet ist.",
        "url": domain,
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Kostenlose Website-Analyse",
        "description": "Unverbindliche Analyse deiner Website mit konkreten Optimierungspotenzialen.",
        "url": `${domain}/website-analyse`,
        "price": "0",
        "priceCurrency": "EUR"
      }
    ]
  };

  const review = {
    "@type": "Review",
    "author": { "@type": "Person", "name": "Google Nutzer" },
    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    "reviewBody": "Franco hat meine Website analysiert und mir gezeigt, dass meine Website an verschiedenen Stellen Anfragen verliert. Franco’s Expertise ist wirklich auf einem ganz anderen Level. Durch Franco habe ich nun spürbar mehr Anfragen. Meiner Meinung nach einer der besten Webdesigner in ganz Ennepetal und Umgebung."
  };

  let pageSchema = {};

  switch (page) {
    case "home":
      pageSchema = {
        "@graph": [
          baseBusiness,
          basePerson,
          {
            "@type": "WebPage",
            "@id": `${domain}/#webpage`,
            "url": domain,
            "name": "Websites, die Kunden bringen – Franco Cipolla",
            "description": "Individuelle Websites für Selbstständige & Unternehmen, die darauf ausgerichtet sind messbar Kundenanfragen zu bringen.",
            "about": { "@id": `${domain}/#localbusiness` },
            "mainEntity": {
              "@type": "Service",
              "name": "Lokale-Anfragen-System™",
              "provider": { "@id": `${domain}/#localbusiness` },
              "areaServed": ["Ennepetal", "Hagen", "Wuppertal", "Schwelm", "Gevelsberg", "Dortmund", "Breckerfeld","Velbert"],
              "hasOfferCatalog": offerCatalog
            }
          }
        ]
      };
      break;

    case "hagen":
    case "wuppertal": {
      const city = page.charAt(0).toUpperCase() + page.slice(1);
      pageSchema = {
        "@graph": [
          {
            ...baseBusiness,
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "1" },
            "review": [review]
          },
          {
            "@type": "WebPage",
            "@id": `${domain}/${page}/#webpage`,
            "url": `${domain}/${page}`,
            "name": `Websites für ${city} – Franco Cipolla`,
            "description": `Websites für Unternehmen in ${city}, die messbar Anfragen generieren.`,
            "mainEntity": {
              "@type": "Service",
              "name": "Lokale-Anfragen-System",
              "provider": { "@id": `${domain}/#localbusiness` },
              "areaServed": { "@type": "City", "name": city },
              "hasOfferCatalog": offerCatalog
            }
          }
        ]
      };
      break;
    }

    case "analyse":
      pageSchema = {
        "@type": "WebPage",
        "@id": `${domain}/website-analyse/#webpage`,
        "url": `${domain}/website-analyse`,
        "name": "Kostenlose Website Analyse – Franco Cipolla",
        "description": "Kostenlose Analyse deiner Website mit konkreten Optimierungspotenzialen.",
        "mainEntity": {
          "@type": "Service",
          "name": "Kostenlose Website Analyse",
          "provider": { "@id": `${domain}/#localbusiness` },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
        }
      };
      break;

    case "about":
      pageSchema = {
        "@graph": [
          basePerson,
          {
            "@type": "AboutPage",
            "@id": `${domain}/ueber-mich/#webpage`,
            "url": `${domain}/ueber-mich`,
            "name": "Über mich – Franco Cipolla",
            "description": "Webdesigner für conversion-optimierte Websites für lokale Unternehmen.",
            "mainEntity": { "@id": `${domain}/#person` }
          }
        ]
      };
      break;

    default:
      pageSchema = {};
  }

  return (
    <Helmet>
      {Object.keys(pageSchema).length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            ...pageSchema
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOJsonLD;
