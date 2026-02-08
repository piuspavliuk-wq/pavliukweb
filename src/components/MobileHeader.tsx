"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const SCROLL_THRESHOLD = 48;

interface MobileHeaderProps {
  homeHref?: string;
}

const navItems = [
  { href: "/", label: "Home", variant: "secondary" as const, external: false as const },
  { href: "/case-study", label: "Case Study", variant: "secondary" as const, external: false as const },
  { href: "https://calendly.com/piuspavliuk/30min", label: "Book a Call", external: true, variant: "primary" as const },
] as const;

const buttonClasses = {
  primary: "w-full justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-text transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  secondary: "w-full justify-center rounded-lg border border-text-secondary/30 px-6 py-3 text-base font-semibold text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
};

export function MobileHeader({ homeHref = "#hero" }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-text-secondary/10 bg-[#0F172A] px-4 pt-[max(0.25rem,env(safe-area-inset-top,0.25rem))] transition-all duration-300 md:px-8 md:pt-[max(1rem,env(safe-area-inset-top,1rem))] ${
          isScrolled ? "pb-2" : "pb-2 md:pb-4"
        }`}
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`-ml-2 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg transition-all duration-300 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&_*]:cursor-pointer ${
            isScrolled ? "h-8 w-8 md:h-8 md:w-8 [&_span]:w-4" : "h-10 w-10 md:h-10 md:w-10 [&_span]:w-5"
          }`}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <span className="block h-0.5 rounded-full bg-text transition-all duration-300" />
          <span className="block h-0.5 rounded-full bg-text transition-all duration-300" />
          <span className="block h-0.5 rounded-full bg-text transition-all duration-300" />
        </button>
        <a
          href="https://calendly.com/piuspavliuk/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-lg bg-primary font-semibold text-text transition-all duration-300 hover:bg-accent ${
            isScrolled ? "px-3 py-1.5 text-sm md:px-3 md:py-1.5" : "px-4 py-2 text-sm md:px-4 md:py-2"
          }`}
        >
          Book a Call
        </a>
      </nav>
      <div className="h-[calc(52px+env(safe-area-inset-top,0px))] shrink-0 md:h-[72px]" aria-hidden="true" />

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] cursor-pointer bg-bg/80 backdrop-blur-sm"
              style={{ top: "env(safe-area-inset-top, 0px)" }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            {/* Dark fill behind status bar so no content bleeds through */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-0 z-[61] h-[env(safe-area-inset-top,0px)] bg-bg"
              aria-hidden="true"
            />
            <motion.aside
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed left-0 top-0 z-[70] flex h-full w-64 flex-col gap-6 border-r border-text-secondary/10 bg-surface px-6 pb-8 pt-[max(2rem,env(safe-area-inset-top,2rem))]"
              aria-label="Menu"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="-ml-2 flex h-10 w-10 cursor-pointer items-center justify-center self-start rounded-lg transition-colors hover:bg-bg/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&_*]:cursor-pointer"
                aria-label="Close menu"
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-text" />
                  <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-text" />
                </span>
              </button>
              <nav className="flex flex-col gap-4" aria-label="Menu navigation">
                {navItems.map((item) => {
                  const className = `inline-flex items-center cursor-pointer ${buttonClasses[item.variant]}`;
                  return item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className={className}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={className}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
