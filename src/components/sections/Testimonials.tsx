"use client";

import React from "react";
import { IMAGES } from "@/data/content";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="w-full px-margin lg:px-margin-desktop py-space-2xl">
      <div className="w-full rounded-xl bg-secondary-container/30 p-space-lg lg:p-space-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-space-xl">
          {/* Left Patient Testimonial Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 flex flex-col items-start"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-secondary mb-space-md">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[1.25rem]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
              <span className="font-label-sm text-label-sm text-on-surface font-semibold ml-2">
                5.0 PATIENT VERIFIED
              </span>
            </div>

            <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md leading-snug font-medium">
              &ldquo;The level of clinical precision at Dentèle exceeded every
              expectation. From the 3D smile preview to the painless porcelain
              veneer placement, it was an artful transformation.&rdquo;
            </h3>

            <div className="flex items-center gap-space-md pt-space-xs">
              <img
                src={IMAGES.testimonialPatient}
                alt="Portrait of Claire Montgomery"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-headline-sm text-headline-sm text-on-surface font-medium">
                  Claire Montgomery
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Full Smile Rehabilitation &bull; London
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Showcase: Clinical Outcome / Treatment Result */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-surface-container-lowest p-space-sm">
              <div className="relative h-64 rounded-md overflow-hidden">
                <img
                  src={IMAGES.caseOutcome}
                  alt="High resolution dental case photography showcasing porcelain veneers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-inverse-surface/80 text-inverse-on-surface px-2.5 py-1 rounded font-label-sm text-label-sm">
                  Case Outcome #1148
                </div>
              </div>

              <div className="pt-3 px-1 flex items-center justify-between">
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-semibold">
                    Minimally Invasive Veneers
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Completed in 2 appointments
                  </p>
                </div>
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
