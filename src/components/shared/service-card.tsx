"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getIconComponent } from "@/lib/icon-map";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string | LucideIcon;
  href: string;
  className?: string;
  delay?: number;
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  className,
  delay = 0,
}: ServiceCardProps) {
  // Support both string icon names and direct icon components
  const Icon = typeof icon === 'string' ? getIconComponent(icon) : icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={href} className="block h-full">
        <Card
          className={cn(
            "h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer",
            "border-2 hover:border-brand-primary",
            className
          )}
        >
          <CardHeader className="space-y-4">
            <div className="w-14 h-14 rounded-lg bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
              <Icon
                className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors"
                aria-hidden="true"
              />
            </div>
            <div>
              <CardTitle className="text-xl font-heading group-hover:text-brand-primary transition-colors">
                {title}
              </CardTitle>
              <CardDescription className="mt-2 text-base">
                {description}
              </CardDescription>
            </div>
          </CardHeader>
          <CardFooter>
            <span className="inline-flex items-center gap-2 text-brand-primary font-semibold group-hover:gap-3 transition-all">
              Learn More
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
