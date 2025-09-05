import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MVP Development Services | Genuine Stack - Startup MVP Solutions',
  description: 'Expert MVP development services by Genuine Stack. We help startups and entrepreneurs build Minimum Viable Products quickly and cost-effectively. Fast-track your idea to market.',
  keywords: 'MVP development, minimum viable product, startup development, rapid prototyping, product development, startup MVP, lean development, product launch, Genuine Stack',
  authors: [{ name: 'Genuine Stack Team' }],
  openGraph: {
    title: 'MVP Development Services | Genuine Stack',
    description: 'Launch your startup idea quickly with our expert MVP development services. Fast, cost-effective, and market-ready solutions.',
    type: 'website',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/mobile-app-mvp.webp',
        width: 1200,
        height: 630,
        alt: 'MVP Development Services - Genuine Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Development Services | Genuine Stack',
    description: 'Launch your startup idea quickly with our expert MVP development services.',
    images: ['/images/mobile-app-mvp.webp'],
  },
  alternates: {
    canonical: '/services/mvp-development',
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

export default function MvpDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

