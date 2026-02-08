"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedCTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

const baseClasses =
  "inline-flex h-12 items-center rounded-lg px-8 text-base font-semibold text-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses = {
  primary:
    "bg-primary hover:bg-accent focus-visible:outline-primary",
  secondary:
    "border border-text-secondary/30 hover:border-accent hover:text-accent focus-visible:outline-accent",
};

export function AnimatedCTA({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: AnimatedCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      whileFocus={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.15 }}
      style={
        variant === "primary"
          ? ({
              boxShadow: "0 0 0 transparent",
            } as React.CSSProperties)
          : undefined
      }
      onHoverStart={(e) => {
        const el = e.currentTarget as HTMLAnchorElement | null;
        if (el?.style && variant === "primary" && !shouldReduceMotion) {
          el.style.boxShadow = "0 0 12px rgba(59, 130, 246, 0.35)";
        }
      }}
      onHoverEnd={(e) => {
        const el = e.currentTarget as HTMLAnchorElement | null;
        if (el?.style && variant === "primary") {
          el.style.boxShadow = "0 0 0 transparent";
        }
      }}
    >
      {children}
    </motion.a>
  );
}
