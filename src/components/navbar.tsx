"use client";
import { useState, useEffect, useRef } from "react";
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
  const [justOpened, setJustOpened] = useState(false);
  const justOpenedTimeout = useRef<NodeJS.Timeout | null>(null);
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
    if (justOpenedTimeout.current) {
      clearTimeout(justOpenedTimeout.current);
    }
    setIsServicesDropdownVisible(true);
    setJustOpened(true);
    justOpenedTimeout.current = setTimeout(() => {
      setJustOpened(false);
    }, 200);
  };

  const hideServicesDropdown = () => {
    if (servicesDropdownTimeout) {
      clearTimeout(servicesDropdownTimeout);
      setServicesDropdownTimeout(null);
    }
    if (justOpened) {
      // Prevent closing if just opened
      return;
    }
    const timeout = setTimeout(() => {
      setIsServicesDropdownVisible(false);
    }, 150);
    setServicesDropdownTimeout(timeout);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesDropdownTimeout) {
        clearTimeout(servicesDropdownTimeout);
      }
      if (justOpenedTimeout.current) {
        clearTimeout(justOpenedTimeout.current);
      }
    };
  }, [servicesDropdownTimeout]);

  // Reset dropdown state on navigation
  useEffect(() => {
    setIsServicesDropdownVisible(false);
    setJustOpened(false);
    if (servicesDropdownTimeout) {
      clearTimeout(servicesDropdownTimeout);
      setServicesDropdownTimeout(null);
    }
    if (justOpenedTimeout.current) {
      clearTimeout(justOpenedTimeout.current);
    }
  }, [pathname, servicesDropdownTimeout]);

  // Check if current page is a service page
  const isServicePage = pathname?.startsWith('/services/');
  const isHomePage = pathname === '/';

  return (
    <div className="fixed md:relative top-0 w-full z-50 md:flex md:justify-center md:pt-6">
      
      <div className="p-4 bg-black/[0.96] flex items-center justify-between 
                 md:max-w-6xl md:w-full md:bg-black/10 md:backdrop-blur-xl 
                 md:border md:border-white/10 
                 md:rounded-full md:px-8 md:py-3">
        
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
          <div 
            className="relative group" 
            onMouseEnter={showServicesDropdown}
            onMouseLeave={hideServicesDropdown}
          >
            <div 
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
                className="absolute top-full left-0 mt-4 w-64 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl z-[100]"
                onMouseEnter={showServicesDropdown}
                onMouseLeave={hideServicesDropdown}
              >
                <div className="py-2">
                  <LoadingLink href="/services/software-development" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200">Software Development</LoadingLink>
                  <LoadingLink href="/services/api-development" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200">API Development</LoadingLink>
                  <LoadingLink href="/services/mvp-development" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200">MVP Development</LoadingLink>
                  <LoadingLink href="/services/enterprise-websites" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200">Enterprise Websites</LoadingLink>
                  <LoadingLink href="/services/ai-automation" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200">AI Automation</LoadingLink>
                  <LoadingLink href="/services/end-to-end-development" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200">End-to-End Development</LoadingLink>
                </div>
              </motion.div>
            )}
          </div>

          <LoadingLink href="/portfolio" className={`transition-colors duration-200 ${pathname === '/portfolio' ? 'text-white font-medium' : 'hover:text-white'}`}>Portfolio</LoadingLink>
          <LoadingLink href="/blog" className={`transition-colors duration-200 ${pathname?.startsWith('/blog') ? 'text-white font-medium' : 'hover:text-white'}`}>Blog</LoadingLink>
          <LoadingLink href="/about" className={`transition-colors duration-200 ${pathname === '/about' ? 'text-white font-medium' : 'hover:text-white'}`}>About</LoadingLink>
          <LoadingLink href="/pricing" className={`transition-colors duration-200 ${pathname === '/pricing' ? 'text-white font-medium' : 'hover:text-white'}`}>Pricing</LoadingLink>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex">
        <LoadingLink
  href="/contact"
  className="inline-flex items-center justify-center px-6 py-2 rounded-full font-medium text-slate-300 transition-colors animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] hover:text-white"
>
  Contact
</LoadingLink>
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
 
export default Navbar;

