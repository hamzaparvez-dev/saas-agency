"use client";

import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const MVPDevelopmentService = () => {
  const process = [
    {
      step: "01",
      title: "Ideation & Validation",
      description: "We help validate your idea through market research, user interviews, and competitive analysis to ensure product-market fit.",
      icon: "💡"
    },
    {
      step: "02",
      title: "Feature Prioritization",
      description: "Define core features using MoSCoW method, focusing on must-have functionality that delivers maximum value to early users.",
      icon: "🎯"
    },
    {
      step: "03",
      title: "Rapid Development",
      description: "Build your MVP using proven frameworks and agile methodology with weekly sprints and continuous user feedback.",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Launch & Iterate",
      description: "Deploy to production, gather user analytics, and iterate based on real user feedback and data-driven insights.",
      icon: "🚀"
    }
  ];

  const mvpTypes = [
    {
      title: "Landing Page MVP",
      description: "Validate demand with a compelling landing page that captures user interest and email signups",
      timeline: "1-2 weeks",
      price: "Starting at $2,999",
      features: ["Landing Page Design", "Email Capture", "Analytics Setup", "A/B Testing"]
    },
    {
      title: "Prototype MVP",
      description: "Interactive prototypes that demonstrate core functionality without full development",
      timeline: "2-3 weeks",
      price: "Starting at $4,999",
      features: ["Interactive Prototype", "User Flow Design", "Clickable Demo", "User Testing"]
    },
    {
      title: "Functional MVP",
      description: "Basic working version with core features to gather real user feedback",
      timeline: "4-8 weeks",
      price: "Starting at $9,999",
      features: ["Core Features", "User Authentication", "Database", "Basic UI/UX"]
    },
    {
      title: "Market-Ready MVP",
      description: "Polished product ready for launch with payment integration and analytics",
      timeline: "8-12 weeks",
      price: "Starting at $19,999",
      features: ["Full Features", "Payment Integration", "Analytics", "Marketing Tools"]
    }
  ];

  const benefits = [
    {
      title: "Speed to Market",
      description: "Launch 10x faster than traditional development approaches",
      icon: "🏃",
      metric: "2-8 weeks"
    },
    {
      title: "Risk Reduction",
      description: "Validate assumptions before heavy investment",
      icon: "🛡️",
      metric: "80% less risk"
    },
    {
      title: "Cost Efficiency",
      description: "Spend 60% less on initial product development",
      icon: "💰",
      metric: "60% savings"
    },
    {
      title: "User Feedback",
      description: "Get real user insights from day one",
      icon: "👥",
      metric: "Real users"
    },
    {
      title: "Investor Ready",
      description: "Demonstrate traction with working product",
      icon: "📈",
      metric: "Fundable"
    },
    {
      title: "Iterative Growth",
      description: "Build features users actually want",
      icon: "🔄",
      metric: "Data-driven"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Founder, HealthTech Startup",
      company: "MediConnect",
      quote: "They built our healthcare MVP in 6 weeks. We secured $500K in seed funding based on user traction from their MVP.",
      image: "/images/mvp-team.jpg",
      metrics: ["6 weeks delivery", "$500K raised", "1000+ users"]
    },
    {
      name: "Robert Chen",
      role: "CEO, FinTech Startup",
      company: "PayForward",
      quote: "The MVP validated our assumption and helped us pivot early. Saved us $200K and 8 months of development time.",
      image: "/images/startup-meeting.jpg",
      metrics: ["Early pivot", "$200K saved", "8 months saved"]
    },
    {
      name: "Sarah Williams",
      role: "Product Manager, EdTech",
      company: "LearnFast",
      quote: "Their rapid development approach got us to market before competitors. Now we're the leading solution in our niche.",
      image: "/images/tech-workspace.jpg",
      metrics: ["First to market", "Market leader", "Competitive advantage"]
    }
  ];

  const mvpFeatures = [
    {
      category: "Frontend",
      items: ["React/Next.js", "Mobile Responsive", "Modern UI/UX", "Progressive Web App"]
    },
    {
      category: "Backend",
      items: ["RESTful APIs", "Database Design", "Authentication", "Third-party Integrations"]
    },
    {
      category: "Analytics",
      items: ["User Tracking", "Conversion Metrics", "A/B Testing", "Performance Monitoring"]
    },
    {
      category: "Infrastructure",
      items: ["Cloud Hosting", "SSL Security", "CDN Setup", "Backup Systems"]
    }
  ];

  const successStories = [
    {
      title: "SaaS Platform MVP",
      description: "Project management tool that grew from MVP to $1M ARR",
      image: "/images/saas-dashboard.jpg",
      results: ["500 beta users", "$1M ARR in 12 months", "Series A funding"],
      timeline: "6 weeks MVP → Market Success"
    },
    {
      title: "E-commerce MVP",
      description: "Niche marketplace that captured 20% market share",
      image: "/images/startup-office.jpg",
      results: ["1000+ sellers", "20% market share", "Acquired by competitor"],
      timeline: "4 weeks MVP → Exit"
    },
    {
      title: "Mobile App MVP",
      description: "Social networking app with 100K downloads in first month",
      image: "/images/mobile-dev.jpg",
      results: ["100K downloads", "Featured on App Store", "Angel investment"],
      timeline: "8 weeks MVP → Success"
    }
  ];

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            MVP Development <br /> That Validates
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
            Turn your idea into a working product in weeks, not months. Test assumptions, gather real user feedback,
            and secure funding with a strategically built MVP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Start Your MVP
            </Link>
            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-8 font-medium text-white transition-colors hover:from-orange-600 hover:to-red-700"
            >
              MVP Strategy Call
            </Link>
          </div>
        </div>

        {/* MVP Types Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-red-400 mb-4">
              Choose Your MVP Approach
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Different validation stages require different MVP types. We'll help you choose the right approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mvpTypes.map((type, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-orange-500/50 transition-colors group">
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-orange-400 transition-colors">{type.title}</h3>
                <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{type.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-neutral-400 text-sm">Timeline:</span>
                    <span className="text-orange-400 text-sm font-medium">{type.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400 text-sm">Price:</span>
                    <span className="text-green-400 text-sm font-medium">{type.price}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="text-orange-400 mr-2">✓</span>
                      <span className="text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-blue-400 mb-4">
              Why Build an MVP First?
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              MVPs reduce risk, accelerate learning, and maximize your chances of building something users love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-neutral-300 text-sm mb-3 leading-relaxed">{benefit.description}</p>
                <div className="text-emerald-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-400 mb-4">
              Our MVP Development Process
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              A proven framework that maximizes learning while minimizing time and cost investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 h-full hover:border-neutral-600 transition-colors">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm text-orange-400 font-medium mb-2">STEP {item.step}</div>
                  <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-600 mb-4">
              MVP Success Stories
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Real MVPs that became successful businesses with millions in revenue and funding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-colors">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">{story.title}</h3>
                  <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{story.description}</p>
                  <div className="space-y-2 mb-4">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-neutral-300">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-orange-400 text-sm font-medium">{story.timeline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Features */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-teal-500 to-emerald-400 mb-4">
              What's Included in Your MVP
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Professional-grade features and infrastructure to ensure your MVP can scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mvpFeatures.map((category, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
                <h3 className="text-white font-semibold text-lg mb-4 text-center">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="text-teal-400 mr-2">▶</span>
                      <span className="text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-orange-400 mb-4">
              Founder Success Stories
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Hear from founders who turned their MVP into successful, funded companies.
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
                    <p className="text-orange-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed italic mb-4">"{testimonial.quote}"</p>
                <div className="flex flex-wrap gap-2">
                  {testimonial.metrics.map((metric, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full">
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
            Ready to Validate Your Idea?
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            {"Don't spend months building something nobody wants. Let's create an MVP that validates your idea and sets you up for success."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Get MVP Quote
            </Link>
            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-8 font-medium text-white transition-colors hover:from-orange-600 hover:to-red-700"
            >
              Free Strategy Session
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MVPDevelopmentService;