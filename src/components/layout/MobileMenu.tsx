"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/content";
import { ArrowUpRight, Phone, Clock, MapPin } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-on-surface/40 backdrop-blur-sm xl:hidden"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-0 right-0 z-50 bg-surface border-b border-surface-container shadow-2xl px-margin py-6 xl:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {/* Navigation Links */}
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-on-surface hover:bg-surface-container-low font-headline-sm transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-on-surface-variant" />
                  </a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-surface-container">
                <a
                  href="#book"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 font-label-lg bg-primary hover:bg-on-surface text-on-primary py-3.5 px-6 rounded-full transition-colors shadow-md text-sm"
                >
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:+442079460912"
                  className="flex items-center justify-center gap-2 font-label-lg bg-surface-container-low hover:bg-surface-container text-on-surface py-3 px-6 rounded-full transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>Concierge: (020) 7946 0912</span>
                </a>
              </div>

              {/* Clinic Info */}
              <div className="pt-2 text-xs text-on-surface-variant flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span>Harley Medical District, W1G 9QD</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span>Mon – Sat: 08:30 – 19:00</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
