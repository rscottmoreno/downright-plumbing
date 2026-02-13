import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getRelatedPosts } from '@/data/blog-posts';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | Down Right Plumbing`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      url: `https://downrightplumbingtx.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const postUrl = `https://downrightplumbingtx.com/blog/${post.slug}`;

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://downrightplumbingtx.com${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Down Right Plumbing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://downrightplumbingtx.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    }
  };

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-12 md:py-16">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="mb-6">
              <Breadcrumbs 
                items={[
                  { name: 'Blog', url: '/blog' },
                  { name: post.title, url: `/blog/${post.slug}` }
                ]}
                className="text-white/80 [&_a:hover]:text-white [&_svg]:text-white/60"
              />
            </div>

            {/* Category Badge */}
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {post.category}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <div>
                  <span className="font-semibold">{post.author.name}</span>
                  <span className="mx-2">•</span>
                  <span className="text-white/70">{post.author.role}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-brand-text-secondary leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-brand-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                {post.content.intro}
              </p>
            </div>

            {/* Article Sections */}
            <div className="space-y-10">
              {post.content.sections.map((section, index) => (
                <div key={index} className="scroll-mt-20" id={`section-${index}`}>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text-primary mb-4">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-brand-text-secondary leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Share Section */}
      <section className="py-12 border-y bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Share2 className="w-5 h-5 text-brand-primary" />
                <span className="font-heading font-semibold text-brand-text-primary">
                  Share this article:
                </span>
              </div>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                >
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                >
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                >
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                >
                  <a
                    href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${postUrl}`)}`}
                    aria-label="Share via Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-brand-primary to-brand-secondary text-white p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Need Professional Plumbing Service?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't let plumbing problems disrupt your life. Contact Down Right Plumbing today for expert service in Rockwall and throughout the DFW area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Schedule Service
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-brand-primary"
                  asChild
                >
                  <a href="tel:214-802-3042">
                    <Phone className="mr-2 w-5 h-5" />
                    Call (214) 802-3042
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
                Related Articles
              </h2>
              <p className="text-xl text-brand-text-secondary text-center mb-12 max-w-2xl mx-auto">
                Continue learning with these helpful plumbing resources
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug} 
                    href={`/blog/${relatedPost.slug}`}
                    className="block group"
                  >
                    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      {/* Featured Image Placeholder */}
                      <div className="relative h-40 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10">
                        <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors" />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-brand-primary text-white text-xs">
                            {relatedPost.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-lg font-heading font-bold text-brand-text-primary mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-brand-text-secondary mb-4 line-clamp-2 flex-grow">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-3 text-xs text-brand-text-secondary pt-4 border-t">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>

                        <div className="mt-4">
                          <span className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm group-hover:gap-3 transition-all">
                            Read More
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/blog">
                    View All Articles
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text-primary mb-6">
              Expert Plumbing Services in Rockwall, TX
            </h2>
            <p className="text-xl text-brand-text-secondary mb-8 max-w-2xl mx-auto">
              24/7 emergency service, licensed and insured plumbers, upfront pricing, and satisfaction guaranteed. Serving Rockwall, Heath, Fate, Royse City, and the entire DFW area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/services">
                  View Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
