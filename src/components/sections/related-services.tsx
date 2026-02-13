"use client";

import { LucideIcon } from "lucide-react";
import { ServiceCard } from "@/components/shared/service-card";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

interface RelatedService {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function RelatedServices({
  services,
  title = "Related Services",
  subtitle = "You May Also Need",
  description,
  className,
}: RelatedServicesProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 bg-gradient-to-b from-brand-background to-white",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          description={description}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
