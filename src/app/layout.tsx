import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Custom Web Developer for US Medical & Dental Practices | All 50 States",
  description:
    "Custom website development for US dental and medical practices (1–15 employees). All 50 states. No templates. Senior developer building fast, SEO-optimized sites that generate calls and bookings.",
  keywords: [
    "custom website developer",
    "dental website development",
    "medical practice website",
    "web developer for dental clinics",
    "websites for medical practices",
  ],
  authors: [{ name: "Custom Web Developer" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/icon.svg",
    apple: "/apple-icon",
  },
  openGraph: {
    title: "Custom Web Developer for US Medical & Dental Practices",
    description:
      "Custom website development for US dental and medical practices (1–15 employees). All 50 states. Fast, SEO-optimized sites that generate calls and bookings.",
    type: "website",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: "/apple-icon",
        width: 180,
        height: 180,
        alt: "Custom Web Developer - Logo",
      },
      {
        url: "/img/logo.svg",
        width: 237,
        height: 237,
        alt: "Custom Web Developer - Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Custom Web Developer for US Medical & Dental Practices",
    description:
      "Custom website development for US dental and medical practices. All 50 states. 1–15 employees.",
    images: ["/apple-icon"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pavliuk Web",
    url: SITE_URL,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: "Web Design for US Dental and Medical Practices",
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Custom Web Developer",
    jobTitle: "Senior Web Developer",
    description:
      "Solo senior web developer specializing in custom websites for US dental and medical practices (1–15 employees), serving all 50 states.",
    knowsAbout: [
      "Web Development",
      "SEO",
      "Dental Website Development",
      "Medical Practice Websites",
      "Local SEO",
    ],
    url: SITE_URL,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Custom Web Development for Dental and Medical Practices",
    description:
      "Custom website development for US dental and medical practices (solo to 15 employees). Serving all 50 states including California, Texas, Florida, and New York.",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: "Web Development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local SEO-Ready Site Structure",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile-First Performance Optimization",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Custom Web Developer for US Medical & Dental Practices",
    description:
      "Custom website development for US dental and medical practices (1–15 employees). All 50 states.",
    url: SITE_URL,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
