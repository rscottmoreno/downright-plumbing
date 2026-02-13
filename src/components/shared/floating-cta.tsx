"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-8 right-8 z-40 hidden lg:block transition-all duration-300 ease-out"
      style={{
        transform: isVisible ? "scale(1)" : "scale(0)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Button
        asChild
        size="lg"
        className="bg-brand-secondary hover:bg-brand-secondary/90 text-white rounded-full shadow-2xl px-6 py-6 text-base font-semibold"
      >
        <Link href="/contact" className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Schedule Service
        </Link>
      </Button>
    </div>
  );
}
