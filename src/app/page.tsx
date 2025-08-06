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
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Build, scale, and <br /> automate your software
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          From MVP to enterprise solutions. We are a SaaS development agency
          specializing in custom software, APIs, and AI automation.
        </p>

        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-white/25 hover:scale-105 transition-all duration-300 ease-out hover:backdrop-blur-md"
        >
          Book a call
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
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
  );
}
