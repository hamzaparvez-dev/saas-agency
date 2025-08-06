"use client";

import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import LoadingLink from "@/components/loading-link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Users, Clock } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      slug: "silk-design-system",
      title: "50% Efficiency Gains with Silk Design System",
      subtitle: "DESIGN SYSTEMS",
      description: "Accelerating mobile UI design with a reusable, customizable design system and developer-friendly documentation",
      image: "/images/saas-dashboard.jpg",
      tags: ["React", "Node.js", "AI", "PostgreSQL"],
      category: "DESIGN SYSTEMS",
      duration: "6 months",
      team: "8 people",
      year: "2024"
    },
    {
      slug: "polpharma-api-website",
      title: "Scalability with Webflow: Designing and Developing Polpharma API Website",
      subtitle: "WEBFLOW",
      description: "Creating a user-friendly digital experience to support lead generation in the B2B pharmaceutical sector",
      image: "/images/api-development.webp",
      tags: ["Webflow", "JavaScript", "API Integration", "B2B"],
      category: "WEBFLOW",
      duration: "4 months", 
      team: "5 people",
      year: "2024"
    },
    {
      slug: "ai-sales-advisor",
      title: "AI-Powered Sales Advisor for Ecommerce",
      subtitle: "AI DEVELOPMENT",
      description: "Creating an AI-driven sales advisor for personalized, multilingual, and omnichannel shopping experiences",
      image: "/images/ai-sales-advisor.webp",
      tags: ["Next.js", "OpenAI", "Machine Learning", "E-commerce"],
      category: "AI DEVELOPMENT",
      duration: "8 months",
      team: "12 people", 
      year: "2024"
    },
    {
      slug: "healthcare-mvp-platform",
      title: "HealthTech MVP: Telemedicine Revolution",
      subtitle: "MVP DEVELOPMENT",
      description: "Rapid MVP development for telehealth startup, from concept to launch with 10,000+ active users",
      image: "/images/health-tech-mvp.webp",
      tags: ["React", "WebRTC", "HIPAA", "Real-time"],
      category: "MVP DEVELOPMENT",
      duration: "6 weeks",
      team: "6 people",
      year: "2024"
    },
    {
      slug: "enterprise-automation-suite",
      title: "Enterprise Automation: 80% Efficiency Boost",
      subtitle: "ENTERPRISE SOFTWARE",
      description: "Intelligent document processing and workflow automation system for Fortune 500 company",
      image: "/images/startup-office.jpg",
      tags: ["Python", "AI", "Microservices", "Docker"],
      category: "ENTERPRISE SOFTWARE",
      duration: "12 months",
      team: "15 people",
      year: "2023"
    },
    {
      slug: "fintech-trading-app",
      title: "High-Performance Trading Platform",
      subtitle: "FINTECH",
      description: "Real-time trading application processing 100M+ transactions daily with advanced analytics",
      image: "/images/high-performance-trading-platform.webp",
      tags: ["React Native", "WebSocket", "Blockchain", "Analytics"],
      category: "FINTECH",
      duration: "10 months",
      team: "20 people", 
      year: "2023"
    },
    {
      slug: "ecommerce-marketplace",
      title: "Multi-Vendor E-commerce Marketplace Revolution",
      subtitle: "E-COMMERCE PLATFORM",
      description: "Comprehensive marketplace platform connecting thousands of vendors with millions of customers worldwide",
      image: "/images/ecom-project.png",
      tags: ["React", "Node.js", "PostgreSQL", "Redis"],
      category: "E-COMMERCE PLATFORM",
      duration: "14 months",
      team: "25 people",
      year: "2024"
    },
    {
      slug: "life-sciences-manufacturing",
      title: "Digital Transformation in Life Sciences Manufacturing",  
      subtitle: "MANUFACTURING SYSTEMS",
      description: "Advanced manufacturing execution system for pharmaceutical and life sciences companies",
      image: "/images/strand-life-science(manufacturing-site).png",
      tags: ["Python", "IoT", "Machine Learning", "Compliance"],
      category: "MANUFACTURING SYSTEMS",
      duration: "18 months",
      team: "18 people",
      year: "2023"
    },
    {
      slug: "mobile-banking-app",
      title: "Next-Generation Mobile Banking Experience",
      subtitle: "MOBILE BANKING",
      description: "Comprehensive mobile banking solution with AI-powered financial insights and seamless UX",
      image: "/images/mobile-banking app.webp",
      tags: ["React Native", "Blockchain", "AI", "Security"],
      category: "MOBILE BANKING",
      duration: "12 months",
      team: "16 people",
      year: "2024"
    },
    {
      slug: "kyc-compliance-solution",
      title: "AI-Powered KYC & Compliance Automation",
      subtitle: "COMPLIANCE TECH",
      description: "Intelligent identity verification and compliance monitoring system for financial institutions",
      image: "/images/kyc-solution.webp", 
      tags: ["AI", "Computer Vision", "Blockchain", "Compliance"],
      category: "COMPLIANCE TECH",
      duration: "10 months",
      team: "14 people",
      year: "2024"
    },
    {
      slug: "business-management-platform",
      title: "Unified Business Management Platform",
      subtitle: "BUSINESS PLATFORM",
      description: "All-in-one business management solution integrating CRM, ERP, and analytics for SMEs",
      image: "/images/unified-business-management-platform.webp",
      tags: ["Vue.js", "Laravel", "MySQL", "Analytics"],
      category: "BUSINESS PLATFORM", 
      duration: "16 months",
      team: "22 people",
      year: "2023"
    },
    {
      slug: "custom-erp-solution",
      title: "Custom ERP Solution for Manufacturing Giant",
      subtitle: "CUSTOM ERP",
      description: "Tailored enterprise resource planning system optimizing operations for global manufacturer",
      image: "/images/custom-2.jpeg",
      tags: ["Java", "Spring Boot", "Oracle", "Microservices"],
      category: "CUSTOM ERP",
      duration: "24 months", 
      team: "30 people",
      year: "2022"
    }
  ];

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* Hero Section */}
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Our Portfolio
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
          Explore our successful projects across various industries. From MVPs to enterprise solutions, 
          we've helped businesses transform their ideas into powerful software.
        </p>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <LoadingLink
                key={index}
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:bg-neutral-800/50 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-black/80 backdrop-blur-sm text-white rounded-full border border-neutral-700">
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Project Meta */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4 text-white/80 text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{project.team}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-neutral-800/50 text-neutral-300 rounded-md border border-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 text-xs text-neutral-400">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </LoadingLink>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-600 mb-4">
              Project Impact
            </h2>
            <p className="text-neutral-300 text-lg">
              Numbers that showcase our commitment to delivering exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-500 mb-2">
                100+
              </div>
              <p className="text-neutral-300">Projects Completed</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                99%
              </div>
              <p className="text-neutral-300">Client Satisfaction</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                2-24
              </div>
              <p className="text-neutral-300">Weeks to Delivery</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 mb-2">
                24/7
              </div>
              <p className="text-neutral-300">Support Available</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Join our portfolio of successful projects. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LoadingLink
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Start Your Project
            </LoadingLink>
            <LoadingLink
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-8 font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-700"
            >
              View Pricing
            </LoadingLink>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Portfolio; 