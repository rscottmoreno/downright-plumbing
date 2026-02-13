"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CityCardProps {
  name: string;
  href: string;
  serviceCount?: number;
  className?: string;
  delay?: number;
}

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  return hydrated;
}

export function CityCard({
  name,
  href,
  serviceCount,
  className,
  delay = 0,
}: CityCardProps) {
  const hydrated = useHydrated();
  return (
    <motion.div
      initial={hydrated ? { opacity: 0, scale: 0.95 } : false}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Link href={href}>
        <Badge
          variant="outline"
          className={cn(
            "w-full justify-start gap-2 px-4 py-3 text-base font-medium cursor-pointer",
            "transition-all duration-300 hover:bg-brand-primary hover:text-white hover:border-brand-primary",
            "group",
            className
          )}
        >
          <MapPin
            className="w-4 h-4 text-brand-primary group-hover:text-white transition-colors"
            aria-hidden="true"
          />
          <span className="flex-1">{name}</span>
          {serviceCount && (
            <span className="text-xs opacity-70">
              {serviceCount} {serviceCount === 1 ? "service" : "services"}
            </span>
          )}
        </Badge>
      </Link>
    </motion.div>
  );
}
