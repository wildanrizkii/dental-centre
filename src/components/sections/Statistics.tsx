"use client";

import React from "react";
import { STATISTICS } from "@/data/content";
import { motion } from "framer-motion";

export function Statistics() {
  return (
    <section className="w-full px-margin lg:px-margin-desktop py-space-xl">
      <div className="w-full rounded-xl bg-inverse-surface text-inverse-on-surface p-space-lg lg:p-space-2xl shadow-xl relative overflow-hidden">
        {/* Subtle Decorative Accent Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-gutter lg:gap-gutter-desktop items-center">
          {STATISTICS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                idx !== 0 ? "lg:border-l border-outline/30 lg:pl-space-xl" : ""
              }`}
            >
              <span className="font-display-lg text-display-lg-mobile lg:text-display-lg font-light tracking-tight text-primary-fixed">
                {stat.value}
              </span>
              <p className="font-label-md text-label-md uppercase tracking-wider text-surface-variant/80 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
