import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { AnimatedCTA } from "@/components/AnimatedCTA";
import { MobileHeader } from "@/components/MobileHeader";

const CALENDLY_URL = "https://calendly.com/piuspavliuk/30min";
const DEMO_URL = "https://cllinick.netlify.app/";

export const metadata: Metadata = {
  title: "Dental Clinic Website — Demo Case Study | Custom Web Developer",
  description:
    "A conversion-focused demo website showing how I build websites for local service businesses. Attract local traffic, convert visitors into calls and bookings, and build trust.",
  openGraph: {
    title: "Dental Clinic Website — Demo Case Study",
    description:
      "A conversion-focused demo website showing how I build websites for local service businesses.",
    type: "website",
    url: "/case-study",
  },
};

export default function CaseStudyPage() {
  return (
    <div className="overflow-x-hidden">
      <MobileHeader homeHref="/" />
      <main>
        <HeroSection />
        <ScreenshotSection />
        <WhatItDoesSection />
        <RealClinicBenefitsSection />
        <DisclaimerSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28"
    >
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
        Dental Clinic Website — Demo Case Study
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
        A conversion-focused demo website showing how I build websites for
        local service businesses.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <AnimatedCTA href={CALENDLY_URL} variant="primary" external>
          Book a Free Call
        </AnimatedCTA>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-semibold text-text-secondary underline underline-offset-4 transition-colors hover:text-accent"
        >
          View Live Demo
        </a>
      </div>
    </section>
  );
}

/* ─── Screenshot ──────────────────────────────────────────────────── */

const SCREENSHOT_PATH = "/img/Screenshot 2026-02-08 at 12.11.44.png";

function ScreenshotSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <div className="overflow-hidden rounded-lg border border-text-secondary/10 bg-surface shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
        <Image
          src={SCREENSHOT_PATH}
          alt="Homepage of the demo dental clinic website"
          width={1200}
          height={800}
          className="w-full object-contain"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />
      </div>
      <p className="mt-4 text-center text-sm text-text-secondary">
        Homepage of the demo dental clinic website, built to guide visitors
        toward booking an appointment.
      </p>
    </section>
  );
}

/* ─── What This Website Was Built To Do ──────────────────────────── */

function WhatItDoesSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <AnimatedHeading className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        What This Website Was Built To Do
      </AnimatedHeading>
      <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
        This demo website was designed to attract local traffic, convert
        visitors into calls and bookings, and build trust for first-time
        visitors. It demonstrates the structure and approach I use when building
        sites for real dental practices and service businesses.
      </p>
      <ul className="mt-8 space-y-4">
        {[
          "Service-focused page structure",
          "Online booking–ready user flow",
          "Local SEO–optimized layout (Google Search + Maps)",
          "Fast, mobile-first performance",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-text-secondary"
          >
            <svg
              className="mt-1.5 h-5 w-5 shrink-0 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ─── How This Helps a Real Dental Clinic ────────────────────────── */

function RealClinicBenefitsSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <AnimatedHeading className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        How This Helps a Real Dental Clinic
      </AnimatedHeading>
      <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
        When applied to a real practice, this approach leads to fewer phone
        back-and-forths, more qualified appointment requests, and better
        visibility in local Google results. The website becomes a tool that
        works for the business—not just a digital brochure.
      </p>
    </section>
  );
}

/* ─── Demo Project Disclaimer ─────────────────────────────────────── */

function DisclaimerSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <p className="text-center text-sm text-text-secondary/80">
        This is a personal demo project created to showcase my approach and
        quality of work. It is not a paid client website.
      </p>
    </section>
  );
}

/* ─── Final CTA ──────────────────────────────────────────────────── */

function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <AnimatedHeading className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Want a Website Like This for Your Business?
      </AnimatedHeading>
      <div className="mt-10">
        <AnimatedCTA href={CALENDLY_URL} variant="primary" external>
          Book a Free Call
        </AnimatedCTA>
      </div>
      <p className="mt-6 text-sm text-text-secondary">
        Quick intro call. Clear scope. No pressure.
      </p>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-text-secondary/10 py-10">
      <div className="mx-auto max-w-4xl px-6 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-text-secondary">
          Custom Web Developer for US Local Businesses
        </p>
        <nav className="mt-4 flex gap-6 sm:mt-0" aria-label="Footer">
          <Link
            href="/"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            Home
          </Link>
          <a
            href="mailto:hello@example.com"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
