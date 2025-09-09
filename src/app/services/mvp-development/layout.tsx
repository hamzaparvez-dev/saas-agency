import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert MVP Development Services | Genuine Stack - Launch Your Startup in 4 Weeks',
  description: 'Transform your startup idea into a market-ready MVP in just 4 weeks with Genuine Stack. Our MVP development services have helped 150+ startups secure $50M+ in funding. Get your free consultation today.',
  keywords: 'MVP development services, minimum viable product development, startup MVP development, rapid prototyping services, product development company, startup development agency, lean development, product launch services, MVP consulting, Genuine Stack',
  authors: [{ name: 'Genuine Stack Team' }],
  openGraph: {
    title: 'Expert MVP Development Services | Genuine Stack',
    description: 'Transform your startup idea into a market-ready MVP in just 4 weeks. Our services have helped 150+ startups secure $50M+ in funding.',
    type: 'website',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/mobile-app-mvp.webp',
        width: 1200,
        height: 630,
        alt: 'Expert MVP Development Services - Genuine Stack SaaS Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert MVP Development Services | Genuine Stack',
    description: 'Transform your startup idea into a market-ready MVP in just 4 weeks. Our services have helped 150+ startups secure $50M+ in funding.',
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

