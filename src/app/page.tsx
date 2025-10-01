"use client";

import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import SoftwareDevelopment from "./SoftwareDevelopment";
import ApiDevelopment from "./api-developements";
import MvpSolutions from "./mvp-solutions";
import Automation from "./automation";
import Services from "./services";
import { useRef } from "react";
import FAQS from "./faq";
import Footer from "@/components/footer";
import StructuredData from "@/components/structured-data";
import SEOFAQ from "@/components/seo-faq";

export default function Home() {
  const SoftwareDevelopmentRef = useRef<HTMLDivElement>(null);
  const ApiDevelopmentRef = useRef<HTMLDivElement>(null);
  const MvpSolutionsRef = useRef<HTMLDivElement>(null);
  const AutomationRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    SoftwareDevelopmentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    ApiDevelopmentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    MvpSolutionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    AutomationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <StructuredData />
      <SEOFAQ />
      <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
      <div className="px-4 mx-auto relative z-10 w-full pt-20 md:pt-32 mt-20 md:mt-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-7xl px-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            Build, scale, and <br /> automate your software
          </h1>
          <p className="mt-8 text-lg sm:text-xl font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4 leading-relaxed">
            From MVP to enterprise solutions. <strong>Genuine Stack</strong> is a premier SaaS development agency
            specializing in custom software development, APIs, and AI automation solutions.
            We&apos;ve helped 50+ companies worldwide transform their ideas into powerful digital products.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href={"/book"}
              className="cursor-pointer flex items-center justify-center border rounded-full w-48 sm:w-56 p-3 text-white bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-white/25 hover:scale-105 transition-all duration-300 ease-out hover:backdrop-blur-md"
            >
              Book a call
            </Link>
          </div>
        </div>

        <div className="w-full pt-12">
          <SliderOne />
        </div>

        {/* Who We Are Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              <strong>Genuine Stack</strong> is a leading SaaS development agency based in Lucknow, India, And NewYork USA,
              with over 5 years of experience in transforming innovative ideas into powerful digital solutions. 
              We specialize in custom software development, API development, MVP creation, enterprise websites, 
              and AI automation solutions. Our team of expert developers, designers, and strategists has successfully 
              delivered 150+ projects for startups and enterprises worldwide, helping them secure over $10M in funding 
              and achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-3">5+ Years Experience</h3>
              <p className="text-neutral-300">Proven track record in SaaS development and digital transformation</p>
            </div>
            <div className="text-center p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-3">150+ Projects Delivered</h3>
              <p className="text-neutral-300">Successfully launched products for startups and enterprises</p>
            </div>
            <div className="text-center p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-3">$10M+ Funding Secured</h3>
              <p className="text-neutral-300">Helped our clients raise significant investment through our MVPs</p>
            </div>
          </div>
        </div>
        
        <div id="services">
          <Services />
        </div>
        <div ref={SoftwareDevelopmentRef}>
          <SoftwareDevelopment />
        </div>
        <div ref={ApiDevelopmentRef}>
          <ApiDevelopment />
        </div>
        <div ref={MvpSolutionsRef}>
          <MvpSolutions />
        </div>
        <div ref={AutomationRef}>
          <Automation/>
        </div>
        {/* Testimonials Section */}
        <div id="testimonials" className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What our clients say
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Real words from founders and operators who trusted us to build, ship,
              and scale their products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-4">
                <img src="/images/client1-avatar.jpg" alt="Client avatar" className="h-12 w-12 rounded-full object-cover border border-neutral-700" />
                <div>
                  <p className="text-white font-semibold">Aarav Mehta</p>
                  <p className="text-neutral-400 text-sm">Founder, Finlytics</p>
                </div>
              </div>
              <p className="text-neutral-300 mt-4 leading-relaxed">
                “Genuine Stack felt like an extension of our team. They were fast, thoughtful,
                and brutally honest about trade‑offs. We launched our MVP in 3 weeks and closed
                two enterprise pilots the same month. I wish we had met them earlier.”
              </p>
            </div>

            <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-4">
                <img src="/images/client2-avatar.jpg" alt="Client avatar" className="h-12 w-12 rounded-full object-cover border border-neutral-700" />
                <div>
                  <p className="text-white font-semibold">Emily Rogers</p>
                  <p className="text-neutral-400 text-sm">COO, CareBridge Health</p>
                </div>
              </div>
              <p className="text-neutral-300 mt-4 leading-relaxed">
                “They translated a messy idea into a reliable product our clinicians actually
                love using. Communication was crisp, deadlines were respected, and the codebase
                is a joy for our internal team to maintain.”
              </p>
            </div>

            <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-4">
                <img src="/images/client3-avatar.jpg" alt="Client avatar" className="h-12 w-12 rounded-full object-cover border border-neutral-700" />
                <div>
                  <p className="text-white font-semibold">Noah Williams</p>
                  <p className="text-neutral-400 text-sm">Product Lead, ShipRight</p>
                </div>
              </div>
              <p className="text-neutral-300 mt-4 leading-relaxed">
                “From architecture to tiny UI details, they cared about outcomes—not just
                output. Performance improved 40%, support tickets dropped, and customers noticed.
                This is the partner you keep.”
              </p>
            </div>
          </div>
        </div>
        <FAQS />
        <Footer />
      </div>
      </div>
    </>
  );
}

