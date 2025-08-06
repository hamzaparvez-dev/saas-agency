"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { EvervaultCardSnippet } from "./snippets/evervault-card-snippet";
import { 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Database,
  Server,
  Activity
} from "lucide-react";

const apiFeatures = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "RESTful APIs",
    description: "Standards-compliant REST endpoints with comprehensive documentation",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "GraphQL",
    description: "Flexible query language for efficient data fetching",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Microservices",
    description: "Scalable architecture with independent service deployment",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security First",
    description: "OAuth 2.0, JWT tokens, and enterprise-grade encryption",
    color: "from-orange-500 to-red-400"
  }
];

const apiStats = [
  { label: "API Response Time", value: "<50", suffix: "ms" },
  { label: "Uptime Guarantee", value: "99.9", suffix: "%" },
  { label: "Requests/Second", value: "10K+", suffix: "" },
  { label: "Global Endpoints", value: "15", suffix: "+" }
];

const codeExamples = [
  {
    language: "REST",
    endpoint: "GET /api/v1/users",
    code: `{
  "users": [
    {
      "id": "123",
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "total": 1,
  "page": 1
}`,
    description: "Fetch users with pagination"
  },
  {
    language: "GraphQL",
    endpoint: "POST /graphql",
    code: `query GetUser($id: ID!) {
  user(id: $id) {
    name
    email
    posts {
      title
      createdAt
    }
  }
}`,
    description: "Query specific user data efficiently"
  },
  {
    language: "Webhook",
    endpoint: "POST /webhooks/payment",
    code: `{
  "event": "payment.completed",
  "data": {
    "amount": 99.99,
    "currency": "USD",
    "status": "success"
  }
}`,
    description: "Real-time event notifications"
  }
];

const ApiDevelopment = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeCode, setActiveCode] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % apiFeatures.length);
    }, 3000);

    const codeInterval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setActiveCode((prev) => (prev + 1) % codeExamples.length);
        setIsTyping(false);
      }, 300);
    }, 4000);

    return () => {
      clearInterval(featureInterval);
      clearInterval(codeInterval);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent pointer-events-none" />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          API Development <br />
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
          Robust and secure APIs that power your applications. RESTful services, GraphQL endpoints, and microservices architecture.
        </p>

        {/* API Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {apiStats.map((stat, i) => (
          <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
                <span className="text-purple-400">{stat.suffix}</span>
              </div>
              <div className="text-sm text-neutral-400 mt-1">{stat.label}</div>
          </motion.div>
          ))}
        </div>

        {/* API Features */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-white mb-12">
            Enterprise-Grade API Solutions
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {apiFeatures.map((feature, i) => (
          <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-xl border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeFeature === i
                    ? "bg-slate-800/80 border-purple-500/50 shadow-lg shadow-purple-500/20"
                    : "bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50"
                }`}
                onMouseEnter={() => setActiveFeature(i)}
              >
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${feature.color}`}>
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-neutral-400 mb-3">{feature.description}</p>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Code Examples */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-white mb-12">
            API Examples in Action
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Code Display */}
            <div className="bg-slate-900/80 rounded-xl border border-slate-700/50 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-neutral-400">
                  {codeExamples[activeCode].language} - {codeExamples[activeCode].endpoint}
                </div>
              </div>
              <div className="p-6">
                <motion.pre
                  key={activeCode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isTyping ? 0.5 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-green-400 font-mono overflow-x-auto"
                >
                  <code>{codeExamples[activeCode].code}</code>
                </motion.pre>
                <p className="text-neutral-400 text-sm mt-4">
                  {codeExamples[activeCode].description}
                </p>
              </div>
            </div>

            {/* API Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                <Activity className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Real-time Monitoring</h4>
                  <p className="text-neutral-400 text-sm">Track API performance, errors, and usage patterns with detailed analytics.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                <Database className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Auto-scaling Infrastructure</h4>
                  <p className="text-neutral-400 text-sm">Automatically scale based on demand with load balancing and caching.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                <Globe className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Global CDN</h4>
                  <p className="text-neutral-400 text-sm">Deliver APIs from 15+ global locations for optimal performance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                <Shield className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Enterprise Security</h4>
                  <p className="text-neutral-400 text-sm">Rate limiting, authentication, and comprehensive audit logs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/services/api-development"
              className="group relative inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore API Page
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApiDevelopment;