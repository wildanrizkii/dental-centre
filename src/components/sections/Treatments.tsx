"use client";

import React from "react";
import { IMAGES } from "@/data/content";
import { motion } from "framer-motion";

export function Treatments() {
  return (
    <section
      id="treatments"
      className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface-container-low/60 rounded-xl my-space-lg"
    >
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-space-2xl">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
          Treatments &amp; Procedures
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs mb-space-sm font-medium">
          Comprehensive Dental Treatments
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          From subtle aesthetic refinement to complex surgical rehabilitation,
          discover tailored treatments engineered for lifelong stability.
        </p>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-space-2xl">
        {/* Tall Left Feature: Cosmetic Smile Design (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 rounded-lg overflow-hidden relative group bg-surface-container-lowest p-space-lg flex flex-col justify-between min-h-[500px] shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="relative z-10">
            <div className="inline-block bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full mb-space-md">
              Bespoke Aesthetics
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs font-medium">
              Cosmetic Smile Design
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Hand-crafted ultrathin porcelain veneers, bespoke edge bonding, and
              comprehensive 3D biometric digital previews.
            </p>
          </div>

          <div className="relative w-full h-[280px] rounded-lg overflow-hidden my-space-md">
            <img
              src={IMAGES.bentoCosmetic}
              alt="Macro close-up portrait of genuine smile showing handcrafted ceramic dental veneers"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="relative z-10 flex items-center justify-between pt-space-xs">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              From initial 3D scan to final placement
            </span>
            <a
              href="#veneers"
              aria-label="View Cosmetic Smile Design details"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[1.2rem]">
                arrow_forward
              </span>
            </a>
          </div>
        </motion.div>

        {/* Middle & Right Columns (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-gutter">
          {/* Two-card top row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {/* Precision Dental Implants */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-lg bg-surface-container-lowest p-space-lg flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[1.25rem]">
                    dentistry
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs font-medium">
                  Precision Dental Implants
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Titanium and ceramic implant systems with computerized
                  surgical guides for lifetime durability and natural function.
                </p>
              </div>
              <div className="pt-space-lg flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  Immediate Load Available
                </span>
                <a
                  href="#implants"
                  aria-label="View Precision Dental Implants details"
                  className="text-on-surface group-hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[1.1rem]">
                    arrow_outward
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Orthodontics & Clear Aligners */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg bg-surface-container-lowest p-space-lg flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[1.25rem]">
                    align_horizontal_center
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs font-medium">
                  Orthodontics &amp; Clear Aligners
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Diamond-tier Invisalign provider delivering discreet arch
                  realignment for adult professionals and adolescents.
                </p>
              </div>
              <div className="pt-space-lg flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  Diamond Apex Provider
                </span>
                <a
                  href="#orthodontics"
                  aria-label="View Orthodontics details"
                  className="text-on-surface group-hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[1.1rem]">
                    arrow_outward
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Wide Bottom Card: Specialist Restorative & Endodontics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg bg-surface-container-lowest p-space-lg flex flex-col sm:flex-row items-center gap-space-lg shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-full sm:w-1/3 h-48 rounded-lg overflow-hidden shrink-0">
              <img
                src={IMAGES.bentoRestorative}
                alt="High precision dental laboratory with ceramicist finishing a bespoke dental crown"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                  Preservation &amp; Restoration
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-xs font-medium">
                  Microscopic Restorative Care
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Carl Zeiss high-magnification root canal preservation and
                  biomimetic bonded porcelain restorations to protect your
                  natural tooth foundation.
                </p>
              </div>
              <div className="pt-space-md flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Minimally invasive approach
                </span>
                <a
                  href="#restorative"
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[1rem]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Centered Bottom CTA */}
      <div className="w-full flex justify-center">
        <a
          href="#treatments"
          className="inline-flex items-center gap-space-xs font-label-lg text-label-lg bg-inverse-surface hover:bg-on-surface text-inverse-on-surface px-space-xl py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
        >
          <span>Explore All 14 Treatments</span>
          <span className="material-symbols-outlined text-[1.1rem]">
            arrow_outward
          </span>
        </a>
      </div>
    </section>
  );
}
