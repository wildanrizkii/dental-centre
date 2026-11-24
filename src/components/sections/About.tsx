"use client";

import React from "react";
import { IMAGES } from "@/data/content";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="w-full px-margin lg:px-margin-desktop py-space-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-center">
        {/* Left Asymmetrical Collage (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative w-full h-[420px] lg:h-[500px] rounded-xl overflow-hidden shadow-md">
            <img
              src={IMAGES.aboutOperatory}
              alt="High aesthetic private dental operatory room with panoramic windows"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Detail Card */}
          <div className="absolute -bottom-8 -right-4 sm:right-8 bg-surface-container-lowest p-space-md sm:p-space-lg rounded-lg shadow-xl max-w-xs flex items-center gap-space-md border-0">
            <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[1.5rem]">
                biotech
              </span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                Micro-Dentistry
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Sub-millimeter clinical precision for ultra-conservative
                preservation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Editorial Content (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-start pt-space-xl lg:pt-0"
        >
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container text-secondary font-label-sm text-label-sm mb-space-md">
            <span>ABOUT OUR CLINIC</span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md leading-tight font-medium">
            Where Expertise Meets Exceptional Dental Care
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
            At Dentèle Specialist Centre, we believe every patient deserves
            individualized attention, clinical precision, and an entirely
            anxiety-free experience. Our multidisciplinary faculty gathers under
            one roof, utilizing the world&apos;s most sophisticated diagnostic suites.
          </p>

          {/* Feature Checklist */}
          <div className="flex flex-col gap-space-sm mb-space-xl w-full">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[1.25rem]">
                check_circle
              </span>
              <span className="font-body-md text-body-md text-on-surface font-medium">
                Same-Day Digital Ceramic Restorations
              </span>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[1.25rem]">
                check_circle
              </span>
              <span className="font-body-md text-body-md text-on-surface font-medium">
                Zero-Wait Private Scheduling Protocol
              </span>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[1.25rem]">
                check_circle
              </span>
              <span className="font-body-md text-body-md text-on-surface font-medium">
                Holistic Biocompatible Tooth Materials
              </span>
            </div>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-space-xs font-label-lg text-label-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-space-xl py-3 rounded-full transition-colors"
          >
            <span>Discover Our Story</span>
            <span className="material-symbols-outlined text-[1.1rem]">
              arrow_outward
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
