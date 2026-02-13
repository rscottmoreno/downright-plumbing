"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Menu,
  ChevronDown,
  Heart,
  Wrench,
  Droplets,
  Flame,
  Search,
  Grip,
  Droplet,
  MapPin,
  Star,
  Shield,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  { title: "Plumbing Repairs", href: "/services/plumbing-repairs", description: "Expert repair services", icon: Wrench },
  { title: "Drain Cleaning", href: "/services/drain-cleaning", description: "Professional unclogging", icon: Droplets },
  { title: "Water Heaters", href: "/services/water-heater-repair", description: "Repair & installation", icon: Flame },
  { title: "Leak Detection", href: "/services/leak-detection", description: "Advanced technology", icon: Search },
  { title: "Sewer & Water Lines", href: "/services/sewer-line-repair", description: "Repair & replacement", icon: Grip },
  { title: "Faucets & Fixtures", href: "/services/faucet-installation", description: "Sinks, faucets & more", icon: Droplet },
];

const serviceAreas = [
  { title: "Rockwall", href: "/service-areas/rockwall" },
  { title: "Heath", href: "/service-areas/heath" },
  { title: "Royse City", href: "/service-areas/royse-city" },
  { title: "Fate", href: "/service-areas/fate" },
  { title: "Rowlett", href: "/service-areas/rowlett" },
  { title: "View All Areas", href: "/service-areas" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/downright-logo.png"
                alt="Down Right Plumbing, LLC"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="flex items-start gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="w-8 h-8 rounded-md bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <service.icon className="w-4 h-4 text-amber-600" />
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Service Areas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-1 p-4">
                    {serviceAreas.map((area) => (
                      <li key={area.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={area.href}
                            className="flex items-center gap-2 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                            <div className="text-sm font-medium">{area.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/our-story">Our Story</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="tel:2148023042"
              className="hidden md:flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold text-lg">(214) 802-3042</span>
            </a>

            <Button
              asChild
              className="hidden md:flex bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-6 shadow-lg shadow-brand-red/30"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Service
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" aria-label="Open navigation menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[380px] overflow-y-auto p-0">
                {/* Mobile Menu Header */}
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-gray-100">
                  <SheetTitle className="flex items-center gap-2">
                    <span className="text-xl font-heading font-bold text-brand-primary">
                      Downright
                    </span>
                    <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                    <span className="text-xl font-heading text-brand-text-secondary">
                      Plumbing
                    </span>
                  </SheetTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs text-gray-500 font-medium">5.0 Google Rating</span>
                    <span className="text-xs text-gray-300">|</span>
                    <Shield className="h-3.5 w-3.5 text-brand-primary" />
                    <span className="text-xs text-gray-500 font-medium">Licensed & Insured</span>
                  </div>
                </SheetHeader>

                <nav className="flex flex-col">
                  {/* Main Nav Links */}
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 text-base font-semibold text-gray-900 hover:bg-blue-50 transition-colors border-b border-gray-50"
                  >
                    Home
                  </Link>

                  {/* Services Section - Collapsible */}
                  <MobileAccordion title="Services" defaultOpen>
                    <div className="grid gap-1 px-2 pb-3">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center flex-shrink-0 transition-colors">
                            <service.icon className="w-4.5 h-4.5 text-amber-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-900">{service.title}</span>
                            <span className="block text-xs text-gray-500">{service.description}</span>
                          </div>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-1 px-4 py-2.5 mt-1 text-sm font-semibold text-brand-primary hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        View All Services
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </MobileAccordion>

                  {/* Service Areas Section - Collapsible */}
                  <MobileAccordion title="Service Areas">
                    <div className="grid grid-cols-2 gap-1 px-2 pb-3">
                      {serviceAreas.slice(0, -1).map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{area.title}</span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/service-areas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-1 mx-2 mb-3 px-4 py-2.5 text-sm font-semibold text-brand-primary hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      View All Areas
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </MobileAccordion>

                  {/* Other Links */}
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 text-base font-semibold text-gray-900 hover:bg-blue-50 transition-colors border-b border-gray-50"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/our-story"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 text-base font-semibold text-gray-900 hover:bg-blue-50 transition-colors border-b border-gray-50"
                  >
                    Our Story
                    <Heart className="w-4 h-4 text-red-400 fill-red-400 ml-auto" />
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 text-base font-semibold text-gray-900 hover:bg-blue-50 transition-colors border-b border-gray-50"
                  >
                    Contact
                  </Link>

                  {/* CTA Section */}
                  <div className="mt-auto p-6 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 space-y-3">
                    <a
                      href="tel:2148023042"
                      className="flex items-center justify-center gap-2 w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors shadow-md"
                    >
                      <Phone className="h-5 w-5" />
                      Call (214) 802-3042
                    </a>

                    <Button
                      asChild
                      className="w-full bg-brand-red hover:bg-brand-red/90 text-white rounded-xl shadow-md shadow-brand-red/20 py-3.5 h-auto font-semibold"
                    >
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Service
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

/* Collapsible accordion for mobile menu sections */
function MobileAccordion({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-4 text-base font-semibold text-gray-900 hover:bg-blue-50 transition-colors"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown
          className={cn(
            "w-4 h-4 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="bg-gray-50/50">
          {children}
        </div>
      )}
    </div>
  );
}
