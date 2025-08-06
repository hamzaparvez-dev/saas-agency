import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/client-wrapper";

const font = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins'
});

export const metadata: Metadata = {
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
      </body>
    </html>
  );
}
