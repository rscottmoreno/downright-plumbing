"use client";

import { CityCard } from "@/components/shared/city-card";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

interface City {
  name: string;
  href: string;
  serviceCount?: number;
}

interface CityGridProps {
  cities: City[];
  title?: string;
  subtitle?: string;
  description?: string;
  columns?: 3 | 4 | 5;
  className?: string;
}

export function CityGrid({
  cities,
  title = "Areas We Serve",
  subtitle = "Service Locations",
  description,
  columns = 4,
  className,
}: CityGridProps) {
  const gridCols = {
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
    5: "md:grid-cols-3 lg:grid-cols-5",
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
            "grid grid-cols-1 gap-3 md:gap-4",
            gridCols[columns]
          )}
        >
          {cities.map((city, index) => (
            <CityCard
              key={index}
              name={city.name}
              href={city.href}
              serviceCount={city.serviceCount}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
