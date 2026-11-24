"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { motion, AnimatePresence } from "framer-motion";

interface Specialist {
  id: string;
  name: string;
  specialty: "prostho" | "surgery" | "ortho" | "perio" | "endo";
  specialtyLabel: string;
  degrees: string;
  experience: string;
  institution: string;
  bio: string;
  expertise: string[];
  nextAvailability: string;
  image: string;
}

const SPECIALISTS: Specialist[] = [
  {
    id: "dr-sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    specialty: "prostho",
    specialtyLabel: "Clinical Lead · Prosthodontics",
    degrees: "DDS, MS",
    experience: "14 Yrs Experience",
    institution: "Harvard School of Dental Medicine · GDC: 248901",
    bio: "Oversees comprehensive oral rehabilitation, digital occlusal re-engineering, and bespoke microscopic porcelain restoration.",
    expertise: ["Full-Arch Reconstructions", "Digital Occlusion", "Feldspathic Ceramics"],
    nextAvailability: "Tuesday Morning",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxeuH1sLt2ukmzlZ0RkJWskmjEGac9WpUct0mqx2qjQk686v62WoeRlDEbhIbg856ucEVoGyOUWPodrvMJU8igLEQ56DDOFYaQ-5nIMKQXRCrkCVxzsPU3pGsKk2NPTMDO3r5oYWx4HySoMlkjRXNcdEOysokGkH7lGTRbtcwOLRTzwz37awS6Oq0OlzrBQ8atjBZqc7sdfEteabVJYfKSGCLoPfSVtAj7pz4qC3o",
  },
  {
    id: "dr-julian-vance",
    name: "Dr. Julian Vance",
    specialty: "surgery",
    specialtyLabel: "Oral & Maxillofacial Surgery",
    degrees: "BDS, FDS RCS",
    experience: "18 Yrs Experience",
    institution: "Royal College of Surgeons England · GDC: 194820",
    bio: "Pioneering minimally invasive sub-periosteal implants, zygomatic anchorage, and complex bone augmentation in sedation suites.",
    expertise: ["Zygomatic Implants", "Bone Regeneration", "IV Conscious Sedation"],
    nextAvailability: "Thursday Afternoon",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDf-ZM7EgDDtXohbs3kMCFNmJs7njZLJUMfPlk_2BkUukHBDlxdXu7Pmu7XNtXwgfOD6OYOE_ejOl0QkO796ii3Fwk3xPAsdfHJ6HXGQJsaE4z1wOjo01w-q_U4Fc8SiA8SVrG1yz8_MIb8MjA89XIoV24-tbnrCPKRPr56NZup06ts-pY7ol8JxzUyr1bJP5x5A2OZk95PQ1aNa_7mmJcwtuU-zA7ffM4IyMIPQIo",
  },
  {
    id: "dr-elena-rostova",
    name: "Dr. Elena Rostova",
    specialty: "ortho",
    specialtyLabel: "Orthodontic Artistry",
    degrees: "DMD, MOrth",
    experience: "12 Yrs Experience",
    institution: "Karolinska Institute · Diamond Apex Provider",
    bio: "Specialized in invisible biomechanics, surgical orthodontics, and non-extraction facial balance optimization for adults.",
    expertise: ["Diamond Apex Aligners", "Surgical Orthodontics", "Airway Biomechanics"],
    nextAvailability: "Monday Afternoon",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA55JxQTpWl-sj8juvV62LHweIxCsXlt9nELl6SvoroiQfc6A2oiiZaao4ug1ZfYGp-bT9G-umna5zvGX_r_SbwFCYdnq_6uy5e7W7PDiJ7LKKCwi0-8f1ZP58scywcOdmQmWDZu5XLb96CjA-GxqwWNt5BZaEYn6cc65O3wZhK9-JrxboQZ0nAf17czFiV441qslT8-ZyLss16QJVeXhnaovY3uwnH3bb3Fg4hVH0",
  },
  {
    id: "dr-marcus-thorne",
    name: "Dr. Marcus Thorne",
    specialty: "perio",
    specialtyLabel: "Periodontal Microsurgery",
    degrees: "BDS, MSc",
    experience: "15 Yrs Experience",
    institution: "King’s College London · EFP Board Certified",
    bio: "Focuses on soft tissue architecture, tunneling gum recession therapy, and biologic peri-implant disease management.",
    expertise: ["Microsurgical Grafting", "Laser Decontamination", "Peri-Implantitis Reversal"],
    nextAvailability: "Wednesday Morning",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdPblug9BwPhSysWaeAFOBTwNl1z3cuCbxI4QelouUJ0X8Av1MdDrJnHuk9_LGel2x8zpK_ff3EssRvZ2JofIODmuL63dnISxqm8w02nX4eI5vXwkJuNSCugJnhVBMK7gy7U1DPlcJS8cAcDCvb002BSRy3eYX8EywGzWRli45Uza51p9BwTfvjVMCA6i48v_plYzRxxb-2NGE7me8EM3058QDVooHBstILWtmoOM",
  },
  {
    id: "dr-amara-patel",
    name: "Dr. Amara Patel",
    specialty: "endo",
    specialtyLabel: "Micro-Endodontics",
    degrees: "BDS, MClinDent",
    experience: "11 Yrs Experience",
    institution: "Eastman Dental Institute · GDC Specialist List",
    bio: "Pioneering high-magnification surgical apicoectomies, calcified canal salvage, and biomimetic bonded core preservation.",
    expertise: ["30x Micro-Surgery", "Calcified Canal Navigation", "MTA Bioceramics"],
    nextAvailability: "Friday Morning",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAL8dbN1wHXfyNU0IYNp6_uexOlLJ0NNoneUdjVEySTna4R5Y5XGAgVgC9amxSrs6HXcDTnyHtxeoBo241SIkUXKKLUudL8lB0UjwJgEe_qykqh6Xg_MVUtNxEK19xawYZnFHvUzyOTZh8B7WH294Omrns8a8OwK46UM7jYDlt9nhGbx_dfH0CmkosFFvX2rbJjQHy4BCdI7y5C_VZO-X98njyISbBYU2IQQeW_SD8",
  },
  {
    id: "dr-christian-lindqvist",
    name: "Dr. Christian Lindqvist",
    specialty: "prostho",
    specialtyLabel: "Smile Architecture & Ceramics",
    degrees: "DDS, PhD",
    experience: "16 Yrs Experience",
    institution: "University of Zurich · Fellow Academy of Esthetics",
    bio: "Merges 3D facial scanning with ultra-thin layered feldspathic veneers, recreating light transmission indistinguishable from nature.",
    expertise: ["Biomimetic Veneers", "3D Facial Dynamics", "Micro-Layering"],
    nextAvailability: "Next Monday",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVvK1mC9JUR8bTwqz-7IEJ1H9YA1b_UwOUfRUo5E5bbncj1ciIG0OB6hkeanCmafpBQLXxvsaWxwrZkX0pTvu1Nr39dUX2AUxPZAbtN-BLJT3d-SRMLRDCs93NzEOJ2dwTAAuznXgygBT8ogkr884slCHdTqvwurs3VgAc7hl9VeRoyPtsfAgPN1MPCnU1EfPMEFMCIqjDkDEhZ_Ze3gba7fJBCqtcXNLQADc5-Ws",
  },
];

type SpecialtyFilter = "all" | "prostho" | "surgery" | "ortho" | "perio" | "endo";

export default function SpecialistsPage() {
  const [activeFilter, setActiveFilter] = useState<SpecialtyFilter>("all");

  const filteredSpecialists = SPECIALISTS.filter((specialist) => {
    if (activeFilter === "all") return true;
    return specialist.specialty === activeFilter;
  });

  return (
    <SmoothScroll>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* Subtle Warm Ambient Glow Orbs */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 left-1/4 w-[36rem] h-[36rem] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-96 -right-20 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Page Header & Filter Section */}
            <section className="w-full px-margin lg:px-margin-desktop pt-space-xl pb-space-lg">
              <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
                {/* Overline Tag & Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-space-md">
                  <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low border border-[#e6e1dc] shadow-sm text-primary">
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(104,92,80,0.4)]" />
                    <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                      Multidisciplinary Faculty
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      verified
                    </span>
                    <span>GDC Specialist List Verified · Harley Street Medical District</span>
                  </div>
                </div>

                {/* Headline & Editorial Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-8 flex flex-col gap-space-xs"
                  >
                    <h1 className="font-display-lg text-display-lg text-[#1a1816] tracking-tight leading-none">
                      World-Renowned<br />
                      <span className="text-primary italic font-serif font-normal">Specialists.</span>
                    </h1>
                  </motion.div>
                  <div className="lg:col-span-4 pb-1">
                    <p className="font-body-md text-body-md text-[#5c554e]">
                      A private collective of peer-recognized leaders in dental architecture, microsurgery, and biometric aesthetics, practicing in quiet collaboration.
                    </p>
                  </div>
                </div>

                {/* Filter Pills Bar */}
                <div className="pt-space-md">
                  <div className="p-space-xs rounded-full bg-surface-container-low border border-[#e6e1dc] inline-flex flex-wrap items-center gap-1.5 shadow-sm">
                    {(
                      [
                        { id: "all", label: "All Specialists" },
                        { id: "prostho", label: "Prosthodontics" },
                        { id: "surgery", label: "Oral Surgery & Implants" },
                        { id: "ortho", label: "Orthodontics" },
                        { id: "perio", label: "Periodontics" },
                        { id: "endo", label: "Endodontics" },
                      ] as { id: SpecialtyFilter; label: string }[]
                    ).map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`px-space-lg py-space-xs rounded-full font-label-lg text-label-lg transition-all duration-300 ${
                          activeFilter === filter.id
                            ? "bg-[#2d2926] text-[#fcf9f8] shadow-sm"
                            : "text-on-surface-variant hover:text-[#1a1816] hover:bg-surface-container-high"
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Faculty Grid (6 Specialists) */}
            <section className="w-full px-margin lg:px-margin-desktop py-space-xl">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
                <AnimatePresence>
                  {filteredSpecialists.map((specialist) => (
                    <motion.article
                      key={specialist.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4 }}
                      className="group flex flex-col justify-between rounded-xl bg-surface-container-lowest border border-[#e6e1dc] p-space-lg shadow-[0_4px_24px_rgba(45,41,38,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(45,41,38,0.12)] hover:border-outline-variant transition-all duration-500"
                    >
                      <div className="flex flex-col gap-space-md">
                        {/* Portrait Container */}
                        <div className="relative w-full h-80 rounded-lg overflow-hidden bg-surface-container">
                          <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            src={specialist.image}
                            alt={specialist.name}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                          {/* Floating Specialty Badge */}
                          <div className="absolute top-space-md left-space-md">
                            <span className="px-space-md py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold shadow-sm border border-[#e6e1dc]/80">
                              {specialist.specialtyLabel}
                            </span>
                          </div>
                          <div className="absolute bottom-space-md right-space-md">
                            <span className="inline-flex items-center gap-1 px-space-sm py-space-xs rounded-full bg-surface-container-lowest/90 text-on-surface font-label-sm text-label-sm backdrop-blur-sm border border-[#e6e1dc]/80 shadow-sm">
                              <span className="material-symbols-outlined text-[14px] text-primary">
                                history_edu
                              </span>
                              {specialist.experience}
                            </span>
                          </div>
                        </div>

                        {/* Specialist Info */}
                        <div className="flex flex-col gap-space-xs pt-space-xs">
                          <div className="flex items-baseline justify-between">
                            <h2 className="font-headline-md text-headline-md text-[#1a1816] tracking-tight group-hover:text-primary transition-colors">
                              {specialist.name}
                            </h2>
                            <span className="font-label-md text-label-md text-primary font-semibold">
                              {specialist.degrees}
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-primary flex items-center gap-1.5 font-medium">
                            <span className="material-symbols-outlined text-[16px]">school</span>
                            {specialist.institution}
                          </p>
                          <p className="font-body-sm text-body-sm text-[#5c554e] line-clamp-2 mt-1">
                            {specialist.bio}
                          </p>
                        </div>

                        {/* Expertise Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-space-xs">
                          {specialist.expertise.map((exp, i) => (
                            <span
                              key={i}
                              className="px-space-sm py-0.5 rounded-full bg-surface-container-low border border-[#e6e1dc] text-on-surface-variant font-label-sm text-label-sm"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action */}
                      <div className="pt-space-lg mt-space-md border-t border-[#e6e1dc] flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                            Next Availability
                          </span>
                          <span className="font-body-sm text-body-sm text-[#1a1816] font-medium">
                            {specialist.nextAvailability}
                          </span>
                        </div>
                        <a
                          href="#book-appointment"
                          className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-low border border-[#e6e1dc] text-[#1a1816] font-label-lg text-label-lg hover:bg-[#2d2926] hover:text-[#fcf9f8] hover:border-[#2d2926] transition-all duration-300"
                        >
                          <span>View Profile</span>
                          <span className="material-symbols-outlined text-[16px]">
                            arrow_forward
                          </span>
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            </section>

            {/* Multidisciplinary Case Review Board Spotlight */}
            <section className="w-full px-margin lg:px-margin-desktop py-space-2xl">
              <div className="max-w-7xl mx-auto rounded-xl bg-surface-container-low border border-[#e6e1dc] p-space-xl lg:p-space-2xl relative overflow-hidden shadow-[0_12px_40px_rgba(45,41,38,0.06)]">
                {/* Subtle background tint */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                  <div className="lg:col-span-7 flex flex-col gap-space-md">
                    <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container border border-[#e6e1dc] w-fit text-primary">
                      <span className="material-symbols-outlined text-[16px]">groups_3</span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                        The Clinical Board Protocol
                      </span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-[#1a1816] tracking-tight">
                      One Case. Every Discipline.<br />
                      <span className="text-primary font-serif font-normal italic">
                        Collective Clinical Rigour.
                      </span>
                    </h3>
                    <p className="font-body-lg text-body-lg text-[#5c554e]">
                      At Dentèle, no complex reconstructive or aesthetic journey is planned in isolation. Every Tuesday evening, our full faculty convenes in our private imaging suite for the Multidisciplinary Case Board.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                      <div className="p-space-md rounded-lg bg-surface-container-lowest border border-[#e6e1dc] flex flex-col gap-space-xs shadow-sm">
                        <div className="flex items-center gap-space-xs text-primary">
                          <span className="material-symbols-outlined text-[20px]">view_in_ar</span>
                          <span className="font-label-lg text-label-lg font-semibold text-[#1a1816]">
                            Unified Diagnostics
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-[#5c554e]">
                          CT tomography, 3D facial scans, and digital occlusion simulations scrutinized by surgeon, prosthodontist, and orthodontist simultaneously.
                        </p>
                      </div>
                      <div className="p-space-md rounded-lg bg-surface-container-lowest border border-[#e6e1dc] flex flex-col gap-space-xs shadow-sm">
                        <div className="flex items-center gap-space-xs text-primary">
                          <span className="material-symbols-outlined text-[20px]">timeline</span>
                          <span className="font-label-lg text-label-lg font-semibold text-[#1a1816]">
                            Single-Trajectory Care
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-[#5c554e]">
                          Coordinated timelines eliminate redundant procedures, minimizing appointments while achieving biologically stable, peer-audited results.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-lg pt-space-sm">
                      <div className="flex -space-x-3 items-center">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest ring-2 ring-surface font-label-sm text-label-sm text-primary font-semibold flex items-center justify-center">
                          SJ
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary ring-2 ring-surface font-label-sm text-label-sm text-on-primary font-semibold flex items-center justify-center">
                          JV
                        </div>
                        <div className="w-10 h-10 rounded-full bg-secondary-fixed ring-2 ring-surface font-label-sm text-label-sm text-secondary font-semibold flex items-center justify-center">
                          ER
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-container ring-2 ring-surface font-label-sm text-label-sm text-on-surface font-semibold flex items-center justify-center">
                          +3
                        </div>
                      </div>
                      <span className="font-body-sm text-body-sm text-[#5c554e]">
                        100% of complex rehabilitation plans reviewed by at least 3 accredited specialists.
                      </span>
                    </div>
                  </div>

                  {/* Board Graphic / Telemetry Visual */}
                  <div className="lg:col-span-5 flex flex-col gap-space-sm">
                    <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-[#e6e1dc] shadow-md flex flex-col gap-space-md">
                      <div className="flex items-center justify-between border-b border-[#e6e1dc] pb-space-sm">
                        <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                          Weekly Board Consensus Metric
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Harley St. Chamber
                        </span>
                      </div>
                      {/* Graphic Indicator */}
                      <div className="flex items-center gap-space-lg py-space-xs">
                        <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle
                              className="text-surface-container-high"
                              cx="50"
                              cy="50"
                              fill="none"
                              r="42"
                              stroke="currentColor"
                              strokeWidth="8"
                            />
                            <circle
                              className="text-primary"
                              cx="50"
                              cy="50"
                              fill="none"
                              r="42"
                              stroke="currentColor"
                              strokeDasharray="264"
                              strokeDashoffset="26"
                              strokeLinecap="round"
                              strokeWidth="8"
                            />
                          </svg>
                          <div className="absolute flex flex-col items-center">
                            <span className="font-headline-md text-headline-md text-[#1a1816] font-semibold leading-none">
                              99.4%
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">
                              Longevity
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-space-xs">
                          <span className="font-label-lg text-label-lg font-semibold text-[#1a1816]">
                            Precision Harmony Rate
                          </span>
                          <p className="font-body-sm text-body-sm text-[#5c554e]">
                            Zero inter-specialist conflicting referrals. All surgical coordinates pre-aligned to prosthodontic final margin.
                          </p>
                        </div>
                      </div>
                      {/* Status Feed */}
                      <div className="space-y-2 pt-space-xs border-t border-[#e6e1dc]">
                        <div className="flex items-center justify-between text-body-sm">
                          <span className="text-[#1a1816] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            Digital Occlusal Alignment
                          </span>
                          <span className="font-label-sm text-label-sm text-primary font-semibold">
                            Signed Off
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-body-sm">
                          <span className="text-[#1a1816] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            Surgical Guide 3D Print
                          </span>
                          <span className="font-label-sm text-label-sm text-primary font-semibold">
                            Verified
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-body-sm">
                          <span className="text-[#1a1816] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            Sedation Protocol
                          </span>
                          <span className="font-label-sm text-label-sm text-primary font-semibold">
                            Cleared
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom Consultation CTA Lounge Banner */}
            <section className="w-full px-margin lg:px-margin-desktop pb-space-2xl">
              <div className="max-w-7xl mx-auto rounded-xl bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-high border border-[#e6e1dc] p-space-xl lg:p-space-2xl relative overflow-hidden shadow-[0_12px_40px_rgba(45,41,38,0.06)]">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-space-xl">
                  <div className="flex flex-col gap-space-xs max-w-2xl">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                      Concierge Referral &amp; Direct Intake
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-[#1a1816] tracking-tight">
                      Begin your consultation with the appropriate specialist.
                    </h3>
                    <p className="font-body-md text-body-md text-[#5c554e] mt-1">
                      Whether referred by your primary clinician or seeking an independent opinion on complex rehabilitation, our Harley Street concierge ensures seamless scheduling.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
                    <a
                      href="#book-appointment"
                      className="inline-flex items-center justify-center px-space-xl py-space-sm rounded-full bg-[#2d2926] text-[#fcf9f8] font-label-lg text-label-lg hover:bg-primary transition-all duration-300 shadow-sm"
                    >
                      Schedule Specialist Consultation
                    </a>
                    <Link
                      href="/about-us"
                      className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-surface-container-lowest border border-[#e6e1dc] text-[#1a1816] font-label-lg text-label-lg hover:bg-surface-bright transition-all duration-200 shadow-sm"
                    >
                      Specialist Referrals
                    </Link>
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
