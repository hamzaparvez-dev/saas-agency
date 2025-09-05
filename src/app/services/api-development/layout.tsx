import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Development Services | Genuine Stack - RESTful APIs & Microservices',
  description: 'Professional API development services by Genuine Stack. We build robust RESTful APIs, GraphQL APIs, and microservices architecture. Expert API integration and documentation.',
  keywords: 'API development, RESTful API, GraphQL API, microservices, API integration, API documentation, backend development, web services, API architecture, Genuine Stack',
  authors: [{ name: 'Genuine Stack Team' }],
  openGraph: {
    title: 'API Development Services | Genuine Stack',
    description: 'Build robust APIs and microservices with our expert development team. RESTful APIs, GraphQL, and seamless integration solutions.',
    type: 'website',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/api-development.webp',
        width: 1200,
        height: 630,
        alt: 'API Development Services - Genuine Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'API Development Services | Genuine Stack',
    description: 'Build robust APIs and microservices with our expert development team.',
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

