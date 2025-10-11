import type { Metadata } from "next";
import { Poppins, Lora } from 'next/font/google';
import "./globals.css";
import ClientWrapper from "@/components/client-wrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from 'next/script';

// Setup optimized fonts
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.genuinestack.com/'), 
  
  title: "Genuine Stack - SaaS Agency | Custom Software & AI Solutions",
  description: "Leading SaaS development agency specializing in custom software, API development, MVPs, and AI automation. Transform your ideas into powerful digital products..",
  keywords: "Genuine Stack, SaaS development agency, custom software development, API development, MVP development, enterprise websites, AI automation, software development company, web application development, mobile app development, digital transformation",
  authors: [{ name: 'Genuine Stack Team' }],
  creator: 'Genuine Stack',
  publisher: 'Genuine Stack',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Genuine Stack - Premier SaaS Development Agency",
    description: "Transform your ideas into powerful software solutions. Expert SaaS development, custom APIs, MVP creation, and AI automation services.",
    url: 'https://www.genuinestack.com',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/saas-dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'Genuine Stack - SaaS Development Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Genuine Stack - Premier SaaS Development Agency",
    description: "Transform your ideas into powerful software solutions. Expert SaaS development, custom APIs, MVP creation, and AI automation services.",
    images: ['/images/saas-dashboard.jpg'],
    creator: '@genuinestack',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-SPWB5806TX	',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* The <head> tag with font links is no longer needed */}
      <body className={`${poppins.variable} ${lora.variable} font-poppins`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Analytics />
        <SpeedInsights />
        
        {/* Chatbase Chatbot */}
        <Script
          id="chatbase-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="aBatKR8uzm9GHb-AAWpVd";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
            `,
          }}
        />
      </body>
    </html>
  );
}