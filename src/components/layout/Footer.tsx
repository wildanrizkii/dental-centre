import React from "react";
import { IMAGES } from "@/data/content";

export function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-space-2xl pb-space-xl">
      <div className="w-full px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop pb-space-2xl">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start gap-space-md">
            <div className="flex items-center gap-space-md">
              <img
                alt="Dentèle Specialist Dental Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                src={IMAGES.logo}
              />
              <span className="font-headline-md text-headline-md text-inverse-on-surface tracking-tight font-medium">
                Dentèle
              </span>
            </div>
            <p className="font-body-md text-body-md text-surface-variant/80 max-w-sm">
              Exceptional dental care crafted with precision and empathy.
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
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#treatments"
                >
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#treatments"
                >
                  Dental Implants
                </a>
              </li>
              <li>
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#treatments"
                >
                  Orthodontics
                </a>
              </li>
              <li>
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#treatments"
                >
                  Veneers
                </a>
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
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#specialists"
                >
                  Specialists
                </a>
              </li>
              <li>
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#facilities"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#careers"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#articles"
                >
                  Journal
                </a>
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
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#first-visit"
                >
                  First Visit
                </a>
              </li>
              <li>
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#pricing"
                >
                  Pricing &amp; Plans
                </a>
              </li>
              <li>
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#emergency"
                >
                  Emergency
                </a>
              </li>
              <li>
                <a
                  className="hover:text-inverse-on-surface transition-colors"
                  href="#faq"
                >
                  FAQ
                </a>
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
                14 Harlow Court, Harley Street
                <br />
                London, W1G 9QD
              </p>
              <p>+44 (0) 20 7946 0912</p>
              <p>concierge@dentele.co.uk</p>
              <p>Mon – Sat: 08:30 – 19:00</p>
            </address>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-white/10">
          <p className="font-body-sm text-body-sm text-surface-variant/60">
            &copy; 2024 Dentèle Specialist Dental Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-space-md">
            <a
              className="font-body-sm text-body-sm text-surface-variant/70 hover:text-inverse-on-surface transition-colors"
              href="#privacy"
            >
              Privacy Policy
            </a>
            <a
              className="font-body-sm text-body-sm text-surface-variant/70 hover:text-inverse-on-surface transition-colors"
              href="#terms"
            >
              Terms of Service
            </a>
            <a
              className="font-body-sm text-body-sm text-surface-variant/70 hover:text-inverse-on-surface transition-colors"
              href="#clinical"
            >
              Clinical Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
