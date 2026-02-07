import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import Testimonial from "@/components/ui/testimonial";
import Services from "@/app/services"; // Reuse your existing services component

export const metadata: Metadata = {
  title: "SaaS Development Agency New York | Custom Software & AI | Genuine Stack",
  description: "Premier SaaS development and AI automation agency serving New York (NYC). We build scalable MVPs, custom software, and enterprise AI solutions for NYC startups.",
  keywords: "SaaS agency New York, software development NYC, AI automation agency NYC, Next.js developers New York, custom software development Manhattan",
};

export default function NewYorkLocationPage() {
  // You can reuse your scroll functions here if needed, or simplify the navbar for this page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Genuine Stack New York",
    "image": "https://www.genuinestack.com/logo/logo.png",
    "url": "https://www.genuinestack.com/locations/new-york-saas-agency",
    "telephone": "+1-555-0123", // Replace with your US number or generic
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": ["https://www.genuinestack.com"]
  };

  return (
    <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Simplify Navbar props or create a wrapper if needed */}
      <Navbar />

      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="white" />
      
      <main className="px-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            Top SaaS Development <br /> Agency in <span className="text-blue-500">New York</span>
          </h1>
          <p className="mt-8 text-lg font-normal text-neutral-300 max-w-2xl mx-auto">
            Genuine Stack helps <strong>New York startups and enterprises</strong> build scalable software. 
            From Fintech on Wall Street to HealthTech in Brooklyn, we deliver high-performance 
            Next.js applications and AI automation.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/book"
              className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition"
            >
              Book an NYC Consultation
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Localized "Why Us" Section */}
        <div className="max-w-6xl mx-auto py-20 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-2">NYC Timezone Aligned</h3>
            <p className="text-neutral-400">Real-time collaboration during EST business hours for seamless communication.</p>
          </div>
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-2">US Market Expertise</h3>
            <p className="text-neutral-400">We understand US compliance (SOC2, HIPAA) and enterprise standards.</p>
          </div>
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-2">Cost-Effective Scale</h3>
            <p className="text-neutral-400">Get New York quality engineering at competitive global rates.</p>
          </div>
        </div>

        {/* Reuse your existing components */}
        <div className="py-10">
          <Services />
        </div>
        <Testimonial />
        <Footer />
      </main>
    </div>
  );
}
