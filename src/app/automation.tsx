import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import { Bot, Zap, Clock, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import LoadingLink from "@/components/loading-link";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const automationFeatures = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Smart Data Processing",
    description: "Automatically extract, analyze, and organize data from multiple sources",
    metric: "95% accuracy",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Workflow Optimization",
    description: "Intelligent task routing and priority management across teams",
    metric: "3x faster",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Operations",
    description: "Continuous monitoring and automated responses to system events",
    metric: "Zero downtime",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Predictive Analytics",
    description: "Forecast trends and automate decision-making processes",
    metric: "85% prediction rate",
    color: "from-orange-500 to-red-400"
  }
];

const automationStats = [
  { label: "Hours Saved Weekly", value: "40+", suffix: "hrs" },
  { label: "Efficiency Increase", value: "300", suffix: "%" },
  { label: "Error Reduction", value: "95", suffix: "%" },
  { label: "Cost Savings", value: "60", suffix: "%" }
];

const workflowSteps = [
  { step: 1, title: "Data Input", description: "AI captures and validates incoming data", active: false },
  { step: 2, title: "Processing", description: "Intelligent analysis and categorization", active: false },
  { step: 3, title: "Decision", description: "Automated routing based on AI insights", active: false },
  { step: 4, title: "Action", description: "Execute tasks and notify stakeholders", active: false }
];

const Automation = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [workflowStep, setWorkflowStep] = useState(0);

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % automationFeatures.length);
    }, 3000);

    const workflowInterval = setInterval(() => {
      setWorkflowStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2000);

    return () => {
      clearInterval(featureInterval);
      clearInterval(workflowInterval);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none" />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          AI-Powered <br /> Automation
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
          Streamline your workflows and boost productivity with intelligent automation solutions powered by cutting-edge AI technology.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {automationStats.map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
                <span className="text-purple-400">{stat.suffix}</span>
              </div>
              <div className="text-sm text-neutral-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Automation Features */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-white mb-12">
            Intelligent Automation in Action
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationFeatures.map((feature, i) => (
              <div
                key={i}
                className={cn(
                  "p-6 rounded-xl border transition-all duration-500 cursor-pointer transform hover:scale-105",
                  activeFeature === i
                    ? "bg-slate-800/80 border-purple-500/50 shadow-lg shadow-purple-500/20"
                    : "bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50"
                )}
                onMouseEnter={() => setActiveFeature(i)}
              >
                <div className={cn(
                  "w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r",
                  feature.color
                )}>
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-neutral-400 mb-3">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-purple-400">{feature.metric}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Visualization */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-white mb-12">
            Automated Workflow Process
          </h3>
          
          <div className="relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-500/40 to-purple-500/20" />
            
            <div className="grid md:grid-cols-4 gap-6">
              {workflowSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className={cn(
                    "w-16 h-16 rounded-full border-2 flex items-center justify-center text-xl font-bold mx-auto mb-4 transition-all duration-500",
                    workflowStep === i
                      ? "bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/50"
                      : workflowStep > i
                      ? "bg-green-500 border-green-400 text-white"
                      : "bg-slate-800 border-slate-600 text-neutral-400"
                  )}>
                    {workflowStep > i ? <CheckCircle className="w-6 h-6" /> : step.step}
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-neutral-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Demo Button */}
        <div className="text-center">
          <LoadingLink href="/services/ai-automation" className="group relative inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
            See AI Automation in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </LoadingLink>
        </div>
      </div>
    </div>
  );
};

export default Automation;