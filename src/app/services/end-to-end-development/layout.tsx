import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'End-to-End Development Services | Genuine Stack - Full Stack Solutions',
  description: 'Complete end-to-end development services by Genuine Stack. From concept to deployment, we handle every aspect of your project including strategy, design, development, and maintenance.',
  keywords: 'end-to-end development, full stack development, complete software development, project development, software lifecycle, development services, full service development, Genuine Stack',
  authors: [{ name: 'Genuine Stack Team' }],
  openGraph: {
    title: 'End-to-End Development Services | Genuine Stack',
    description: 'Complete software development from concept to deployment. Full-stack solutions with strategy, design, development, and ongoing support.',
    type: 'website',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/unified-business-management-platform.webp',
        width: 1200,
        height: 630,
        alt: 'End-to-End Development Services - Genuine Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'End-to-End Development Services | Genuine Stack',
    description: 'Complete software development from concept to deployment with full-stack solutions.',
    images: ['/images/unified-business-management-platform.webp'],
  },
  alternates: {
    canonical: '/services/end-to-end-development',
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

export default function EndToEndDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

