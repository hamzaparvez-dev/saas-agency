"use client";

import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* Hero Section */}
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Digital acceleration company
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
          We are a dedicated team of software developers, architects, and AI specialists committed to transforming ideas into powerful digital solutions that scale businesses worldwide.
        </p>

        {/* Company Stats */}
        <div className="max-w-6xl mx-auto py-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 mb-2">
                150+
              </div>
              <p className="text-neutral-300 text-lg">Projects Delivered</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 to-emerald-600 mb-2">
                50+
              </div>
              <p className="text-neutral-300 text-lg">Happy Clients</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-600 mb-2">
                5+
              </div>
              <p className="text-neutral-300 text-lg">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-orange-600 mb-2">
                24/7
              </div>
              <p className="text-neutral-300 text-lg">Support Available</p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
              Our Story
            </h2>
            <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
              Founded in 2019 by a team of experienced developers who saw the need for more agile, 
              AI-powered software development in the rapidly evolving digital landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">2019 - The Beginning</h4>
                    <p className="text-neutral-300">Started with a vision to bridge the gap between cutting-edge technology and practical business solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">2021 - AI Integration</h4>
                    <p className="text-neutral-300">Pioneered AI-first development approaches, helping clients automate and optimize their operations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">2023 - Scale & Growth</h4>
                    <p className="text-neutral-300">Expanded to serve enterprise clients across multiple industries, delivering complex SaaS platforms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">2025 - Innovation Continues</h4>
                    <p className="text-neutral-300">Leading the charge in next-gen technologies while maintaining our commitment to quality and client success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/startup-office.jpg"
                alt="Team Collaboration"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/tech-workspace.jpg"
                alt="Our Team Workspace"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 mb-6">
                Our Mission
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                To empower businesses with cutting-edge software solutions that drive growth, efficiency, and innovation. 
                We believe in turning complex problems into elegant, scalable solutions.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                From rapid MVP development to enterprise-scale applications, we partner with our clients 
                to build the technology that powers their success.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-neutral-300">Custom SaaS Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-neutral-300">AI-Powered Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-neutral-300">Cloud Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-neutral-300">
                We stay at the forefront of technology, continuously learning and implementing the latest tools and methodologies.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Client Partnership</h3>
              <p className="text-neutral-300">
                We work as an extension of your team, understanding your business goals and delivering solutions that exceed expectations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality & Speed</h3>
              <p className="text-neutral-300">
                We deliver high-quality code fast, without compromising on security, scalability, or performance.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process Section */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-red-400 mb-16">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Discovery & Planning</h3>
              <p className="text-neutral-300 text-sm">
                We deep-dive into your business requirements, technical constraints, and success metrics to create a comprehensive roadmap.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Design & Architecture</h3>
              <p className="text-neutral-300 text-sm">
                Our team designs scalable architecture and intuitive user experiences that align with your business goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Agile Development</h3>
              <p className="text-neutral-300 text-sm">
                We build in iterative sprints with regular check-ins, ensuring transparency and flexibility throughout development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Launch & Support</h3>
              <p className="text-neutral-300 text-sm">
                We handle deployment, monitoring, and provide ongoing support to ensure your application performs optimally.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies & Expertise Section */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-blue-300 mb-16">
            Technologies & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl mb-4 h-32 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Development</h3>
                <p className="text-blue-100 text-sm">React, Next.js, Node.js, Python, PostgreSQL</p>
              </div>
              <div className="text-left space-y-1">
                <p className="text-neutral-400 text-xs">• TypeScript/JavaScript</p>
                <p className="text-neutral-400 text-xs">• React & Next.js</p>
                <p className="text-neutral-400 text-xs">• Node.js & Express</p>
                <p className="text-neutral-400 text-xs">• Python & Django</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 rounded-2xl mb-4 h-32 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white mb-2">Cloud & DevOps</h3>
                <p className="text-emerald-100 text-sm">AWS, Docker, Kubernetes, CI/CD</p>
              </div>
              <div className="text-left space-y-1">
                <p className="text-neutral-400 text-xs">• AWS & Azure</p>
                <p className="text-neutral-400 text-xs">• Docker & Kubernetes</p>
                <p className="text-neutral-400 text-xs">• GitHub Actions</p>
                <p className="text-neutral-400 text-xs">• Terraform</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl mb-4 h-32 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white mb-2">AI & Machine Learning</h3>
                <p className="text-purple-100 text-sm">TensorFlow, OpenAI, LangChain, Automation</p>
              </div>
              <div className="text-left space-y-1">
                <p className="text-neutral-400 text-xs">• OpenAI GPT Integration</p>
                <p className="text-neutral-400 text-xs">• LangChain & Vector DBs</p>
                <p className="text-neutral-400 text-xs">• TensorFlow & PyTorch</p>
                <p className="text-neutral-400 text-xs">• Custom AI Solutions</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl mb-4 h-32 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white mb-2">Mobile Development</h3>
                <p className="text-orange-100 text-sm">React Native, iOS, Android, Cross-platform</p>
              </div>
              <div className="text-left space-y-1">
                <p className="text-neutral-400 text-xs">• React Native</p>
                <p className="text-neutral-400 text-xs">• Flutter</p>
                <p className="text-neutral-400 text-xs">• Native iOS/Android</p>
                <p className="text-neutral-400 text-xs">• Progressive Web Apps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Experience Section */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-400 mb-16">
            Industry Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-neutral-800 rounded-2xl hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">FinTech</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Payment processing, trading platforms, digital banking solutions, and regulatory compliance systems.
              </p>
              <div className="space-y-1">
                <p className="text-neutral-400 text-xs">• Stripe & PayPal Integration</p>
                <p className="text-neutral-400 text-xs">• PCI DSS Compliance</p>
                <p className="text-neutral-400 text-xs">• Real-time Trading Systems</p>
              </div>
            </div>
            <div className="p-6 border border-neutral-800 rounded-2xl hover:border-emerald-500 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">HealthTech</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Electronic health records, telemedicine platforms, patient management systems, and HIPAA compliance.
              </p>
              <div className="space-y-1">
                <p className="text-neutral-400 text-xs">• HIPAA Compliant Systems</p>
                <p className="text-neutral-400 text-xs">• Telemedicine Platforms</p>
                <p className="text-neutral-400 text-xs">• Patient Data Analytics</p>
              </div>
            </div>
            <div className="p-6 border border-neutral-800 rounded-2xl hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">E-Commerce</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Multi-vendor marketplaces, inventory management, recommendation engines, and customer analytics.
              </p>
              <div className="space-y-1">
                <p className="text-neutral-400 text-xs">• Shopify & WooCommerce</p>
                <p className="text-neutral-400 text-xs">• Custom Marketplaces</p>
                <p className="text-neutral-400 text-xs">• AI Recommendations</p>
              </div>
            </div>
            <div className="p-6 border border-neutral-800 rounded-2xl hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">EdTech</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Learning management systems, online course platforms, student assessment tools, and virtual classrooms.
              </p>
              <div className="space-y-1">
                <p className="text-neutral-400 text-xs">• LMS Development</p>
                <p className="text-neutral-400 text-xs">• Interactive Learning</p>
                <p className="text-neutral-400 text-xs">• Progress Tracking</p>
              </div>
            </div>
            <div className="p-6 border border-neutral-800 rounded-2xl hover:border-pink-500 transition-colors">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">SaaS Platforms</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Multi-tenant architectures, subscription management, user analytics, and enterprise integrations.
              </p>
              <div className="space-y-1">
                <p className="text-neutral-400 text-xs">• Multi-tenant Architecture</p>
                <p className="text-neutral-400 text-xs">• Subscription Billing</p>
                <p className="text-neutral-400 text-xs">• API Development</p>
              </div>
            </div>
            <div className="p-6 border border-neutral-800 rounded-2xl hover:border-cyan-500 transition-colors">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Startups</h3>
              <p className="text-neutral-300 text-sm mb-4">
                MVP development, rapid prototyping, investor demos, and scalable growth solutions.
              </p>
              <div className="space-y-1">
                <p className="text-neutral-400 text-xs">• Rapid MVP Development</p>
                <p className="text-neutral-400 text-xs">• Investor Presentations</p>
                <p className="text-neutral-400 text-xs">• Growth Optimization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-orange-400 mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-neutral-800 rounded-2xl bg-neutral-900/50">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/client1-avatar.jpg"
                  alt="Client 1"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">David Miller</h4>
                  <p className="text-neutral-400 text-sm">CEO, TechCorp</p>
                </div>
              </div>
              <p className="text-neutral-300 text-sm mb-4">
                "They delivered our SaaS platform 2 weeks ahead of schedule. The quality exceeded our expectations and their AI integration boosted our efficiency by 40%."
              </p>
              <div className="flex text-yellow-400 text-sm">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <div className="p-6 border border-neutral-800 rounded-2xl bg-neutral-900/50">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/client2-avatar.jpg"
                  alt="Client 2"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">Lisa Chen</h4>
                  <p className="text-neutral-400 text-sm">Founder, HealthFirst</p>
                </div>
              </div>
              <p className="text-neutral-300 text-sm mb-4">
                "Their expertise in healthcare compliance was invaluable. They built a HIPAA-compliant platform that our patients love using."
              </p>
              <div className="flex text-yellow-400 text-sm">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <div className="p-6 border border-neutral-800 rounded-2xl bg-neutral-900/50">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/client3-avatar.jpg"
                  alt="Client 3"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">Mark Johnson</h4>
                  <p className="text-neutral-400 text-sm">CTO, EduLearn</p>
                </div>
              </div>
              <p className="text-neutral-300 text-sm mb-4">
                "From MVP to enterprise scale in 8 months. Their development process is incredibly efficient and their support is outstanding."
              </p>
              <div className="flex text-yellow-400 text-sm">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-blue-400 mb-16">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                  <p className="text-neutral-300">150+ successful projects across multiple industries with a 98% client satisfaction rate.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
                  <p className="text-neutral-300">We integrate cutting-edge AI technologies to give your business a competitive advantage.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Transparent Communication</h3>
                  <p className="text-neutral-300">Regular updates, clear timelines, and direct access to your development team.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Scalable Solutions</h3>
                  <p className="text-neutral-300">Built to grow with your business, from startup MVP to enterprise-scale applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Post-Launch Support</h3>
                  <p className="text-neutral-300">Comprehensive maintenance, monitoring, and feature updates to ensure long-term success.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                  <p className="text-neutral-300">Enterprise-grade security practices, compliance standards, and data protection protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership & Certifications Section */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-purple-400 mb-16">
            Partnerships & Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            <div className="text-center p-6 border border-neutral-800 rounded-2xl hover:border-blue-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">AWS</span>
              </div>
              <h3 className="text-white font-semibold mb-2">AWS Partner</h3>
              <p className="text-neutral-400 text-sm">Certified Solutions Architect</p>
            </div>
            <div className="text-center p-6 border border-neutral-800 rounded-2xl hover:border-emerald-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">MSFT</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Microsoft Partner</h3>
              <p className="text-neutral-400 text-sm">Azure Certified Developer</p>
            </div>
            <div className="text-center p-6 border border-neutral-800 rounded-2xl hover:border-purple-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">SOC</span>
              </div>
              <h3 className="text-white font-semibold mb-2">SOC 2 Compliant</h3>
              <p className="text-neutral-400 text-sm">Type II Certified</p>
            </div>
            <div className="text-center p-6 border border-neutral-800 rounded-2xl hover:border-orange-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">ISO</span>
              </div>
              <h3 className="text-white font-semibold mb-2">ISO 27001</h3>
              <p className="text-neutral-400 text-sm">Information Security</p>
            </div>
          </div>
        </div>

        {/* Culture & Work Environment Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-400 mb-6">
                Our Culture
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                We believe that great software comes from great teams. Our culture emphasizes continuous learning, 
                innovation, and work-life balance. We're not just colleagues – we're a community of passionate 
                technologists who love what we do.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🎯</span>
                  </div>
                  <span className="text-neutral-300">Remote-first with flexible working hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📚</span>
                  </div>
                  <span className="text-neutral-300">Continuous learning and skill development budget</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🚀</span>
                  </div>
                  <span className="text-neutral-300">Innovation time for personal projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🌍</span>
                  </div>
                  <span className="text-neutral-300">Diverse, global team across 12 countries</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/ourcompany-culture.webp"
                alt="Team Culture"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Let's discuss your project and see how we can help bring your vision to life with cutting-edge technology and expert development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Get In Touch
            </a>
            <a
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-8 font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-700"
            >
              Schedule a Call
            </a>
          </div>
          <div className="mt-8 text-sm text-neutral-400">
            <p>Free consultation • No commitment required • Response within 24 hours</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;