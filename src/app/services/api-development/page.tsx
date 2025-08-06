"use client";

import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const APIDeveopmentService = () => {
  const process = [
    {
      step: "01",
      title: "API Strategy & Design",
      description: "We analyze your integration needs and design RESTful or GraphQL APIs with proper documentation and versioning strategy.",
      icon: "📋"
    },
    {
      step: "02", 
      title: "Development & Security",
      description: "Build robust APIs with authentication, rate limiting, and security best practices including OAuth2 and JWT tokens.",
      icon: "🔐"
    },
    {
      step: "03",
      title: "Testing & Documentation",
      description: "Comprehensive testing with automated test suites and interactive API documentation for seamless integration.",
      icon: "🧪"
    },
    {
      step: "04",
      title: "Deployment & Monitoring",
      description: "Deploy to scalable infrastructure with real-time monitoring, analytics, and performance optimization.",
      icon: "📊"
    }
  ];

  const apiTypes = [
    {
      title: "RESTful APIs",
      description: "Traditional REST APIs with proper HTTP methods, status codes, and resource-based architecture",
      icon: "🌐",
      features: ["HTTP/HTTPS", "JSON/XML", "CRUD Operations", "Stateless"]
    },
    {
      title: "GraphQL APIs",
      description: "Flexible query language APIs that allow clients to request exactly the data they need",
      icon: "🔗",
      features: ["Single Endpoint", "Type Safety", "Real-time", "Efficient Queries"]
    },
    {
      title: "Microservices APIs",
      description: "Distributed APIs designed for microservices architecture with service mesh integration",
      icon: "🔀",
      features: ["Service Discovery", "Load Balancing", "Circuit Breakers", "Distributed Tracing"]
    },
    {
      title: "Webhook APIs",
      description: "Event-driven APIs that push data to your applications in real-time",
      icon: "⚡",
      features: ["Real-time Events", "Push Notifications", "Retry Logic", "Event Streaming"]
    }
  ];

  const features = [
    {
      title: "Scalable Architecture",
      description: "APIs built to handle millions of requests with auto-scaling capabilities",
      icon: "📈"
    },
    {
      title: "Security First",
      description: "OAuth2, JWT, API keys, rate limiting, and CORS protection",
      icon: "🛡️"
    },
    {
      title: "Comprehensive Documentation",
      description: "Interactive OpenAPI/Swagger docs with code examples",
      icon: "📚"
    },
    {
      title: "Performance Optimized",
      description: "Caching, CDN integration, and database optimization",
      icon: "⚡"
    },
    {
      title: "Monitoring & Analytics",
      description: "Real-time monitoring, logging, and performance metrics",
      icon: "📊"
    },
    {
      title: "Version Management",
      description: "Backward compatibility and seamless API versioning",
      icon: "🔄"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "Lead Developer, PayFlow",
      company: "PayFlow Systems",
      quote: "Their API handles 50M+ transactions daily with 99.99% uptime. The architecture is incredibly robust and scales effortlessly.",
              image: "/images/api-development.webp"
    },
    {
      name: "Lisa Zhang",
      role: "CTO, DataStream",
      company: "DataStream Analytics", 
      quote: "The GraphQL API they built reduced our frontend development time by 60%. The documentation and developer experience is outstanding.",
      image: "/images/server-room.jpg"
    },
    {
      name: "Carlos Rodriguez",
      role: "Integration Manager, ConnectHub",
      company: "ConnectHub",
      quote: "Their microservices API architecture enabled us to integrate with 200+ third-party services seamlessly. Exceptional work!",
      image: "/images/tech-workspace.jpg"
    }
  ];

  const integrations = [
    { name: "Stripe", logo: "💳" },
    { name: "PayPal", logo: "💰" },
    { name: "Twilio", logo: "📱" },
    { name: "SendGrid", logo: "📧" },
    { name: "AWS", logo: "☁️" },
    { name: "Google Cloud", logo: "🌐" },
    { name: "Salesforce", logo: "📊" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Slack", logo: "💬" },
    { name: "Zoom", logo: "📹" }
  ];

  const useCases = [
    {
      title: "E-commerce Integration",
      description: "Connect your store with payment gateways, inventory systems, and shipping providers",
      image: "/images/saas-dashboard.jpg",
      benefits: ["Payment Processing", "Inventory Sync", "Order Management", "Shipping Integration"]
    },
    {
      title: "Data Integration",
      description: "Aggregate data from multiple sources and provide unified access through APIs",
      image: "/images/data-analytics.jpg",
      benefits: ["Data Aggregation", "Real-time Sync", "Format Standardization", "Analytics Ready"]
    },
    {
      title: "Mobile App Backend",
      description: "Robust backend APIs powering mobile applications with offline capabilities",
      image: "/images/mobile-dev.jpg",
      benefits: ["User Authentication", "Push Notifications", "Offline Sync", "File Storage"]
    }
  ];

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            API Development <br /> That Connects
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
            Build powerful, scalable APIs that seamlessly connect your applications, services, and third-party integrations. 
            RESTful, GraphQL, and microservices architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Start API Project
            </Link>
            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 px-8 font-medium text-white transition-colors hover:from-emerald-600 hover:to-blue-700"
            >
              API Consultation
            </Link>
          </div>
        </div>

        {/* API Types Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-blue-400 mb-4">
              API Solutions We Deliver
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              From simple REST APIs to complex microservices architectures, we build APIs that power modern applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apiTypes.map((type, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{type.icon}</span>
                  <h3 className="text-white font-semibold text-xl">{type.title}</h3>
                </div>
                <p className="text-neutral-300 mb-4 leading-relaxed">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs bg-neutral-800 text-emerald-400 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-400 mb-4">
              Our API Development Process
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              A systematic approach to building secure, scalable, and well-documented APIs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 h-full hover:border-neutral-600 transition-colors">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm text-emerald-400 font-medium mb-2">STEP {item.step}</div>
                  <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-600 mb-4">
              Common API Use Cases
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              See how our APIs solve real business challenges across different industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-colors">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">{useCase.title}</h3>
                  <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="text-emerald-400 mr-2">✓</span>
                        <span className="text-neutral-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-red-400 mb-4">
              API Development Features
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Enterprise-grade features that ensure your APIs are secure, scalable, and maintainable.
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

        {/* Integrations Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-teal-500 to-emerald-400 mb-4">
              Popular Integrations
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              We have experience integrating with hundreds of third-party services and APIs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center hover:border-neutral-600 transition-colors cursor-pointer group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{integration.logo}</div>
                <h3 className="text-white font-medium">{integration.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400 mb-4">
              Client Success Stories
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              See how our API development expertise has powered successful integrations.
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
                    <p className="text-emerald-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed italic">"{testimonial.quote}"</p>
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
            Ready to Build Your API?
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's design and develop APIs that will power your applications and integrations for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Discuss API Requirements
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 px-8 font-medium text-white transition-colors hover:from-emerald-600 hover:to-blue-700"
            >
              View API Projects
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default APIDeveopmentService;