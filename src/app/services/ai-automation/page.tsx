"use client";

import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const AIAutomationService = () => {
  const process = [
    {
      step: "01",
      title: "Process Analysis",
      description: "Comprehensive audit of your current workflows to identify automation opportunities and calculate ROI potential.",
      icon: "🔬"
    },
    {
      step: "02", 
      title: "AI Strategy Design",
      description: "Design custom AI solutions using machine learning, NLP, and automation frameworks tailored to your business needs.",
      icon: "🧠"
    },
    {
      step: "03",
      title: "Development & Training",
      description: "Build and train AI models, integrate with existing systems, and develop automated workflows with human oversight.",
      icon: "⚙️"
    },
    {
      step: "04",
      title: "Deployment & Optimization",
      description: "Deploy AI solutions with monitoring, continuous learning, and performance optimization for maximum efficiency.",
      icon: "🚀"
    }
  ];

  const automationTypes = [
    {
      title: "Document Processing",
      description: "Intelligent document extraction, classification, and processing using OCR and NLP",
      icon: "📄",
      useCases: ["Invoice processing", "Contract analysis", "Data extraction", "Document routing"],
      savings: "80% time reduction",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Customer Service AI",
      description: "AI-powered chatbots, sentiment analysis, and automated customer support systems",
      icon: "🤖",
      useCases: ["24/7 chat support", "Ticket routing", "Response automation", "Sentiment analysis"],
      savings: "70% cost reduction",
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Data Analytics Automation",
      description: "Automated data collection, analysis, reporting, and predictive analytics",
      icon: "📊",
      useCases: ["Report generation", "Predictive analytics", "Data visualization", "Anomaly detection"],
      savings: "90% faster insights",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Workflow Automation",
      description: "End-to-end business process automation with AI decision-making capabilities",
      icon: "🔄",
      useCases: ["Approval workflows", "Task routing", "Process optimization", "Quality control"],
      savings: "60% process acceleration",
      color: "from-orange-500 to-red-500"
    }
  ];

  const aiTechnologies = [
    {
      name: "Large Language Models",
      description: "GPT, Claude, and custom LLMs for text processing and generation",
      applications: ["Content generation", "Document analysis", "Code review", "Translation"],
      icon: "🧠"
    },
    {
      name: "Computer Vision",
      description: "Image and video analysis for visual automation tasks",
      applications: ["Quality inspection", "Object detection", "OCR", "Medical imaging"],
      icon: "👁️"
    },
    {
      name: "Machine Learning",
      description: "Predictive models and classification systems for data-driven decisions",
      applications: ["Fraud detection", "Recommendation systems", "Predictive maintenance", "Risk assessment"],
      icon: "📈"
    },
    {
      name: "Natural Language Processing",
      description: "Text understanding, sentiment analysis, and language generation",
      applications: ["Sentiment analysis", "Text classification", "Entity extraction", "Summarization"],
      icon: "💬"
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 70%",
      icon: "💰",
      metrics: ["70% cost savings", "ROI in 6 months", "Reduced labor costs"]
    },
    {
      title: "Efficiency Gains",
      description: "Process tasks 10x faster than manual methods",
      icon: "⚡",
      metrics: ["10x speed increase", "24/7 operation", "Zero human error"]
    },
    {
      title: "Scalability",
      description: "Handle unlimited volume without additional staff",
      icon: "📈",
      metrics: ["Unlimited scale", "No hiring needed", "Instant capacity"]
    },
    {
      title: "Accuracy",
      description: "99%+ accuracy with continuous improvement",
      icon: "🎯",
      metrics: ["99%+ accuracy", "Continuous learning", "Quality consistency"]
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with cutting-edge AI capabilities",
      icon: "🏆",
      metrics: ["Market leadership", "Innovation edge", "Future-ready"]
    },
    {
      title: "Employee Satisfaction",
      description: "Free teams from repetitive tasks for strategic work",
      icon: "😊",
      metrics: ["Higher satisfaction", "Strategic focus", "Skill development"]
    }
  ];

  const testimonials = [
    {
      name: "Rachel Thompson",
      role: "Operations Director, LogisticsPro",
      company: "Global Logistics Solutions",
      quote: "AI automation reduced our invoice processing time from 8 hours to 15 minutes. We now process 10,000+ invoices monthly with 99.8% accuracy.",
              image: "/images/ai-automation.webp",
      metrics: ["97% time savings", "99.8% accuracy", "10K+ invoices processed"],
      industry: "Logistics"
    },
    {
      name: "Mark Stevens",
      role: "CFO, FinanceFlow",
      company: "Investment Management Firm", 
      quote: "Their AI solution automated our entire compliance reporting. What took 40 hours now takes 2 hours, saving us $200K annually.",
      image: "/images/saas-dashboard.jpg",
      metrics: ["$200K annual savings", "95% time reduction", "100% compliance"],
      industry: "Finance"
    },
    {
      name: "Dr. Lisa Park",
      role: "Chief Medical Officer, HealthTech",
      company: "Regional Healthcare Network",
      quote: "AI-powered patient record analysis reduced diagnosis time by 60% while improving accuracy. It's transforming our patient care.",
      image: "/images/tech-workspace.jpg",
      metrics: ["60% faster diagnosis", "Improved accuracy", "Better patient care"],
      industry: "Healthcare"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      automations: ["Patient record analysis", "Medical imaging", "Drug discovery", "Clinical workflows"],
      image: "/images/startup-office.jpg",
      impact: "40% efficiency improvement"
    },
    {
      name: "Finance",
      automations: ["Fraud detection", "Risk assessment", "Trading algorithms", "Compliance reporting"],
      image: "/images/data-analytics.jpg",
      impact: "60% cost reduction"
    },
    {
      name: "Manufacturing",
      automations: ["Quality control", "Predictive maintenance", "Supply chain optimization", "Production planning"],
      image: "/images/server-room.jpg",
      impact: "30% productivity increase"
    },
    {
      name: "Retail",
      automations: ["Inventory management", "Price optimization", "Customer segmentation", "Demand forecasting"],
      image: "/images/mvp-team.jpg",
      impact: "25% revenue increase"
    },
    {
      name: "Legal",
      automations: ["Contract analysis", "Legal research", "Document review", "Compliance monitoring"],
      image: "/images/startup-meeting.jpg",
      impact: "80% time savings"
    },
    {
      name: "Real Estate",
      automations: ["Property valuation", "Market analysis", "Lead scoring", "Document processing"],
      image: "/images/mobile-dev.jpg",
      impact: "50% faster closings"
    }
  ];

  const caseStudies = [
    {
      title: "Invoice Processing Automation",
      client: "Fortune 500 Manufacturing",
      challenge: "Processing 50,000+ invoices monthly with 20% error rate",
      solution: "AI-powered OCR with intelligent validation and approval workflows",
      results: {
        timeReduction: "95%",
        errorReduction: "99%",
        costSavings: "$500K annually",
        processingVolume: "50K+ invoices/month"
      },
      technologies: ["OCR", "NLP", "Machine Learning", "Workflow Automation"]
    },
    {
      title: "Customer Service AI",
      client: "E-commerce Platform",
      challenge: "Handling 10,000+ support tickets daily with long response times",
      solution: "Intelligent chatbot with escalation logic and sentiment analysis",
      results: {
        responseTime: "Instant",
        resolutionRate: "85%",
        costSavings: "$300K annually",
        customerSatisfaction: "95%"
      },
      technologies: ["NLP", "Sentiment Analysis", "Chatbot", "Knowledge Base"]
    },
    {
      title: "Predictive Maintenance",
      client: "Industrial Equipment Provider",
      challenge: "Unexpected equipment failures costing $2M annually",
      solution: "IoT sensors with ML models for failure prediction and automated scheduling",
      results: {
        downtimeReduction: "70%",
        maintenanceCosts: "-40%",
        equipmentLife: "+30%",
        savings: "$2M annually"
      },
      technologies: ["IoT", "Machine Learning", "Predictive Analytics", "Automated Scheduling"]
    }
  ];

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            AI Automation <br /> That Transforms
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
            Harness the power of artificial intelligence to automate complex workflows, reduce costs by 70%, 
            and free your team to focus on strategic initiatives that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Start AI Automation
            </Link>
            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-8 font-medium text-white transition-colors hover:from-cyan-600 hover:to-blue-700"
            >
              AI Strategy Session
            </Link>
          </div>
        </div>

        {/* Automation Types Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-cyan-500 to-blue-400 mb-4">
              AI Automation Solutions
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Transform your business processes with intelligent automation powered by cutting-edge AI technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors group">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{type.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold text-xl group-hover:text-cyan-400 transition-colors">{type.title}</h3>
                    <p className="text-cyan-400 font-medium text-sm">{type.savings}</p>
                  </div>
                </div>
                <p className="text-neutral-300 mb-4 leading-relaxed">{type.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {type.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="text-cyan-400 mr-2">▶</span>
                      <span className="text-neutral-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Technologies Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-400 mb-4">
              AI Technologies We Master
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Leverage the latest AI breakthroughs to automate complex tasks and make intelligent decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aiTechnologies.map((tech, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{tech.icon}</span>
                  <h3 className="text-white font-semibold text-lg">{tech.name}</h3>
                </div>
                <p className="text-neutral-300 mb-4 leading-relaxed">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-teal-400 mb-4">
              Transformational Benefits
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Measurable business impact that drives growth, efficiency, and competitive advantage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{benefit.description}</p>
                <div className="space-y-1">
                  {benefit.metrics.map((metric, idx) => (
                    <div key={idx} className="text-emerald-400 text-sm font-medium">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-red-400 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Tailored AI automation solutions designed for the unique challenges of your industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-colors group">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  width={400}
                  height={200}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-semibold text-lg">{industry.name}</h3>
                    <span className="text-orange-400 text-sm font-medium">{industry.impact}</span>
                  </div>
                  <div className="space-y-2">
                    {industry.automations.map((automation, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="text-orange-400 mr-2">✓</span>
                        <span className="text-neutral-300">{automation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-indigo-600 mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              A systematic approach to AI automation that ensures maximum ROI and minimal business disruption.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 h-full hover:border-blue-500/50 transition-colors">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm text-blue-400 font-medium mb-2">STEP {item.step}</div>
                  <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-emerald-400 mb-4">
              Real AI Automation Success Stories
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Documented results from real implementations showing measurable business impact.
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-green-500/50 transition-colors">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-white font-semibold text-2xl mb-2">{study.title}</h3>
                    <p className="text-green-400 font-medium mb-4">{study.client}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-red-400 font-medium mb-2">Challenge:</h4>
                        <p className="text-neutral-300 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-medium mb-2">Solution:</h4>
                        <p className="text-neutral-300 text-sm">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-purple-400 font-medium mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-medium mb-4">Results:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.results).map(([key, value], idx) => (
                        <div key={idx} className="bg-neutral-800 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-green-400 mb-1">{value}</div>
                          <div className="text-neutral-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-orange-400 mb-4">
              Client Transformations
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Hear from business leaders who have transformed their operations with AI automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-colors">
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
                    <p className="text-yellow-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">
                    {testimonial.industry}
                  </span>
                </div>
                <p className="text-neutral-300 leading-relaxed italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex flex-wrap gap-2">
                  {testimonial.metrics.map((metric, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
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
            Ready to Automate with AI?
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Transform your business operations with intelligent automation. Let&apos;s identify opportunities 
            and calculate the ROI for your specific use cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Get ROI Assessment
            </Link>
            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-8 font-medium text-white transition-colors hover:from-cyan-600 hover:to-blue-700"
            >
              Book AI Strategy Call
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIAutomationService;