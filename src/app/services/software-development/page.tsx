"use client";

import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const SoftwareDevelopmentService = () => {
  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We dive deep into your business requirements, analyze your goals, and create a comprehensive development roadmap.",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Architecture Design",
      description: "Our experts design scalable, secure architecture using industry best practices and modern technologies.",
      icon: "🏗️"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing, code reviews, and quality assurance throughout the process.",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Deployment & Monitoring",
      description: "Seamless deployment to production with ongoing monitoring, support, and performance optimization.",
      icon: "🚀"
    }
  ];

  const features = [
    {
      title: "Scalable Architecture",
      description: "Built to handle growth from startup to enterprise scale",
      icon: "📈"
    },
    {
      title: "Security First",
      description: "Enterprise-grade security measures and best practices",
      icon: "🔒"
    },
    {
      title: "Modern Tech Stack",
      description: "Latest technologies and frameworks for optimal performance",
      icon: "⚡"
    },
    {
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs",
      icon: "🔗"
    },
    {
      title: "Cloud Native",
      description: "Optimized for cloud deployment and DevOps practices",
      icon: "☁️"
    },
    {
      title: "24/7 Support",
      description: "Ongoing maintenance and technical support",
      icon: "🛠️"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc",
      company: "TechStart Inc",
      quote: "They delivered a robust platform that scaled from 1K to 100K users seamlessly. Their code quality and architecture decisions were exceptional.",
      image: "/images/startup-meeting.jpg"
    },
    {
      name: "Michael Chen",
      role: "Founder, DataFlow Solutions",
      company: "DataFlow Solutions", 
      quote: "The team built our entire backend infrastructure in 8 weeks. The system handles millions of API calls daily without any issues.",
      image: "/images/tech-workspace.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Engineering Director, FinanceFlow",
      company: "FinanceFlow",
      quote: "Outstanding development team. They delivered a complex financial platform with bank-level security and performance.",
      image: "/images/mvp-team.jpg"
    }
  ];

  const technologies = [
    { name: "React", color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", color: "from-gray-800 to-gray-600" },
    { name: "Node.js", color: "from-green-500 to-emerald-500" },
    { name: "Python", color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", color: "from-blue-600 to-indigo-600" },
    { name: "PostgreSQL", color: "from-blue-700 to-blue-800" },
    { name: "MongoDB", color: "from-green-600 to-green-700" },
    { name: "AWS", color: "from-orange-500 to-yellow-500" },
    { name: "Docker", color: "from-blue-500 to-blue-600" },
    { name: "Kubernetes", color: "from-purple-500 to-indigo-500" }
  ];

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Software Development <br /> That Scales
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
            Build robust, scalable software solutions with modern technologies. From web applications to complex enterprise systems, 
            we deliver code that grows with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Start Your Project
            </Link>
            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-8 font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-700"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Problem & Solution Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-orange-400 mb-8">
                The Problem
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-400 text-sm">❌</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Legacy Systems Holding You Back</h3>
                    <p className="text-neutral-300 text-sm">Outdated software that can&apos;t scale, integrate, or adapt to modern business needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-400 text-sm">⚠️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Security Vulnerabilities</h3>
                    <p className="text-neutral-300 text-sm">Insecure applications exposing your business to cyber threats and compliance issues.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-400 text-sm">🐌</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Poor Performance</h3>
                    <p className="text-neutral-300 text-sm">Slow, unreliable software that frustrates users and damages your brand reputation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-blue-400 mb-8">
                Our Solution
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400 text-sm">✅</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Modern, Scalable Architecture</h3>
                    <p className="text-neutral-300 text-sm">Future-proof solutions built with microservices, cloud-native technologies, and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400 text-sm">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Enterprise-Grade Security</h3>
                    <p className="text-neutral-300 text-sm">Bank-level security with encryption, authentication, and compliance with industry standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400 text-sm">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">High Performance</h3>
                    <p className="text-neutral-300 text-sm">Optimized code, efficient databases, and CDN integration for lightning-fast performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400 mb-4">
              Our Development Process
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures quality, timely delivery, and alignment with your business goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 h-full hover:border-neutral-600 transition-colors">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm text-blue-400 font-medium mb-2">STEP {item.step}</div>
                  <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-600 mb-4">
              Why Choose Our Software Development
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              We deliver more than just code. We build solutions that drive business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-teal-400 mb-4">
              Technologies We Master
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              We use cutting-edge technologies to build future-proof solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${tech.color} p-6 rounded-2xl text-white font-semibold text-center hover:scale-105 transition-transform cursor-pointer`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-red-400 mb-4">
              Client Success Stories
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              See how our software development expertise has transformed businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                    <p className="text-blue-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex text-yellow-400 mt-4">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your software development needs and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-8 font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-700"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SoftwareDevelopmentService;