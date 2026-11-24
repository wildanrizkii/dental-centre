"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/content";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

export function Navigation({ className, onLinkClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low shadow-[0_2px_6px_-1px_rgba(183,168,154,0.08)] border border-outline-variant/30",
        className
      )}
    >
      {NAV_LINKS.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href) && link.href !== "/";
        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              "px-space-md py-space-sm rounded-full transition-colors font-label-lg text-label-lg",
              isActive
                ? "bg-secondary-container text-on-secondary-fixed font-bold shadow-xs"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
