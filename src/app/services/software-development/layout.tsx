import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premier Custom Software Development Services | Genuine Stack - Enterprise Solutions',
  description: 'Transform your ideas into powerful software solutions with Genuine Stack. We build scalable, secure, and modern custom software using cutting-edge technologies. Trusted by 50+ companies worldwide. Get started today.',
  keywords: 'custom software development services, software development company India, web application development, enterprise software solutions, scalable software development, secure software development, modern software solutions, software architecture consulting, SaaS development, Genuine Stack',
  authors: [{ name: 'Genuine Stack Team' }],
  openGraph: {
    title: 'Premier Custom Software Development Services | Genuine Stack',
    description: 'Transform your ideas into powerful software solutions. Expert custom software development with scalable architecture and cutting-edge technologies.',
    type: 'website',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/software-dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Premier Custom Software Development Services - Genuine Stack SaaS Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier Custom Software Development Services | Genuine Stack',
    description: 'Transform your ideas into powerful software solutions. Expert custom software development with scalable architecture and cutting-edge technologies.',
    images: ['/images/software-dev.jpg'],
  },
  alternates: {
    canonical: '/services/software-development',
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

export default function SoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

