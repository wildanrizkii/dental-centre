"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IMAGES } from "@/data/content";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(41,41,41,0.06)] border-b border-outline-variant/30"
            : "bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(41,41,41,0.04)] border-b border-outline-variant/20"
        )}
      >
        <div className="h-20 w-full px-margin lg:px-margin-desktop flex items-center justify-between gap-gutter">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-space-md group">
            <div className="relative h-8 w-8 sm:w-10 flex items-center justify-center">
              <img
                src={IMAGES.logo}
                alt="Dentèle Specialist Dental Logo"
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight hidden sm:inline-block font-medium leading-none">
                Dentèle
              </span>
              <span className="font-label-sm text-[10px] tracking-wider uppercase text-on-surface-variant hidden sm:inline-block mt-0.5">
                Specialist Dental Centre
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <Navigation />
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-space-sm">
            <Link
              href="/#book"
              className="hidden sm:inline-flex items-center gap-space-xs font-label-lg text-label-lg bg-primary hover:bg-on-surface text-on-primary px-space-lg py-space-sm rounded-full transition-all duration-300 shadow-[0_8px_24px_-4px_rgba(41,41,41,0.04)] hover:-translate-y-0.5"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors xl:hidden"
              type="button"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-on-surface" />
              ) : (
                <Menu className="w-5 h-5 text-on-surface" />
              )}
            </button>

            {/* User Profile Avatar */}
            <div className="relative w-8 h-8 rounded-full overflow-hidden ml-space-xs ring-1 ring-surface-container">
              <img
                src={IMAGES.profileAvatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
