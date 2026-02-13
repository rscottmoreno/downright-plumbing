"use client";

import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px down
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-40 hidden lg:block"
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
    </motion.div>
  );
}
