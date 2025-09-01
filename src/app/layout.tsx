import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import ClientWrapper from "@/components/client-wrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Local font configuration
const font = {
  className: 'font-poppins',
  variable: '--font-poppins'
};

export const metadata: Metadata = {
  // Add this line
  metadataBase: new URL('https://www.genuinestack.com/'), 
  
  title: "SaaS Agency - Custom Software Development & AI Solutions",
  description: "Professional SaaS development agency specializing in custom software, API development, MVP creation, enterprise websites, and AI automation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} ${font.variable}`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
