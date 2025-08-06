"use client";

import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/loading-context";
import { ReactNode, MouseEvent, useEffect, useRef, useState } from "react";

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const LoadingLink = ({ 
  href, 
  children, 
  className = "", 
  onClick,
  external = false 
}: LoadingLinkProps) => {
  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();
  const currentUrl = useRef('');
  const navigationTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Monitor URL changes to detect navigation completion
  useEffect(() => {
    // Only run on client side
    if (!isClient || typeof window === 'undefined') return;
    
    // Initialize currentUrl on mount
    currentUrl.current = window.location.pathname;
    
    const checkUrlChange = () => {
      const newUrl = window.location.pathname;
      if (currentUrl.current !== newUrl) {
        currentUrl.current = newUrl;
        // URL has changed, wait a bit for the page to render then stop loading
        if (navigationTimeout.current) {
          clearTimeout(navigationTimeout.current);
        }
        navigationTimeout.current = setTimeout(() => {
          stopLoading();
        }, 400); // Give the page time to render
      }
    };

    // Check URL changes periodically during navigation
    const intervalId = setInterval(checkUrlChange, 50);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current);
      }
    };
  }, [stopLoading]);

  // Also listen for popstate (back/forward navigation)
  useEffect(() => {
    // Only run on client side
    if (!isClient || typeof window === 'undefined') return;
    
    const handlePopState = () => {
      setTimeout(() => {
        stopLoading();
      }, 300);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [stopLoading, isClient]);

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Call any additional onClick handler
    if (onClick) {
      onClick();
    }

    // Don't show loading for external links or same page navigation
    if (external || (isClient && typeof window !== 'undefined' && href === window.location.pathname)) {
      if (external) {
        window.open(href, '_blank');
      }
      return;
    }

    // Start loading immediately
    startLoading();

    // Clear any existing navigation timeout
    if (navigationTimeout.current) {
      clearTimeout(navigationTimeout.current);
    }

    try {
      // Store current URL for comparison
      if (isClient && typeof window !== 'undefined') {
        currentUrl.current = window.location.pathname;
      }
      
      // Navigate to the new page
      router.push(href);
      
      // Fallback timeout in case URL detection fails (should not normally happen)
      navigationTimeout.current = setTimeout(() => {
        console.log('Fallback timeout triggered - stopping loading');
        stopLoading();
      }, 5000); // 5 seconds absolute maximum
      
    } catch (error) {
      console.error("Navigation error:", error);
      stopLoading();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
};

export default LoadingLink;