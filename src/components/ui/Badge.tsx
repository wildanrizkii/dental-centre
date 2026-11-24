import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "subtle" | "glass" | "dark";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  className,
  variant = "secondary",
  icon,
  ...props
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full font-label-sm text-xs px-3 py-1 transition-colors";

  const variantClasses = {
    primary: "bg-primary text-on-primary",
    secondary: "bg-secondary-container text-on-secondary-fixed",
    subtle: "bg-surface-container-low text-on-surface-variant",
    glass: "bg-white/30 backdrop-blur-md text-white border border-white/20",
    dark: "bg-inverse-surface/80 text-inverse-on-surface",
  };

  return (
    <span
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
}
