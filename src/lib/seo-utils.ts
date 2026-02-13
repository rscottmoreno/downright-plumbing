import { Metadata } from 'next';

// Site configuration
export const SITE_CONFIG = {
  name: 'Down Right Plumbing',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://downrightplumbingtx.com',
  description: 'Professional plumbing services in Rockwall, TX and surrounding areas. Licensed & insured plumbers serving Monday-Friday, 8 AM - 5 PM.',
  phone: '+1-214-802-3042',
  email: 'dougw@downrightplumbingtx.com',
  serviceArea: {
    city: 'Rockwall',
    state: 'TX',
    country: 'US'
  },
  social: {
    facebook: 'https://www.facebook.com/downrightplumbing',
    instagram: 'https://www.instagram.com/downrightplumbing',
    twitter: 'https://twitter.com/downrightplumb'
  },
  serviceAreas: [
    'Rockwall',
    'Heath',
    'Royse City',
    'Fate',
    'McLendon-Chisholm',
    'Rowlett',
    'Garland',
    'Wylie',
    'Mesquite',
    'Forney'
  ]
};

// OpenGraph image dimensions
export const OG_IMAGE = {
  width: 1200,
  height: 630,
  type: 'image/png'
};

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
}

/**
 * Generate metadata for a page
 */
export function generateMetadata({
  title,
  description = SITE_CONFIG.description,
  canonical,
  ogImage,
  noIndex = false,
  keywords = [],
  alternates
}: GenerateMetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const url = canonical ? `${SITE_CONFIG.url}${canonical}` : SITE_CONFIG.url;
  const imageUrl = ogImage || `${SITE_CONFIG.url}/og-image.png`;

  return {
    title: pageTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    applicationName: SITE_CONFIG.name,
    robots: noIndex
      ? {
          index: false,
          follow: false
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
          }
        },
    openGraph: {
      type: 'website',
      siteName: SITE_CONFIG.name,
      title: pageTitle,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: title || SITE_CONFIG.name
        }
      ],
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [imageUrl],
      creator: '@downrightplumb'
    },
    alternates: alternates || {
      canonical: url
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || ''
      }
    }
  };
}

/**
 * Generate metadata for service pages
 */
export function generateServiceMetadata(
  serviceName: string,
  description: string,
  canonical: string
): Metadata {
  const keywords = [
    serviceName,
    'plumbing services',
    'Rockwall TX',
    'professional plumbing',
    'licensed plumber',
    ...SITE_CONFIG.serviceAreas.map(area => `${serviceName} ${area}`)
  ];

  return generateMetadata({
    title: `${serviceName} Services in Rockwall, TX`,
    description,
    canonical,
    keywords
  });
}

/**
 * Generate metadata for service area pages
 */
export function generateServiceAreaMetadata(
  areaName: string,
  description: string,
  canonical: string
): Metadata {
  const keywords = [
    `plumber ${areaName}`,
    `plumbing services ${areaName}`,
    `professional plumber ${areaName}`,
    'licensed plumber',
    'Rockwall TX plumber'
  ];

  return generateMetadata({
    title: `Plumber in ${areaName}, TX - Professional Service`,
    description,
    canonical,
    keywords
  });
}

/**
 * Generate OpenGraph image URL with dynamic text
 */
export function generateOgImageUrl(title: string, subtitle?: string): string {
  const params = new URLSearchParams({
    title,
    ...(subtitle && { subtitle })
  });

  return `${SITE_CONFIG.url}/api/og?${params.toString()}`;
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
}

/**
 * Generate structured data for a service
 */
export function generateServiceStructuredData(
  serviceName: string,
  description: string,
  serviceType: string,
  url: string
) {
  return {
    name: serviceName,
    description,
    serviceType,
    provider: {
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone
    },
    areaServed: SITE_CONFIG.serviceAreas,
    url
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    questions: faqs
  };
}

/**
 * Convert pathname to breadcrumb items
 */
export function pathnameToBreadcrumbs(pathname: string) {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [];

  let currentPath = '';
  for (const path of paths) {
    currentPath += `/${path}`;
    
    // Format the path name
    const name = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      name,
      url: `${SITE_CONFIG.url}${currentPath}`
    });
  }

  return breadcrumbs;
}

/**
 * SEO-friendly slug generator
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncate text for meta descriptions
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  
  return text.slice(0, maxLength - 3).trim() + '...';
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(pathname: string): string {
  // Remove trailing slash except for homepage
  const cleanPath = pathname === '/' ? pathname : pathname.replace(/\/$/, '');
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * Check if page should be indexed
 */
export function shouldIndexPage(pathname: string): boolean {
  const noIndexPaths = ['/admin', '/api', '/404', '/500', '/private'];
  return !noIndexPaths.some(path => pathname.startsWith(path));
}

/**
 * Get page priority for sitemap
 */
export function getPagePriority(pathname: string): number {
  if (pathname === '/') return 1.0;
  if (pathname.startsWith('/services')) return 0.9;
  if (pathname.startsWith('/service-areas')) return 0.8;
  if (['/about', '/contact', '/emergency'].includes(pathname)) return 0.8;
  if (pathname.startsWith('/blog')) return 0.6;
  return 0.7;
}

/**
 * Get change frequency for sitemap
 */
export function getChangeFrequency(pathname: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  if (pathname === '/') return 'daily';
  if (pathname.startsWith('/services')) return 'weekly';
  if (pathname.startsWith('/service-areas')) return 'monthly';
  if (pathname.startsWith('/blog')) return 'monthly';
  return 'monthly';
}
