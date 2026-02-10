import Link from "next/link";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { AnimatedCTA } from "@/components/AnimatedCTA";
import {
  AnimatedServiceList,
  AnimatedServiceCard,
} from "@/components/AnimatedServiceCard";
import { MobileHeader } from "@/components/MobileHeader";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <MobileHeader />
      <header>
        <HeroSection />
      </header>
      <main>
        <ServicesSection />
        <CaseStudySection />
        <WhyMeSection />
        <IndustriesSection />
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
      id="hero"
      className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28"
    >
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
        Website That Brings US Local Customers
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
        Custom web development for{" "}
        <Link
          href="/websites-for-us-local-businesses"
          className="font-medium text-text underline underline-offset-4 transition-colors hover:text-accent mr-0.5"
        >
          dental and medical practices
        </Link>
        {" "}
        across all 50 states: more calls, bookings, and visibility in Google.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <AnimatedCTA href="https://calendly.com/piuspavliuk/30min" variant="primary" external>
          Book a Free Call
        </AnimatedCTA>
        <AnimatedCTA href="#case-study" variant="secondary">
          View Work
        </AnimatedCTA>
      </div>
      <p className="mt-8 text-sm text-text-secondary">
        Trusted by dental & medical practices • All 50 states • 1–15 employees • Built for Google
      </p>
    </section>
  );
}

/* ─── Services ──────────────────────────────────────────────────── */

const services = [
  {
    title: "Online booking & lead generation",
    description: (
      <>
        Clear calls-to-action and booking flows that turn visitors into{" "}
        <strong>calls and appointments</strong>.
      </>
    ),
  },
  {
    title: "Local SEO-ready site structure",
    description: (
      <>
        Site architecture designed to help your business{" "}
        <strong>rank in Google</strong> local search and{" "}
        <strong>Maps results</strong>.
      </>
    ),
  },
  {
    title: "Custom website development",
    description: (
      <>
        Hand-coded websites built for your{" "}
        <strong>business goals and brand</strong> —{" "}
        <strong>not templates</strong>.
      </>
    ),
  },
  {
    title: "Mobile-first performance optimization",
    description: (
      <>
        <strong>Fast-loading, mobile-first</strong> websites that deliver a
        smooth experience on every device.
      </>
    ),
  },
  {
    title: "Analytics & conversion tracking",
    description: (
      <>
        Google Analytics and conversion tracking so you see what drives{" "}
        <strong>calls and bookings</strong>.
      </>
    ),
  },
  {
    title: "Ongoing technical support",
    description: (
      <>
        Reliable <strong>updates and fixes</strong> to keep your website{" "}
        <strong>running smoothly long-term</strong>.
      </>
    ),
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-4xl px-6 py-20"
    >
      <AnimatedHeading className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        What I Help Dental & Medical Practices With
      </AnimatedHeading>
      <p className="mt-4 max-w-2xl text-text-secondary">
        From{" "}
        <Link
          href="/websites-for-us-local-businesses"
          className="font-medium text-text underline underline-offset-4 transition-colors hover:text-accent mr-0.5"
        >
          websites for dental and medical practices
        </Link>
        {" "}
        (solo to 15 employees) to ongoing support — here’s what I help with across all 50 states.
      </p>
      <div className="mt-12">
        <AnimatedServiceList className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <AnimatedServiceCard key={service.title}>
            <h3 className="text-lg font-semibold text-text">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {service.description}
            </p>
          </AnimatedServiceCard>
        ))}
        </AnimatedServiceList>
      </div>
    </section>
  );
}

/* ─── Case Study ────────────────────────────────────────────────── */

function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="mx-auto max-w-4xl px-6 py-20"
    >
      <AnimatedHeading className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        What a Dental Clinic Website Should Do
      </AnimatedHeading>
      <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
        I built this demo to show how a well-structured website helps a local
        dental practice get found on Google, book more appointments, and make a
        strong first impression.
      </p>

      <article className="mt-10 min-w-0 overflow-hidden rounded-lg border border-text-secondary/10 bg-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-text">
          <Link
            href="/case-study"
            className="transition-colors hover:text-accent"
          >
            Dental Clinic Website&nbsp;&mdash; Demo Build
          </Link>
        </h3>
        <p className="mt-4 leading-relaxed text-text-secondary">
          A full working example of a dental clinic website, built the same way
          I&rsquo;d build one for a real practice&nbsp;&mdash; focused on
          bringing in patients, not just looking good.
        </p>

        <ul className="mt-6 space-y-4 text-text-secondary">
          <li className="flex min-w-0 items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="min-w-0">
              <strong className="text-text">Service-focused page structure</strong>
              &nbsp;&mdash; so patients quickly find what they need and take
              action
            </span>
          </li>
          <li className="flex min-w-0 items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="min-w-0">
              <strong className="text-text">Online booking flow</strong>
              &nbsp;&mdash; fewer phone tag rounds, more confirmed appointments
            </span>
          </li>
          <li className="flex min-w-0 items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="min-w-0">
              <strong className="text-text">Local SEO-ready structure</strong>
              &nbsp;&mdash; built to help the clinic show up in Google Search
              and Maps
            </span>
          </li>
          <li className="flex min-w-0 items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="min-w-0">
              <strong className="text-text">Fast, mobile-first performance</strong>
              &nbsp;&mdash; most patients search on their phone; speed matters
            </span>
          </li>
        </ul>

        <p className="mt-8 font-medium text-accent">
          Designed to turn website visitors into calls and booked appointments.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-text-secondary/70">
          This is a personal demo project, not a paid client website. It
          reflects my actual process and the quality of work I deliver.
        </p>
      </article>

      {/* ── CTA below the card ── */}
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:flex-wrap">
        <AnimatedCTA href="https://calendly.com/piuspavliuk/30min" variant="primary" external>
          See How This Would Work for Your Business
        </AnimatedCTA>
        <AnimatedCTA href="/case-study" variant="secondary">
          Explore the full case study
        </AnimatedCTA>
      </div>
      <p className="mt-4 text-center text-sm text-text-secondary">
        or{" "}
        <a
          href="https://calendly.com/piuspavliuk/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 transition-colors hover:text-accent"
        >
          request a free website review
        </a>
      </p>
    </section>
  );
}

/* ─── Why Me ────────────────────────────────────────────────────── */

const reasons = [
  "Direct communication",
  "Senior-level development",
  "No agency overhead",
  "Built for US markets and Google SEO",
];

function WhyMeSection() {
  return (
    <section
      id="why-me"
      className="mx-auto max-w-4xl px-6 py-20"
    >
      <AnimatedHeading className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Why Work With a Solo Developer
      </AnimatedHeading>
      <ul className="mt-10 space-y-4">
        {reasons.map((reason) => (
          <li
            key={reason}
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
            {reason}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ─── Industries ────────────────────────────────────────────────── */

const industries = [
  "Dental clinics",
  "Medical practices",
];

function IndustriesSection() {
  return (
    <section
      id="industries"
      className="mx-auto max-w-4xl px-6 py-20"
    >
      <AnimatedHeading className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Industries I Work With
      </AnimatedHeading>
      <p className="mt-4 max-w-2xl text-text-secondary">
        Serving all 50 states. Solo practitioners to small teams (1–15 employees).
      </p>
      <div className="mt-10 -mx-6 overflow-x-auto px-6 scroll-smooth sm:mx-0 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-text-secondary/20">
        <ul className="flex gap-4 sm:grid sm:grid-cols-2">
          {industries.map((industry) => (
            <li
              key={industry}
              className="min-w-[10rem] shrink-0 rounded-lg border border-text-secondary/10 bg-surface px-6 py-5 text-center text-lg font-medium text-text sm:min-w-0"
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-6 text-center text-sm text-text-secondary">
        Dedicated page:{" "}
        <Link
          href="/websites-for-us-local-businesses"
          className="font-medium text-text underline underline-offset-4 transition-colors hover:text-accent mr-0.5"
        >
          Websites for Dental & Medical Practices
        </Link>
        {" "}
        (all 50 states, 1–15 employees).
      </p>
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
        Get a Website That Works for Google and Your Business
      </AnimatedHeading>
      <div className="mt-10">
        <AnimatedCTA href="https://calendly.com/piuspavliuk/30min" variant="primary" external>
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
          Custom Web Developer for US Medical & Dental Practices
        </p>
        <nav className="mt-4 flex flex-wrap gap-6 sm:mt-0" aria-label="Footer">
          <Link
            href="/websites-for-us-local-businesses"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            Dental & Medical Websites
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
