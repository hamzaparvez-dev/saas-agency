import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.genuinestack.com'
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  const servicePages = [
    'software-development',
    'api-development', 
    'mvp-development',
    'enterprise-websites',
    'ai-automation',
    'end-to-end-development',
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const additionalServicePages = [
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  const portfolioPages = [
    'silk-design-system',
    'polpharma-api-website',
    'ai-sales-advisor',
    'healthcare-mvp-platform',
    'enterprise-automation-suite',
    'fintech-trading-app',
    'ecommerce-marketplace',
    'life-sciences-manufacturing',
    'mobile-banking-app',
    'kyc-compliance-solution',
    'business-management-platform',
    'custom-erp-solution',
  ].map(project => ({
    url: `${baseUrl}/portfolio/${project}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const seoPages = [
    {
      url: `${baseUrl}/locations/new-york-saas-agency`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,  // ← fixed
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/lucknow-software-company`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,  // ← fixed
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/automation`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mvp-solutions`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/api-developements`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shopify-stores`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/SoftwareDevelopment`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  const blogPosts = getAllBlogPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const adminPages = [
    {
      url: `${baseUrl}/admin/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.3,
    },
  ]

  return [
    ...staticPages,
    ...servicePages,
    ...additionalServicePages,
    ...portfolioPages,
    ...seoPages,
    ...blogPosts,
    ...adminPages,
  ]
}
