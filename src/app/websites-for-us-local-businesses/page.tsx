import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { AnimatedCTA } from "@/components/AnimatedCTA";
import { MobileHeader } from "@/components/MobileHeader";
import { SITE_URL } from "@/lib/site";

const CALENDLY_URL = "https://calendly.com/piuspavliuk/30min";

export const metadata: Metadata = {
  title: "Websites for US Local Service Businesses | Dentists & Professional Practices",
  description:
    "Custom websites for US local service businesses: dental practices and professional practices. SEO-ready, mobile-first sites that get you found on Google and turn visitors into calls and bookings.",
  keywords: [
    "websites for local businesses",
    "dentist website",
    "professional practice website",
    "websites for US local service businesses",
    "local business website",
  ],
  openGraph: {
    title: "Websites for US Local Service Businesses",
    description:
      "Custom websites for dentists and professional practices. SEO-ready, mobile-first sites that get you found on Google and turn visitors into calls and bookings.",
    type: "website",
    url: "/websites-for-us-local-businesses",
  },
  alternates: {
    canonical: "/websites-for-us-local-businesses",
  },
  metadataBase: new URL(SITE_URL),
};

export default function WebsitesForUsLocalBusinessesPage() {
  return (
    <div className="overflow-x-hidden">
      <MobileHeader homeHref="/" />
      <main>
        <HeroSection />
        <WhoItsForSection />
        <WhatYouGetSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
        Websites for US Local Service Businesses
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
        Custom websites built for dental practices and professional practices
        that want to rank in Google, get more calls, and book more
        appointments — without templates or agency fluff.
      </p>
      <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
        I build conversion-focused websites for US local businesses across the United States — New York, Texas, California, and the rest of the USA.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <AnimatedCTA href={CALENDLY_URL} variant="primary" external>
          Book a Free Call
        </AnimatedCTA>
        <AnimatedCTA href="/#case-study" variant="secondary">
          See Example Work
        </AnimatedCTA>
      </div>
    </section>
  );
}

/* ─── Who It's For (niches) ──────────────────────────────────────── */

const niches = [
  {
    name: "Dentists",
    summary: "Dental practices that want more new patients and fewer no-shows.",
    points: [
      "Service pages that rank for local search (e.g. teeth cleaning, root canal)",
      "Online scheduling so patients book 24/7 and you cut phone tag",
      "Clear CTAs for emergency visits and first-time patient forms",
    ],
  },
  {
    name: "Professional practices",
    summary: "Law firms, accounting, therapy, consulting — practices that run on appointments and trust.",
    points: [
      "Service or practice-area pages that rank in local search and build authority",
      "Booking or contact flows that turn visitors into scheduled consultations",
      "Clean, credible design and fast performance so you look as professional as you are",
    ],
  },
];

function WhoItsForSection() {
  return (
    <section
      id="who-its-for"
      className="mx-auto max-w-4xl px-6 py-20"
    >
      <AnimatedHeading className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Built for Dentists and Professional Practices
      </AnimatedHeading>
      <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
        Google ranks pages, not whole sites. This page targets owners who search
        for websites for US local service businesses — with content tailored to{" "}
        <strong className="text-text">dentists</strong> and{" "}
        <strong className="text-text">professional practices</strong>.
      </p>

      <div className="mt-12 space-y-12">
        {niches.map((niche) => (
          <article
            key={niche.name}
            className="rounded-lg border border-text-secondary/10 bg-surface p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-text sm:text-2xl">
              {niche.name}
            </h2>
            <p className="mt-3 text-text-secondary">{niche.summary}</p>
            <ul className="mt-6 space-y-3">
              {niche.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span
                    className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── What You Get ───────────────────────────────────────────────── */

const benefits = [
  "Local SEO-ready structure so you show up in Google Search and Maps",
  "Mobile-first, fast-loading site — most local searches are on phones",
  "Clear calls-to-action: book online, call now, request a quote",
  "No templates: one site built around your services and your goals",
  "Conversion tracking so you see what drives calls and bookings",
];

function WhatYouGetSection() {
  return (
    <section
      id="what-you-get"
      className="mx-auto max-w-4xl px-6 py-20"
    >
      <AnimatedHeading className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        What You Get
      </AnimatedHeading>
      <ul className="mt-10 space-y-4">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-3 text-lg text-text-secondary"
          >
            <svg
              className="mt-1 h-5 w-5 shrink-0 text-primary"
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
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ─── Final CTA ─────────────────────────────────────────────────── */

function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-20 text-center"
    >
      <AnimatedHeading className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Get a Website That Ranks and Converts
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
          Websites for US Local Service Businesses — Dentists & Professional Practices
        </p>
        <nav className="mt-4 flex flex-wrap gap-6 sm:mt-0" aria-label="Footer">
          <Link
            href="/"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            Home
          </Link>
          <Link
            href="/case-study"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            Case Study
          </Link>
          <a
            href="mailto:bohdan@pavliukweb.com"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            bohdan@pavliukweb.com
          </a>
        </nav>
      </div>
    </footer>
  );
}
