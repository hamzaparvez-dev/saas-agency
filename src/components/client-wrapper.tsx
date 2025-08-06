"use client";

import { ReactNode, useEffect, useState } from "react";
import { LoadingProvider } from "@/contexts/loading-context";
import Loading from "@/components/loading";
import ClientOnly from "@/components/client-only";
import { useLoading } from "@/contexts/loading-context";
import { useRouter } from "next/navigation";

function LoadingWrapper({ children }: { children: ReactNode }) {
  const { isLoading, forceStopLoading } = useLoading();
  const router = useRouter();
  
  // Global navigation safety net
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    let currentPath = window.location.pathname;
    
    // Check for URL changes every 100ms during loading
    const checkNavigation = () => {
      if (isLoading && window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        // Navigation completed, stop loading after a brief delay
        setTimeout(() => {
          forceStopLoading();
        }, 300);
      }
    };

    let intervalId: NodeJS.Timeout;
    if (isLoading) {
      intervalId = setInterval(checkNavigation, 100);
    }

    // Cleanup
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isLoading, forceStopLoading]);

  // Emergency fallback - force stop loading after 10 seconds
  useEffect(() => {
    if (isLoading) {
      const emergencyTimeout = setTimeout(() => {
        console.warn('Emergency loading timeout - forcing stop');
        forceStopLoading();
      }, 10000); // 10 seconds absolute maximum

      return () => clearTimeout(emergencyTimeout);
    }
  }, [isLoading, forceStopLoading]);
  
  return (
    <>
      <ClientOnly>
        <Loading isLoading={isLoading} />
      </ClientOnly>
      {children}
    </>
  );
}

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <LoadingProvider>
      <LoadingWrapper>
        {children}
      </LoadingWrapper>
    </LoadingProvider>
  );
}