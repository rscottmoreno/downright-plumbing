"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Shield,
  ThumbsUp,
  Users,
  Wrench,
  LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface WhyChooseUsProps {
  reasons?: Reason[];
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const defaultReasons: Reason[] = [
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured for your protection and peace of mind.",
    icon: Shield,
  },
  {
    title: "Reliable Business Hours",
    description:
      "Available Monday-Friday, 8 AM - 5 PM for all your plumbing needs.",
    icon: Clock,
  },
  {
    title: "Expert Plumber",
    description:
      "20+ years of hands-on plumbing experience—one expert plumber, dedicated to your project.",
    icon: Wrench,
  },
  {
    title: "Upfront Pricing",
    description:
      "Transparent pricing with no hidden fees or surprise charges.",
    icon: Award,
  },
  {
    title: "Customer Satisfaction",
    description:
      "100% satisfaction guarantee on all our plumbing services.",
    icon: ThumbsUp,
  },
  {
    title: "Local Experts",
    description:
      "Proud to serve Oklahoma communities with personalized service.",
    icon: Users,
  },
];

export function WhyChooseUs({
  reasons = defaultReasons,
  title = "Why Choose Down Right Plumbing?",
  subtitle = "Our Commitment",
  description = "We're dedicated to providing exceptional plumbing services that exceed your expectations.",
  className,
}: WhyChooseUsProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          description={description}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors duration-300">
                  <Icon
                    className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-text-primary mb-2">
                  {reason.title}
                </h3>
                <p className="text-brand-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
