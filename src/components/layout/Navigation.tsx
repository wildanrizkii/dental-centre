"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

export function Navigation({ className, onLinkClick }: NavigationProps) {
  const [activePath, setActivePath] = useState("Home");

  return (
    <nav
      className={cn(
        "flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low shadow-[0_2px_6px_-1px_rgba(183,168,154,0.08)]",
        className
      )}
    >
      {NAV_LINKS.map((link) => {
        const isActive = activePath === link.label;
        return (
          <a
            key={link.label}
            href={link.href}
            onClick={() => {
              setActivePath(link.label);
              if (onLinkClick) onLinkClick();
            }}
            className={cn(
              "px-space-md py-space-sm rounded-full transition-colors font-label-lg text-label-lg",
              isActive
                ? "bg-secondary-container text-on-secondary-fixed font-bold"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
