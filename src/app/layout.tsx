import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Custom Web Developer for US Local Businesses | Dental & Service Websites",
  description:
    "Custom website development for US local service businesses and dental clinics. No templates. Senior developer building fast, SEO-optimized websites that generate calls and bookings.",
  keywords: [
    "custom website developer",
    "web developer for local businesses",
    "dental website development",
    "custom websites for service businesses",
  ],
  authors: [{ name: "Custom Web Developer" }],
  openGraph: {
    title: "Custom Web Developer for US Local Businesses",
    description:
      "Custom website development for US local service businesses and dental clinics. Fast, SEO-optimized websites that generate calls and bookings.",
    type: "website",
    locale: "en_US",
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Custom Web Developer",
    jobTitle: "Senior Web Developer",
    description:
      "Solo senior web developer specializing in custom websites for US local service businesses and dental clinics.",
    knowsAbout: [
      "Web Development",
      "SEO",
      "Local Business Websites",
      "Dental Website Development",
    ],
    url: "/",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Custom Web Development for Local Businesses",
    description:
      "Custom website development for US local service businesses. Specializing in dental clinics, professional practices, and service companies.",
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
    name: "Custom Web Developer for US Local Businesses",
    description:
      "Custom website development for US local service businesses and dental clinics.",
    url: "/",
  };

  return (
    <>
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
