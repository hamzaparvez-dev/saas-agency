"use client";

import { createContext, useContext, useState, useRef, ReactNode } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
  forceStopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loadingCountRef = useRef(0);

  const setLoading = (loading: boolean) => {
    if (loading) {
      loadingCountRef.current += 1;
      setIsLoading(true);
    } else {
      loadingCountRef.current = Math.max(0, loadingCountRef.current - 1);
      if (loadingCountRef.current === 0) {
        setIsLoading(false);
      }
    }
  };

  const startLoading = () => {
    // Clear any pending stop loading timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }
    
    loadingCountRef.current += 1;
    setIsLoading(true);
  };

  const stopLoading = () => {
    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }

    // Debounce stop loading to prevent flickering
    loadingTimeoutRef.current = setTimeout(() => {
      loadingCountRef.current = Math.max(0, loadingCountRef.current - 1);
      if (loadingCountRef.current === 0) {
        setIsLoading(false);
      }
      loadingTimeoutRef.current = null;
    }, 100); // Small delay to prevent flickering
  };

  const forceStopLoading = () => {
    // Clear any pending timeouts
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }
    
    // Reset everything
    loadingCountRef.current = 0;
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider 
      value={{ 
        isLoading, 
        setLoading, 
        startLoading, 
        stopLoading,
        forceStopLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

export default LoadingContext;