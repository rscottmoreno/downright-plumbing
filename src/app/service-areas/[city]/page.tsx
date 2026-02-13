import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCityBySlug,
  getAllCitySlugs,
  getCityMetadata,
} from "@/data/cities";
import {
  Hero,
  FAQSection,
  CTASection,
} from "@/components/sections";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { LocalBusinessJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import {
  Wrench,
  MapPin,
  Clock,
  Star,
  Phone,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Generate static params for all cities
export async function generateStaticParams() {
  const citySlugs = getAllCitySlugs();
  return citySlugs.map((slug) => ({
    city: slug,
  }));
}

// Generate metadata for each city page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  if (!cityData) {
    return {
      title: "City Not Found | Down Right Plumbing",
    };
  }

  const metadata = getCityMetadata(city);

  return {
    title: metadata?.title,
    description: metadata?.description,
    openGraph: {
      title: metadata?.title,
      description: metadata?.description,
      type: "website",
      url: `https://downrightplumbingtx.com/service-areas/${city}`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  // If city not found, show 404
  if (!cityData) {
    notFound();
  }

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Service Areas", url: "/service-areas" },
    { name: cityData.name, url: `/service-areas/${cityData.slug}` },
  ];

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <LocalBusinessJsonLd
        areaServed={[cityData.name]}
        address={{
          addressLocality: "Rockwall",
          addressRegion: "TX",
          addressCountry: "US",
        }}
      />
      <FAQJsonLd questions={cityData.faqs} />

      {/* Hero Section */}
      <Hero
        variant="city"
        title={`Trusted Plumber in ${cityData.fullName} — Down Right Plumbing`}
        subtitle={`Professional Plumbing Services in ${cityData.name}`}
        description={`Local, licensed plumbers serving ${cityData.name}. Just ${cityData.distance} from our Rockwall headquarters.`}
        showCTA={true}
        ctaText="Call Now for Service"
        ctaHref="tel:+12148023042"
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* City Info Bar */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" aria-hidden="true" />
              <span className="font-semibold">{cityData.distance}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" aria-hidden="true" />
              <span className="font-semibold">Call for Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" aria-hidden="true" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" aria-hidden="true" />
              <a
                href="tel:+12148023042"
                className="font-semibold hover:underline"
              >
                (214) 802-3042
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* City Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: cityData.content }}
              />
            </div>

            {/* Neighborhoods Served */}
            {cityData.neighborhoods && cityData.neighborhoods.length > 0 && (
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold font-heading text-brand-text-primary mb-6">
                  Neighborhoods We Serve in {cityData.name}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {cityData.neighborhoods.map((neighborhood, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <MapPin
                        className="w-4 h-4 text-brand-primary flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Issues */}
            {cityData.commonIssues && cityData.commonIssues.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold font-heading text-brand-text-primary mb-6">
                  Common Plumbing Issues in {cityData.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cityData.commonIssues.map((issue, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-brand-primary transition-colors"
                    >
                      <Wrench
                        className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-gray-700">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-text-primary mt-3 mb-4">
              Plumbing Services in {cityData.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions for {cityData.name} homeowners and businesses
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Plumbing Repairs", description: "Fast, reliable repairs for burst pipes, leaks, and urgent issues", href: "/services/plumbing-repairs" },
              { title: "Drain Cleaning", description: "Professional drain and sewer cleaning using advanced equipment", href: "/services/drain-cleaning" },
              { title: "Water Heater Services", description: "Installation, repair, and replacement of all water heater types", href: "/services/water-heater-repair" },
              { title: "Leak Detection", description: "Advanced technology to find hidden leaks and prevent damage", href: "/services/leak-detection" },
              { title: "Sewer Line Services", description: "Sewer line repair, replacement, and camera inspection", href: "/services/sewer-line-repair" },
              { title: "Gas Line Services", description: "Safe gas line installation, repair, and leak detection", href: "/services/gas-line-services" },
            ].map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-brand-primary/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="w-6 h-6 text-brand-primary" />
                  <h3 className="text-lg font-bold text-brand-text-primary">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {cityData.testimonial && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                  Testimonial
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-text-primary mt-3">
                  What Our {cityData.name} Customers Say
                </h2>
              </div>

              <Card className="bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 border-2 border-brand-primary/20">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    &ldquo;{cityData.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="text-center">
                    <p className="font-bold text-brand-text-primary text-lg">
                      {cityData.testimonial.author}
                    </p>
                    {cityData.testimonial.neighborhood && (
                      <p className="text-gray-600">
                        {cityData.testimonial.neighborhood}
                      </p>
                    )}
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      )}


      {/* CTA Section */}
      <CTASection
        variant="standard"
        title={`Ready for Reliable Plumbing Service in ${cityData.name}?`}
        description={`Contact Down Right Plumbing today for professional plumbing service throughout ${cityData.name}. Call (214) 802-3042.`}
        primaryButtonText="Schedule Service"
        primaryButtonHref="/contact"
        showPhoneButton={true}
      />

      {/* FAQ Section */}
      <FAQSection
        title={`${cityData.name} Plumbing FAQs`}
        subtitle="Common Questions"
        description={`Answers to frequently asked questions about plumbing service in ${cityData.name}`}
        questions={cityData.faqs}
        className="bg-white"
      />

      {/* Emergency CTA */}
      <CTASection
        variant="emergency"
        title={`${cityData.name} Plumbing Issue?`}
        description={`Call us for professional plumbing service in ${cityData.name}. Call (214) 802-3042.`}
        primaryButtonText="Call Now"
        primaryButtonHref="tel:+12148023042"
        showPhoneButton={true}
      />
    </>
  );
}
