"use client";

import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const EnterpriseWebsiteService = () => {
  const process = [
    {
      step: "01",
      title: "Enterprise Audit & Strategy",
      description: "Comprehensive analysis of your business requirements, existing systems, and scalability needs for enterprise-level planning.",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Architecture & Design",
      description: "Design scalable architecture with microservices, CDN integration, and security frameworks that handle enterprise traffic.",
      icon: "🏗️"
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Build with enterprise-grade frameworks, integrate with existing systems, and implement robust security measures.",
      icon: "⚙️"
    },
    {
      step: "04",
      title: "Deployment & Monitoring",
      description: "Multi-environment deployment with 24/7 monitoring, automated backups, and enterprise support infrastructure.",
      icon: "🛡️"
    }
  ];

  const enterpriseFeatures = [
    {
      title: "Scalability",
      description: "Handle millions of concurrent users",
      icon: "📈",
      details: ["Auto-scaling infrastructure", "Load balancing", "CDN integration", "Performance optimization"]
    },
    {
      title: "Security",
      description: "Bank-level security and compliance",
      icon: "🔒",
      details: ["SSL/TLS encryption", "WAF protection", "GDPR compliance", "SOC 2 certification"]
    },
    {
      title: "Performance",
      description: "Sub-second page load times globally",
      icon: "⚡",
      details: ["Global CDN", "Image optimization", "Caching strategies", "Code splitting"]
    },
    {
      title: "Integration",
      description: "Seamless system integrations",
      icon: "🔗",
      details: ["CRM integration", "ERP connectivity", "API management", "SSO authentication"]
    },
    {
      title: "Analytics",
      description: "Enterprise-grade analytics",
      icon: "📊",
      details: ["Custom dashboards", "Real-time reporting", "Business intelligence", "Data visualization"]
    },
    {
      title: "Support",
      description: "24/7 enterprise support",
      icon: "🛠️",
      details: ["Dedicated account manager", "Priority support", "SLA guarantees", "Emergency response"]
    }
  ];

  const solutions = [
    {
      title: "Corporate Websites",
      description: "Professional corporate presence with global reach and multi-language support",
      image: "/images/startup-office.jpg",
      features: ["Multi-language support", "Global CDN", "Corporate branding", "Investor relations"],
      industries: ["Fortune 500", "Multinational Corps", "Public Companies"]
    },
    {
      title: "E-commerce Platforms",
      description: "Large-scale e-commerce solutions handling millions of products and transactions",
      image: "/images/saas-dashboard.jpg",
      features: ["Product catalog management", "Payment processing", "Inventory management", "Order fulfillment"],
      industries: ["Retail Giants", "B2B Marketplaces", "Manufacturing"]
    },
    {
      title: "Enterprise Portals",
      description: "Internal and external portals for employees, partners, and customers",
      image: "/images/tech-workspace.jpg",
      features: ["User management", "Document sharing", "Workflow automation", "Role-based access"],
      industries: ["Healthcare", "Financial Services", "Government"]
    }
  ];

  const securityFeatures = [
    {
      title: "Data Protection",
      icon: "🛡️",
      description: "End-to-end encryption and secure data handling",
      certifications: ["SOC 2", "ISO 27001", "GDPR", "HIPAA"]
    },
    {
      title: "Access Control",
      icon: "🔐",
      description: "Advanced authentication and authorization systems",
      certifications: ["SSO", "2FA", "RBAC", "LDAP"]
    },
    {
      title: "Network Security",
      icon: "🌐",
      description: "Web Application Firewall and DDoS protection",
      certifications: ["WAF", "DDoS Protection", "VPN", "Intrusion Detection"]
    },
    {
      title: "Compliance",
      icon: "📋",
      description: "Industry-specific compliance and audit support",
      certifications: ["PCI DSS", "FERPA", "SOX", "CCPA"]
    }
  ];

  const testimonials = [
    {
      name: "Michael Johnson",
      role: "CTO, Global Manufacturing Corp",
      company: "TechGlobal Industries",
      quote: "They rebuilt our entire corporate website infrastructure. Now we handle 10M+ visitors monthly with 99.99% uptime across 40 countries.",
      image: "/images/startup-meeting.jpg",
      metrics: ["10M+ monthly visitors", "99.99% uptime", "40 countries"]
    },
    {
      name: "Sarah Anderson",
      role: "VP Digital, Fortune 500",
      company: "Enterprise Solutions Inc", 
      quote: "Their enterprise platform processes $50M in transactions monthly. The security and scalability are exceptional - exactly what we needed.",
      image: "/images/tech-workspace.jpg",
      metrics: ["$50M monthly transactions", "Enterprise security", "Global scale"]
    },
    {
      name: "David Wilson",
      role: "Director IT, Healthcare System",
      company: "MedCare Networks",
      quote: "HIPAA-compliant portal serving 500K+ patients. The integration with our EHR system was seamless and the security audit was flawless.",
      image: "/images/mvp-team.jpg",
      metrics: ["500K+ patients", "HIPAA compliant", "EHR integration"]
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "C#/.NET"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "Cloud",
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Security",
      technologies: ["Auth0", "Okta", "HashiCorp", "CloudFlare"],
      color: "from-red-500 to-pink-500"
    },
    {
      category: "Monitoring",
      technologies: ["DataDog", "New Relic", "Prometheus", "Grafana"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  const caseStudies = [
    {
      title: "Global Manufacturing Platform",
      challenge: "Legacy system couldn't handle international expansion",
      solution: "Multi-region architecture with localized content management",
      results: ["300% performance improvement", "40 country deployment", "99.99% uptime SLA"],
      image: "/images/server-room.jpg"
    },
    {
      title: "Healthcare Enterprise Portal",
      challenge: "HIPAA compliance with 500K+ patient records",
      solution: "Zero-trust security architecture with encrypted data flows",
      results: ["HIPAA certification", "500K+ secure users", "Zero security incidents"],
      image: "/images/database-dev.jpg"
    },
    {
      title: "E-commerce Giant Rebuild",
      challenge: "Platform couldn't scale during peak traffic",
      solution: "Microservices architecture with auto-scaling",
      results: ["1000% traffic handling", "$100M+ annual revenue", "Black Friday ready"],
      image: "/images/web-development.jpg"
    }
  ];

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Enterprise Websites <br /> That Scale
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
            Build mission-critical websites that handle millions of users, integrate with enterprise systems, 
            and meet the highest standards of security and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Enterprise Consultation
            </Link>
            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-blue-600 px-8 font-medium text-white transition-colors hover:from-purple-600 hover:to-blue-700"
            >
              Schedule Architecture Review
            </Link>
          </div>
        </div>

        {/* Enterprise Solutions Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400 mb-4">
              Enterprise Website Solutions
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Tailored solutions for different enterprise needs, from corporate websites to complex web applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors group">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-purple-400 transition-colors">{solution.title}</h3>
                  <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{solution.description}</p>
                  <div className="space-y-2 mb-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="text-purple-400 mr-2">✓</span>
                        <span className="text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-teal-400 mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Built for scale, security, and performance that enterprise organizations demand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{feature.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                    <p className="text-emerald-400 text-sm">{feature.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="text-emerald-400 mr-2">▶</span>
                      <span className="text-neutral-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-orange-400 mb-4">
              Security & Compliance
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Enterprise-level security measures and compliance certifications that protect your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((security, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-red-500/50 transition-colors text-center">
                <div className="text-4xl mb-4">{security.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{security.title}</h3>
                <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{security.description}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {security.certifications.map((cert, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded-full">
                      {cert}
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
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-600 mb-4">
              Enterprise Development Process
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              A rigorous methodology designed for enterprise requirements, compliance, and risk management.
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

        {/* Technology Stack */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-orange-400 mb-4">
              Enterprise Technology Stack
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Best-in-class technologies proven at enterprise scale with Fortune 500 companies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
                <h3 className="text-white font-semibold text-lg mb-4 text-center">{stack.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {stack.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`bg-gradient-to-r ${stack.color} p-3 rounded-lg text-white text-sm font-medium text-center hover:scale-105 transition-transform cursor-pointer`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-purple-400 mb-4">
              Enterprise Case Studies
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Real enterprise transformations with measurable business impact and technical achievements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-colors">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">{study.title}</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-red-400 font-medium text-sm mb-1">Challenge:</h4>
                      <p className="text-neutral-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-blue-400 font-medium text-sm mb-1">Solution:</h4>
                      <p className="text-neutral-300 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-green-400 font-medium text-sm">Results:</h4>
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-neutral-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-emerald-400 mb-4">
              Enterprise Client Success
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Trusted by Fortune 500 companies and enterprise organizations worldwide.
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
                    <p className="text-purple-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed italic mb-4">"{testimonial.quote}"</p>
                <div className="flex flex-wrap gap-2">
                  {testimonial.metrics.map((metric, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            Ready for Enterprise Scale?
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your enterprise requirements and build a solution that scales with your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Enterprise Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-blue-600 px-8 font-medium text-white transition-colors hover:from-purple-600 hover:to-blue-700"
            >
              View Enterprise Work
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EnterpriseWebsiteService;