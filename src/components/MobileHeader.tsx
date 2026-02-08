"use client";

export function MobileHeader() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between border-b border-text-secondary/10 bg-[#0F172A] px-6 py-4 md:hidden"
      aria-label="Main navigation"
    >
      <a
        href="#hero"
        className="text-sm font-semibold text-text transition-colors hover:text-accent"
      >
        Custom Web Developer
      </a>
      <a
        href="#contact"
        className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-text transition-colors hover:bg-accent"
      >
        Book a Call
      </a>
    </nav>
  );
}
