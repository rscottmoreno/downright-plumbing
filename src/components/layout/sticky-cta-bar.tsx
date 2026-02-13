"use client";

import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StickyCTABar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
    >
      <div className="bg-white border-t shadow-2xl">
        <div className="grid grid-cols-2 gap-2 p-2">
          <Button
            asChild
            size="lg"
            className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full font-semibold shadow-lg"
          >
            <a href="tel:2148023042" className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-brand-red hover:bg-brand-red-light text-white rounded-full font-semibold shadow-lg shadow-brand-red/30"
          >
            <Link href="/contact" className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
