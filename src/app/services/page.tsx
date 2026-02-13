import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/shared/service-card';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, CheckCircle2, Clock, Award, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Plumbing Services in Rockwall, TX | Down Right Plumbing',
  description: 'Professional plumbing services in Rockwall and the DFW area. From repairs to installations, drain cleaning to repiping, we handle all your plumbing needs with expert care. Call (214) 802-3042.',
  openGraph: {
    title: 'Complete Plumbing Services in Rockwall, TX | Down Right Plumbing',
    description: 'Professional plumbing services in Rockwall and the DFW area. From repairs to installations, drain cleaning to repiping, we handle all your plumbing needs with expert care. Call (214) 802-3042.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Our Complete Plumbing Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Expert plumbing solutions for every need in Rockwall, TX, and the DFW area. From repairs to new installations, we're your trusted plumbing partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Quote
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
                  (214) 802-3042
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p className="font-semibold text-brand-text-primary">Call for Service</p>
                <p className="text-sm text-brand-text-secondary">Same-Day Service</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p className="font-semibold text-brand-text-primary">Licensed & Insured</p>
                <p className="text-sm text-brand-text-secondary">Fully Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p className="font-semibold text-brand-text-primary">20+ Years</p>
                <p className="text-sm text-brand-text-secondary">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p className="font-semibold text-brand-text-primary">Upfront Pricing</p>
                <p className="text-sm text-brand-text-secondary">No Surprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text-primary mb-4">
              Professional Plumbing Services
            </h2>
            <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto">
              From routine maintenance to complex installations, your plumber delivers quality workmanship and reliable solutions for every plumbing need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services/${service.slug}`}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Why Choose Down Right Plumbing?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Expert Plumber',
                  description: 'Doug brings over 20 years of experience to every job, ensuring quality workmanship you can trust.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Upfront Pricing',
                  description: 'We provide detailed estimates before starting work. No hidden fees, no surprise charges—just honest, transparent pricing.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Same-Day Service',
                  description: "Most plumbing issues can't wait. We offer same-day service throughout Rockwall and the DFW area. Call us and we'll get to you as quickly as possible."
                },
                {
                  icon: CheckCircle2,
                  title: 'Clear Communication',
                  description: 'We keep you informed throughout the entire repair process, from diagnosis to completion, so you always know what to expect.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Latest Equipment',
                  description: 'We invest in advanced plumbing technology including video inspection, leak detection equipment, and hydro jetting systems.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Respectful Service',
                  description: 'We treat your home with care, using floor protection, maintaining clean work areas, and completing thorough cleanup.'
                }
              ].map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-text-primary mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-brand-text-secondary">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-heading font-bold text-brand-text-primary mb-6">
              Comprehensive Plumbing Services in Rockwall, TX
            </h2>
            
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              At Down Right Plumbing, we understand that your home's plumbing system is essential to your daily comfort and quality of life. That's why we've built our reputation on providing reliable, professional plumbing services throughout Rockwall, Heath, Fate, Royse City, McLendon-Chisholm, and the entire DFW area. Whether you're dealing with an urgent plumbing issue or planning a renovation that requires expert installation, Doug brings the expertise and dedication needed to deliver lasting results.
            </p>

            <p className="text-brand-text-secondary leading-relaxed mb-6">
              Our comprehensive service offerings cover every aspect of residential and commercial plumbing. From urgent plumbing repairs to scheduled maintenance that prevents problems before they start, we're equipped to handle any plumbing challenge. Doug arrives in a fully-stocked service vehicle with the tools and parts needed to resolve most issues in a single visit, saving you time and minimizing disruption to your routine.
            </p>

            <h3 className="text-2xl font-heading font-bold text-brand-text-primary mb-4 mt-8">
              Reliable Plumbing Service When You Need It
            </h3>
            
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              At Down Right Plumbing, when you call, you'll speak with a real person who can schedule service at a convenient time. We offer same-day service availability for urgent situations like burst pipes, sewer backups, water heater failures, and other pressing plumbing issues. Doug responds promptly with the professionalism and expertise you need.
            </p>

            <h3 className="text-2xl font-heading font-bold text-brand-text-primary mb-4 mt-8">
              Installation and Replacement Expertise
            </h3>
            
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              Whether you're upgrading fixtures during a renovation or replacing aging equipment before it fails, professional installation ensures optimal performance, longevity, and warranty protection. Our installation services include water heaters (traditional and tankless), toilets, faucets, garbage disposals, sinks, bathtubs, showers, and complete fixture packages. We handle all aspects of installation from permits and inspections to final testing and cleanup, ensuring code compliance and your complete satisfaction.
            </p>

            <h3 className="text-2xl font-heading font-bold text-brand-text-primary mb-4 mt-8">
              Drain and Sewer Solutions
            </h3>
            
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              Slow drains and clogged sewer lines disrupt your home and create unpleasant situations. Our drain cleaning services use professional equipment including motorized drain augers and powerful hydro jetting systems to clear even the most stubborn blockages. We also provide video camera inspection of sewer lines to identify problems like tree root intrusion, pipe deterioration, and bellied sections, allowing for targeted repairs rather than guesswork. For serious sewer line issues, we offer both traditional repair methods and modern trenchless solutions that minimize property disruption.
            </p>

            <h3 className="text-2xl font-heading font-bold text-brand-text-primary mb-4 mt-8">
              Water Line and Repiping Services
            </h3>
            
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              If your home has aging pipes causing frequent leaks, discolored water, or low pressure, repiping may be the most cost-effective long-term solution. We provide complete repiping services using modern materials like PEX that offer superior durability and corrosion resistance. Our efficient repiping process minimizes wall openings and disruption while delivering decades of reliable service. We also repair and replace water lines, including challenging slab leak repairs that require precise detection and targeted access.
            </p>

            <h3 className="text-2xl font-heading font-bold text-brand-text-primary mb-4 mt-8">
              Serving the Rockwall Area with Pride
            </h3>
            
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              As a locally-focused plumbing company, we're proud to serve homeowners and businesses throughout Rockwall County and the surrounding DFW communities. We understand the unique characteristics of homes in our area, from foundation types common to Texas to water quality issues specific to our region. This local expertise, combined with a commitment to customer service and quality workmanship, makes Down Right Plumbing the right choice for homeowners who want honest, reliable plumbing service.
            </p>

            <p className="text-brand-text-secondary leading-relaxed">
              Whether you need emergency repairs, routine maintenance, new installations, or major plumbing projects, Down Right Plumbing delivers the professional service and lasting results you deserve. Contact us today to experience the difference that expertise, integrity, and dedication make in plumbing services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Experience Professional Plumbing Service?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Contact Down Right Plumbing today for expert service throughout Rockwall and the DFW area. We're ready to help with all your plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule Service Now
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
        </div>
      </section>
    </>
  );
}
