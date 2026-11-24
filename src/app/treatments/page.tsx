"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { motion, AnimatePresence } from "framer-motion";

type TreatmentCategory = "all" | "cosmetic" | "implants" | "orthodontics" | "restorative" | "preventive";

interface Treatment {
  id: string;
  category: "cosmetic" | "implants" | "orthodontics" | "restorative" | "preventive";
  badge: string;
  title: string;
  description: string;
  image: string;
  caseNo: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const TREATMENTS: Treatment[] = [
  {
    id: "smile-design",
    category: "cosmetic",
    badge: "Cosmetic Artistry",
    title: "Bespoke Cosmetic Smile Design",
    description:
      "Hand-crafted ultrathin feldspathic porcelain veneers paired with real-time 3D biometric previewing. Requires ultra-minimal to zero enamel reduction for biomimetic permanence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMYe023ipBzqBOPYKB335OqTEi0_vZIENhzZUSpHjI6gR9ITqHKWbN5qgyYErkuZS69ubAEvjEpGHh_4Bws8nc2-YckGkODO3WCGcwrHA8fuZ9_ooamlbJsFFP4_kO-mdW2sqYve6J784dRl3CABtfeSL1vefGQRxm074zfs8aEsNkNtqqB8sUU_-RyzrfnYEp_yk4wKHgKuAHw0a9x6bVpwZnDkJV99_lWWxGY1Q",
    caseNo: "Case No. CS-04",
    metrics: [
      { label: "Duration", value: "2-3 Appointments" },
      { label: "Sedation", value: "Optional Conscious" },
      { label: "Precision", value: "0.2mm Thickness" },
      { label: "Longevity", value: "15-20+ Years" },
    ],
  },
  {
    id: "precision-implants",
    category: "implants",
    badge: "Surgical Implantology",
    title: "Precision Dental Implants & Grafting",
    description:
      "Nobel Biocare & Straumann computer-guided surgical navigation for immediate-load tooth replacement. Micro-invasive autogenous and synthetic bone matrix regeneration.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPMFxjMOBtdtZ79bZCxbp-lwKJn3r28AtV-IOkLVumaot08ALzcCiFdLnPw76Y2YmN99WNAv6dEKwgGihutbNP-zVIn3pm4w_P914IIXAf-4oiA8rSVYvBOebof0UcOiwS46jkdjKzwwATfi1PeBbHkfINWiUqBJBRbD8fO67m06Po0dkFEYbMN82eCvPKhX1982su1EwdwkA5EPS_Zd2O6-dbgaeI7_5Rs3PJT6g",
    caseNo: "Case No. IM-11",
    metrics: [
      { label: "Duration", value: "60-90 Min / Site" },
      { label: "Sedation", value: "IV Twilight / TCI" },
      { label: "Navigation", value: "3D Dynamic Stereotaxy" },
      { label: "Success Rate", value: "99.4% Audited" },
    ],
  },
  {
    id: "clear-aligners",
    category: "orthodontics",
    badge: "Diamond Orthodontics",
    title: "Diamond-Tier Clear Aligners",
    description:
      "Invisalign Apex provider protocols with accelerated tooth kinetics. Tailored for complex adult malocclusions, deep bites, and discreet professional aesthetics.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9J0x5-QqyyaYT-WhO9uQUHJVWe6AV7N1Egzc7ktQd5wYpzVmw7GKHQOCV8f7HJ7uIvc854LCYKZE--uYGhpSjTTUjTHBMFEznZFeZRmxNwKxEzexnxwKlXUBaZO05Wnd9axnJrY8-V4GI3DgIA-WPKn5VgLpnzZziYpdrDkxiPhGyjjvkVB3Fzg-g94o_32H4eNebmu9JXLtloiMV66lVEdhYj2D0L2KJRaxjaBw",
    caseNo: "Case No. OR-08",
    metrics: [
      { label: "Timeline", value: "6-14 Months" },
      { label: "Sedation", value: "Non-Invasive" },
      { label: "Monitoring", value: "AI Remote Scans" },
      { label: "Discretion", value: "Virtually Invisible" },
    ],
  },
  {
    id: "micro-endodontics",
    category: "restorative",
    badge: "Micro-Endodontics",
    title: "Microscopic Restorative & Root Canal",
    description:
      "Carl Zeiss 25x magnification reveals hidden canal anatomy and micro-fractures. Biomimetic bonded resin and custom milled ceramic inlays for conservative preservation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKtHJwYppGAtT8KPZO-YWNFwjKr5jL3R9b5Zwteg0b9XepnT6sDajzCQ4JZrNPEAD3uNBiYRcL_zMKtg2o6i-uydBkpb3MnsD95Qwp0rLkgegpYRIFqB_n87m9Qfs9r3xXD9ytZjgYHUIldy-HJMM6_gx9o9O3Q9f9wy5dtwXpeYQzk_HsHoonN1a96Dv7IOcZV1PVbaXGlCMMcPkZQTPX0ktRhqwax7eEWokwIU4",
    caseNo: "Case No. RE-02",
    metrics: [
      { label: "Duration", value: "Single 90m Visit" },
      { label: "Comfort", value: "Computer Local / TCI" },
      { label: "Optics", value: "Zeiss OPMI PROergo" },
      { label: "Philosophy", value: "Biomimetic Seal" },
    ],
  },
  {
    id: "tmj-rehab",
    category: "restorative",
    badge: "Full Arch Rehab",
    title: "Neuromuscular Rehabilitation & TMJ",
    description:
      "Full-arch functional restoration combining computerized T-Scan bite analysis, electromyography, and joint decompressing restorations for long-term jaw harmony.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBSZKHkpdmdM0528cDfFyhIlrQ1uT7qNfOjqfy3RrzIrLeVDiYN4pCCuY5tTVDls9AdN08Z2YOE4w5SvHvoneTzONiWTE3r2fP0kH1m0XR58zA2SWYkpM1m08v7V1m73llCIhdBqOoO7IFB58rv9qEwPkZZ5r9okG_Y2HixukxCT9sBbbHg7ND_bkaNHhfGuB-5CHis9dF-48mD0_B_-StW0q33QKvJufDOFM2Z5A",
    caseNo: "Case No. NM-09",
    metrics: [
      { label: "Phases", value: "Staged Diagnostic" },
      { label: "Sedation", value: "Tailored Sedation" },
      { label: "Diagnostics", value: "T-Scan 10 / EMG" },
      { label: "Outcome", value: "Pain-Free Function" },
    ],
  },
  {
    id: "biofilm-therapy",
    category: "preventive",
    badge: "Periodontal Spa",
    title: "Guided Biofilm Therapy & Airflow",
    description:
      "Painless, zero-scraping deep cleanse utilizing Swiss EMS technology with erythritol powder and warm water jets. Eliminates pathogenic oral biofilm without enamel erosion.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAuiOcYaqsIjuC9vZ1KEdp_kQvk-fEVcjc6L1wnvlWr7fiaMYcLIBU99FnKnISVBjaTr7RMzDH0I-IS0SmsF75rj02WVh0oJSHeMkZW4-NhmASrLK2NmATbj8kxcw-ZKlNDsr1kad6MDDxR73aCRslwqMyeXBYChf_UurNCW0MOWBGg9nqZDSMjSktFVcksD6EaszVuWDABnCxIl3ysO1BZ2DCOu1TmTo1XqbKui8",
    caseNo: "Case No. PR-01",
    metrics: [
      { label: "Duration", value: "45-60 Minutes" },
      { label: "Sensation", value: "Spa-Like / Warm Mist" },
      { label: "Protocol", value: "Swiss EMS GBT 8-Step" },
      { label: "Cadence", value: "Bi-annual" },
    ],
  },
];

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>("all");
  const [openAccordion, setOpenAccordion] = useState<string | null>("acc-1");

  const filteredTreatments = TREATMENTS.filter((t) => {
    if (activeCategory === "all") return true;
    return t.category === activeCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <SmoothScroll>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* Top Atmospheric Intro / Hero Banner */}
          <section className="relative w-full px-margin lg:px-margin-desktop py-space-2xl overflow-hidden bg-gradient-to-b from-[#f6f3f2] to-surface border-b border-outline-variant">
            <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-[#e8ded3]/40 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-[#f0eded]/60 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10">
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider border border-outline-variant shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Surgical &amp; Restorative Index
                </span>
                <span className="text-on-surface-variant font-label-md text-label-md hidden sm:inline">
                  • Marylebone Nocturnal Suite
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-8 flex flex-col gap-space-md"
                >
                  <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-[1.08]">
                    Comprehensive <br />
                    <span className="text-primary italic font-serif font-normal">
                      Dental Treatments
                    </span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Engineered for lifelong stability, function, and natural aesthetics. Inverted clinical conventions designed around whisper-quiet microsurgery, biometric porcelain artistry, and profound sensory ease.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="lg:col-span-4 flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant shadow-sm"
                >
                  <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                      Surgical Accuracy
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      ±0.02 mm
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                      Sedation Suite
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      TCI / Conscious
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                      Diagnostic Matrix
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      CBCT • 8K Zeiss
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Interactive Category Filter Tabs */}
          <section className="sticky top-20 z-40 w-full bg-surface/95 backdrop-blur-md px-margin lg:px-margin-desktop py-space-md border-b border-outline-variant shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-space-md overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-space-sm shrink-0">
                {(
                  [
                    { id: "all", label: "All Disciplines" },
                    { id: "cosmetic", label: "Cosmetic Dentistry" },
                    { id: "implants", label: "Dental Implants" },
                    { id: "orthodontics", label: "Orthodontics" },
                    { id: "restorative", label: "Restorative & Endodontics" },
                    { id: "preventive", label: "Preventive & Diagnostics" },
                  ] as { id: TreatmentCategory; label: string }[]
                ).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-space-lg py-space-xs rounded-full font-label-lg text-label-lg transition-all duration-300 ${
                      activeCategory === cat.id
                        ? "bg-[#201b15] text-[#fcf9f8] shadow-sm"
                        : "bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-primary"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <div className="hidden xl:flex items-center gap-space-xs text-on-surface-variant shrink-0 font-label-sm text-label-sm uppercase tracking-widest pl-space-md">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  tune
                </span>
                Calibrated Protocols
              </div>
            </div>
          </section>

          {/* Detailed Treatment Portfolio */}
          <section className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                    Clinical Catalogue
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Bespoke Disciplines
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  Each procedure unfolds within our calm acoustically-damped suites, managed by registered Harley Street consultants.
                </p>
              </div>

              {/* Treatments Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
                <AnimatePresence>
                  {filteredTreatments.map((treatment) => (
                    <motion.article
                      key={treatment.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col justify-between bg-white rounded-xl overflow-hidden border border-outline-variant shadow-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative w-full h-64 overflow-hidden bg-surface-container-low">
                        <img
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 px-space-md py-1 rounded-full bg-white/90 backdrop-blur-md text-[#201b15] font-label-sm text-label-sm tracking-wider uppercase border border-outline-variant shadow-sm font-semibold">
                          {treatment.badge}
                        </span>
                      </div>

                      <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-lg">
                        <div className="flex flex-col gap-space-sm">
                          <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                            {treatment.title}
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            {treatment.description}
                          </p>

                          {/* Telemetry Metadata List */}
                          <div className="mt-space-sm grid grid-cols-2 gap-space-sm pt-space-sm bg-surface-container-low p-space-sm rounded-DEFAULT border border-outline-variant/60">
                            {treatment.metrics.map((metric, i) => (
                              <div key={i} className="flex flex-col">
                                <span className="font-label-sm text-label-sm text-primary uppercase">
                                  {metric.label}
                                </span>
                                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-space-sm border-t border-outline-variant/60">
                          <a
                            href="#book-appointment"
                            className="inline-flex items-center gap-2 px-space-lg py-space-xs rounded-full bg-[#201b15] text-[#fcf9f8] font-label-lg text-label-lg hover:bg-primary transition-all duration-300"
                          >
                            Reserve Suite
                            <span className="material-symbols-outlined text-[16px]">
                              arrow_forward
                            </span>
                          </a>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {treatment.caseNo}
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Interactive Procedure Telemetry Comparison */}
          <section className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface-container-low border-y border-outline-variant">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  Clinical Matrix
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Precision Telemetry at a Glance
                </h2>
              </div>
              <div className="overflow-x-auto bg-white rounded-xl p-space-lg border border-outline-variant shadow-sm">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-outline-variant text-primary font-label-md text-label-md uppercase tracking-wider">
                      <th className="py-space-md pr-space-lg">Discipline</th>
                      <th className="py-space-md px-space-md">Standard Window</th>
                      <th className="py-space-md px-space-md">Sedation Protocol</th>
                      <th className="py-space-md px-space-md">Magnification / Nav</th>
                      <th className="py-space-md pl-space-md">Expected Horizon</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/60 font-body-sm text-body-sm text-on-surface-variant">
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-space-md pr-space-lg font-medium text-on-surface flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Bespoke Smile Design
                      </td>
                      <td className="py-space-md px-space-md">2 Sessions</td>
                      <td className="py-space-md px-space-md">Surface • Intravenous Conscious</td>
                      <td className="py-space-md px-space-md">10x Loupes • 3D Face Scan</td>
                      <td className="py-space-md pl-space-md text-primary font-medium">15-20+ Years</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-space-md pr-space-lg font-medium text-on-surface flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Guided Implantology
                      </td>
                      <td className="py-space-md px-space-md">1 Surgical Visit</td>
                      <td className="py-space-md px-space-md">Target Controlled Infusion (TCI)</td>
                      <td className="py-space-md px-space-md">CBCT Dynamic Stereotaxy</td>
                      <td className="py-space-md pl-space-md text-primary font-medium">Lifetime Integrity</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-space-md pr-space-lg font-medium text-on-surface flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Zeiss Micro-Endodontics
                      </td>
                      <td className="py-space-md px-space-md">90 - 120 Mins</td>
                      <td className="py-space-md px-space-md">Computer-Assisted Local Wand</td>
                      <td className="py-space-md px-space-md">Carl Zeiss 25x Optical Lens</td>
                      <td className="py-space-md pl-space-md text-primary font-medium">Tooth Preservation</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-space-md pr-space-lg font-medium text-on-surface flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Airflow Biofilm Therapy
                      </td>
                      <td className="py-space-md px-space-md">45 Mins</td>
                      <td className="py-space-md px-space-md">None Needed (Zero Pain)</td>
                      <td className="py-space-md px-space-md">Fluorescence Detection</td>
                      <td className="py-space-md pl-space-md text-primary font-medium">Maintenance 6 Mos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Treatment Workflow: 4-Step Patient Journey */}
          <section className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                    The Pathway
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    The 4-Stage Clinical Journey
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                  A seamless progression from initial optical telemetry to permanent restorative calibration.
                </p>
              </div>

              {/* Horizontal Process Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop relative">
                {/* Step 1 */}
                <div className="relative flex flex-col gap-space-md bg-white p-space-xl rounded-xl border border-outline-variant shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary font-headline-sm text-headline-sm font-semibold">
                    01
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                      3D Digital Assessment
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Full-cranial low-radiation CBCT volumetric scan, 8K optical intraoral mapping, and facial symmetry photogrammetry.
                    </p>
                  </div>
                  <div className="mt-auto pt-space-md flex items-center gap-1.5 text-primary font-label-sm text-label-sm uppercase">
                    <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
                    Zero Discomfort
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col gap-space-md bg-white p-space-xl rounded-xl border border-outline-variant shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary font-headline-sm text-headline-sm font-semibold">
                    02
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                      Virtual Simulation
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Collaborative chairside review of smile dynamics and masticatory stress loads via 3D simulated real-time mockups.
                    </p>
                  </div>
                  <div className="mt-auto pt-space-md flex items-center gap-1.5 text-primary font-label-sm text-label-sm uppercase">
                    <span className="material-symbols-outlined text-[16px]">devices</span>
                    Visual Approval
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col gap-space-md bg-white p-space-xl rounded-xl border border-primary/50 shadow-md">
                  <div className="w-12 h-12 rounded-full bg-[#201b15] text-[#fcf9f8] flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-md">
                    03
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                      Biomimetic Execution
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Microsurgical navigation and artisanal bonding carried out under twilight sedation with soothing acoustic noise isolation.
                    </p>
                  </div>
                  <div className="mt-auto pt-space-md flex items-center gap-1.5 text-primary font-label-sm text-label-sm uppercase">
                    <span className="material-symbols-outlined text-[16px]">precision_manufacturing</span>
                    Micro-Invasive
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col gap-space-md bg-white p-space-xl rounded-xl border border-outline-variant shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary font-headline-sm text-headline-sm font-semibold">
                    04
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                      Lifetime Aftercare
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Periodic guided biofilm maintenance, occlusal tracking, and tailored night protection with warranty documentation.
                    </p>
                  </div>
                  <div className="mt-auto pt-space-md flex items-center gap-1.5 text-primary font-label-sm text-label-sm uppercase">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Continuous Protection
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Patient Comfort Accordion */}
          <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low border-t border-outline-variant">
            <div className="max-w-5xl mx-auto flex flex-col gap-space-lg">
              <div className="text-center flex flex-col items-center gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  The Dentèle Sanctuary Standard
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Sedation &amp; Sensory Preservation
                </h3>
              </div>

              <div className="flex flex-col gap-space-sm">
                {/* Accordion 1 */}
                <div className="bg-white rounded-xl border border-outline-variant overflow-hidden transition-all duration-300 shadow-sm">
                  <button
                    onClick={() => toggleAccordion("acc-1")}
                    className="w-full px-space-lg py-space-md flex items-center justify-between text-left text-on-surface font-headline-sm text-headline-sm hover:text-primary transition-colors"
                  >
                    <span>Intravenous &amp; Target Controlled Infusion (TCI) Sedation</span>
                    <span
                      className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                        openAccordion === "acc-1" ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openAccordion === "acc-1" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-space-lg pb-space-md font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant pt-space-sm bg-surface-container-low/40"
                    >
                      Administered exclusively by Consultant Anaesthetists. TCI sedation ensures you remain in a tranquil, twilight dream-like state with zero anxiety and no memory of clinical instrumentation. Vital signs are tracked second-by-second using hospital-grade surgical telemetry.
                    </motion.div>
                  )}
                </div>

                {/* Accordion 2 */}
                <div className="bg-white rounded-xl border border-outline-variant overflow-hidden transition-all duration-300 shadow-sm">
                  <button
                    onClick={() => toggleAccordion("acc-2")}
                    className="w-full px-space-lg py-space-md flex items-center justify-between text-left text-on-surface font-headline-sm text-headline-sm hover:text-primary transition-colors"
                  >
                    <span>Acoustic Damping &amp; Scent Architecture</span>
                    <span
                      className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                        openAccordion === "acc-2" ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openAccordion === "acc-2" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-space-lg pb-space-md font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant pt-space-sm bg-surface-container-low/40"
                    >
                      We have completely eliminated the smells and shrieks of traditional clinical dentistry. Our suites utilize architectural soundproofing, custom noise-cancelling headphones playing bespoke ambient soundscapes, and subtle bergamot and cedarwood air atomization.
                    </motion.div>
                  )}
                </div>

                {/* Accordion 3 */}
                <div className="bg-white rounded-xl border border-outline-variant overflow-hidden transition-all duration-300 shadow-sm">
                  <button
                    onClick={() => toggleAccordion("acc-3")}
                    className="w-full px-space-lg py-space-md flex items-center justify-between text-left text-on-surface font-headline-sm text-headline-sm hover:text-primary transition-colors"
                  >
                    <span>The Computerized &quot;Single Tooth Anesthesia&quot; Wand</span>
                    <span
                      className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                        openAccordion === "acc-3" ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openAccordion === "acc-3" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-space-lg pb-space-md font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant pt-space-sm bg-surface-container-low/40"
                    >
                      Traditional syringes are replaced by micro-processor controlled anesthetic delivery. The flow rate is matched precisely to tissue absorption thresholds, completely eliminating the sting and numbness spread to your lips or face.
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Consultation & Booking CTA Banner */}
          <section className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 bg-gradient-to-br from-[#201b15] to-[#121313] text-[#fcf9f8] rounded-xl p-space-xl lg:p-space-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-space-2xl">
              <div className="flex flex-col gap-space-md max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 self-center lg:self-start px-space-md py-1 rounded-full bg-white/10 backdrop-blur-md text-[#e0e5d1] font-label-sm text-label-sm uppercase tracking-wider border border-white/10">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  Confidential Harley Street Intake
                </div>
                <h2 className="font-display-lg text-display-lg text-[#fcf9f8] tracking-tight leading-tight">
                  Arrange Your Private Clinical Consultation
                </h2>
                <p className="font-body-md text-body-md text-[#dcd9d9]">
                  Begin with a 60-minute multi-disciplinary diagnostic review in our Marylebone lounge. Receive fully mapped 3D imaging, restorative alternatives, and fixed treatment horizons.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-space-lg pt-space-sm text-[#c4c9b6] font-label-md text-label-md">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                      verified
                    </span>
                    Direct Consultant Access
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                      schedule
                    </span>
                    Evening &amp; Weekend Appointments
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                      security
                    </span>
                    Strict Patient Privacy
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-space-md shrink-0 w-full lg:w-auto">
                <a
                  href="#book-appointment"
                  className="inline-flex items-center justify-center gap-2 px-space-2xl py-space-md rounded-full bg-[#f1e0d0] text-[#201b15] font-label-lg text-label-lg hover:bg-white hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  Book Comprehensive Assessment
                </a>
                <a
                  href="tel:+442079460880"
                  className="inline-flex items-center justify-center gap-2 px-space-2xl py-space-md rounded-full bg-white/10 border border-white/20 text-[#fcf9f8] font-label-lg text-label-lg hover:bg-white/20 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  Call Concierge Desk
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
