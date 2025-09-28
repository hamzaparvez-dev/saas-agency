"use client";

import Link from "next/link";
import { ReactNode } from "react";

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

  if (external) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={className}
    >
      {children}
    </Link>
  );
};

export default LoadingLink;