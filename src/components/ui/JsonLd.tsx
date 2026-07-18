interface JsonLdProps {
  person: {
    name: string
    givenName: string
    familyName: string
    jobTitle: string
    email: string
    telephone: string
    url: string
    sameAs: string[]
    address: {
      addressLocality: string
      addressCountry: string
    }
  }
}

export default function JsonLd({ person }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${person.url}/#person`,
        name: person.name,
        givenName: person.givenName,
        familyName: person.familyName,
        jobTitle: person.jobTitle,
        email: person.email,
        telephone: person.telephone,
        url: person.url,
        sameAs: person.sameAs,
        address: {
          "@type": "PostalAddress",
          addressLocality: person.address.addressLocality,
          addressCountry: person.address.addressCountry,
        },
        image: `${person.url}/og-image.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${person.url}/#website`,
        url: person.url,
        name: `${person.name} | Frontend Engineer`,
        description: "Frontend engineer building product-grade interfaces for CRM systems, admin dashboards, fintech platforms, high-end websites, and embedded widgets.",
        publisher: {
          "@id": `${person.url}/#person`,
        },
        inLanguage: "en-US",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
