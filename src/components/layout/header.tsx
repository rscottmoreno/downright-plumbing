"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Menu, ChevronDown, Heart } from "lucide-react";
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
  { title: "Plumbing Repairs", href: "/services/plumbing-repairs", description: "Expert repair services" },
  { title: "Drain Cleaning", href: "/services/drain-cleaning", description: "Professional unclogging" },
  { title: "Water Heaters", href: "/services/water-heater-repair", description: "Repair & installation" },
  { title: "Leak Detection", href: "/services/leak-detection", description: "Advanced technology" },
  { title: "Sewer & Water Lines", href: "/services/sewer-line-repair", description: "Repair & replacement" },
  { title: "Faucets & Fixtures", href: "/services/faucet-installation", description: "Sinks, faucets & more" },
];

const serviceAreas = [
  { title: "Rockwall, TX", href: "/service-areas/rockwall" },
  { title: "Heath, TX", href: "/service-areas/heath" },
  { title: "Royse City, TX", href: "/service-areas/royse-city" },
  { title: "Fate, TX", href: "/service-areas/fate" },
  { title: "Rowlett, TX", href: "/service-areas/rowlett" },
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
                <Link href="/">
                  {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                  }
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
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
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
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
                  <ul className="grid w-[300px] gap-2 p-4">
                    {serviceAreas.map((area) => (
                      <li key={area.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={area.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">{area.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about">
                  {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                  }
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/our-story">
                  {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                  }
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Our Story
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact">
                  {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                  }
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
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
              className="hidden md:flex bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-6 shadow-lg shadow-brand-red/30 animate-pulse-slow"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Service
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <span className="text-xl font-heading font-bold text-brand-primary">
                      Downright
                    </span>
                    <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                    <span className="text-xl font-heading text-brand-text-secondary">
                      Plumbing
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-brand-primary transition-colors"
                  >
                    Home
                  </Link>

                  <div>
                    <h3 className="font-semibold text-brand-primary mb-2">Services</h3>
                    <div className="flex flex-col gap-2 ml-4">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm hover:text-brand-primary transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-brand-primary mb-2">Service Areas</h3>
                    <div className="flex flex-col gap-2 ml-4">
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm hover:text-brand-primary transition-colors"
                        >
                          {area.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-brand-primary transition-colors"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/our-story"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-brand-primary transition-colors"
                  >
                    Our Story
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-brand-primary transition-colors"
                  >
                    Contact
                  </Link>

                  <div className="pt-4 mt-4 border-t space-y-3">
                    <a
                      href="tel:2148023042"
                      className="flex items-center gap-2 text-brand-primary font-semibold text-lg"
                    >
                      <Phone className="h-5 w-5" />
                      (214) 802-3042
                    </a>

                    <Button
                      asChild
                      className="w-full bg-brand-red hover:bg-brand-red/90 text-white rounded-full shadow-lg shadow-brand-red/30"
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
