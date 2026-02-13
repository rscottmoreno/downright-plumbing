import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://downrightplumbingtx.com';
  const currentDate = new Date();

  // Get all service slugs from the services data
  const serviceSlugs = services.map(s => s.slug);

  // Define all service area pages
  const serviceAreas = [
    'rockwall',
    'heath',
    'fate',
    'royse-city',
    'mclendon-chisholm',
    'rowlett',
    'garland',
    'sachse',
    'wylie',
    'murphy',
    'plano',
    'allen',
    'mckinney',
    'forney',
    'mesquite',
    'sunnyvale',
    'lavon',
    'nevada',
    'caddo-mills',
    'greenville',
    'terrell',
    'dallas',
    'richardson',
    'lucas'
  ];

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }
  ];

  // Add service pages
  const serviceRoutes = serviceSlugs.map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9
  }));

  // Add service area pages
  const serviceAreaRoutes = serviceAreas.map(area => ({
    url: `${baseUrl}/service-areas/${area}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  // Add blog post pages
  const blogRoutes = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Combine all routes
  return [
    ...routes,
    ...serviceRoutes,
    ...serviceAreaRoutes,
    ...blogRoutes
  ];
}
