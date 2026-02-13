"use client";

import Link from "next/link";


import { Phone, Mail, Clock, Heart, Shield, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const services = [
  { title: "Plumbing Repairs", href: "/services/plumbing-repairs" },
  { title: "Drain Cleaning", href: "/services/drain-cleaning" },
  { title: "Water Heaters", href: "/services/water-heater-repair" },
  { title: "Leak Detection", href: "/services/leak-detection" },
  { title: "Sewer & Water Lines", href: "/services/sewer-line-repair" },
  { title: "Faucets & Fixtures", href: "/services/faucet-installation" },
];

const serviceAreas = [
  { title: "Rockwall, TX", href: "/service-areas/rockwall" },
  { title: "Heath, TX", href: "/service-areas/heath" },
  { title: "Royse City, TX", href: "/service-areas/royse-city" },
  { title: "Fate, TX", href: "/service-areas/fate" },
  { title: "Rowlett, TX", href: "/service-areas/rowlett" },
  { title: "View All Areas", href: "/service-areas" },
];

const trustBadges = [
  { icon: Shield, label: "Licensed" },
  { icon: Shield, label: "Insured" },
  { icon: Shield, label: "Bonded" },
  { icon: Award, label: "20+ Years Exp." },
  { icon: Star, label: "5-Star Google" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-brand-primary to-blue-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Need Professional Plumbing Services?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-primary hover:bg-gray-100 text-lg font-semibold rounded-full px-8"
            >
              <a href="tel:2148023042" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: (214) 802-3042
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg font-semibold rounded-full px-8"
            >
              <Link href="/contact">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Down Right Plumbing</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Professional plumbing services with heart. Serving the Rockwall, TX area with integrity,
              expertise, and a commitment to excellence.
            </p>
            <div className="flex gap-3">
              {trustBadges.slice(0, 3).map((badge, index) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-1 text-xs hover:scale-110 transition-transform"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <badge.icon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <span className="text-gray-500 text-[10px]">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-brand-accent transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-gray-400 hover:text-brand-accent transition-colors text-sm"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:2148023042"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-accent transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>(214) 802-3042</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:dougw@downrightplumbingtx.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-accent transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>dougw@downrightplumbingtx.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-accent">Business Hours</p>
                  <p className="text-xs mt-1">Monday-Friday: 8:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Down Right Plumbing. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for
            the Down syndrome community
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
