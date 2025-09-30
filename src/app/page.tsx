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
import { motion } from "framer-motion";

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
      <div className="p-4 mx-auto relative z-10 w-full pt-16 md:pt-32 px-2">
        <h1 className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Build, scale, and <br /> automate your software
        </h1>
        <p className="mt-6 text-xl font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4 leading-relaxed">
          From MVP to enterprise solutions. <strong>Genuine Stack</strong> is a premier SaaS development agency
          specializing in custom software development, APIs, and AI automation solutions.
          We&apos;ve helped 50+ companies worldwide transform their ideas into powerful digital products.
        </p>

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-48 mx-auto my-6"
        >
          <Link
            href={"/book"}
            className="cursor-pointer flex items-center justify-center border rounded-full w-full p-2 text-white bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-white/25 hover:scale-105 transition-all duration-300 ease-out hover:backdrop-blur-md"
          >
            Book a call
          </Link>
        </motion.div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-neutral-500 mb-4 uppercase tracking-widest">
                Trusted by innovative startups and enterprises
            </p>
            <div className="flex justify-center items-center gap-x-8 md:gap-x-12 opacity-60">
                {/* Replace with your actual client logos */}
                <span className="font-bold text-2xl text-neutral-400">Stripe</span>
                <span className="font-bold text-2xl text-neutral-400">Notion</span>
                <span className="font-bold text-2xl text-neutral-400">Loom</span>
                <span className="font-bold text-2xl text-neutral-400">Webflow</span>
            </div>
        </div>


        <div className="w-full pt-20">
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
        <FAQS />
        <Footer />
      </div>
      </div>
    </>
  );
}

