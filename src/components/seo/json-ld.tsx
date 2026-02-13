import React from 'react';

// Types for JSON-LD schemas
export interface LocalBusinessSchema {
  name: string;
  image: string | string[];
  telephone: string;
  email: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  url: string;
  priceRange: string;
  openingHoursSpecification?: Array<{
    dayOfWeek: string | string[];
    opens?: string;
    closes?: string;
  }>;
  areaServed: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  sameAs?: string[];
}

export interface ServiceSchema {
  name: string;
  description: string;
  provider: {
    name: string;
    telephone: string;
  };
  areaServed: string[];
  serviceType: string;
  url?: string;
}

export interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface WebSiteSchema {
  name: string;
  url: string;
  potentialAction?: {
    query: string;
  };
}

// LocalBusiness JSON-LD Component
export function LocalBusinessJsonLd({
  name = "Down Right Plumbing",
  image = "https://downrightplumbingtx.com/logo.png",
  telephone = "+1-214-802-3042",
  email = "dougw@downrightplumbingtx.com",
  address = {
    addressLocality: "Rockwall",
    addressRegion: "TX",
    addressCountry: "US"
  },
  geo = {
    latitude: 32.9312,
    longitude: -96.4597
  },
  url = "https://downrightplumbingtx.com",
  priceRange = "$$",
  openingHoursSpecification = [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00"
    }
  ],
  areaServed = [
    "Rockwall",
    "Heath",
    "Royse City",
    "Fate",
    "McLendon-Chisholm",
    "Rowlett",
    "Garland",
    "Wylie",
    "Mesquite",
    "Forney"
  ],
  aggregateRating = {
    ratingValue: 5.0,
    reviewCount: 500
  },
  sameAs = [
    "https://www.facebook.com/downrightplumbing",
    "https://www.instagram.com/downrightplumbing"
  ]
}: Partial<LocalBusinessSchema> = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": name,
    "image": image,
    "telephone": telephone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      ...(address.streetAddress && { "streetAddress": address.streetAddress }),
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      ...(address.postalCode && { "postalCode": address.postalCode }),
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "url": url,
    "priceRange": priceRange,
    "openingHoursSpecification": openingHoursSpecification?.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.dayOfWeek,
      ...(hours.opens && { "opens": hours.opens }),
      ...(hours.closes && { "closes": hours.closes })
    })),
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount
      }
    }),
    ...(sameAs && { "sameAs": sameAs })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service JSON-LD Component
export function ServiceJsonLd({
  name,
  description,
  provider = {
    name: "Down Right Plumbing",
    telephone: "+1-214-802-3042"
  },
  areaServed = [
    "Rockwall",
    "Heath",
    "Royse City",
    "Fate",
    "McLendon-Chisholm",
    "Rowlett",
    "Garland",
    "Wylie",
    "Mesquite",
    "Forney"
  ],
  serviceType,
  url
}: ServiceSchema) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Plumber",
      "name": provider.name,
      "telephone": provider.telephone
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceType": serviceType,
    ...(url && { "url": url })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ JSON-LD Component
export function FAQJsonLd({ questions }: FAQSchema) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList JSON-LD Component
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite with SearchAction JSON-LD Component
export function WebSiteJsonLd({
  name = "Down Right Plumbing",
  url = "https://downrightplumbingtx.com",
  potentialAction
}: Partial<WebSiteSchema> = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    ...(potentialAction && {
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Combined Schema Component for easier usage
export function CombinedSchemaMarkup({
  includeLocalBusiness = true,
  includeWebSite = true,
  service,
  faq,
  breadcrumbs
}: {
  includeLocalBusiness?: boolean;
  includeWebSite?: boolean;
  service?: ServiceSchema;
  faq?: FAQSchema;
  breadcrumbs?: BreadcrumbItem[];
}) {
  return (
    <>
      {includeLocalBusiness && <LocalBusinessJsonLd />}
      {includeWebSite && <WebSiteJsonLd />}
      {service && <ServiceJsonLd {...service} />}
      {faq && <FAQJsonLd {...faq} />}
      {breadcrumbs && breadcrumbs.length > 0 && <BreadcrumbJsonLd items={breadcrumbs} />}
    </>
  );
}
