"use client";

import React from "react";
import { IMAGES } from "@/data/content";
import { motion } from "framer-motion";

const PHILOSOPHY_CARDS = [
  {
    tag: "Personalized Care",
    title: "Expert Specialists",
    description:
      "Board-certified specialists across prosthodontics, periodontics, and implantology collaborate on your comprehensive care.",
    cta: "Explore Team",
    href: "#specialists",
    image: IMAGES.philosophyCare,
    alt: "Refined dentist in neutral modern medical attire consulting empathetically with a patient over a digital dental model",
  },
  {
    tag: "Digital Dentistry",
    title: "Advanced Technology",
    description:
      "3D CBCT ultra-low radiation imaging, robotic-guided surgery, and instant optical impressions eliminate messy molds forever.",
    cta: "View Technology",
    href: "#facilities",
    image: IMAGES.philosophyTech,
    alt: "Sleek intraoral 3D scanner showing a photorealistic glowing 3D tooth mapping on an elegant modern monitor",
  },
  {
    tag: "Boutique Clinic",
    title: "Comfortable Sanctuary",
    description:
      "Acoustically isolated private treatment suites, gentle sedation therapies, and unhurried appointments to calm dental anxiety.",
    cta: "Clinic Tour",
    href: "#about",
    image: IMAGES.philosophySanctuary,
    alt: "Warm boutique dental clinic lounge with curved limestone seating and subtle oak paneling",
  },
];

export function Philosophy() {
  return (
    <section id="about" className="w-full px-margin lg:px-margin-desktop py-space-2xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary px-3 py-1 rounded-full bg-secondary-container">
              Our Philosophy
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant px-3 py-1 rounded-full bg-surface-container-low">
              Clinical Excellence
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-medium">
            Exceptional Dental Care, Designed Around You
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Discover a calmer, elevated dental experience through world-renowned
          specialists, millimeter-accurate digital diagnostics, and deeply
          personalized clinical attention.
        </p>
      </div>

      {/* 3 Large Image Cards with Hover Expansion */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {PHILOSOPHY_CARDS.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative rounded-lg overflow-hidden bg-surface-container-low p-space-md flex flex-col justify-between min-h-[460px] shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="relative w-full h-[260px] rounded-lg overflow-hidden mb-space-md">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface shadow-xs">
                {card.tag}
              </span>
            </div>

            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs font-medium">
                  {card.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-space-md">
                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface hover:text-primary transition-colors"
                >
                  <span>{card.cta}</span>
                  <span className="material-symbols-outlined text-[1.1rem]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
