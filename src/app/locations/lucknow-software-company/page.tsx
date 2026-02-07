import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import Testimonial from "@/components/ui/testimonial";
import Services from "@/app/services"; 

export const metadata: Metadata = {
  title: "Software Development Company Lucknow | SaaS & AI Experts | Genuine Stack",
  description: "Leading software company in Lucknow offering website development, mobile apps, and AI solutions. Transform your business with Lucknow's top developers.",
  keywords: "Software company Lucknow, web development Lucknow, app developers Lucknow, SaaS agency India, AI company Uttar Pradesh",
};

export default function LucknowLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Genuine Stack Lucknow",
    "image": "https://www.genuinestack.com/logo/logo.png",
    "url": "https://www.genuinestack.com/locations/lucknow-software-company",
    "telephone": "+91-9076970199",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8467,
      "longitude": 80.9462
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
      
      <Navbar />
      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="white" />
      
      <main className="px-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            Best Software Development <br /> Company in <span className="text-orange-500">Lucknow</span>
          </h1>
          <p className="mt-8 text-lg font-normal text-neutral-300 max-w-2xl mx-auto">
            Genuine Stack is <strong>Lucknow&apos;s premier software agency</strong>. We help local businesses and global brands 
            build world-class websites, mobile apps, and AI automation tools right here from Uttar Pradesh.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition"
            >
              Contact Us in Lucknow
            </Link>
          </div>
        </div>

        {/* Localized "Why Us" Section */}
        <div className="max-w-6xl mx-auto py-20 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-2">Local Support</h3>
            <p className="text-neutral-400">Meet our team in Lucknow for face-to-face consultations and strategy.</p>
          </div>
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-2">Global Standards</h3>
            <p className="text-neutral-400">We bring Silicon Valley coding standards to the Indian market.</p>
          </div>
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-2">Full-Stack Experts</h3>
            <p className="text-neutral-400">From React & Node.js to AI & Cloud, we handle your entire tech stack.</p>
          </div>
        </div>

        <div className="py-10">
          <Services />
        </div>
        <Testimonial />
        <Footer />
      </main>
    </div>
  );
}
