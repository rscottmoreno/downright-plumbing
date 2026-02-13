"use client";

import { StatsCounter } from "./stats-counter";
import { cn } from "@/lib/utils";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface TrustBarProps {
  stats?: Stat[];
  className?: string;
}

const defaultStats: Stat[] = [
  { value: 20, label: "Years Experience", suffix: "+" },
  { value: 0, label: "Hidden Fees", suffix: "" },
  { value: 5, label: "Star Google Rating", prefix: "" },
  { value: 5, label: "Days a Week Service" },
];

export function TrustBar({ stats = defaultStats, className }: TrustBarProps) {
  return (
    <section
      className={cn(
        "py-12 md:py-16 bg-gradient-to-r from-brand-primary/5 via-brand-secondary/5 to-brand-primary/5",
        "border-y border-brand-primary/10",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatsCounter
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
