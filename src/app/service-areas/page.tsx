import { Metadata } from "next";
import { Hero, CityGrid, CTASection } from "@/components/sections";
import { citiesData, getCitiesForGrid } from "@/data/cities";
import { MapPin, Clock, Shield, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Service Areas - Rockwall & DFW Metroplex | Down Right Plumbing",
  description:
    "Down Right Plumbing serves Rockwall and 24+ cities throughout the DFW metroplex with professional plumbing services. Find your area and schedule service today!",
  openGraph: {
    title: "Service Areas - Rockwall & DFW Metroplex | Down Right Plumbing",
    description:
      "Professional plumbing services throughout Rockwall, Heath, Fate, Royse City, Garland, and 20+ more DFW cities. Monday-Friday 8 AM - 5 PM.",
    type: "website",
    url: "https://downrightplumbingtx.com/service-areas",
  },
};

export default function ServiceAreasPage() {
  const cities = getCitiesForGrid();

  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="service"
        title="Service Areas - Rockwall & DFW Metroplex"
        subtitle="Professional Plumbing Throughout the Area"
        description="Serving 24+ cities with a licensed plumber and upfront pricing. Monday-Friday 8 AM - 5 PM. Find your city below."
        showCTA={true}
        ctaText="Call for Service"
        ctaHref="tel:+12148023042"
      />

      {/* Service Highlights Bar */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 mb-2" aria-hidden="true" />
              <p className="font-bold text-lg">24+ Cities</p>
              <p className="text-sm text-white/90">Throughout DFW</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="w-8 h-8 mb-2" aria-hidden="true" />
              <p className="font-bold text-lg">Mon-Fri 8-5</p>
              <p className="text-sm text-white/90">Regular Hours</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-8 h-8 mb-2" aria-hidden="true" />
              <p className="font-bold text-lg">Licensed</p>
              <p className="text-sm text-white/90">Bonded & Insured</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="w-8 h-8 mb-2" aria-hidden="true" />
              <p className="font-bold text-lg">Top Rated</p>
              <p className="text-sm text-white/90">Local Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                Our Coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-text-primary mt-3 mb-6">
                Comprehensive Plumbing Service Throughout DFW
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Down Right Plumbing proudly serves Rockwall and more than 24 cities throughout the Dallas-Fort Worth metroplex. Based in Rockwall, our strategic location allows us to provide rapid response to communities throughout Rockwall County, Dallas County, and beyond.
              </p>

              <h3 className="text-2xl font-bold text-brand-text-primary mt-8 mb-4">
                Why Choose Local Plumbing Experts?
              </h3>

              <p>
                When you choose Down Right Plumbing, you're not just getting a plumbing company—you're partnering with local professionals who understand your community. We know the unique plumbing challenges each area faces, from hard water issues near Lake Ray Hubbard to aging infrastructure in established neighborhoods to builder-grade systems in rapidly growing developments.
              </p>

              <p>
                Our local presence means faster response times, typically arriving within 30-60 minutes throughout our primary service area. We're familiar with local building codes, permitting requirements, and the specific plumbing considerations of each community we serve. We're available Monday-Friday 8 AM - 5 PM.
              </p>

              <h3 className="text-2xl font-bold text-brand-text-primary mt-8 mb-4">
                Primary Service Areas
              </h3>

              <p>
                We provide comprehensive plumbing services to Rockwall County communities including Rockwall (our home base), Heath, Fate, Royse City, McLendon-Chisholm, and Mobile City. These communities receive priority scheduling and the fastest response times, typically within 30-45 minutes.
              </p>

              <h3 className="text-2xl font-bold text-brand-text-primary mt-8 mb-4">
                Extended Service Area
              </h3>

              <p>
                Beyond Rockwall County, we proudly serve neighboring communities throughout the eastern DFW metroplex including Rowlett, Garland, Sachse, Wylie, Murphy, Sunnyvale, Mesquite, Forney, and many others. We also extend service to portions of Collin County including Allen, McKinney, and Plano, as well as select communities in Hunt County.
              </p>

              <p>
                Each city we serve receives the same professional expertise, transparent pricing, and commitment to customer satisfaction that has built our reputation throughout the region. Whether you're in downtown Rockwall or on a rural property in Caddo Mills, you can count on Down Right Plumbing for expert plumbing service.
              </p>

              <h3 className="text-2xl font-bold text-brand-text-primary mt-8 mb-4">
                Comprehensive Services in Every Community
              </h3>

              <p>
                No matter which community you call home, Down Right Plumbing provides complete plumbing services including:
              </p>

              <ul className="space-y-2 ml-6">
                <li><strong>Water Heater Services:</strong> Installation, repair, and replacement of traditional tank and tankless water heaters from all major manufacturers.</li>
                <li><strong>Drain & Sewer Services:</strong> Professional drain cleaning, video camera inspection, and sewer line repair including trenchless options.</li>
                <li><strong>Leak Detection & Repair:</strong> Advanced electronic leak detection including hard-to-find slab leaks, with efficient repair solutions.</li>
                <li><strong>Repiping Services:</strong> Complete or partial home repiping to replace corroded galvanized pipes or aging plumbing systems.</li>
                <li><strong>Fixture Installation:</strong> Kitchen and bathroom fixture upgrades including faucets, toilets, showers, tubs, and more.</li>
                <li><strong>Water Treatment:</strong> Whole-house water softeners, filtration systems, and reverse osmosis drinking water systems.</li>
                <li><strong>Outdoor Plumbing:</strong> Irrigation systems, outdoor kitchens, pool plumbing, and hose bib installation.</li>
                <li><strong>Commercial Plumbing:</strong> Maintenance contracts and installations for businesses throughout our service area.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-text-primary mt-8 mb-4">
                Community Commitment
              </h3>

              <p>
                We're more than just a service company—we're invested in the communities we serve. We support local schools, sponsor youth sports teams, and participate in community events throughout our service area. When you choose Down Right Plumbing, you're supporting a local business that gives back to the community you love.
              </p>

              <p>
                Our reputation has been built one satisfied customer at a time, through honest service, fair pricing, and quality workmanship. We maintain this reputation by treating every home and business with the care and respect it deserves, whether it's a routine fixture replacement or a major repair project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <CityGrid
        title="Find Your City"
        subtitle="Service Locations"
        description="Click on your city to learn more about our plumbing services in your area"
        cities={cities}
        columns={4}
        className="bg-gray-50"
      />

      {/* Service Area Map Visual */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                Coverage Map
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-text-primary mt-3 mb-4">
                Serving Communities Throughout the Metroplex
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Strategically based in Rockwall for optimal coverage throughout Rockwall County and the eastern DFW area
              </p>
            </div>

            {/* Map Placeholder - Can be replaced with actual interactive map */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-12">
                <div className="h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl">
                    {citiesData.slice(0, 16).map((city) => (
                      <div
                        key={city.slug}
                        className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:border-brand-primary hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm font-medium text-gray-700">
                            {city.name}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-6">
                          {city.distance}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Don't see your city listed? Contact us to confirm service availability in your area.
              </p>
              <Badge variant="outline" className="text-base px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                Headquartered in Rockwall, TX
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="standard"
        title="Ready to Experience Local Plumbing Excellence?"
        description="Contact Down Right Plumbing today for professional plumbing service in your community. Monday-Friday 8 AM - 5 PM."
        primaryButtonText="Schedule Service"
        primaryButtonHref="/contact"
        showPhoneButton={true}
      />

      {/* Emergency CTA */}
      <CTASection
        variant="emergency"
        title="Need Plumbing Service in Your Area?"
        description="Call us for professional plumbing service throughout our service area. Monday-Friday 8 AM - 5 PM."
        primaryButtonText="Call Now"
        primaryButtonHref="tel:+12148023042"
        showPhoneButton={true}
      />
    </>
  );
}
