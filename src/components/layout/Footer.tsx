import React from "react";
import Link from "next/link";
import { IMAGES } from "@/data/content";

export function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-space-2xl pb-space-xl">
      <div className="w-full px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop pb-space-2xl">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start gap-space-md">
            <Link href="/" className="flex items-center gap-space-md">
              <img
                alt="Dentèle Specialist Dental Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                src={IMAGES.logo}
              />
              <span className="font-headline-md text-headline-md text-inverse-on-surface tracking-tight font-medium">
                Dentèle
              </span>
            </Link>
            <p className="font-body-md text-body-md text-surface-variant/80 max-w-sm">
              Exceptional dental care crafted with precision, biological continuity, and human comfort.
            </p>
            <div className="flex items-center gap-space-sm pt-space-sm">
              <span className="font-label-sm text-label-sm text-secondary-fixed bg-secondary/30 px-space-md py-space-xs rounded-full uppercase tracking-wider">
                Specialist Sanctuary
              </span>
            </div>
          </div>

          {/* Treatments Links */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-surface-variant">
              Treatments
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-variant/80">
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/treatments"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/treatments"
                >
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/treatments"
                >
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/treatments"
                >
                  Veneers
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Links */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-surface-variant">
              Practice
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-variant/80">
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/specialists"
                >
                  Specialists
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/facilities"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/#about"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/#articles"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Patient Care Links */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-surface-variant">
              Patient Care
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-variant/80">
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/#first-visit"
                >
                  First Visit
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/#pricing"
                >
                  Pricing &amp; Plans
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/#emergency"
                >
                  Emergency
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-inverse-on-surface transition-colors"
                  href="/#faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-surface-variant">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-variant/80">
              <p>
                18 Harley Medical District
                <br />
                Marylebone, London W1G 8PZ
              </p>
              <p>+44 (0) 20 7946 0880</p>
              <p>concierge@dentele.co.uk</p>
              <p>Mon – Sat: 08:30 – 19:00</p>
            </address>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-white/10">
          <p className="font-body-sm text-body-sm text-surface-variant/60">
            &copy; 2025 Dentèle Specialist Dental Centre. Registered in England &amp; Wales. Harley Street Medical Area.
          </p>
          <div className="flex items-center gap-space-md">
            <Link
              className="font-body-sm text-body-sm text-surface-variant/70 hover:text-inverse-on-surface transition-colors"
              href="/#privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="font-body-sm text-body-sm text-surface-variant/70 hover:text-inverse-on-surface transition-colors"
              href="/#terms"
            >
              Terms of Care
            </Link>
            <Link
              className="font-body-sm text-body-sm text-surface-variant/70 hover:text-inverse-on-surface transition-colors"
              href="/#clinical"
            >
              CQC Regulated
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
