"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneButton } from "@/components/shared/phone-button";
import { cn } from "@/lib/utils";

type CTAVariant = "standard" | "emergency" | "warm";

interface CTASectionProps {
  variant?: CTAVariant;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  showPhoneButton?: boolean;
  className?: string;
}

export function CTASection({
  variant = "standard",
  title,
  description,
  primaryButtonText = "Get Started",
  primaryButtonHref = "/contact",
  showPhoneButton = true,
  className,
}: CTASectionProps) {
  const variants = {
    standard: {
      bg: "bg-gradient-to-r from-brand-primary to-brand-secondary",
      title: title || "Ready to Get Started?",
      description:
        description ||
        "Contact us today for reliable, professional plumbing services.",
      icon: null,
    },
    emergency: {
      bg: "bg-gradient-to-r from-red-600 to-orange-600",
      title: title || "Urgent Plumbing Issue?",
      description:
        description || "Call us during business hours (Mon-Fri, 8 AM - 5 PM) for prompt service!",
      icon: Clock,
    },
    warm: {
      bg: "bg-gradient-to-br from-blue-50 to-brand-primary/10 border-t border-b border-brand-primary/20",
      title: title || "Let's Work Together",
      description:
        description ||
        "Experience the difference of working with Oklahoma's trusted plumbing experts.",
      icon: null,
      textDark: true,
    },
  };

  const config = variants[variant];
  const Icon = config.icon;
  const isWarm = variant === "warm";

  return (
    <section className={cn("py-16 md:py-20", config.bg, className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {Icon && (
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
            </div>
          )}

          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 md:mb-6",
              isWarm ? "text-brand-text-primary" : "text-white"
            )}
          >
            {config.title}
          </h2>

          <p
            className={cn(
              "text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto",
              isWarm ? "text-brand-text-secondary" : "text-white/90"
            )}
          >
            {config.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className={cn(
                "text-base md:text-lg px-8 py-6",
                isWarm
                  ? "bg-brand-primary hover:bg-brand-primary/90 text-white"
                  : "bg-white text-brand-primary hover:bg-white/90"
              )}
            >
              <a href={primaryButtonHref}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>

            {showPhoneButton && (
              <PhoneButton
                variant={isWarm ? "outline" : "outline"}
                size="lg"
                className={cn(
                  "text-base md:text-lg px-8 py-6",
                  isWarm
                    ? "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                    : "bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand-primary backdrop-blur-sm"
                )}
                showText={true}
                iconClassName="h-5 w-5"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
