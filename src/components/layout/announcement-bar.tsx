"use client";

import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem("announcement-dismissed");
    if (dismissed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcement-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-brand-primary to-blue-900 text-white overflow-hidden"
        >
          <div className="container mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 justify-center md:justify-start">
              <span className="text-lg md:text-xl">🔧</span>
              <p className="text-sm md:text-base font-medium">
                Professional Plumbing Services in Rockwall, TX | Call Today!
              </p>
              <a
                href="tel:2148023042"
                className="hidden md:flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-1.5 rounded-full backdrop-blur-sm"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">(214) 802-3042</span>
              </a>
            </div>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
