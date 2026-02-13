"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneButton } from "@/components/shared/phone-button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type HeroVariant = "home" | "service" | "city" | "about";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  variant?: HeroVariant;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  backgroundImage = "/images/hero-plumbing.jpg",
  variant = "home",
  showCTA = true,
  ctaText = "Schedule Service",
  ctaHref = "/contact",
  className,
}: HeroProps) {
  const variantStyles = {
    home: "min-h-[600px] md:min-h-[700px]",
    service: "min-h-[400px] md:min-h-[500px]",
    city: "min-h-[400px] md:min-h-[500px]",
    about: "min-h-[450px] md:min-h-[550px]",
  };

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        variantStyles[variant],
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl">
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-brand-accent font-semibold text-sm md:text-base uppercase tracking-wider mb-4"
            >
              {subtitle}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-heading mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white text-base md:text-lg px-8 py-6"
              >
                <a href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
              <PhoneButton
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white hover:text-brand-primary text-white border-white/30 backdrop-blur-sm text-base md:text-lg px-8 py-6"
                showText={true}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-background to-transparent z-[5]" />
    </section>
  );
}
