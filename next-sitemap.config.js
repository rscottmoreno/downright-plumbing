/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://downrightplumbingtx.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/404', '/500'],
  
  // robots.txt options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/']
      }
    ],
    additionalSitemaps: [
      'https://downrightplumbingtx.com/sitemap.xml'
    ]
  },

  // Transform function to customize each URL entry
  transform: async (config, path) => {
    // Default values
    let priority = 0.7;
    let changefreq = 'weekly';

    // Homepage
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Services pages
    else if (path.startsWith('/services')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Service areas pages
    else if (path.startsWith('/service-areas')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // About, Contact, etc.
    else if (
      path === '/about' || 
      path === '/contact' ||
      path === '/our-story'
    ) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // Blog posts
    else if (path.startsWith('/blog')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? []
    };
  },

  // Additional paths to include
  additionalPaths: async (config) => {
    const result = [];

    // Add specific service pages
    const services = [
      'drain-cleaning',
      'water-heater-repair',
      'leak-detection',
      'pipe-repair',
      'sewer-line-repair',
      'toilet-repair',
      'faucet-repair',
      'garbage-disposal',
      'sump-pump',
      'backflow-prevention',
      'gas-line-services',
      'repiping'
    ];

    services.forEach(service => {
      result.push({
        loc: `/services/${service}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString()
      });
    });

    // Add service area pages
    const serviceAreas = [
      'rockwall',
      'heath',
      'royse-city',
      'fate',
      'mclendon-chisholm',
      'rowlett',
      'garland',
      'wylie',
      'mesquite',
      'forney'
    ];

    serviceAreas.forEach(area => {
      result.push({
        loc: `/service-areas/${area}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      });
    });

    return result;
  }
};
