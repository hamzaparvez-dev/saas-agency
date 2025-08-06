"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import LoadingLink from "./loading-link";
import DropDownMenu from "./drop-down-menu";


interface NavbarProps {
  scrollToWebsiteDesign?: () => void;
  scrollToGraphicDesign?: () => void;
  scrollToShopifyStores?: () => void;
  scrollToBrands?: () => void;
  scrollToServices?: () => void; 
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices, 
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] = useState(false);
  const [servicesDropdownTimeout, setServicesDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  const showServicesDropdown = () => {
    if (servicesDropdownTimeout) {
      clearTimeout(servicesDropdownTimeout);
      setServicesDropdownTimeout(null);
    }
    setIsServicesDropdownVisible(true);
  };

  const hideServicesDropdown = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownVisible(false);
    }, 150); // 150ms delay to prevent accidental closing
    setServicesDropdownTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (servicesDropdownTimeout) {
        clearTimeout(servicesDropdownTimeout);
      }
    };
  }, [servicesDropdownTimeout]);

  // Check if current page is a service page
  const isServicePage = pathname?.startsWith('/services/');
  const isHomePage = pathname === '/';

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between relative z-50">
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
             text-gray-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <div 
            className="relative group" 
            onMouseEnter={showServicesDropdown}
            onMouseLeave={hideServicesDropdown}
          >
            <div 
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
                className="absolute top-full left-0 mt-1 w-64 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl z-[100]"
                onMouseEnter={showServicesDropdown}
                onMouseLeave={hideServicesDropdown}
              >
                <div className="py-2">
                  <LoadingLink 
                    href="/services/software-development" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                  >
                    Software Development
                  </LoadingLink>
                  <LoadingLink 
                    href="/services/api-development" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                  >
                    API Development
                  </LoadingLink>
                  <LoadingLink 
                    href="/services/mvp-development" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                  >
                    MVP Development
                  </LoadingLink>
                  <LoadingLink 
                    href="/services/enterprise-websites" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                  >
                    Enterprise Websites
                  </LoadingLink>
                  <LoadingLink 
                    href="/services/ai-automation" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                  >
                    AI Automation
                  </LoadingLink>
                  <LoadingLink 
                    href="/services/end-to-end-development" 
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                  >
                    End-to-End Development
                  </LoadingLink>
          </div>
              </motion.div>
            )}
          </div>

          <LoadingLink 
            href="/portfolio" 
            className={`transition-colors duration-200 ${
              pathname === '/portfolio' ? 'text-gray-50' : 'text-gray-300 hover:text-gray-50'
            }`}
          >
            Portfolio
          </LoadingLink>

          <LoadingLink 
            href="/blog" 
            className={`transition-colors duration-200 ${
              pathname?.startsWith('/blog') ? 'text-gray-50' : 'text-gray-300 hover:text-gray-50'
            }`}
          >
            Blog
          </LoadingLink>

          <LoadingLink 
            href="/about" 
            className={`transition-colors duration-200 ${
              pathname === '/about' ? 'text-gray-50' : 'text-gray-300 hover:text-gray-50'
            }`}
          >
            About
          </LoadingLink>

          <LoadingLink 
            href="/pricing" 
            className={`transition-colors duration-200 ${
              pathname === '/pricing' ? 'text-gray-50' : 'text-gray-300 hover:text-gray-50'
            }`}
          >
            Pricing
          </LoadingLink>
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
          <LoadingLink
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-slate-50"
          >
            Contact
          </LoadingLink>
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;