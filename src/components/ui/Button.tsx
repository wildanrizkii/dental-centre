import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "inverse" | "ghost" | "glass" | "glass-white";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  asChild?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-label-md transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    primary:
      "bg-primary hover:bg-on-surface text-on-primary shadow-[0_8px_24px_-4px_rgba(41,41,41,0.04)]",
    secondary:
      "bg-secondary-container hover:bg-secondary text-on-secondary-fixed hover:text-on-secondary",
    inverse:
      "bg-inverse-surface hover:bg-on-surface text-inverse-on-surface shadow-md hover:shadow-xl hover:-translate-y-0.5",
    ghost:
      "bg-transparent hover:bg-surface-container text-on-surface",
    glass:
      "bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/50 text-on-surface shadow-sm",
    "glass-white":
      "bg-white hover:bg-surface-bright text-on-surface shadow-sm hover:shadow-md",
  };

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-xs gap-2",
    lg: "px-space-xl py-3.5 text-label-lg gap-space-xs",
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
