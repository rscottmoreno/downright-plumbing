import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { ServiceJsonLd, FAQJsonLd } from '@/components/seo/json-ld';
import { FAQSection } from '@/components/sections/faq-section';
import { ServiceCard } from '@/components/shared/service-card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { getIconComponent } from '@/lib/icon-map';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} in Rockwall, TX | Downright Plumbing`,
    description: service.description,
    openGraph: {
      title: `${service.title} in Rockwall, TX | Downright Plumbing`,
      description: service.description,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = getIconComponent(service.icon);
  const relatedServicesData = services.filter((s) => 
    service.relatedServices.includes(s.slug)
  );

  return (
    <>
      {/* Schema Markup */}
      <ServiceJsonLd
        name={service.title}
        description={service.description}
        serviceType="Plumbing Service"
        url={`https://downrightplumbingtx.com/services/${service.slug}`}
        provider={{
          name: "Downright Plumbing",
          telephone: "+1-214-802-3042"
        }}
        areaServed={[
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
        ]}
      />
      <FAQJsonLd questions={service.faqs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumbs */}
            <div className="mb-6">
              <Breadcrumbs 
                items={[
                  { name: 'Services', url: '/services' },
                  { name: service.title, url: `/services/${service.slug}` }
                ]}
                className="text-white/80 [&_a:hover]:text-white [&_svg]:text-white/60"
              />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
                {service.title}
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-brand-primary" asChild>
                <a href="tel:214-802-3042">
                  <Phone className="mr-2 w-5 h-5" />
                  (214) 802-3042
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Mon-Fri 8AM-5PM</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-brand-text-secondary leading-relaxed">
                {service.content.intro}
              </p>
            </div>

            {/* Content Sections */}
            {service.content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-heading font-bold text-brand-text-primary mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-brand-text-secondary leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-brand-primary to-brand-secondary text-white p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact Downright Plumbing today for expert {service.title.toLowerCase()} services in Rockwall and the DFW area.
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

      {/* Service Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-brand-text-secondary text-center mb-12 max-w-2xl mx-auto">
              When you choose Downright Plumbing, you can expect professional service from start to finish.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: '1',
                  title: 'Contact Us',
                  description: 'Call, email, or fill out our contact form. We respond quickly and schedule service at your convenience.'
                },
                {
                  step: '2',
                  title: 'Assessment & Quote',
                  description: 'Our licensed plumber assesses your needs and provides upfront pricing before beginning any work.'
                },
                {
                  step: '3',
                  title: 'Expert Service',
                  description: 'We complete the work efficiently using quality materials and proven techniques that deliver lasting results.'
                },
                {
                  step: '4',
                  title: 'Satisfaction Guarantee',
                  description: 'We test our work thoroughly, clean up completely, and ensure your complete satisfaction.'
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        questions={service.faqs}
        title={`Frequently Asked Questions About ${service.title}`}
        subtitle="FAQs"
        description="Find answers to common questions about our plumbing services."
        className="bg-gray-50"
      />

      {/* Pricing Transparency */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Transparent Pricing You Can Trust
            </h2>
            <p className="text-xl text-brand-text-secondary text-center mb-12">
              At Downright Plumbing, we believe in upfront, honest pricing with no hidden fees or surprise charges.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Free Estimates',
                  description: 'We provide detailed, written estimates before beginning work so you know exactly what to expect.'
                },
                {
                  icon: CheckCircle2,
                  title: 'No Hidden Fees',
                  description: 'Our quotes include all costs—labor, materials, and any applicable fees. No surprises.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Competitive Rates',
                  description: 'We offer fair, competitive pricing while maintaining the highest standards of quality and service.'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServicesData.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Related Services
            </h2>
            <p className="text-xl text-brand-text-secondary text-center mb-12 max-w-2xl mx-auto">
              Explore our other professional plumbing services available throughout Rockwall and the DFW area.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedServicesData.map((relatedService, index) => (
                <ServiceCard
                  key={relatedService.slug}
                  title={relatedService.title}
                  description={relatedService.description}
                  icon={relatedService.icon}
                  href={`/services/${relatedService.slug}`}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text-primary mb-6">
              Experience the Downright Difference
            </h2>
            <p className="text-xl text-brand-text-secondary mb-8 max-w-2xl mx-auto">
              Professional {service.title.toLowerCase()} backed by years of experience, quality workmanship, and customer satisfaction. Serving Rockwall, Heath, Fate, Royse City, and throughout the DFW area.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Your Free Quote Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
