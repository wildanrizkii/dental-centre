"use client";

import React from "react";
import { SPECIALISTS } from "@/data/content";
import { motion } from "framer-motion";

export function Specialists() {
  return (
    <section
      id="specialists"
      className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface-container-low/40"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
            Our Faculty
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1 font-medium">
            Meet Our Dental Specialists
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Board-certified leaders in their respective fields, dedicated to
          advancing academic oral healthcare with calm empathy.
        </p>
      </div>

      {/* Doctor Grid (3 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {SPECIALISTS.map((doc, index) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="rounded-lg bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative w-full h-[320px] rounded-lg overflow-hidden mb-space-md">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface shadow-xs">
                {doc.credentials}
              </span>
            </div>

            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-medium">
                  {doc.name}
                </h3>
                <p className="font-body-sm text-body-sm text-primary font-medium mt-0.5">
                  {doc.role}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-snug">
                  {doc.description}
                </p>
              </div>

              <div className="pt-space-md flex items-center justify-between border-t border-surface-container/60 mt-space-md">
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  {doc.specialty}
                </span>
                <a
                  href="#specialists"
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors"
                >
                  <span>View Profile</span>
                  <span className="material-symbols-outlined text-[1rem]">
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
