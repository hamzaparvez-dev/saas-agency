import { Metadata } from 'next';
import Link from 'next/link';
import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import LoadingLink from "@/components/loading-link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'Blog - SaaS Development Insights & Trends | Expert Articles',
  description: 'Stay updated with the latest SaaS development trends, best practices, and expert insights. Read our comprehensive guides on software development, AI, APIs, and more.',
  keywords: 'SaaS development blog, software development articles, API development, AI programming, tech trends, development best practices',
  authors: [{ name: 'SaaS Agency Team' }],
  openGraph: {
    title: 'SaaS Development Blog - Expert Insights & Trends',
    description: 'Discover the latest in SaaS development, API design, AI integration, and software engineering best practices from our expert team.',
    type: 'website',
    siteName: 'SaaS Agency',
    images: [
      {
        url: '/images/software-dev.jpg',
        width: 1200,
        height: 630,
        alt: 'SaaS Development Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Development Blog - Expert Insights & Trends',
    description: 'Stay ahead with expert insights on SaaS development, API design, and software engineering.',
    images: ['/images/blog/blog-twitter-card.jpg'],
  },
  alternates: {
    canonical: '/blog',
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

const POSTS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const allPosts = getAllBlogPosts();
  const currentPage = Number(searchParams?.page) || 1;

  const featuredPost = allPosts[0];
  const otherPosts = allPosts.slice(1);
  
  const totalPages = Math.ceil(otherPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = otherPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const visiblePosts = [featuredPost, ...paginatedPosts].filter(Boolean);

  return (
    <>
      {/* Optimized JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SaaS Development Blog",
            "description": "Expert insights on SaaS development, API design, and software engineering",
            "url": "https://www.genuinestack.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "SaaS Agency",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.genuinestack.com/logo/logo.png"
              }
            },
            "blogPost": visiblePosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://www.genuinestack.com/blog/${post.slug}`,
              "datePublished": post.publishedAt,
              "dateModified": post.updatedAt,
              "author": {
                "@type": "Person",
                "name": post.author.name
              },
              "image": `https://www.genuinestack.com${post.featuredImage}`,
              "wordCount": post.content.split(' ').length,
              "timeRequired": `PT${post.readTime}M`
            }))
          })
        }}
      />

      <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <PricingNavbar />
        
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2 mt-20 md:mt-0">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
              SaaS Development Blog
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on SaaS development, API design, 
              AI integration, and the latest software engineering trends.
            </p>
          </div>

          {/* Featured Article */}
          {featuredPost && currentPage === 1 && (
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
              <LoadingLink href={`/blog/${featuredPost.slug}`} className="group block">
                <article className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 border border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={featuredPost.featuredImage}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority
                      />
                    </div>
                    
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-neutral-400 text-sm mb-4">
                        <span className="px-3 py-1 bg-neutral-800 rounded-full">{featuredPost.category}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(featuredPost.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime} min read
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-white font-medium">{featuredPost.author.name}</p>
                          <p className="text-neutral-400 text-sm">{featuredPost.author.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </LoadingLink>
            </div>
          )}

          {/* Blog Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <LoadingLink key={post.id} href={`/blog/${post.slug}`} className="group block">
                  <article className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300 h-full">
                    <div className="relative h-48">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 text-neutral-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </article>
                </LoadingLink>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className={`flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-md ${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Link>
            <span className="text-neutral-400">
              Page {currentPage} of {totalPages}
            </span>
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className={`flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-md ${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}`}
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}