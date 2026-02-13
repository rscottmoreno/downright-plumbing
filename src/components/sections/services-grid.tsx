"use client";

import { LucideIcon } from "lucide-react";
import { ServiceCard } from "@/components/shared/service-card";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

interface ServicesGridProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ServicesGrid({
  services,
  title = "Our Services",
  subtitle = "What We Offer",
  description,
  columns = 3,
  className,
}: ServicesGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={cn("py-16 md:py-24 bg-brand-background", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          description={description}
          align="center"
        />

        <div
          className={cn(
            "grid grid-cols-1 gap-6 md:gap-8",
            gridCols[columns]
          )}
        >
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
