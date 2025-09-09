import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert API Development Services | Genuine Stack - RESTful APIs & Microservices',
  description: 'Build robust, scalable, and secure RESTful APIs and microservices with Genuine Stack. Our API development services power enterprise-level applications with 99.9% uptime. Get a free consultation today.',
  keywords: 'API development services, RESTful API development, GraphQL API, microservices architecture, API integration company, SaaS API development, backend API services, enterprise API solutions, API consulting, Genuine Stack',
  authors: [{ name: 'Genuine Stack Team' }],
  openGraph: {
    title: 'Expert API Development Services | Genuine Stack',
    description: 'Transform your business with robust, scalable APIs and microservices. Enterprise-grade backend solutions with 99.9% uptime guarantee.',
    type: 'website',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/api-development.webp',
        width: 1200,
        height: 630,
        alt: 'Expert API Development Services - Genuine Stack SaaS Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert API Development Services | Genuine Stack',
    description: 'Transform your business with robust, scalable APIs and microservices. Enterprise-grade backend solutions.',
    images: ['/images/api-development.webp'],
  },
  alternates: {
    canonical: '/services/api-development',
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
};

export default function ApiDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

