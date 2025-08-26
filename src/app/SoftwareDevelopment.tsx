'use client'

import React, { useState, useEffect } from 'react'
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  Zap, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Globe,
  Layers,
  GitBranch,
  Cpu,
  Monitor,
  Server
} from 'lucide-react'
import LoadingLink from '@/components/loading-link'

const developmentServices = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Web Development",
    description: "Modern web applications built with React, Next.js, and cutting-edge frameworks",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-400",
    projects: "150+"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    color: "from-green-500 to-emerald-400",
    projects: "80+"
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend Development",
    description: "Scalable server-side solutions with robust architecture",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    color: "from-purple-500 to-pink-400",
    projects: "200+"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Cloud-native applications and infrastructure on AWS, Azure, GCP",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    color: "from-orange-500 to-red-400",
    projects: "120+"
  }
]

const developmentStats = [
  { label: "Projects Delivered", value: "500", suffix: "+" },
  { label: "Code Quality Score", value: "98", suffix: "%" },
  { label: "Client Satisfaction", value: "99", suffix: "%" },
  { label: "Deployment Success", value: "100", suffix: "%" }
]

const developmentProcess = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "Requirements analysis and technical architecture design",
    icon: <Layers className="w-6 h-6" />,
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "Development & Testing",
    description: "Agile development with continuous testing and integration",
    icon: <Code2 className="w-6 h-6" />,
    duration: "4-12 weeks"
  },
  {
    step: 3,
    title: "Quality Assurance",
    description: "Comprehensive testing, security audits, and performance optimization",
    icon: <Shield className="w-6 h-6" />,
    duration: "1-2 weeks"
  },
  {
    step: 4,
    title: "Deployment & Support",
    description: "Production deployment with ongoing maintenance and support",
    icon: <Zap className="w-6 h-6" />,
    duration: "Ongoing"
  }
]

const techStack = [
  { category: "Frontend", technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"] },
  { category: "Backend", technologies: ["Node.js", "Python", "Java", "Go", ".NET"] },
  { category: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB"] },
  { category: "Cloud", technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] },
  { category: "Mobile", technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"] },
  { category: "DevOps", technologies: ["CI/CD", "Jenkins", "GitHub Actions", "Terraform", "Ansible"] }
]

const SoftwareDevelopment = () => {
  const [activeService, setActiveService] = useState(0)
  const [activeProcess, setActiveProcess] = useState(0)
  const [activeTech, setActiveTech] = useState(0)

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % developmentServices.length)
    }, 3000)

    const processInterval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % developmentProcess.length)
    }, 2500)

    const techInterval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % techStack.length)
    }, 2000)

    return () => {
      clearInterval(serviceInterval)
      clearInterval(processInterval)
      clearInterval(techInterval)
    }
  }, [])

    return (   
    <div className="text-white relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent pointer-events-none" />
      
 <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
              Software Development <br /> that scales
      </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
      Building robust, scalable software solutions with modern technologies and best practices.
        </p>
        </div>

      {/* Development Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto px-4">
        {developmentStats.map((stat, i) => (
          <div key={i} className="text-center p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-colors">
            <div className="text-2xl md:text-3xl font-bold text-white">
              {stat.value}
              <span className="text-purple-400">{stat.suffix}</span>
            </div>
            <div className="text-sm text-neutral-400 mt-1">{stat.label}</div>
        </div>
        ))}
            </div>

      {/* Development Services */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Full-Stack Development Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {developmentServices.map((service, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                activeService === i
                  ? "bg-slate-800/80 border-purple-500/50 shadow-lg shadow-purple-500/20"
                  : "bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50"
              }`}
              onMouseEnter={() => setActiveService(i)}
            >
              <div className={`w-16 h-16 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${service.color}`}>
                {service.icon}
        </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-400 text-sm mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-neutral-300">
                    {tech}
                  </span>
                ))}
            </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-purple-400">{service.projects} projects</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
    </div>
            </div>
          ))}
        </div>

        {/* Development Process */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Our Development Process
        </h2>
        
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Connection line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-500/40 to-purple-500/20" />
          
          <div className="grid md:grid-cols-4 gap-6">
            {developmentProcess.map((process, i) => (
              <div key={i} className="relative text-center">
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
                  activeProcess === i
                    ? "bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/50"
                    : activeProcess > i
                    ? "bg-green-500 border-green-400 text-white"
                    : "bg-slate-800 border-slate-600 text-neutral-400"
                }`}>
                  {activeProcess > i ? <CheckCircle className="w-6 h-6" /> : process.icon}
            </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-sm text-neutral-400 mb-2">{process.description}</p>
                <span className="text-xs text-purple-400 font-medium">{process.duration}</span>
        </div>
            ))}
            </div>
        </div>

        {/* Technology Stack */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
          Our Technology Stack
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techStack.map((stack, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border transition-all duration-500 ${
                activeTech === i
                  ? "bg-slate-800/80 border-green-500/50 shadow-lg shadow-green-500/20"
                  : "bg-slate-800/30 border-slate-700/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold">{stack.category}</h3>
    </div>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-neutral-300 hover:bg-slate-600/50 transition-colors">
                    {tech}
                  </span>
                ))}
        </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <GitBranch className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Version Control</h3>
            <p className="text-neutral-400">Git-based workflows with automated CI/CD pipelines for seamless deployment.</p>
            </div>
          
          <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <Shield className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security First</h3>
            <p className="text-neutral-400">Built-in security measures, code audits, and compliance with industry standards.</p>
        </div>
          
          <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <Globe className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Scale</h3>
            <p className="text-neutral-400">Applications designed to handle millions of users with global distribution.</p>
            </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <LoadingLink href="/book" className="group relative inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </LoadingLink>
        </div>
    </div>
    </div>
  )
}
 
export default SoftwareDevelopment