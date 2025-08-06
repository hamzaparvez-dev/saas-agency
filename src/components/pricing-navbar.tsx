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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check if current page is a service page
  const isServicePage = pathname?.startsWith('/services/');

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <div className="relative" ref={servicesDropdownRef}>
            <div 
              onClick={toggleServicesDropdown}
              className={`flex items-center space-x-1 cursor-pointer transition-colors duration-200 ${
                isServicePage ? 'text-gray-50' : 'text-gray-300 hover:text-gray-50'
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
                className="absolute top-full left-0 mt-2 w-64 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg z-50"
              >
                <div className="py-2">
                  <Link 
                    href="/services/software-development" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                    onClick={closeServicesDropdown}
                  >
                    Software Development
                  </Link>
                  <Link 
                    href="/services/api-development" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                    onClick={closeServicesDropdown}
                  >
                    API Development
                  </Link>
                  <Link 
                    href="/services/mvp-development" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                    onClick={closeServicesDropdown}
                  >
                    MVP Development
                  </Link>
                  <Link 
                    href="/services/enterprise-websites" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                    onClick={closeServicesDropdown}
                  >
                    Enterprise Websites
                  </Link>
                  <Link 
                    href="/services/ai-automation" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                    onClick={closeServicesDropdown}
                  >
                    AI Automation
                  </Link>
                  <Link 
                    href="/services/end-to-end-development" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                    onClick={closeServicesDropdown}
                  >
                    End-to-End Development
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          <Link 
            href="/portfolio" 
            className={`transition-colors duration-200 ${
              pathname === '/portfolio' ? 'text-gray-50' : 'text-gray-300 hover:text-gray-50'
            }`}
          >
            Portfolio
          </Link>

          <Link 
            href="/blog" 
            className={`transition-colors duration-200 ${
              pathname?.startsWith('/blog') ? 'text-gray-50' : 'text-gray-300 hover:text-gray-50'
            }`}
          >
            Blog
          </Link>

          <Link 
            href="/about" 
            className={`transition-colors duration-200 ${
              pathname === '/about' ? 'text-gray-50' : 'text-gray-300 hover:text-gray-50'
            }`}
          >
            About
          </Link>

          <Link 
            href="/pricing" 
            className={`transition-colors duration-200 ${
              pathname === '/pricing' ? 'text-gray-50' : 'text-gray-300 hover:text-gray-50'
            }`}
          >
            Pricing
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingNavbar;
