"use client";

import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  Code2,
  TrendingUp,
  Palette,
  MapPin,
  Clock,
  Briefcase,
  Users,
  Target,
  Rocket,
  Heart,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const jobListings = [
  {
    id: 1,
    title: "Full Stack Developer",
    location: "Remote / Hybrid",
    type: "Contract",
    icon: Code2,
    color: "from-blue-500 to-purple-600",
    description:
      "Join our engineering team to build cutting-edge SaaS applications using modern technologies like React, Next.js, Node.js, and PostgreSQL.",
    responsibilities: [
      "Develop and maintain full-stack web applications",
      "Collaborate with designers and product managers",
      "Write clean, maintainable, and well-tested code",
      "Participate in code reviews and technical discussions",
      "Contribute to architectural decisions",
    ],
    requirements: [
      "3+ years of experience in full-stack development",
      "Strong proficiency in React, Next.js, and TypeScript",
      "Experience with Node.js and RESTful APIs",
      "Familiarity with databases (PostgreSQL, MongoDB)",
      "Understanding of Git and agile methodologies",
    ],
    niceToHave: [
      "Experience with AWS or cloud platforms",
      "Knowledge of Docker and CI/CD pipelines",
      "Open source contributions",
      "Experience with AI/ML integration",
    ],
  },
  {
    id: 2,
    title: "Sales Closure Specialist",
    location: "Remote / On-site",
    type: "Contract",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600",
    description:
      "We're looking for a motivated sales professional to help close deals, build client relationships, and drive revenue growth for our SaaS development agency.",
    responsibilities: [
      "Close deals with qualified leads from marketing team",
      "Conduct product demos and discovery calls",
      "Build and maintain strong client relationships",
      "Negotiate contracts and pricing agreements",
      "Meet and exceed monthly sales targets",
    ],
    requirements: [
      "2+ years of B2B sales experience",
      "Proven track record of closing deals",
      "Excellent communication and presentation skills",
      "Experience in SaaS or tech industry preferred",
      "Strong negotiation and problem-solving skills",
    ],
    niceToHave: [
      "Experience with CRM tools (HubSpot, Salesforce)",
      "Understanding of software development",
      "Network in startup/tech communities",
      "Experience with enterprise sales",
    ],
  },
  {
    id: 3,
    title: "Graphic Designer",
    location: "Remote",
    type: "Contract",
    icon: Palette,
    color: "from-pink-500 to-orange-500",
    description:
      "Create stunning visual designs for our clients' brands, websites, and marketing materials. Help shape the visual identity of innovative SaaS products.",
    responsibilities: [
      "Design UI/UX for web and mobile applications",
      "Create brand identities and style guides",
      "Develop marketing materials and social media graphics",
      "Collaborate with developers and product teams",
      "Present design concepts to clients",
    ],
    requirements: [
      "2+ years of professional graphic design experience",
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio showcasing web/UI design work",
      "Understanding of design principles and typography",
      "Ability to work on multiple projects simultaneously",
    ],
    niceToHave: [
      "Experience with motion graphics and video editing",
      "Knowledge of HTML/CSS",
      "3D design skills (Blender, Spline)",
      "Illustration experience",
    ],
  },
];

const benefits = [
  {
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with flexible hours",
    icon: Rocket,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Competitive Salary",
    description: "Industry-leading compensation and performance bonuses",
    icon: DollarSign,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    icon: Heart,
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "Learning Budget",
    description: "$1,500 annual budget for courses and conferences",
    icon: Target,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Latest Technology",
    description: "Work with cutting-edge tools and technologies",
    icon: Zap,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Great Team",
    description: "Collaborate with talented professionals worldwide",
    icon: Users,
    color: "from-cyan-400 to-cyan-600",
  },
];

const Careers = () => {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2 mt-20 md:mt-0">
        {/* Hero Section */}
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Join Our Team
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
          Build the future of SaaS development with us. We&apos;re always looking for talented individuals
          who are passionate about technology, innovation, and creating exceptional digital experiences.
        </p>

        {/* Company Culture Stats */}
        <div className="max-w-6xl mx-auto py-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-neutral-800/60 rounded-2xl bg-white/5 backdrop-blur">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 mb-2">
                50+
              </div>
              <p className="text-neutral-300">Team Members</p>
            </div>
            <div className="p-6 border border-neutral-800/60 rounded-2xl bg-white/5 backdrop-blur">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 to-emerald-600 mb-2">
                12
              </div>
              <p className="text-neutral-300">Countries</p>
            </div>
            <div className="p-6 border border-neutral-800/60 rounded-2xl bg-white/5 backdrop-blur">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-600 mb-2">
                95%
              </div>
              <p className="text-neutral-300">Retention Rate</p>
            </div>
            <div className="p-6 border border-neutral-800/60 rounded-2xl bg-white/5 backdrop-blur">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-orange-600 mb-2">
                4.8
              </div>
              <p className="text-neutral-300">Glassdoor Rating</p>
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 border border-neutral-800/60 rounded-2xl bg-white/5 backdrop-blur hover:border-neutral-700 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-neutral-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-400 mb-4">
            Open Positions
          </h2>
          <p className="text-center text-neutral-300 text-lg mb-16 max-w-2xl mx-auto">
            Explore our current job openings and find the perfect role for you
          </p>

          <div className="space-y-8">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="border border-neutral-800/60 rounded-2xl bg-white/5 backdrop-blur p-8 hover:border-neutral-700 transition-all duration-300"
              >
                {/* Job Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${job.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <job.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${job.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Job Description */}
                <p className="text-neutral-300 text-lg mb-6">{job.description}</p>

                {/* Job Details Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-blue-400" />
                      <span>Responsibilities</span>
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-neutral-300">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                      <Target className="h-5 w-5 text-purple-400" />
                      <span>Requirements</span>
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-neutral-300">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Nice to Have */}
                {job.niceToHave && (
                  <div className="mt-8 pt-6 border-t border-neutral-800">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-yellow-400" />
                      <span>Nice to Have</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.niceToHave.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm text-neutral-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-blue-400 mb-16">
            Our Hiring Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Apply</h3>
              <p className="text-neutral-300 text-sm">
                Submit your application through our contact form with your resume and portfolio
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Screen</h3>
              <p className="text-neutral-300 text-sm">
                Initial screening call to discuss your background and career goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Interview</h3>
              <p className="text-neutral-300 text-sm">
                Technical/skills assessment and team interviews
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Offer</h3>
              <p className="text-neutral-300 text-sm">
                Receive your offer and join our amazing team
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            We&apos;re always looking for talented individuals. Send us your resume and let&apos;s explore
            opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-8 font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-700"
            >
              Send General Application
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-800 bg-white/5 backdrop-blur px-8 font-medium text-neutral-300 transition-colors hover:bg-white/10"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="mt-8 text-sm text-neutral-400">
            <p>Equal opportunity employer • Remote-first • Diverse team • Inclusive culture</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;

