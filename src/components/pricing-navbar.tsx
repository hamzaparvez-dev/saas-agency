"use client";
import { useState, useEffect, useRef } from "react";
import { AlignJustify, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

const PricingNavbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownVisible(!isServicesDropdownVisible);
  };

  const closeServicesDropdown = () => {
    setIsServicesDropdownVisible(false);
  };

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownVisible(false);
      }
    };

    // Only add event listener on client side
    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, []);

  // Check if current page is a service page
  const isServicePage = pathname?.startsWith('/services/');

  return (
    <div className="p-4 md:p-6 flex items-center justify-center fixed md:relative top-0 w-full z-50">
      {/* Mobile-only full-width background */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full bg-black/[0.96]" />

      {/* Main Nav Container */}
      <div className="relative flex items-center justify-between w-full max-w-6xl md:bg-black/50 md:backdrop-blur-lg md:border md:border-neutral-700 md:rounded-full md:px-8 md:py-3">
        
        {/* Logo */}
        <div className="relative z-10">
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </Link>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-gray-300">
          <div className="relative" ref={servicesDropdownRef}>
            <div 
              onClick={toggleServicesDropdown}
              className={`flex items-center space-x-1 cursor-pointer transition-colors duration-200 ${
                isServicePage ? 'text-white font-medium' : 'hover:text-white'
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            
            {isServicesDropdownVisible && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-4 w-64 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg z-50"
              >
                <div className="py-2">
                  <Link href="/services/software-development" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200" onClick={closeServicesDropdown}>Software Development</Link>
                  <Link href="/services/api-development" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200" onClick={closeServicesDropdown}>API Development</Link>
                  <Link href="/services/mvp-development" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200" onClick={closeServicesDropdown}>MVP Development</Link>
                  <Link href="/services/enterprise-websites" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200" onClick={closeServicesDropdown}>Enterprise Websites</Link>
                  <Link href="/services/ai-automation" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200" onClick={closeServicesDropdown}>AI Automation</Link>
                  <Link href="/services/end-to-end-development" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200" onClick={closeServicesDropdown}>End-to-End Development</Link>
                </div>
              </motion.div>
            )}
          </div>

          <Link href="/portfolio" className={`transition-colors duration-200 ${pathname === '/portfolio' ? 'text-white font-medium' : 'hover:text-white'}`}>Portfolio</Link>
          <Link href="/blog" className={`transition-colors duration-200 ${pathname?.startsWith('/blog') ? 'text-white font-medium' : 'hover:text-white'}`}>Blog</Link>
          <Link href="/about" className={`transition-colors duration-200 ${pathname === '/about' ? 'text-white font-medium' : 'hover:text-white'}`}>About</Link>
          <Link href="/pricing" className={`transition-colors duration-200 ${pathname === '/pricing' ? 'text-white font-medium' : 'hover:text-white'}`}>Pricing</Link>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full font-medium text-slate-300 transition-colors animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden relative z-10">
          {isDropDownVisible ? (
            <div onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer">
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingNavbar;