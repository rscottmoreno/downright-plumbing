/**
 * EXAMPLE PAGE - Demonstrates all reusable components
 * 
 * This file shows how to use all the components together.
 * You can copy sections from this file to build your actual pages.
 * 
 * To view this page, rename it to page.tsx or copy sections to your pages.
 */

"use client";

import {
  Hero,
  TrustBar,
  ServicesGrid,
  WhyChooseUs,
  TestimonialsCarousel,
  OurStoryTeaser,
  CTASection,
  FAQSection,
  CityGrid,
  RelatedServices,
} from "@/components/sections";

import { ContactForm, QuickScheduleForm } from "@/components/forms";

import {
  sampleServices,
  sampleTestimonials,
  sampleFAQs,
  sampleCities,
  homeHeroData,
} from "@/data/sample-data";

export default function ExamplePage() {
  return (
    <main className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <Hero
        variant="home"
        title="Professional Plumbing Services You Can Trust"
        subtitle="24/7 Emergency Service Available"
        description="Oklahoma's premier plumbing experts providing reliable, affordable solutions for homes and businesses."
        backgroundImage="/images/hero-plumbing.jpg"
        showCTA={true}
        ctaText="Schedule Service"
        ctaHref="/contact"
      />

      {/* ===== TRUST BAR (Stats) ===== */}
      <TrustBar />

      {/* ===== SERVICES GRID ===== */}
      <ServicesGrid
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive plumbing solutions for residential and commercial properties"
        services={sampleServices}
        columns={3}
      />

      {/* ===== WHY CHOOSE US ===== */}
      <WhyChooseUs
        title="Why Choose Down Right Plumbing?"
        subtitle="Our Commitment"
        description="We're dedicated to providing exceptional plumbing services that exceed your expectations."
      />

      {/* ===== TESTIMONIALS CAROUSEL ===== */}
      <TestimonialsCarousel
        title="What Our Customers Say"
        subtitle="Testimonials"
        description="Don't just take our word for it - hear from our satisfied customers"
        testimonials={sampleTestimonials}
      />

      {/* ===== OUR STORY TEASER ===== */}
      <OurStoryTeaser
        title="Our Story"
        description="Down Right Plumbing has been serving Oklahoma communities for over 15 years with integrity, expertise, and a commitment to excellence. We're a family-owned business that treats every customer like family."
        image="/images/team-photo.jpg"
        buttonText="Learn More About Us"
        buttonHref="/our-story"
      />

      {/* ===== CITY GRID ===== */}
      <CityGrid
        title="Areas We Serve"
        subtitle="Service Locations"
        description="Proud to serve communities throughout the Oklahoma City metro area"
        cities={sampleCities}
        columns={4}
      />

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-text-primary mt-3 mb-4">
              Schedule Your Service Today
            </h2>
            <p className="text-lg text-brand-text-secondary">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          <ContactForm
            onSuccess={() => {
              console.log("Form submitted successfully!");
              // You could close a modal, redirect, etc.
            }}
          />
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="FAQs"
        description="Find answers to common questions about our plumbing services"
        questions={sampleFAQs}
      />

      {/* ===== CTA SECTION ===== */}
      <CTASection
        variant="standard"
        title="Ready to Get Started?"
        description="Contact us today for reliable, professional plumbing services you can count on."
        primaryButtonText="Schedule Service"
        primaryButtonHref="/contact"
        showPhoneButton={true}
      />

      {/* ===== DIVIDER ===== */}
      <div className="h-px bg-gray-200" />

      {/* ===== EMERGENCY CTA VARIANT ===== */}
      <CTASection
        variant="emergency"
        title="Plumbing Emergency?"
        description="We're available 24/7 for urgent plumbing issues. Don't wait - call now!"
        primaryButtonText="Call Emergency Line"
        primaryButtonHref="tel:+14055550123"
        showPhoneButton={true}
      />

      {/* ===== DIVIDER ===== */}
      <div className="h-px bg-gray-200" />

      {/* ===== WARM CTA VARIANT ===== */}
      <CTASection
        variant="warm"
        title="Let's Work Together"
        description="Experience the difference of working with Oklahoma's trusted plumbing experts."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        showPhoneButton={true}
      />

      {/* ===== RELATED SERVICES (Example) ===== */}
      <RelatedServices
        title="Related Services"
        subtitle="You May Also Need"
        services={sampleServices.slice(0, 3)}
      />

      {/* ===== QUICK SCHEDULE FORM IN A SECTION ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-primary/5 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-text-primary mb-4">
              Quick Schedule Request
            </h2>
            <p className="text-lg text-brand-text-secondary">
              Need service fast? Fill out this quick form
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <QuickScheduleForm
              onSuccess={() => {
                console.log("Quick schedule form submitted!");
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
