"use client";

import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const EndToEndDevelopmentService = () => {
  const phases = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Comprehensive business analysis, market research, and technical roadmap creation with stakeholder alignment.",
      icon: "🔍",
      timeline: "2-3 weeks",
      deliverables: ["Business requirements", "Technical specification", "Project roadmap", "Risk assessment"]
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "UI/UX design, system architecture, database design, and API specification with user testing.",
      icon: "🎨",
      timeline: "3-4 weeks", 
      deliverables: ["UI/UX mockups", "System architecture", "Database schema", "API documentation"]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Full-stack development with agile methodology, continuous integration, and comprehensive testing.",
      icon: "⚙️",
      timeline: "8-16 weeks",
      deliverables: ["Frontend application", "Backend services", "Database setup", "Test automation"]
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "Production deployment, monitoring setup, performance optimization, and go-live support.",
      icon: "🚀",
      timeline: "1-2 weeks",
      deliverables: ["Production deployment", "Monitoring setup", "Documentation", "Training"]
    },
    {
      step: "05",
      title: "Support & Scale",
      description: "Ongoing maintenance, feature enhancements, performance monitoring, and scaling as needed.",
      icon: "📈",
      timeline: "Ongoing",
      deliverables: ["24/7 monitoring", "Regular updates", "Performance reports", "Feature additions"]
    }
  ];

  const services = [
    {
      title: "Product Strategy",
      description: "Market analysis, user research, and product roadmap creation",
      icon: "🎯",
      details: ["Market research", "Competitive analysis", "User personas", "Product roadmap", "MVP definition"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design with modern interfaces and optimal user experience",
      icon: "🎨",
      details: ["User research", "Wireframing", "Prototyping", "Visual design", "Usability testing"]
    },
    {
      title: "Frontend Development",
      description: "Responsive web applications with modern frameworks and best practices",
      icon: "💻",
      details: ["React/Next.js", "Mobile responsive", "Progressive Web App", "Performance optimization", "SEO friendly"]
    },
    {
      title: "Backend Development",
      description: "Scalable server architecture with robust APIs and database design",
      icon: "⚙️",
      details: ["RESTful APIs", "Database design", "Authentication", "Payment integration", "Third-party APIs"]
    },
    {
      title: "DevOps & Infrastructure",
      description: "Cloud deployment with CI/CD pipelines and monitoring",
      icon: "☁️",
      details: ["Cloud hosting", "CI/CD pipelines", "Auto-scaling", "Monitoring", "Backup systems"]
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing to ensure reliability and performance",
      icon: "🧪",
      details: ["Automated testing", "Manual QA", "Performance testing", "Security testing", "Browser compatibility"]
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend", 
      techs: ["Node.js", "Python", "Java", "C#", "PHP", "Go"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Mobile",
      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Cloud",
      techs: ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify", "DigitalOcean"],
      color: "from-teal-500 to-blue-500"
    },
    {
      category: "Tools",
      techs: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Monitoring"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const projectTypes = [
    {
      title: "SaaS Platforms",
      description: "Complete software-as-a-service solutions with subscription management and multi-tenancy",
      image: "/images/saas-dashboard.jpg",
      timeline: "3-6 months",
      investment: "$50K - $200K",
      features: ["User management", "Subscription billing", "Analytics dashboard", "API integration", "Mobile app"],
      examples: ["Project management tools", "CRM systems", "Analytics platforms", "Communication tools"]
    },
    {
      title: "E-commerce Platforms",
      description: "Full-featured online stores with payment processing, inventory, and order management",
      image: "/images/web-development.jpg",
      timeline: "2-4 months",
      investment: "$30K - $150K",
      features: ["Product catalog", "Shopping cart", "Payment gateway", "Order management", "Admin dashboard"],
      examples: ["Online retail stores", "B2B marketplaces", "Digital product stores", "Subscription boxes"]
    },
    {
      title: "Enterprise Applications",
      description: "Complex business applications with advanced workflows and system integrations",
      image: "/images/enterprise-application.webp",
      timeline: "4-8 months",
      investment: "$100K - $500K",
      features: ["Workflow automation", "System integration", "Advanced reporting", "Role-based access", "Audit trails"],
      examples: ["ERP systems", "HR platforms", "Supply chain management", "Financial systems"]
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps with backend services and real-time features",
      image: "/images/mobile-dev.jpg",
      timeline: "2-5 months",
      investment: "$40K - $180K",
      features: ["Cross-platform", "Push notifications", "Offline mode", "Real-time sync", "App store optimization"],
      examples: ["Social networks", "Fitness apps", "Food delivery", "Financial apps"]
    }
  ];

  const successStories = [
    {
      title: "FinTech SaaS Platform",
      client: "Financial Services Startup",
      challenge: "Build a comprehensive financial management platform from scratch",
      solution: "End-to-end development with advanced analytics, compliance features, and mobile app",
      timeline: "6 months",
      team: "8 developers",
      results: [
        "Processed $10M+ in transactions in first year",
        "Acquired 5,000+ business customers",
        "Raised $5M Series A funding",
        "99.9% uptime since launch"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "React Native"],
      image: "/images/saas-dashboard.jpg"
    },
    {
      title: "Healthcare Management System",
      client: "Regional Healthcare Provider",
      challenge: "Replace legacy system with modern, HIPAA-compliant solution",
      solution: "Complete system rebuild with patient portals, provider dashboards, and integration APIs",
      timeline: "8 months",
      team: "12 developers",
      results: [
        "Serves 100,000+ patients",
        "40% reduction in administrative time",
        "HIPAA compliance certification",
        "Integration with 15+ medical systems"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Azure", "Mobile PWA"],
      image: "/images/health-tech-mvp.webp"
    },
    {
      title: "E-learning Platform",
      client: "Educational Technology Company",
      challenge: "Create scalable online learning platform with interactive features",
      solution: "Full-stack platform with video streaming, progress tracking, and gamification",
      timeline: "4 months",
      team: "6 developers",
      results: [
        "10,000+ active learners monthly",
        "95% course completion rate",
        "Expansion to 20 countries",
        "Partner network of 500+ instructors"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "WebRTC"],
      image: "/images/mvp-team.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Alexandra Chen",
      role: "CEO, TechFlow Solutions",
      company: "SaaS Startup",
      quote: "They took our idea from concept to a fully functional SaaS platform in 5 months. The attention to detail and technical expertise exceeded our expectations. We're now processing millions in revenue.",
      image: "/images/startup-meeting.jpg",
      project: "Complete SaaS Platform",
      outcome: "$2M ARR achieved"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, HealthCare Innovations",
      company: "Healthcare Technology", 
      quote: "The end-to-end development service was exactly what we needed. From initial planning to deployment, every phase was handled professionally. The HIPAA-compliant system serves 50K+ patients flawlessly.",
              image: "/images/ai-automation.webp",
      project: "Healthcare Management System",
      outcome: "50K+ patients served"
    },
    {
      name: "Dr. Emily Watson",
      role: "Founder, EduTech Solutions",
      company: "Educational Technology",
      quote: "Their comprehensive approach saved us years of development time. The platform they built handles everything from user management to video streaming. We've scaled to serve students in 15 countries.",
      image: "/images/data-analytics.jpg",
      project: "E-learning Platform",
      outcome: "15 countries expansion"
    }
  ];

  const whyChooseUs = [
    {
      title: "Single Point of Contact",
      description: "One team handles everything from design to deployment",
      icon: "🎯",
      benefit: "Simplified communication and faster decisions"
    },
    {
      title: "Proven Methodology",
      description: "Battle-tested process refined over 100+ projects",
      icon: "📋",
      benefit: "Predictable timelines and quality outcomes"
    },
    {
      title: "Full-Stack Expertise",
      description: "Deep knowledge across all modern technologies",
      icon: "💡",
      benefit: "Optimal technology choices for your needs"
    },
    {
      title: "Agile Development",
      description: "Iterative approach with regular feedback loops",
      icon: "🔄",
      benefit: "Faster time to market and better product fit"
    },
    {
      title: "Post-Launch Support",
      description: "Ongoing maintenance and feature development",
      icon: "🛠️",
      benefit: "Long-term partnership for growth"
    },
    {
      title: "Transparent Pricing",
      description: "Fixed-price projects with clear milestones",
      icon: "💰",
      benefit: "No surprises, predictable budget"
    }
  ];

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            End-to-End Development <br /> Complete Solutions
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
            From concept to launch and beyond. We handle every aspect of your product development journey 
            with a single, experienced team and proven methodology.
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
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-8 font-medium text-white transition-colors hover:from-indigo-600 hover:to-purple-700"
            >
              Project Planning Call
            </Link>
          </div>
        </div>

        {/* Development Phases */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-purple-400 mb-4">
              Our Development Process
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              A comprehensive 5-phase approach that takes you from idea to successful product launch.
            </p>
          </div>
          
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{phase.icon}</span>
                      <div>
                        <div className="text-sm text-indigo-400 font-medium mb-1">PHASE {phase.step}</div>
                        <h3 className="text-white font-semibold text-xl">{phase.title}</h3>
                        <p className="text-purple-400 text-sm">{phase.timeline}</p>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed mb-4">{phase.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <span className="text-indigo-400 mr-2">✓</span>
                          <span className="text-neutral-300">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-2xl">
                      {phase.step}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Included */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-teal-400 mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Everything you need under one roof - from strategy to support, handled by experts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{service.icon}</span>
                  <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                </div>
                <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.details.map((detail, idx) => (
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

        {/* Project Types */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-red-400 mb-4">
              Project Types We Excel At
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              From simple websites to complex enterprise systems, we deliver end-to-end solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-colors">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-semibold text-xl">{project.title}</h3>
                    <div className="text-right">
                      <div className="text-orange-400 font-medium text-sm">{project.timeline}</div>
                      <div className="text-green-400 font-medium text-sm">{project.investment}</div>
                    </div>
                  </div>
                  <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-blue-400 font-medium text-sm mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <span className="text-orange-400 mr-1">•</span>
                          <span className="text-neutral-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-400 font-medium text-sm mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.examples.map((example, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-600 mb-4">
              Full-Stack Technology Expertise
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              We master the entire technology stack to build comprehensive solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
                <h3 className="text-white font-semibold text-lg mb-4 text-center">{tech.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {tech.techs.map((technology, idx) => (
                    <div
                      key={idx}
                      className={`bg-gradient-to-r ${tech.color} p-3 rounded-lg text-white text-sm font-medium text-center hover:scale-105 transition-transform cursor-pointer`}
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-emerald-400 mb-4">
              End-to-End Success Stories
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Complete project journeys from initial concept to market success.
            </p>
          </div>
          
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-colors">
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-white font-semibold text-2xl mb-2">{story.title}</h3>
                    <p className="text-green-400 font-medium mb-4">{story.client}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-neutral-400 text-sm">Timeline</div>
                        <div className="text-white font-medium">{story.timeline}</div>
                      </div>
                      <div>
                        <div className="text-neutral-400 text-sm">Team Size</div>
                        <div className="text-white font-medium">{story.team}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-red-400 font-medium mb-2">Challenge:</h4>
                        <p className="text-neutral-300 text-sm">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-medium mb-2">Solution:</h4>
                        <p className="text-neutral-300 text-sm">{story.solution}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-purple-400 font-medium mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {story.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <Image
                      src={story.image}
                      alt={story.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    
                    <h4 className="text-green-400 font-medium mb-4">Results Achieved:</h4>
                    <div className="space-y-3">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <span className="text-green-400 mr-2">✓</span>
                          <span className="text-neutral-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-orange-400 mb-4">
              Why Choose End-to-End Development?
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              The advantages of working with a single team for your entire project lifecycle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-colors text-center">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-neutral-300 text-sm mb-3 leading-relaxed">{reason.description}</p>
                <div className="text-yellow-400 text-sm font-medium">{reason.benefit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-rose-400 mb-4">
              Client Success Stories
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Hear from leaders who chose our end-to-end development approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-pink-500/50 transition-colors">
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
                    <p className="text-pink-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed italic mb-4">"{testimonial.quote}"</p>
                <div className="border-t border-neutral-800 pt-4 mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Project:</span>
                    <span className="text-blue-400">{testimonial.project}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-neutral-400">Outcome:</span>
                    <span className="text-green-400">{testimonial.outcome}</span>
                  </div>
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
            Let's discuss your project and create a comprehensive development plan that takes you from idea to market success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-8 font-medium text-white transition-colors hover:from-indigo-600 hover:to-purple-700"
            >
              View Complete Projects
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EndToEndDevelopmentService;