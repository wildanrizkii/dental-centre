import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Philosophy } from "@/components/sections/Philosophy";
import { Treatments } from "@/components/sections/Treatments";
import { Statistics } from "@/components/sections/Statistics";
import { About } from "@/components/sections/About";
import { Specialists } from "@/components/sections/Specialists";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

export default function HomePage() {
  return (
    <SmoothScroll>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Trusted Partners & Technology */}
          <Partners />

          {/* 3. About / Benefits Section */}
          <Philosophy />

          {/* 4. Comprehensive Dental Treatments (Bento Grid) */}
          <Treatments />

          {/* 5. Clinical Excellence Statistics Bar */}
          <Statistics />

          {/* 6. About the Clinic */}
          <About />

          {/* 7. Specialists Team Showcase */}
          <Specialists />

          {/* 8. Patient Testimonials & Case Outcomes */}
          <Testimonials />

          {/* 9. Final Conversion Section */}
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
