import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Genuine Stack - Leading SaaS Development Agency | Our Story & Team',
  description: 'Learn about Genuine Stack, a premier SaaS development agency with 150+ successful projects. Discover our story, mission, values, and the expert team behind innovative software solutions.',
  keywords: 'about Genuine Stack, SaaS development agency, software development company, our team, company story, development process, technology expertise, Genuine Stack team',
  authors: [{ name: 'Genuine Stack Team' }],
  openGraph: {
    title: 'About Genuine Stack - Leading SaaS Development Agency',
    description: 'Discover our story, mission, and the expert team behind 150+ successful software projects. Leading SaaS development agency with proven expertise.',
    type: 'website',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/startup-office.jpg',
        width: 1200,
        height: 630,
        alt: 'About Genuine Stack - SaaS Development Agency Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Genuine Stack - Leading SaaS Development Agency',
    description: 'Discover our story, mission, and the expert team behind 150+ successful software projects.',
    images: ['/images/startup-office.jpg'],
  },
  alternates: {
    canonical: '/about',
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

