import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import LoadingLink from "@/components/loading-link";
import ShareButtons from "@/components/share-buttons";
import Image from "next/image";
import { getBlogPostBySlug, getAllBlogPosts, getBlogPostsByCategory } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const seoTitle = post.seoTitle || post.title;
  const baseUrl = 'https://yourdomain.com'; // Replace with your actual domain

  return {
    title: `${seoTitle} | SaaS Development Blog`,
    description: post.metaDescription,
    keywords: post.metaKeywords.join(', '),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: seoTitle,
      description: post.metaDescription,
      type: 'article',
      siteName: 'SaaS Agency',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: `${baseUrl}${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: post.metaDescription,
      images: [`${baseUrl}${post.featuredImage}`],
      creator: `@${post.author.name.replace(' ', '').toLowerCase()}`,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
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
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post || !post.isPublished) {
    notFound();
  }

  const relatedPosts = getBlogPostsByCategory(post.category)
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = `https://yourdomain.com/blog/${post.slug}`;
  const shareText = `Check out this article: ${post.title}`;

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.metaDescription,
            "image": `https://yourdomain.com${post.featuredImage}`,
            "author": {
              "@type": "Person",
              "name": post.author.name,
              "description": post.author.bio
            },
            "publisher": {
              "@type": "Organization",
              "name": "SaaS Agency",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yourdomain.com/logo.svg"
              }
            },
            "datePublished": post.publishedAt,
            "dateModified": post.updatedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://yourdomain.com/blog/${post.slug}`
            },
            "articleSection": post.category,
            "keywords": post.metaKeywords,
            "wordCount": post.content.split(' ').length,
            "timeRequired": `PT${post.readTime}M`,
            "articleBody": post.content
          })
        }}
      />

      <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <PricingNavbar />
        
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
          {/* Back Navigation */}
          <div className="max-w-4xl mx-auto mb-8">
            <LoadingLink 
              href="/blog" 
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </LoadingLink>
          </div>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              {/* Category and Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-neutral-400 text-sm mb-6">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishedAt)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Author and Share */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                {/* Author */}
                <div className="flex items-center gap-4">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-white font-semibold">{post.author.name}</p>
                    <p className="text-neutral-400 text-sm">{post.author.bio}</p>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-3">
                  <span className="text-neutral-400 text-sm">Share:</span>
                  <ShareButtons shareUrl={shareUrl} shareText={shareText} />
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-96 mb-12 rounded-2xl overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-8">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 mt-6">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-neutral-300 leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-neutral-300 mb-6 space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside text-neutral-300 mb-6 space-y-2">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-neutral-300">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-neutral-200 bg-neutral-900/50 py-4 mb-6 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-neutral-800 text-blue-400 px-2 py-1 rounded text-sm">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto mb-6">
                      {children}
                    </pre>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 rounded-full text-sm hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 border border-neutral-700 rounded-2xl p-8 mb-12">
              <div className="flex flex-col sm:flex-row gap-6">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">About {post.author.name}</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <LoadingLink key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group block">
                    <article className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                          <Calendar className="w-3 h-3" />
                          {formatDate(relatedPost.publishedAt)}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </article>
                  </LoadingLink>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ideas?</h2>
              <p className="text-lg text-neutral-300 mb-8">
                Let's discuss how we can help bring your software vision to life with our expert development team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LoadingLink
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-8 font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-700"
                >
                  Start Your Project
                </LoadingLink>
                <LoadingLink
                  href="/blog"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-700 px-8 font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  Read More Articles
                </LoadingLink>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}