import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Website Development | Genuine Stack - Scalable Web Solutions',
  description: 'Professional enterprise website development by Genuine Stack. We build scalable, secure, and high-performance web applications for large organizations. Enterprise-grade solutions.',
  keywords: 'enterprise website development, enterprise web applications, scalable web solutions, enterprise software, corporate websites, large-scale web development, enterprise architecture, Genuine Stack',
  authors: [{ name: 'Genuine Stack Team' }],
  openGraph: {
    title: 'Enterprise Website Development | Genuine Stack',
    description: 'Build scalable, secure enterprise web applications with our expert development team. Enterprise-grade solutions for large organizations.',
    type: 'website',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/enterprise-automation.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise Website Development - Genuine Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Website Development | Genuine Stack',
    description: 'Build scalable, secure enterprise web applications with our expert development team.',
    images: ['/images/enterprise-automation.png'],
  },
  alternates: {
    canonical: '/services/enterprise-websites',
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

export default function EnterpriseWebsitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

