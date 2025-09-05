import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Services | Genuine Stack - Intelligent Business Automation',
  description: 'Expert AI automation services by Genuine Stack. We build intelligent automation solutions using machine learning, NLP, and AI to streamline your business processes and increase efficiency.',
  keywords: 'AI automation, artificial intelligence, machine learning, business automation, intelligent automation, AI solutions, process automation, AI consulting, Genuine Stack',
  authors: [{ name: 'Genuine Stack Team' }],
  openGraph: {
    title: 'AI Automation Services | Genuine Stack',
    description: 'Transform your business with intelligent AI automation solutions. Machine learning, NLP, and smart process automation.',
    type: 'website',
    siteName: 'Genuine Stack',
    images: [
      {
        url: '/images/ai-automation.webp',
        width: 1200,
        height: 630,
        alt: 'AI Automation Services - Genuine Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Services | Genuine Stack',
    description: 'Transform your business with intelligent AI automation solutions.',
    images: ['/images/ai-automation.webp'],
  },
  alternates: {
    canonical: '/services/ai-automation',
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

export default function AiAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
