"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { IMAGES } from "@/data/content";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <SmoothScroll>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* 1. Hero Section */}
          <section className="relative w-full px-margin lg:px-margin-desktop py-space-2xl overflow-hidden bg-gradient-to-b from-surface via-surface-container-low/40 to-surface">
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 right-12 w-96 h-96 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary-fixed/50 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low border border-outline-variant/30 text-primary mb-space-lg shadow-sm">
                <span className="material-symbols-outlined text-[18px]">
                  verified
                </span>
                <span className="font-label-md text-label-md tracking-wider uppercase font-semibold">
                  Harley Street Heritage
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight mb-space-lg font-medium">
                Our Story &amp; Clinical Ethos
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Redefining dental medicine through clinical mastery, biomimetic
                preservation, and anxiety-free patient sanctuaries on Harley Street.
              </p>
            </div>

            {/* Editorial Hero Mosaic */}
            <div className="mt-space-2xl grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-7 relative group"
              >
                <div className="rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 shadow-xl aspect-[16/10]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Modern architectural dental operating suite at night with dim warm lighting"
                    src={IMAGES.aboutHeroSuite}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col bg-surface-container-lowest/95 border border-outline-variant/30 backdrop-blur-md p-space-lg rounded-lg shadow-xl max-w-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                    Clinical Benchmark
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface mt-space-xs font-medium">
                    0.02mm Optical Tolerance
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    Sub-micron accuracy powered by 3D optical surface mapping.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-5 flex flex-col gap-space-md pt-space-lg md:pt-0"
              >
                <div className="bg-surface-container-lowest border border-outline-variant/30 p-space-xl rounded-xl shadow-md">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
                    Architectural Silence
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-space-sm font-medium">
                    Engineered for Restorative Stillness
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                    We abolished sterile glare and mechanical noise. Our clinic
                    integrates acoustic baffle louvers, calibrated warm
                    chromatic illumination, and bespoke subterranean surgical
                    suites for total nervous system decompression.
                  </p>
                  <div className="flex items-center gap-space-lg mt-space-lg pt-space-md border-t border-outline-variant/30">
                    <div>
                      <span className="font-headline-lg text-headline-lg text-primary block font-light">
                        99.4%
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Sedation Comfort
                      </span>
                    </div>
                    <div>
                      <span className="font-headline-lg text-headline-lg text-primary block font-light">
                        16+
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Years on Harley St
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. Pillars of Clinical Excellence */}
          <section className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface-container-low/50">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold block mb-space-xs">
                  Foundational Pillars
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium">
                  Pillars of Clinical Excellence
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-md md:mt-0">
                Every restorative plan operates within uncompromising
                biological bounds and academic rigor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Pillar 1 */}
              <div className="group bg-surface-container-lowest border border-outline-variant/30 p-space-xl rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-space-lg">
                    <span
                      className="material-symbols-outlined text-[28px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      biotech
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
                    01 / Rigor
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs font-medium">
                    Uncompromising Precision
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md">
                    Full-arch surgeries and microsurgical root canals conducted
                    under high-power Zeiss optical magnification, operating
                    within sub-millimetric safety thresholds.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  <span>Zeiss Optics</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="group bg-surface-container-lowest border border-outline-variant/30 p-space-xl rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-space-lg">
                    <span
                      className="material-symbols-outlined text-[28px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      eco
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
                    02 / Biology
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs font-medium">
                    Biomimetic Preservation
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md">
                    We preserve native enamel and root structures with layered
                    bio-active ceramics mimicking the flexural dynamics and
                    light transmission of natural dentin.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  <span>Lithium Disilicate</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="group bg-surface-container-lowest border border-outline-variant/30 p-space-xl rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-space-lg">
                    <span
                      className="material-symbols-outlined text-[28px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      spa
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
                    03 / Experience
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs font-medium">
                    Zero-Anxiety Sanctuary
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md">
                    Certified consultant anaesthetists offer tailored intravenous
                    twilight sedation, pairing sensory neutralization with
                    circadian recovery lounges.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  <span>IV Twilight Suite</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="group bg-surface-container-lowest border border-outline-variant/30 p-space-xl rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-space-lg">
                    <span
                      className="material-symbols-outlined text-[28px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      school
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
                    04 / Pedigree
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs font-medium">
                    Academic Faculty
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md">
                    Our specialist surgeons hold international faculty posts,
                    lecture globally on regenerative biology, and publish
                    regularly in peer-reviewed journals.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  <span>Peer-Reviewed Staff</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. The Dentèle Standard & Clinical Roadmap */}
          <section className="w-full px-margin lg:px-margin-desktop py-space-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
              {/* Left Column */}
              <div className="lg:col-span-4 sticky top-28">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold block mb-space-xs">
                  Methodology
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md font-medium">
                  The Dentèle Standard
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Our six-stage clinical roadmap ensures uninterrupted oversight
                  from pre-diagnostic tomographic planning to lifelong cellular
                  stability.
                </p>

                {/* Metric Tile */}
                <div className="bg-surface-container-lowest border border-outline-variant/30 p-space-lg rounded-lg shadow-sm mb-space-lg">
                  <div className="flex items-center gap-space-sm text-primary mb-space-xs">
                    <span className="material-symbols-outlined text-[20px]">
                      view_in_ar
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                      Digital Protocol
                    </span>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-medium">
                    Cone-Beam CT + 3D Micro-Scan
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    100% of rehabilitation workflows are simulated digitally
                    before touching tissue.
                  </p>
                </div>

                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-space-sm px-space-lg py-space-sm rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface hover:bg-surface-container-highest transition-colors font-label-lg text-label-lg shadow-sm"
                >
                  <span>Explore Surgical Protocols</span>
                  <span className="material-symbols-outlined text-[18px]">
                    east
                  </span>
                </Link>
              </div>

              {/* Right Milestones */}
              <div className="lg:col-span-8 flex flex-col gap-space-lg relative">
                {/* Phase 1 */}
                <div className="p-space-xl bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="px-space-md py-space-xs rounded-full bg-surface-container-low border border-outline-variant/30 text-primary font-label-sm text-label-sm tracking-widest uppercase font-semibold">
                      Phase 01 &bull; Diagnostic
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Day 1
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                    Multi-Spectral Volumetric Mapping
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                    Ultra-low radiation CBCT paired with dynamic jaw tracking
                    and polarization intraoral photography to calculate bone
                    density, nerve canals, and micro-wear.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-space-xl bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="px-space-md py-space-xs rounded-full bg-surface-container-low border border-outline-variant/30 text-primary font-label-sm text-label-sm tracking-widest uppercase font-semibold">
                      Phase 02 &bull; Pre-Surgical
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Day 3
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                    Cad-Cam Biomimetic Mock-Up
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                    Before clinical intervention, patients test a functional
                    prototype directly in their mouth. Phonetics, occlusion,
                    and lip dynamics are perfected with Zero-Tooth-Reduction
                    mockups.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-space-xl bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="px-space-md py-space-xs rounded-full bg-surface-container-low border border-outline-variant/30 text-primary font-label-sm text-label-sm tracking-widest uppercase font-semibold">
                      Phase 03 &bull; Intervention
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Day 7
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                    Minimally Invasive Operating Suite
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                    Guided surgical navigation systems ensure computer-placed
                    implants with micronic margin tolerances under intravenous
                    twilight sedation for absolute physiological comfort.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-space-xl bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="px-space-md py-space-xs rounded-full bg-surface-container-low border border-outline-variant/30 text-primary font-label-sm text-label-sm tracking-widest uppercase font-semibold">
                      Phase 04 &bull; Sanctuary Care
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Day 7+
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                    Circadian Post-Operative Lounge
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                    Post-treatment hyperbaric oxygen recovery protocols, tailored
                    anti-inflammatory infusions, and dedicated private
                    chauffeur transit back to residence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Leadership & Founders Message */}
          <section className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface-container-low/40">
            <div className="max-w-6xl mx-auto bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-space-xl lg:p-space-2xl shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                <div className="lg:col-span-5 relative">
                  <div className="w-full aspect-[4/5] rounded-lg overflow-hidden bg-surface-container shadow-md border border-outline-variant/30">
                    <img
                      className="w-full h-full object-cover"
                      alt="Dr. Alistair Vance, Clinical Director"
                      src={IMAGES.founderPortrait}
                    />
                  </div>
                  <div className="mt-space-md">
                    <h3 className="font-headline-md text-headline-md text-on-surface font-medium">
                      Dr. Alistair Vance, BDS, FDS RCS
                    </h3>
                    <p className="font-body-sm text-body-sm text-primary font-medium">
                      Clinical Director &amp; Specialist Prosthodontist
                    </p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mt-space-xs">
                      Consultant in Restorative Dentistry &bull; Royal College
                      of Surgeons Fellow
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="material-symbols-outlined text-[48px] text-primary/70 mb-space-md">
                    format_quote
                  </span>
                  <blockquote className="font-headline-md text-headline-md text-on-surface leading-relaxed">
                    &ldquo;Dentistry in its purest form is not simply mechanical
                    restoration; it is an intimate architecture of confidence,
                    biological continuity, and human comfort. We created Dentèle
                    to deliver the technical brilliance of a university hospital
                    within the peace of a quiet sanctuary.&rdquo;
                  </blockquote>
                  <div className="mt-space-xl pt-space-lg flex flex-wrap items-center gap-space-lg border-t border-outline-variant/30">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Founded
                      </span>
                      <span className="font-body-md text-body-md text-on-surface font-semibold">
                        2009 &bull; Marylebone, London
                      </span>
                    </div>
                    <div className="w-px h-8 bg-outline-variant/30 hidden sm:block" />
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Surgical Cases
                      </span>
                      <span className="font-body-md text-body-md text-on-surface font-semibold">
                        8,200+ Complex Restorations
                      </span>
                    </div>
                    <div className="w-px h-8 bg-outline-variant/30 hidden sm:block" />
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Faculty Appointments
                      </span>
                      <span className="font-body-md text-body-md text-on-surface font-semibold">
                        London &amp; Bern Fellowships
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Accreditations & Affiliations */}
          <section className="w-full px-margin lg:px-margin-desktop py-space-2xl">
            <div className="text-center max-w-2xl mx-auto mb-space-xl">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold block mb-space-xs">
                Quality Benchmarks
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium">
                Accreditations &amp; Affiliations
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                Our clinical faculty members maintain strict compliance with
                British and European governing dental bodies.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-space-lg rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[36px] text-primary mb-space-sm">
                  workspace_premium
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                  RCS England
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Fellowship in Dental Surgery, Royal College of Surgeons
                </p>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/30 p-space-lg rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[36px] text-primary mb-space-sm">
                  medical_services
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                  ITI Member
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  International Team for Implantology Global Network
                </p>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/30 p-space-lg rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[36px] text-primary mb-space-sm">
                  verified_user
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                  BACD Accredited
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  British Academy of Cosmetic Dentistry Fellowship
                </p>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/30 p-space-lg rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[36px] text-primary mb-space-sm">
                  health_and_safety
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                  GDC &amp; CQC
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  General Dental Council &amp; Care Quality Commission Approved
                </p>
              </div>
            </div>
          </section>

          {/* 6. Confidential Booking CTA Section */}
          <section className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface-container-low/50">
            <div className="relative bg-gradient-to-br from-[#24211e] to-[#1a1816] rounded-xl p-space-xl lg:p-space-2xl overflow-hidden shadow-2xl text-on-primary">
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl flex flex-col gap-space-md">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest font-semibold">
                  Confidential Booking
                </span>
                <h2 className="font-headline-lg text-headline-lg text-white font-medium">
                  Experience Restorative Calm at Harley Street
                </h2>
                <p className="font-body-lg text-body-lg text-[#d4c4b5]">
                  Begin with a private 60-minute diagnostic session including
                  high-resolution tomographic imaging, masticatory analysis, and a
                  personalized biological treatment plan.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md mt-space-md">
                  <Link
                    href="/#book"
                    className="px-space-xl py-space-md rounded-full bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg hover:bg-white hover:shadow-[0_0_24px_rgba(241,224,208,0.4)] transition-all duration-300 flex items-center gap-space-xs font-semibold"
                  >
                    <span>Arrange a Private Consultation</span>
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_month
                    </span>
                  </Link>
                  <Link
                    href="/specialists"
                    className="px-space-xl py-space-md rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-label-lg text-label-lg transition-colors"
                  >
                    Meet Our Consultants
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
