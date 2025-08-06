import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - SaaS Development Agency | Start Your Project',
  description: 'Ready to build your next software solution? Contact our expert SaaS development team for web applications, mobile apps, AI automation, and custom software development.',
  keywords: 'contact SaaS agency, software development consultation, custom app development, web application development, mobile app development, AI automation, project quote',
  authors: [{ name: 'SaaS Development Agency' }],
  openGraph: {
    title: 'Contact Our SaaS Development Team',
    description: 'Transform your ideas into powerful software solutions. Get in touch with our expert development team today.',
    type: 'website',
    siteName: 'SaaS Development Agency',
    images: [
      {
        url: '/images/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact SaaS Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Our SaaS Development Team',
    description: 'Ready to build something amazing? Contact our expert developers today.',
    images: ['/images/contact-twitter-card.jpg'],
  },
  alternates: {
    canonical: '/contact',
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}