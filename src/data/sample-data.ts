/**
 * Sample data for reusable components
 * Use this as a reference for structuring your content data
 */

import {
  Wrench,
  Droplet,
  Flame,
  Wind,
  Zap,
  Factory,
} from "lucide-react";

// ===== SERVICES DATA =====
export const sampleServices = [
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning services to clear clogs and restore proper flow.",
    icon: Droplet,
    href: "/services/drain-cleaning",
  },
  {
    title: "Water Heater Services",
    description:
      "Installation, repair, and maintenance for all types of water heaters.",
    icon: Flame,
    href: "/services/water-heater-repair",
  },
  {
    title: "Leak Detection & Repair",
    description:
      "Advanced leak detection and efficient repair services to prevent water damage.",
    icon: Droplet,
    href: "/services/leak-detection",
  },
  {
    title: "Repiping",
    description:
      "Expert whole-home and partial repiping with modern materials.",
    icon: Wrench,
    href: "/services/repiping",
  },
  {
    title: "Sewer Line Services",
    description:
      "Comprehensive sewer line inspection, cleaning, and repair services.",
    icon: Factory,
    href: "/services/sewer-line-repair",
  },
  {
    title: "Plumbing Repairs",
    description:
      "Fast, reliable repairs for burst pipes, leaks, and urgent plumbing issues.",
    icon: Zap,
    href: "/services/plumbing-repairs",
  },
];

// ===== TESTIMONIALS DATA =====
export const sampleTestimonials = [
  {
    quote:
      "Down Right Plumbing saved the day! They responded quickly to our emergency and fixed our burst pipe professionally. Highly recommend!",
    author: "Sarah Johnson",
    role: "Homeowner, Edmond",
    rating: 5,
  },
  {
    quote:
      "Professional, courteous, and efficient. They installed our new water heater and explained everything clearly. Great experience!",
    author: "Michael Chen",
    role: "Business Owner, OKC",
    rating: 5,
  },
  {
    quote:
      "I've used Down Right Plumbing for several projects now. They're always on time, fair-priced, and do excellent work. My go-to plumbers!",
    author: "Jennifer Martinez",
    role: "Property Manager",
    rating: 5,
  },
  {
    quote:
      "Called them for a clogged drain and they came out the same day. The technician was knowledgeable and fixed it quickly. Very satisfied!",
    author: "Robert Thompson",
    role: "Homeowner, Norman",
    rating: 5,
  },
  {
    quote:
      "Outstanding service from start to finish. They repiped our entire house and it was a seamless experience. True professionals!",
    author: "Lisa Anderson",
    role: "Homeowner, Yukon",
    rating: 5,
  },
];

// ===== CITIES/LOCATIONS DATA =====
export const sampleCities = [
  { name: "Oklahoma City", href: "/locations/oklahoma-city", serviceCount: 12 },
  { name: "Edmond", href: "/locations/edmond", serviceCount: 12 },
  { name: "Norman", href: "/locations/norman", serviceCount: 10 },
  { name: "Yukon", href: "/locations/yukon", serviceCount: 8 },
  { name: "Moore", href: "/locations/moore", serviceCount: 10 },
  { name: "Midwest City", href: "/locations/midwest-city", serviceCount: 9 },
  { name: "Del City", href: "/locations/del-city", serviceCount: 8 },
  { name: "Mustang", href: "/locations/mustang", serviceCount: 7 },
];

// ===== FAQ DATA =====
export const sampleFAQs = [
  {
    question: "Do you offer 24/7 emergency plumbing services?",
    answer:
      "Yes! We provide round-the-clock emergency plumbing services 7 days a week. If you have a plumbing emergency, don't hesitate to call us anytime.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Oklahoma City and surrounding areas including Edmond, Norman, Yukon, Moore, Midwest City, and more. Contact us to confirm service in your area.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Down Right Plumbing is fully licensed, bonded, and insured. Our technicians are highly trained professionals with years of experience.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we offer free estimates for most plumbing projects. Contact us to schedule an appointment and we'll provide a detailed, upfront quote with no hidden fees.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, checks, and all major credit cards including Visa, MasterCard, American Express, and Discover.",
  },
  {
    question: "Do you warranty your work?",
    answer:
      "Yes, we stand behind our work with a comprehensive warranty. The specific warranty terms depend on the type of service, but we always guarantee customer satisfaction.",
  },
  {
    question: "How quickly can you respond to service calls?",
    answer:
      "For emergencies, we typically arrive within 1-2 hours. For scheduled appointments, we offer same-day or next-day service in most cases.",
  },
  {
    question: "What should I do if I have a plumbing emergency?",
    answer:
      "First, shut off the water supply if possible. Then call us immediately at our 24/7 emergency line. Our technician will provide guidance over the phone and dispatch help right away.",
  },
];

// ===== STATS DATA =====
export const sampleStats = [
  { value: 20, label: "Years Experience", suffix: "+" },
  { value: 5, label: "Star Google Rating", prefix: "" },
  { value: 5, label: "Days a Week Service" },
  { value: 100, label: "Satisfaction Guarantee", suffix: "%" },
];

// ===== WHY CHOOSE US DATA =====
// (Uses default reasons in the component, but you can override)
export const sampleReasons = [
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured for your protection and peace of mind.",
    icon: Wrench,
  },
  // Add more custom reasons if needed
];

// ===== RELATED SERVICES DATA =====
// Example for a specific service page
export const drainCleaningRelatedServices = [
  {
    title: "Video Camera Inspection",
    description:
      "Advanced camera inspection to diagnose drain and sewer line issues.",
    icon: Droplet,
    href: "/services/camera-inspection",
  },
  {
    title: "Hydro Jetting",
    description:
      "High-pressure water jetting to thoroughly clean pipes and remove buildup.",
    icon: Wind,
    href: "/services/hydro-jetting",
  },
  {
    title: "Sewer Line Repair",
    description:
      "Expert sewer line repair and replacement services for severe blockages.",
    icon: Factory,
    href: "/services/sewer-line-repair",
  },
];

// ===== HOMEPAGE HERO DATA =====
export const homeHeroData = {
  variant: "home" as const,
  title: "Professional Plumbing Services You Can Trust",
  subtitle: "Same-Day Service Available",
  description:
    "Rockwall's trusted plumber providing reliable, affordable solutions for homes and businesses.",
  backgroundImage: "/images/hero-plumbing.jpg",
  showCTA: true,
  ctaText: "Schedule Service",
  ctaHref: "/contact",
};

// ===== SERVICE PAGE HERO DATA =====
export const serviceHeroData = {
  variant: "service" as const,
  title: "Expert Drain Cleaning Services",
  subtitle: "Fast & Effective Solutions",
  description:
    "Professional drain cleaning services to clear clogs and restore proper flow to your plumbing system.",
  backgroundImage: "/images/drain-cleaning-hero.jpg",
  showCTA: true,
  ctaText: "Get a Free Quote",
  ctaHref: "/contact",
};

// ===== CITY PAGE HERO DATA =====
export const cityHeroData = {
  variant: "city" as const,
  title: "Plumbing Services in Oklahoma City",
  subtitle: "Your Local Plumbing Experts",
  description:
    "Trusted plumbing services for Oklahoma City residents and businesses. Available 24/7 for emergencies.",
  backgroundImage: "/images/okc-hero.jpg",
  showCTA: true,
  ctaText: "Schedule Service",
  ctaHref: "/contact",
};

// ===== EXAMPLE USAGE IN A PAGE =====
/*
import {
  Hero,
  TrustBar,
  ServicesGrid,
  TestimonialsCarousel,
  FAQSection,
  CTASection,
} from "@/components/sections";
import {
  sampleServices,
  sampleTestimonials,
  sampleFAQs,
  homeHeroData,
} from "@/data/sample-data";

export default function HomePage() {
  return (
    <>
      <Hero {...homeHeroData} />
      <TrustBar />
      <ServicesGrid services={sampleServices} />
      <TestimonialsCarousel testimonials={sampleTestimonials} />
      <FAQSection questions={sampleFAQs} />
      <CTASection variant="standard" />
    </>
  );
}
*/
