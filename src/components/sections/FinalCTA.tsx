"use client";

import React from "react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="book" className="w-full px-margin lg:px-margin-desktop py-space-2xl mb-space-lg">
      <div className="w-full rounded-xl bg-surface-container-low p-space-lg sm:p-space-xl lg:p-space-2xl text-center flex flex-col items-center relative overflow-hidden shadow-sm">
        {/* Architectural curved lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" fill="none" viewBox="0 0 1000 400">
            <ellipse
              className="text-outline"
              cx="500"
              cy="400"
              rx="450"
              ry="250"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <ellipse
              className="text-outline"
              cx="500"
              cy="400"
              rx="300"
              ry="180"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl flex flex-col items-center"
        >
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-space-xs">
            BEGIN YOUR CONSULTATION
          </span>

          <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-tight mb-space-md font-medium">
            Your Journey to a Healthier Smile Starts Here
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-space-xl leading-relaxed">
            Take the first step toward lifelong oral health and restored
            aesthetic confidence. Schedule your comprehensive consultation with
            our specialist team today.
          </p>

          {/* Twin CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-space-sm mb-space-lg">
            <a
              href="#appointment"
              className="inline-flex items-center gap-space-xs font-label-lg text-label-lg bg-inverse-surface hover:bg-on-surface text-inverse-on-surface px-space-xl py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Book Your Appointment</span>
              <span className="material-symbols-outlined text-[1.1rem]">
                arrow_outward
              </span>
            </a>
            <a
              href="tel:+442079460912"
              className="inline-flex items-center gap-space-xs font-label-lg text-label-lg bg-surface-container-lowest hover:bg-surface text-on-surface px-space-xl py-3.5 rounded-full transition-all duration-300 shadow-sm"
            >
              <span className="material-symbols-outlined text-[1.1rem]">
                call
              </span>
              <span>Concierge: (020) 7946 0912</span>
            </a>
          </div>

          {/* Location & Availability Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[1rem] text-secondary">
                pin_drop
              </span>
              Harley Medical District, W1G 9QD
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[1rem] text-secondary">
                local_parking
              </span>
              Private Valet Parking
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[1rem] text-secondary">
                schedule
              </span>
              Mon &ndash; Sat: 08:30 &ndash; 19:00
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
