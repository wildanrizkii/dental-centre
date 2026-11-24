"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { motion, AnimatePresence } from "framer-motion";

interface GallerySpace {
  id: string;
  tag: string;
  title: string;
  description: string;
  category: "clinical" | "lounges";
  image: string;
  span: string; // "md:col-span-8" or "md:col-span-4"
}

const GALLERY_SPACES: GallerySpace[] = [
  {
    id: "suite-alpha",
    tag: "Suite Alpha",
    title: "Primary Microsurgical & Implant Theater",
    description:
      "Engineered for complex full-arch reconstruction, equipped with overhead shadowless illumination and real-time intraoperative radiograph feeds.",
    category: "clinical",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfw-BCqOryau8LTG7mtfObFyvypJOqcODj0LBVuY02b330ICFrIjGEQLGr4nIHQ2g4G0KUQmPJIVLkEop6e50YgZ8HcSzlUX8thZlZndkkyzI04s3CtO2gmzwyw1mNofBOd_hBLs-DYjI35cIDssWFH2SNkcWtV0e7JiltO3BO1q4788tjDsmO-EdeNfp85T9HO0GyFCSEmIQo2byzwx-z9RYWQZPq62HxVJr6KF0",
    span: "md:col-span-8",
  },
  {
    id: "cocoon-recovery",
    tag: "Post-Procedure",
    title: "The Cocoon Recovery Chamber",
    description:
      "A discreet quiet room with acoustic curtains, oxygen bar, and continuous vitals check post-sedation.",
    category: "lounges",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6DVv8wE4H_nRDCQzU0rZqFIgBoZG0L7swxTCnaABsfp9nChpuKli4Glnr82QcvBQuGvRb9iPOFJUmXfOd3OIgguTGRZrDoc1jfG_f9qfraRIxCCXmbMTDa_ui1fPLIjDzd0Qm41Gju-5prLkhEDjfQ_QlVK13NbL3xuR5mj-tRYB2_TwH8IU0mo4_j2s9e1gRGn3nJthpbaxRWjR7VzKBSzZXTcaXSV6KmvxYsUg",
    span: "md:col-span-4",
  },
  {
    id: "consultation-salon",
    tag: "Salon 03",
    title: "Private Diagnostic Consultation Salon",
    description:
      "Confidential treatment planning sessions conducted in conversational lounge comfort without clinical glare.",
    category: "clinical",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUiUXqCcs1hTpf0G42FOac7TyqNOkFItfZ18O6sL8Nh9tQGLkJYe9UHSHXYH2aM836SL-tOkDhYb-ANoGQBwsjyvDyc2aoQcrSft_ajPuF-S6oD4kgI0urNB4p8toB7AGrJkM09tPeezylf1kcZ_qIQ1wLheb83PqraVeq97zCholGa5b_fgejRBk4ZgsUVeKZ_IcyCMxf3OcoGehmiiKqNukgzmIXzU7pm3qf-0s",
    span: "md:col-span-4",
  },
  {
    id: "concierge-lounge",
    tag: "Arrival Sanctuary",
    title: "Harley Street Concierge Lounge",
    description:
      "De-escalates autonomic nervous responses upon arrival. Zero receptionist intercoms, replaced by one-on-one personal hospitality stewards.",
    category: "lounges",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYyJVrmMplh3SopzVrf_ek8gfrGWYdJ4xPBdve7X2bnqarxHjtTmnMjHGcQ8tKMfL2OYek62G-Dw-kU1pnfxc_D24LbPeKML0XHVVy92onNbA1dikB6Q4zOXg1Lo1v5rT_12NDvYO_2jIcWDNUIF5tUQv91BpDTxLQj29SY05QUDVwCgafFfQOszYupf1IiKBHfTsaQSPiWEb_It4JXOGGny6Xgu1vUUr0Tdu2H7Q",
    span: "md:col-span-8",
  },
];

export default function FacilitiesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "clinical" | "lounges">("all");

  const filteredSpaces = GALLERY_SPACES.filter((space) => {
    if (activeFilter === "all") return true;
    return space.category === activeFilter;
  });

  return (
    <SmoothScroll>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* Top Ambient Glow Field */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-80 -left-32 w-[480px] h-[480px] bg-secondary-fixed/50 rounded-full blur-[120px] pointer-events-none" />

            {/* 1. Hero Statement Section */}
            <section className="relative w-full px-margin lg:px-margin-desktop pt-space-xl pb-space-2xl">
              <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
                {/* Breadcrumb & Micro-label */}
                <div className="flex items-center gap-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm tracking-wider uppercase border border-outline-variant/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Facility Architecture &amp; Diagnostics
                  </span>
                  <span className="text-outline-variant text-label-sm font-label-sm">/</span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm tracking-wide">
                    Harley Street Medical District
                  </span>
                </div>

                {/* Headline & Editorial Lead */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-8 flex flex-col gap-space-md"
                  >
                    <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-[1.08]">
                      A Sanctuary{" "}
                      <span className="text-primary italic font-serif">Engineered</span> for Healing &amp; Precision.
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                      Explore our state-of-the-art diagnostic suites, acoustically isolated private operatories, and tranquil patient lounges on Harley Street. Designed as a serene refuge where surgical rigor meets atmospheric calm.
                    </p>
                  </motion.div>

                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end gap-space-md">
                    {/* Metric Pill 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-[0_8px_24px_-4px_rgba(104,92,80,0.08)] flex items-center justify-between"
                    >
                      <div>
                        <div className="font-display-lg text-headline-lg text-primary">
                          0.075<span className="text-body-md text-on-surface-variant font-normal"> mm</span>
                        </div>
                        <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
                          Focal Voxel Precision
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shadow-inner">
                        <span className="material-symbols-outlined text-[24px]">biotech</span>
                      </div>
                    </motion.div>

                    {/* Metric Pill 2 */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-[0_8px_24px_-4px_rgba(104,92,80,0.08)] flex items-center justify-between"
                    >
                      <div>
                        <div className="font-display-lg text-headline-lg text-on-surface">HEPA-14</div>
                        <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
                          Surgical Air Turnover 18x/h
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary shadow-inner">
                        <span className="material-symbols-outlined text-[24px]">air</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Featured Sanctuary Panoramic Showcase */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative w-full mt-space-md rounded-xl overflow-hidden shadow-[0_20px_45px_-10px_rgba(104,92,80,0.18)] border border-outline-variant/30 group"
                >
                  <div
                    className="w-full h-[380px] sm:h-[480px] lg:h-[580px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDiIoLLqkaIo0qgrAAM4ZG_LjdsJmuUI6lTp3elXIK8R6FwRQtZJm2J1eBnX6AW0Uu7Hv7j0Ku1GX18p74cDZbkc7dxKIjxbz3vqVk9vv7hgBU53B9DwdlKM7pvCtkHsaTnyw3pzFDhCQTrFU0QNGpIdU-zukpi4nrXgwelGXY1_6dlyWCXCVNs8sf0_4yYQrnJ1n7icUJ8LZD4c-njexO4uc604tFVlexDx_zOAo')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c]/90 via-[#1b1c1c]/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-space-lg sm:p-space-xl flex flex-col sm:flex-row items-start sm:items-end justify-between gap-space-md text-surface-container-lowest">
                    <div className="max-w-xl">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-primary-fixed font-label-sm text-label-sm tracking-wider uppercase mb-space-sm border border-white/20">
                        Suite 01 — Operatory Belgravia
                      </span>
                      <h2 className="font-headline-lg text-headline-lg text-white">
                        Integrated Surgical Micro-Suite
                      </h2>
                      <p className="font-body-sm text-body-sm text-surface-variant mt-1">
                        Calibrated with floating ergonomic instrumentation, whisper-quiet aspiration, and custom ambient circadian lighting cycles.
                      </p>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <a
                        href="#virtual-gallery"
                        className="px-space-lg py-space-sm rounded-full bg-white/90 hover:bg-white text-on-surface font-label-lg text-label-lg backdrop-blur-md transition-all flex items-center gap-2 shadow-lg"
                      >
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          explore
                        </span>
                        View Facility Tour
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* 2. Technology Highlight Grid (Bento Grid) */}
            <section className="relative w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface-container-low/60 border-y border-outline-variant/30">
              <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                      Diagnostic &amp; Microsurgical Suite
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">
                      Instruments of Uncompromising Precision
                    </h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                    Our technology stack replaces guesswork with definitive digital telemetry, lowering radiation exposure, accelerating clinical turnaround, and eliminating physical impression trays.
                  </p>
                </div>

                {/* Bento Architecture */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                  {/* Card 1: 3D CBCT */}
                  <div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(104,92,80,0.1)] transition-all duration-300 group">
                    <div className="flex flex-col gap-space-md">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                          <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
                        </div>
                        <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30">
                          Low Dose Ultra-HD
                        </span>
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                          Ultra-Low Dose 3D CBCT
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Planmeca 3D digital volume tomography for sub-millimeter surgical accuracy. Captures nerve paths, bone density, and sinus contours with up to 77% lower radiation dose than traditional scanners.
                        </p>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                        Diagnostic Matrix
                      </span>
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        75μm Resolution
                      </span>
                    </div>
                  </div>

                  {/* Card 2: 3Shape TRIOS 5 */}
                  <div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(104,92,80,0.1)] transition-all duration-300 group">
                    <div className="flex flex-col gap-space-md">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                          <span className="material-symbols-outlined text-[24px]">sensors</span>
                        </div>
                        <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30">
                          Optical Scan
                        </span>
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                          3Shape TRIOS 5 Wireless
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Powder-free, instantaneous digital optical impressions in photorealistic true color. Completely eliminates gag-inducing polyvinyl siloxane trays while rendering real-time bite dynamics.
                        </p>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                        Impression Time
                      </span>
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        &lt; 45 Seconds
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Zeiss Microscopes */}
                  <div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(104,92,80,0.1)] transition-all duration-300 group">
                    <div className="flex flex-col gap-space-md">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                          <span className="material-symbols-outlined text-[24px]">visibility</span>
                        </div>
                        <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30">
                          Zeiss Extaro 300
                        </span>
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                          Carl Zeiss Surgical Microscopes
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Illuminating microscopic root canal structures, internal hairline fissures, and microvascular margins with up to 32x optical magnification and multispectral fluorescent lighting.
                        </p>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                        Optical Fidelity
                      </span>
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        32x Apochromatic
                      </span>
                    </div>
                  </div>

                  {/* Card 4: CAD/CAM Milling Lab */}
                  <div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(104,92,80,0.1)] transition-all duration-300 group">
                    <div className="flex flex-col gap-space-md">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                          <span className="material-symbols-outlined text-[24px]">precision_manufacturing</span>
                        </div>
                        <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30">
                          Same-Day Ceramics
                        </span>
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                          In-House CAD/CAM Milling Lab
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Sub-micron 5-axis robotic wet/dry milling for same-day monolithic zirconia, IPS e.max lithium disilicate, and custom titanium abutments crafted on-site under master technician eyes.
                        </p>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                        Fabrication Turnaround
                      </span>
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        Same Session Delivery
                      </span>
                    </div>
                  </div>

                  {/* Card 5: Cleanroom HEPA-14 */}
                  <div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(104,92,80,0.1)] transition-all duration-300 group">
                    <div className="flex flex-col gap-space-md">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                          <span className="material-symbols-outlined text-[24px]">filter_alt</span>
                        </div>
                        <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30">
                          Positive Pressure
                        </span>
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                          Hospital-Grade Air Sterilization
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Cleanroom positive-pressure standards featuring medical HEPA-14 laminar flow and germicidal UVC air scrubber loops, capturing 99.995% of airborne aerosols and biological particulates.
                        </p>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                        Bio-Filtration
                      </span>
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        99.995% Retention
                      </span>
                    </div>
                  </div>

                  {/* Card 6: Acoustic Sedation Suites */}
                  <div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(104,92,80,0.1)] transition-all duration-300 group">
                    <div className="flex flex-col gap-space-md">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                          <span className="material-symbols-outlined text-[24px]">graphic_eq</span>
                        </div>
                        <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30">
                          Acoustic Shielding
                        </span>
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                          Acoustic Isolation &amp; Sedation Suites
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Specialized sound-dampened architectural envelopes equipped for Consultant Anaesthetist-led IV conscious sedation, continuous hemodynamic telemetry, and unhurried recovery.
                        </p>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                        Ambient Noise Floor
                      </span>
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        &lt; 28 dBA Hush
                      </span>
                    </div>
                  </div>
                </div>

                {/* Telemetry Infographic Module */}
                <div className="w-full p-space-xl rounded-xl bg-surface-container border border-outline-variant/40 shadow-[0_8px_30px_rgba(104,92,80,0.06)] flex flex-col lg:flex-row items-center justify-between gap-space-xl">
                  <div className="flex flex-col gap-space-xs max-w-xl">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
                      Continuous Environmental Calibration
                    </span>
                    <h4 className="font-headline-md text-headline-md text-on-surface">
                      Harley Street Facility Bio-Metrics Live
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Every chamber within Dentèle is managed by an autonomous environmental BMS balancing laminar airflow, acoustic frequencies, and clinical relative humidity (45-50%).
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md w-full lg:w-auto">
                    <div className="p-space-md rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex flex-col shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Humidity</span>
                      <span className="font-headline-sm text-headline-sm text-primary mt-1">47.8 %</span>
                      <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Optimal
                      </span>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex flex-col shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Air Volume Clean</span>
                      <span className="font-headline-sm text-headline-sm text-primary mt-1">100 %</span>
                      <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> ISO 5 Rated
                      </span>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex flex-col shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Noise Barrier</span>
                      <span className="font-headline-sm text-headline-sm text-primary mt-1">-42 dB</span>
                      <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Calibrated
                      </span>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex flex-col shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Telemetry Status</span>
                      <span className="font-headline-sm text-headline-sm text-primary mt-1">Nominal</span>
                      <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> All Suites
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Virtual Tour Preview / Sanctuary Spaces Gallery */}
            <section className="relative w-full px-margin lg:px-margin-desktop py-space-2xl" id="virtual-gallery">
              <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                      Architectural Showcase
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">
                      Spatial Harmony &amp; Private Chambers
                    </h2>
                  </div>
                  <div className="flex items-center gap-space-sm bg-surface-container-low p-1 rounded-full border border-outline-variant/30">
                    <button
                      onClick={() => setActiveFilter("all")}
                      className={`px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all ${
                        activeFilter === "all"
                          ? "bg-primary text-on-primary shadow-sm"
                          : "text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      All Spaces
                    </button>
                    <button
                      onClick={() => setActiveFilter("clinical")}
                      className={`px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all ${
                        activeFilter === "clinical"
                          ? "bg-primary text-on-primary shadow-sm"
                          : "text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      Surgical &amp; Clinical
                    </button>
                    <button
                      onClick={() => setActiveFilter("lounges")}
                      className={`px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all ${
                        activeFilter === "lounges"
                          ? "bg-primary text-on-primary shadow-sm"
                          : "text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      Lounges &amp; Recovery
                    </button>
                  </div>
                </div>

                {/* Asymmetric Editorial Gallery Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                  <AnimatePresence>
                    {filteredSpaces.map((space) => (
                      <motion.div
                        key={space.id}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.4 }}
                        className={`${space.span} group relative rounded-xl overflow-hidden shadow-[0_12px_36px_rgba(104,92,80,0.12)] border border-outline-variant/30`}
                      >
                        <div
                          className="w-full h-[380px] md:h-[420px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                          style={{ backgroundImage: `url('${space.image}')` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c]/90 via-[#1b1c1c]/25 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-space-lg flex flex-col gap-1 text-white">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                            {space.tag}
                          </span>
                          <h3 className="font-headline-md text-headline-md text-white">
                            {space.title}
                          </h3>
                          <p className="font-body-sm text-body-sm text-surface-variant max-w-lg">
                            {space.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>

            {/* 4. Patient Comfort Amenities */}
            <section className="relative w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface-container-low/60 border-t border-outline-variant/30">
              <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                  <div className="lg:col-span-5 flex flex-col gap-space-md">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                      Elevated Hospitality Standard
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                      Sensory Architecture Crafted Around Patient Ease
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      We discard the sterile, high-anxiety sensations traditionally associated with dental appointments. From Marylebone curbside assistance to post-operative recovery elixirs, every milestone is orchestrated for complete nervous serenity.
                    </p>
                    <div className="pt-space-sm flex flex-col gap-space-sm">
                      <div className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-[20px] text-primary mt-1">
                          check_circle
                        </span>
                        <div>
                          <div className="font-label-lg text-label-lg text-on-surface">
                            Subterranean Confidentiality
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            Direct private elevator access and secluded egress for high-profile patients needing quiet departures.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-[20px] text-primary mt-1">
                          check_circle
                        </span>
                        <div>
                          <div className="font-label-lg text-label-lg text-on-surface">
                            Curated Restorative Teas &amp; Cold-Pressed Nutrition
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            Specialized soft-palette menus and hydration formulated by clinical nutritionists for post-implant healing.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                    {/* Amenity 1 */}
                    <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(104,92,80,0.08)] transition-all flex flex-col gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">directions_car</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Private Valet Concierge
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Complimentary curbside chauffeur meet-and-greet on Harley Street, including dedicated secure parking arrangements.
                      </p>
                    </div>
                    {/* Amenity 2 */}
                    <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(104,92,80,0.08)] transition-all flex flex-col gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">spa</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Acoustic &amp; Olfactory Design
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Bespoke botanical diffusion without clinical medicinal scents, paired with active noise suppression and curated soundscapes.
                      </p>
                    </div>
                    {/* Amenity 3 */}
                    <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(104,92,80,0.08)] transition-all flex flex-col gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">headphones</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Sensory Operatory Immersion
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Bang &amp; Olufsen noise-canceling headphones, weighted cashmere blankets, and soothing ceiling cinematic displays during care.
                      </p>
                    </div>
                    {/* Amenity 4 */}
                    <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(104,92,80,0.08)] transition-all flex flex-col gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">support_agent</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Personal Clinical Concierge
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        A designated primary care liaison coordinates your appointments, specialist hand-offs, prescriptions, and aftercare taxi services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Visit Us / Booking CTA Banner */}
            <section className="relative w-full px-margin lg:px-margin-desktop py-space-2xl">
              <div className="max-w-7xl mx-auto">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-surface-container to-surface-container-high border border-outline-variant/40 p-space-xl lg:p-space-2xl shadow-[0_16px_40px_rgba(104,92,80,0.08)]">
                  {/* Subtle decorative radial behind CTA */}
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/10 blur-[90px] pointer-events-none" />
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                    <div className="lg:col-span-7 flex flex-col gap-space-md">
                      <span className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-widest font-semibold">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Harley Street Practice Intake
                      </span>
                      <h2 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface leading-tight">
                        Experience restorative dentistry in quiet distinction.
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                        Book a comprehensive diagnostic tour and private consultant appointment. We welcome self-referrals and physician transfers across the UK and internationally.
                      </p>
                      <div className="flex flex-wrap items-center gap-space-md mt-space-sm">
                        <a
                          href="#book-appointment"
                          className="inline-flex items-center justify-center px-space-xl py-space-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(104,92,80,0.25)] transition-all duration-300"
                        >
                          Arrange Private Consultation
                        </a>
                        <Link
                          href="/treatments"
                          className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-surface-container-lowest text-on-surface hover:bg-white border border-outline-variant/40 font-label-lg text-label-lg transition-all duration-300 gap-2 shadow-sm"
                        >
                          <span className="material-symbols-outlined text-[18px] text-primary">
                            menu_book
                          </span>
                          View Treatments Catalogue
                        </Link>
                      </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-space-md bg-surface-container-lowest/90 p-space-lg rounded-xl border border-outline-variant/30 backdrop-blur-md shadow-sm">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Sanctuary Enquiries
                      </h3>
                      <div className="flex flex-col gap-space-sm text-on-surface-variant">
                        <div className="flex items-start gap-space-sm">
                          <span className="material-symbols-outlined text-[20px] text-primary mt-0.5">
                            pin_drop
                          </span>
                          <div className="font-body-sm text-body-sm">
                            <span className="text-on-surface font-medium">18 Harley Medical District</span>
                            <br />
                            Marylebone, London W1G 8PZ
                          </div>
                        </div>
                        <div className="flex items-center gap-space-sm">
                          <span className="material-symbols-outlined text-[20px] text-primary">
                            schedule
                          </span>
                          <span className="font-body-sm text-body-sm">
                            Mon – Fri: 08:00 – 19:30 | Sat by appointment
                          </span>
                        </div>
                        <div className="flex items-center gap-space-sm">
                          <span className="material-symbols-outlined text-[20px] text-primary">
                            phone_in_talk
                          </span>
                          <span className="font-body-sm text-body-sm">
                            +44 (0)20 7946 0880 (Direct Concierge Desk)
                          </span>
                        </div>
                        <div className="flex items-center gap-space-sm">
                          <span className="material-symbols-outlined text-[20px] text-primary">
                            verified_user
                          </span>
                          <span className="font-body-sm text-body-sm">
                            Care Quality Commission (CQC) Approved Facility
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
