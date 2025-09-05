import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Genuine Stack - SaaS Development Agency | Custom Software & AI Solutions",
  description: "Genuine Stack is a leading SaaS development agency specializing in custom software development, API development, MVP creation, enterprise websites, and AI automation solutions. Transform your ideas into powerful digital products.",
  keywords: "Genuine Stack, SaaS development agency, custom software development, API development, MVP development, enterprise websites, AI automation, software development company, web application development, mobile app development, digital transformation",
  authors: [{ name: 'Genuine Stack Team' }],
  creator: 'Genuine Stack',
  publisher: 'Genuine Stack',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.genuinestack.com'),
  alternates: {
    canonical: '/',
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
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

