"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface OurStoryTeaserProps {
  title?: string;
  description?: string;
  image?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function OurStoryTeaser({
  title = "Our Story",
  description = "Down Right Plumbing has been serving Oklahoma communities for over 15 years with integrity, expertise, and a commitment to excellence. We're a family-owned business that treats every customer like family.",
  image = "/images/team-photo.jpg",
  buttonText = "Learn More About Us",
  buttonHref = "/our-story",
  className,
}: OurStoryTeaserProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 bg-gradient-to-b from-white to-brand-primary/5",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={image}
              alt="Down Right Plumbing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-3">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-text-primary mb-6">
              {title}
            </h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white"
              >
                <a href={buttonHref}>
                  {buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
