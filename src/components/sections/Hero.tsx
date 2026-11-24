"use client";

import React from "react";
import { IMAGES } from "@/data/content";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="w-full px-margin lg:px-margin-desktop py-space-md lg:py-space-lg">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-[28px] overflow-hidden min-h-[480px] lg:min-h-[520px] flex flex-col justify-between p-6 sm:p-8 lg:p-10 select-none shadow-sm"
        style={{ backgroundColor: "rgb(235, 205, 191)" }}
      >
        {/* Subtle circular contour rings background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="w-full h-full object-cover"
            fill="none"
            viewBox="0 0 1200 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="700"
              cy="310"
              r="240"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
            />
            <circle
              cx="700"
              cy="310"
              r="390"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
            />
            <circle
              cx="700"
              cy="310"
              r="540"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
            <circle
              cx="700"
              cy="310"
              r="690"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Main Grid Layout */}
        <div className="relative z-20 w-full flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-space-md lg:py-space-xl">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 backdrop-blur-md text-white font-label-sm text-xs mb-4">
                <span className="material-symbols-outlined text-[0.875rem]">
                  verified
                </span>
                <span>Specialist Dental Centre &bull; Harley Street</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-body-md text-white font-normal text-3xl sm:text-4xl lg:text-[44px] leading-[1.14] tracking-tight max-w-xl">
                Your Smile Deserves <br className="hidden sm:inline" />
                <span>Specialist Care</span>
              </h1>

              {/* Description */}
              <p className="font-body-sm text-white/90 text-sm sm:text-base leading-relaxed max-w-lg mt-4">
                Experience advanced dental treatments with world-renowned
                specialists, modern diagnostic technology, and personalized care
                designed around your comfort and health.
              </p>

              {/* Dual CTA Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 font-label-md bg-white hover:bg-surface-bright text-on-surface px-6 py-3 rounded-full text-xs shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Book Appointment</span>
                  <span className="material-symbols-outlined text-[1rem]">
                    arrow_outward
                  </span>
                </a>
                <a
                  href="#specialists"
                  className="inline-flex items-center gap-2 font-label-md bg-white/20 hover:bg-white/30 text-white backdrop-blur-md px-6 py-3 rounded-full text-xs transition-all duration-300"
                >
                  <span>Meet Specialists</span>
                  <span className="material-symbols-outlined text-[1rem]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Right 5 Columns */}
            <div className="lg:col-span-5 flex flex-col items-end gap-5">
              {/* 15+ Years Floating Card */}
              <div className="w-full max-w-[320px] rounded-[28px] bg-white p-6 shadow-xl border border-white/60">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-semibold text-on-surface tracking-tight">
                    15+
                  </span>
                  <a
                    href="#about"
                    aria-label="About our 15 years of clinical excellence"
                    className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[0.875rem]">
                      arrow_outward
                    </span>
                  </a>
                </div>
                <p className="text-body-sm font-semibold text-on-surface mt-2 mb-1">
                  Years of Excellence
                </p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed mb-4">
                  More than 15,000 successful smile transformations and
                  specialized care procedures.
                </p>

                {/* Overlapping Specialist Avatars */}
                <div className="flex items-center gap-2 pt-1 border-t border-surface-container/60">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      alt="Dr. Jenkins"
                      className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
                      src={IMAGES.drJenkins}
                    />
                    <img
                      alt="Dr. Vance"
                      className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
                      src={IMAGES.drVance}
                    />
                    <img
                      alt="Dr. Rostova"
                      className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
                      src={IMAGES.drRostova}
                    />
                  </div>
                  <span className="text-[11px] font-medium text-on-surface-variant bg-surface-container-low px-2.5 py-1 rounded-full">
                    +14 Faculty
                  </span>
                </div>
              </div>

              {/* Quick Navigation Capsules */}
              <div className="flex flex-col gap-2 w-full max-w-[320px]">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="#specialists"
                    className="flex items-center justify-between px-3.5 py-2 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/50 text-on-surface font-label-md text-xs transition-all duration-300 shadow-sm"
                  >
                    <span>Specialists</span>
                    <span className="material-symbols-outlined text-[0.875rem]">
                      arrow_outward
                    </span>
                  </a>
                  <a
                    href="#treatments"
                    className="flex items-center justify-between px-3.5 py-2 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/50 text-on-surface font-label-md text-xs transition-all duration-300 shadow-sm"
                  >
                    <span>Treatments</span>
                    <span className="material-symbols-outlined text-[0.875rem]">
                      arrow_outward
                    </span>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="#facilities"
                    className="flex items-center justify-between px-3.5 py-2 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/50 text-on-surface font-label-md text-xs transition-all duration-300 shadow-sm"
                  >
                    <span>Diagnostics</span>
                    <span className="material-symbols-outlined text-[0.875rem]">
                      arrow_outward
                    </span>
                  </a>
                  <a
                    href="#about"
                    className="flex items-center justify-between px-3.5 py-2 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/50 text-on-surface font-label-md text-xs transition-all duration-300 shadow-sm"
                  >
                    <span>Sanctuary</span>
                    <span className="material-symbols-outlined text-[0.875rem]">
                      arrow_outward
                    </span>
                  </a>
                </div>
                <a
                  href="#book"
                  className="flex items-center justify-between px-4 py-2 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/50 text-on-surface font-label-md text-xs transition-all duration-300 shadow-sm"
                >
                  <span>Consultation &amp; 3D Scan</span>
                  <span className="material-symbols-outlined text-[0.875rem]">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
