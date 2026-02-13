# SEO Infrastructure Documentation

This directory contains all SEO-related components and utilities for the Down Right Plumbing website.

## Components

### JSON-LD Schema Components (`json-ld.tsx`)

Structured data components for rich search results.

#### LocalBusinessJsonLd

Displays LocalBusiness schema with all business information.

```tsx
import { LocalBusinessJsonLd } from '@/components/seo';

// In your layout.tsx or page.tsx
<LocalBusinessJsonLd />
```

**Default values include:**
- Business name, phone, email
- Address in Rockwall, TX
- Geo coordinates
- 24/7 opening hours
- Service areas (10 cities)
- 4.9 rating with 500 reviews
- Price range ($$)

#### ServiceJsonLd

Schema markup for individual service pages.

```tsx
import { ServiceJsonLd } from '@/components/seo';

<ServiceJsonLd
  name="Drain Cleaning"
  description="Professional drain cleaning services..."
  serviceType="Plumbing"
  url="https://downrightplumbingtx.com/services/drain-cleaning"
/>
```

#### FAQJsonLd

Schema markup for FAQ sections.

```tsx
import { FAQJsonLd } from '@/components/seo';

<FAQJsonLd
  questions={[
    {
      question: "Do you offer 24/7 emergency service?",
      answer: "Yes, we provide 24/7 emergency plumbing services..."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Rockwall, Heath, Royse City..."
    }
  ]}
/>
```

#### BreadcrumbJsonLd

Schema markup for breadcrumb navigation (automatically included with Breadcrumbs component).

```tsx
import { BreadcrumbJsonLd } from '@/components/seo';

<BreadcrumbJsonLd
  items={[
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Drain Cleaning', url: '/services/drain-cleaning' }
  ]}
/>
```

#### WebSiteJsonLd

Schema markup for the website with optional search action.

```tsx
import { WebSiteJsonLd } from '@/components/seo';

<WebSiteJsonLd
  potentialAction={{ query: 'search' }}
/>
```

#### CombinedSchemaMarkup

Convenience component that combines multiple schemas.

```tsx
import { CombinedSchemaMarkup } from '@/components/seo';

<CombinedSchemaMarkup
  includeLocalBusiness={true}
  includeWebSite={true}
  service={{
    name: "Drain Cleaning",
    description: "Professional drain cleaning...",
    serviceType: "Plumbing"
  }}
  faq={{
    questions: [
      { question: "...", answer: "..." }
    ]
  }}
  breadcrumbs={[
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ]}
/>
```

### Breadcrumbs Component (`breadcrumbs.tsx`)

Visual breadcrumb navigation with built-in schema markup.

#### Basic Usage

```tsx
import { Breadcrumbs } from '@/components/seo';

<Breadcrumbs
  items={[
    { name: 'Services', url: '/services' },
    { name: 'Drain Cleaning', url: '/services/drain-cleaning' }
  ]}
/>
```

#### Auto Breadcrumbs

Automatically generates breadcrumbs from the current pathname.

```tsx
'use client';
import { usePathname } from 'next/navigation';
import { AutoBreadcrumbs } from '@/components/seo';

export function PageBreadcrumbs() {
  const pathname = usePathname();
  
  return (
    <AutoBreadcrumbs
      pathname={pathname}
      customNames={{
        '/service-areas': 'Service Areas',
        '/service-areas/rockwall': 'Rockwall, TX'
      }}
    />
  );
}
```

## SEO Helper Utils (`src/lib/seo-utils.ts`)

Utility functions for generating metadata and SEO-related data.

### generateMetadata

Generate complete metadata for any page.

```tsx
import { generateMetadata } from '@/lib/seo-utils';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Professional Plumbing Services',
  description: 'Expert plumbing services in Rockwall, TX...',
  canonical: '/services',
  keywords: ['plumbing', 'Rockwall TX', 'emergency plumber']
});
```

### generateServiceMetadata

Specialized metadata for service pages.

```tsx
import { generateServiceMetadata } from '@/lib/seo-utils';

export const metadata = generateServiceMetadata(
  'Drain Cleaning',
  'Professional drain cleaning services in Rockwall, TX',
  '/services/drain-cleaning'
);
```

### generateServiceAreaMetadata

Specialized metadata for service area pages.

```tsx
import { generateServiceAreaMetadata } from '@/lib/seo-utils';

export const metadata = generateServiceAreaMetadata(
  'Rockwall',
  'Professional plumbing services in Rockwall, TX',
  '/service-areas/rockwall'
);
```

### Other Utilities

```tsx
import {
  generateOgImageUrl,
  formatPhoneNumber,
  slugify,
  truncateDescription,
  generateCanonicalUrl,
  pathnameToBreadcrumbs,
  SITE_CONFIG
} from '@/lib/seo-utils';

// Generate dynamic OG image
const ogImage = generateOgImageUrl('Drain Cleaning', 'Rockwall, TX');

// Format phone number
const formattedPhone = formatPhoneNumber('+12148023042');
// Returns: (214) 802-3042

// Create URL-friendly slug
const slug = slugify('Water Heater Repair Services');
// Returns: water-heater-repair-services

// Truncate description
const shortDesc = truncateDescription('Long description...', 160);

// Generate canonical URL
const canonical = generateCanonicalUrl('/services/drain-cleaning');

// Convert pathname to breadcrumbs
const breadcrumbs = pathnameToBreadcrumbs('/services/drain-cleaning');

// Access site configuration
console.log(SITE_CONFIG.name); // 'Down Right Plumbing'
console.log(SITE_CONFIG.phone); // '+1-214-802-3042'
console.log(SITE_CONFIG.serviceAreas); // Array of cities
```

## Sitemap Configuration

### Dynamic Sitemap (`src/app/sitemap.ts`)

Automatically generates sitemap.xml with all pages.

**Includes:**
- All main pages (home, about, contact, etc.)
- All service pages (12 services)
- All service area pages (10 cities)
- Proper priorities and change frequencies

### next-sitemap Config (`next-sitemap.config.js`)

Additional sitemap generation with custom transform logic.

**Features:**
- Custom priorities per page type
- Change frequencies
- Robots.txt generation
- Additional paths configuration

## Robots.txt (`src/app/robots.ts`)

Dynamic robots.txt generation.

**Configuration:**
- Allows all search engines
- Disallows admin and API routes
- Links to sitemap
- Optimized for Google and Bing

## Complete Page Example

Here's a complete example of a service page with all SEO elements:

```tsx
// app/services/drain-cleaning/page.tsx
import { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/seo-utils';
import {
  ServiceJsonLd,
  FAQJsonLd,
  Breadcrumbs
} from '@/components/seo';

export const metadata: Metadata = generateServiceMetadata(
  'Drain Cleaning',
  'Professional drain cleaning services in Rockwall, TX. Same-day service available. Licensed & insured plumbers.',
  '/services/drain-cleaning'
);

const breadcrumbs = [
  { name: 'Services', url: '/services' },
  { name: 'Drain Cleaning', url: '/services/drain-cleaning' }
];

const faqs = [
  {
    question: 'How much does drain cleaning cost?',
    answer: 'Drain cleaning costs vary based on the severity...'
  },
  {
    question: 'Do you offer emergency drain cleaning?',
    answer: 'Yes, we offer 24/7 emergency drain cleaning services...'
  }
];

export default function DrainCleaningPage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceJsonLd
        name="Drain Cleaning Services"
        description="Professional drain cleaning for homes and businesses in Rockwall, TX"
        serviceType="Plumbing"
        url="https://downrightplumbingtx.com/services/drain-cleaning"
      />
      <FAQJsonLd questions={faqs} />

      {/* Page Content */}
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />
        
        <h1>Drain Cleaning Services in Rockwall, TX</h1>
        
        {/* Your page content */}
      </div>
    </>
  );
}
```

## Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://downrightplumbingtx.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_BING_VERIFICATION=your-bing-verification-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-verification-code
```

## Build Process

The sitemap is automatically generated after each build:

```bash
npm run build
# This runs: next build && next-sitemap
```

The generated sitemap will be available at:
- `/sitemap.xml`
- `/robots.txt`

## Testing

### Test Schema Markup

1. Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your page URL
3. Verify all schemas are valid

### Test Sitemap

1. Build the project: `npm run build`
2. Start the server: `npm start`
3. Visit `http://localhost:3000/sitemap.xml`
4. Verify all URLs are present

### Test Robots.txt

Visit `http://localhost:3000/robots.txt` to verify configuration.

## Best Practices

1. **Always include LocalBusinessJsonLd** in your main layout
2. **Use ServiceJsonLd** on all service pages
3. **Add FAQJsonLd** when you have FAQ sections
4. **Include Breadcrumbs** on all non-homepage pages
5. **Use generateMetadata helpers** for consistent metadata
6. **Keep descriptions under 160 characters**
7. **Use descriptive, keyword-rich titles**
8. **Update SITE_CONFIG** in seo-utils.ts with actual business info

## Performance

All schema components render as script tags in the HTML head, which:
- Don't block page rendering
- Are immediately parseable by search engines
- Have minimal performance impact
- Are automatically included in SSR

## Troubleshooting

**Schema not showing in Google Search Console:**
- Wait 24-48 hours after deployment
- Use the Rich Results Test tool to verify
- Check for JSON-LD syntax errors

**Sitemap not updating:**
- Ensure postbuild script runs after build
- Check next-sitemap.config.js configuration
- Verify all routes are defined in sitemap.ts

**Breadcrumbs not displaying:**
- Ensure component is client-side ('use client')
- Check that items array is properly formatted
- Verify lucide-react is installed
