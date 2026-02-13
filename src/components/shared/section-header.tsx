"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  animate?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
  animate = true,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const Container = animate ? motion.div : "div";
  const containerProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      }
    : {};

  return (
    <Container
      className={cn(
        "flex flex-col gap-3 mb-8 md:mb-12",
        alignmentClasses[align],
        className
      )}
      {...containerProps}
    >
      {subtitle && (
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-brand-text-secondary max-w-3xl">
          {description}
        </p>
      )}
    </Container>
  );
}
