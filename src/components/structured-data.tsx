export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Genuine Stack",
    "alternateName": "Genuine Stack SaaS Development Agency",
    "url": "https://www.genuinestack.com",
    "logo": "https://www.genuinestack.com/logo/logo.svg",
    "description": "Leading SaaS development agency specializing in custom software development, API development, MVP creation, enterprise websites, and AI automation solutions.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7753818253",
      "contactType": "customer service",
      "email": "hello@genuinestack.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/genuinestack",
      "https://twitter.com/genuinestack",
      "https://github.com/genuinestack"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SaaS Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions for businesses of all sizes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "API Development",
            "description": "RESTful APIs, GraphQL, and microservices architecture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Minimum Viable Product development for startups"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Websites",
            "description": "Scalable enterprise-grade web applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation",
            "description": "AI-powered automation solutions for business processes"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Genuine Stack",
    "url": "https://www.genuinestack.com",
    "description": "Premier SaaS development agency offering custom software, API development, MVP creation, and AI automation solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "Genuine Stack"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.genuinestack.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.genuinestack.com/#organization",
    "name": "Genuine Stack",
    "image": "https://www.genuinestack.com/logo/logo.svg",
    "description": "Leading SaaS development agency specializing in custom software development, API development, MVP creation, enterprise websites, and AI automation solutions.",
    "url": "https://www.genuinestack.com",
    "telephone": "+91-7753818253",
    "email": "hello@genuinestack.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.8467",
      "longitude": "80.9462"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "currenciesAccepted": "INR, USD",
    "paymentAccepted": "Credit Card, Bank Transfer, PayPal"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
    </>
  );
}

