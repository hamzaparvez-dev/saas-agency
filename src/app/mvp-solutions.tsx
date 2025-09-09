"use client";

import React, { useState, useEffect } from "react";
import LoadingLink from "@/components/loading-link";
import { 
  Rocket, 
  Clock, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Target,
  DollarSign,
  BarChart3,
  Code,
  Zap
} from "lucide-react";

const mvpProjects = [
  {
    quote: "They turned our idea into a working MVP in just 4 weeks. The validation we got was incredible.",
    name: "Sarah Chen",
    role: "CEO, TechStart",
    industry: "FinTech",
    funding: "$2.5M",
    timeframe: "4 weeks",
    users: "10K+"
  },
  {
    quote: "Our MVP helped us secure our first round of funding. The team understood our vision perfectly.",
    name: "Mike Rodriguez",
    role: "Founder, InnovateLab",
    industry: "HealthTech",
    funding: "$5M",
    timeframe: "6 weeks",
    users: "25K+"
  },
  {
    quote: "Fast, efficient, and exactly what we needed to test our product-market fit. Highly recommended.",
    name: "Emma Johnson",
    role: "Co-founder, DataFlow",
    industry: "SaaS",
    funding: "$1.8M",
    timeframe: "3 weeks",
    users: "8K+"
  },
];

const mvpStats = [
  { label: "Average Launch Time", value: "4", suffix: " weeks" },
  { label: "Success Rate", value: "95", suffix: "%" },
  { label: "Funding Secured", value: "$50M", suffix: "+" },
  { label: "MVPs Delivered", value: "150", suffix: "+" }
];

const mvpFeatures = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Idea Validation",
    description: "Market research and competitive analysis to validate your concept",
    color: "from-yellow-500 to-orange-400"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Rapid Prototyping",
    description: "Quick development cycles with core functionality focus",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User Testing",
    description: "Real user feedback and iterative improvements",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics Setup",
    description: "Built-in analytics to measure user engagement and behavior",
    color: "from-purple-500 to-pink-400"
  }
];

const mvpProcess = [
  {
    step: 1,
    title: "Discovery",
    description: "Understanding your vision and target market",
    duration: "2-3 days",
    deliverables: ["Market Analysis", "Technical Scope", "Timeline"]
  },
  {
    step: 2,
    title: "Design & Plan",
    description: "Creating wireframes and technical architecture",
    duration: "3-5 days",
    deliverables: ["UI/UX Design", "Technical Plan", "Feature Priority"]
  },
  {
    step: 3,
    title: "Development",
    description: "Building core features with agile methodology",
    duration: "2-4 weeks",
    deliverables: ["Working MVP", "Admin Panel", "Basic Analytics"]
  },
  {
    step: 4,
    title: "Launch & Learn",
    description: "Deployment and gathering user feedback",
    duration: "1 week",
    deliverables: ["Live Product", "User Feedback", "Iteration Plan"]
  }
];

const MvpSolutions = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % mvpProjects.length);
    }, 4000);

    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mvpFeatures.length);
    }, 3000);

    const processInterval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % mvpProcess.length);
    }, 2500);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(featureInterval);
      clearInterval(processInterval);
    };
  }, []);

  return (
    <section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
      </div>
      
      <div className="p-4 mx-auto relative z-10 w-full">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          MVP Development <br />
        </div>

        <p className="mt-6 text-xl font-normal text-neutral-700 max-w-2xl text-center mx-auto leading-relaxed">
          We build MVPs that help startups validate their ideas and secure funding quickly. 
          <span className="font-semibold text-neutral-800">Transform your concept into a market-ready product in just 4 weeks.</span>
        </p>

        {/* MVP Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto px-4">
          {mvpStats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {stat.value}
                <span className="text-purple-600">{stat.suffix}</span>
              </div>
              <div className="text-base font-medium text-neutral-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* MVP Features */}
        <div className="mt-16 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-neutral-900 leading-tight">
            What Makes Our MVPs Successful
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mvpFeatures.map((feature, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeFeature === i
                    ? "bg-white shadow-2xl border-purple-300 shadow-purple-100"
                    : "bg-white/80 border-neutral-200 hover:bg-white hover:shadow-lg"
                }`}
                onMouseEnter={() => setActiveFeature(i)}
              >
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${feature.color} shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-700 text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MVP Process */}
        <div className="mt-16 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-neutral-900 leading-tight">
            Our 4-Week MVP Process
          </h2>
          
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300" />
            
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {mvpProcess.map((process, i) => (
                <div key={i} className="relative">
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-xl font-bold mx-auto mb-4 transition-all duration-500 ${
                    activeProcess === i
                      ? "bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/50"
                      : activeProcess > i
                      ? "bg-green-500 border-green-400 text-white"
                      : "bg-white border-neutral-300 text-neutral-600"
                  }`}>
                    {activeProcess > i ? <CheckCircle className="w-6 h-6" /> : process.step}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{process.title}</h3>
                    <p className="text-base text-neutral-700 mb-3 leading-relaxed">{process.description}</p>
                    <span className="text-sm text-purple-600 font-semibold block mb-3 bg-purple-50 px-3 py-1 rounded-full">{process.duration}</span>
                    <div className="text-sm text-neutral-600 space-y-1">
                      {process.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials */}
        <div className="mt-16 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-neutral-900 leading-tight">
            Success Stories
          </h2>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 md:p-12 shadow-xl border border-neutral-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 leading-relaxed mb-8 px-4">
                  &ldquo;{mvpProjects[activeTestimonial].quote}&rdquo;
                </div>
                <div className="mb-10">
                  <div className="text-2xl font-bold text-neutral-900 mb-2">
                    {mvpProjects[activeTestimonial].name}
                  </div>
                  <div className="text-lg text-neutral-700 font-semibold">
                    {mvpProjects[activeTestimonial].role}
                  </div>
                </div>
                
                {/* Project Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                  <div className="text-center p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                    <div className="text-2xl font-bold text-neutral-900 mb-2">{mvpProjects[activeTestimonial].industry}</div>
                    <div className="text-base text-neutral-700 font-semibold">Industry</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                    <div className="text-2xl font-bold text-green-700 mb-2">{mvpProjects[activeTestimonial].funding}</div>
                    <div className="text-base text-green-600 font-semibold">Funding Raised</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="text-2xl font-bold text-blue-700 mb-2">{mvpProjects[activeTestimonial].timeframe}</div>
                    <div className="text-base text-blue-600 font-semibold">Time to Market</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="text-2xl font-bold text-purple-700 mb-2">{mvpProjects[activeTestimonial].users}</div>
                    <div className="text-base text-purple-600 font-semibold">Users Acquired</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {mvpProjects.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeTestimonial ? "bg-purple-500" : "bg-neutral-300"
                  }`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
          </div>
        </div>

         {/* Call to Action */}
         <div className="text-center mt-16">
          <LoadingLink href="/book" className="group relative inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 cursor-pointer">

            <span className="relative z-10 flex items-center gap-4">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </LoadingLink>
          
          <p className="text-neutral-700 text-lg mt-6 max-w-lg mx-auto font-medium">
            Join 150+ successful startups who launched their MVP with us
          </p>
        </div>
      </div>
    </section>
  );
};

export default MvpSolutions;