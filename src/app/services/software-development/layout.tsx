import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | Genuine Stack',
  description: 'Expert custom software development services by Genuine Stack. We build scalable, secure, and modern software solutions using the latest technologies. From web applications to enterprise software.',
  keywords: 'custom software development, software development company, web application development, enterprise software, scalable software, secure software development, modern software solutions, software architecture, Genuine Stack',
  authors: [{ name: 'Genuine Stack Team' }],
  openGraph: {
    title: 'Custom Software Development Services | Genuine Stack',
    description: 'Transform your ideas into powerful software solutions. Expert custom software development with scalable architecture and modern technologies.',
    type: 'website',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/software-dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Software Development Services - Genuine Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Services | Genuine Stack',
    description: 'Expert custom software development with scalable architecture and modern technologies.',
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

