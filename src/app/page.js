// app/page.js

import CallToActionBar from "@/components/CallToActionBar";
import FounderMessage from "@/components/FounderMessage";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import ProgramsSection from "@/components/ProgramSection";
import ServicesSection from "@/components/ServiceSection";
import Stats from "@/components/Stats";


export const metadata = {
  title: "Training & Consultancy Dubai | Elevate",
  description:
    "Leading training and consultancy company in Dubai. Expert corporate training in leadership, sales & productivity. 30+ years experience, 13+ countries, 200,000+ professionals trained. Contact us today.",
  keywords: [
    "training and consultancy dubai",
    "corporate training dubai",
    "training company dubai",
    "consultancy dubai",
    "leadership training dubai",
    "sales training dubai",
    "productivity workshops dubai",
    "corporate training and consultancy",
  ],
  alternates: {
    canonical: "https://www.elevate-mena.com",
  },
  openGraph: {
    title: "Training & Consultancy Dubai | Elevate",
    description: "Leading training and consultancy company in Dubai. Expert corporate training in leadership, sales & productivity. 30+ years experience, 200,000+ professionals trained.",
    url: "https://www.elevate-mena.com",
    siteName: "Elevate",
    images: [
      {
        url: "https://www.elevate-mena.com/training-consultancy-Company-Dubai-MENA.png",
        width: 1200,
        height: 630,
        alt: "Elevate Training and Consultancy Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training & Consultancy Dubai | Elevate",
    description: "Leading training and consultancy company in Dubai. Expert corporate training in leadership, sales & productivity.",
    images: ["https://www.elevate-mena.com/training-consultancy-Company-Dubai-MENA.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.elevate-mena.com/#organization",
    "name": "Elevate Training and Consultancy",
    "alternateName": "Elevate MENA",
    "url": "https://www.elevate-mena.com",
    "logo": "https://www.elevate-mena.com/logowhite.png",
    "image": "https://www.elevate-mena.com/training-consultancy-Company-Dubai-MENA.png",
    "description": "Leading training and consultancy company in Dubai offering corporate training in leadership, sales, and productivity. 30+ years experience serving 13+ countries.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Place",
        "name": "MENA Region"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Training and Consultancy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leadership Training",
            "description": "Corporate leadership development programs for executives and managers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sales Training",
            "description": "Professional sales training and consultancy services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Productivity Training",
            "description": "Employee productivity and performance enhancement programs"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "200000",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.linkedin.com/company/elevate-mena",
      "https://www.instagram.com/elevate-mena"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Hero />
      <Stats />

      <div id="solutions">
        <ServicesSection />
      </div>
      <FounderMessage />

      <div id="insights">
        <Insights />
      </div>
      <ProgramsSection />

      <CallToActionBar />
    </>
  );
}
