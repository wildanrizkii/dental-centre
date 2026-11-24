import React from "react";
import { PARTNERS } from "@/data/content";

export function Partners() {
  return (
    <section className="w-full px-margin lg:px-margin-desktop py-space-xl">
      <div className="w-full flex flex-col items-center">
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline mb-space-lg text-center">
          Advanced Dental Technology &amp; Clinical Partners
        </p>
        <div className="w-full flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-6 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {PARTNERS.map((partner) => (
            <span
              key={partner}
              className="font-label-lg text-label-lg font-bold tracking-widest text-on-surface-variant hover:text-on-surface transition-colors cursor-default select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
