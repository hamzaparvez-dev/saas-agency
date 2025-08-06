"use client";

import { notFound } from "next/navigation";
import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import LoadingLink from "@/components/loading-link";
import Image from "next/image";
import { ArrowLeft, Calendar, Users, Clock, ExternalLink, CheckCircle, TrendingUp, Award, Globe } from "lucide-react";

// Project data with detailed case study information
const projectsData = {
  "silk-design-system": {
    title: "50% Efficiency Gains with Silk Design System",
    subtitle: "DESIGN SYSTEMS",
    description: "Accelerating mobile UI design with a reusable, customizable design system and developer-friendly documentation",
    image: "/images/saas-dashboard.jpg",
    tags: ["React", "Node.js", "Figma", "TypeScript"],
    category: "DESIGN SYSTEMS",
    duration: "6 months",
    team: "8 people",
    year: "2024",
    services: ["UX Design", "Web Development", "Design Systems"],

    // Case study sections
    projectBackground: "Our client needed a comprehensive design system to accelerate their mobile UI development process. With multiple teams working on different features, they faced inconsistencies in design implementation and slow development cycles. The challenge was to create a unified design language that could scale across multiple platforms while maintaining design consistency and developer efficiency.",

    customerChallenges: [
      "Inconsistent UI components across different product areas",
      "Slow development cycles due to recreating common UI elements",
      "Lack of design-development collaboration tools",
      "Difficulty maintaining brand consistency at scale",
      "High maintenance cost for UI components"
    ],

    businessChallenges: [
      "Time-to-market delays affecting competitive advantage",
      "Increased development costs due to component duplication",
      "Brand inconsistency impacting user experience",
      "Scalability issues as the product team grew",
      "Resource allocation inefficiencies"
    ],

    solution: "We developed Silk Design System - a comprehensive, reusable component library with developer-friendly documentation. The system included over 50 pre-built components, design tokens for consistent styling, and automated testing suites. We implemented a token-based architecture that allowed for easy theming and customization while maintaining consistency across all touchpoints.",

    technologicalStack: [
      "React 18 with TypeScript for component development",
      "Figma for design system documentation and handoff",
      "Storybook for component showcase and testing",
      "CSS-in-JS with Styled Components for styling",
      "Jest and React Testing Library for automated testing",
      "Chromatic for visual regression testing",
      "npm registry for component distribution"
    ],

    results: [
      {
        metric: "50%",
        description: "Reduction in UI development time"
      },
      {
        metric: "80%",
        description: "Fewer design inconsistency issues"
      },
      {
        metric: "35%",
        description: "Faster time-to-market for new features"
      },
      {
        metric: "90%",
        description: "Developer satisfaction score"
      }
    ],

    testimonial: {
      quote: "The Silk Design System transformed how our teams work together. We've seen remarkable improvements in both speed and quality of our product development.",
      author: "Sarah Johnson",
      position: "Head of Product Design",
      company: "TechFlow Solutions"
    }
  },

  "polpharma-api-website": {
    title: "Scalability with Webflow: Designing and Developing Polpharma API Website",
    subtitle: "WEBFLOW",
    description: "Creating a user-friendly digital experience to support lead generation in the B2B pharmaceutical sector",
    image: "/images/api-development.webp",
    tags: ["Webflow", "JavaScript", "API Integration", "B2B"],
    category: "WEBFLOW",
    duration: "4 months",
    team: "5 people",
    year: "2024",
    services: ["UX Design", "Web Development", "Webflow Development"],

    projectBackground: "Polpharma API, a European CDMO partner and API manufacturer since 1951, needed to redesign and develop their API division's website to optimize lead generation while creating a modern and user-friendly experience. The existing website was outdated, difficult to navigate, and not effectively converting visitors into qualified leads in the competitive B2B pharmaceutical sector.",

    customerChallenges: [
      "Outdated website design that didn't reflect company expertise",
      "Poor user experience leading to high bounce rates",
      "Ineffective lead generation and conversion processes",
      "Lack of mobile responsiveness for on-the-go professionals",
      "Difficulty showcasing complex pharmaceutical processes clearly"
    ],

    businessChallenges: [
      "Low conversion rates from website visitors to qualified leads",
      "Competitive disadvantage in digital presence",
      "Inefficient sales funnel and lead qualification process",
      "Brand perception issues due to outdated web presence",
      "Limited ability to track and optimize marketing efforts"
    ],

    solution: "We partnered with Polpharma to redesign and develop their API division's website using Webflow. Our solution focused on creating an intuitive user experience that guides visitors through their pharmaceutical manufacturing capabilities while implementing advanced lead generation mechanisms. We created clear information architecture, compelling visual storytelling, and streamlined contact processes.",

    technologicalStack: [
      "Webflow CMS for content management and hosting",
      "Custom JavaScript for interactive elements",
      "API integrations for lead management",
      "Responsive design for all device types",
      "SEO optimization for pharmaceutical industry keywords",
      "Analytics integration for performance tracking",
      "Form automation for lead qualification"
    ],

    results: [
      {
        metric: "65%",
        description: "Increase in qualified lead generation"
      },
      {
        metric: "40%",
        description: "Reduction in bounce rate"
      },
      {
        metric: "3x",
        description: "Improvement in mobile user engagement"
      },
      {
        metric: "85%",
        description: "Faster page load times"
      }
    ],

    testimonial: {
      quote: "Our new website perfectly represents our pharmaceutical expertise and has significantly improved our lead generation capabilities in the competitive CDMO market.",
      author: "Dr. Michael Kowalski",
      position: "Business Development Director",
      company: "Polpharma API"
    }
  },

  "ai-sales-advisor": {
    title: "AI-Powered Sales Advisor for Ecommerce",
    subtitle: "AI DEVELOPMENT",
    description: "Creating an AI-driven sales advisor for personalized, multilingual, and omnichannel shopping experiences",
    image: "/images/mvp-team.jpg",
    tags: ["Next.js", "OpenAI", "Machine Learning", "E-commerce"],
    category: "AI DEVELOPMENT",
    duration: "8 months",
    team: "12 people",
    year: "2024",
    services: ["AI Development", "Machine Learning", "E-commerce Integration"],

    projectBackground: "AI-driven personalization is key to next-generation retail services. Our client needed a virtual sales advisor that could provide personalized shopping experiences across multiple channels and languages. The challenge was to create an AI system that could understand customer preferences, provide relevant recommendations, and seamlessly integrate with existing e-commerce platforms.",

    customerChallenges: [
      "Generic product recommendations lacking personalization",
      "Language barriers affecting international customer experience",
      "Inconsistent shopping experience across different channels",
      "Difficulty in understanding complex customer preferences",
      "High cart abandonment rates due to decision paralysis"
    ],

    businessChallenges: [
      "Low conversion rates from browsing to purchase",
      "High customer acquisition costs with poor retention",
      "Inability to scale personalization across global markets",
      "Competitive pressure from AI-powered competitors",
      "Resource intensive manual customer support requirements"
    ],

    solution: "We developed an AI-powered sales advisor that acts as an online shopper's new best friend. The system uses advanced machine learning algorithms to understand customer behavior, preferences, and shopping patterns. It provides personalized product recommendations, answers questions in multiple languages, and creates seamless omnichannel experiences that guide customers from discovery to purchase.",

    technologicalStack: [
      "Next.js 14 for the frontend application",
      "OpenAI GPT-4 for natural language processing",
      "TensorFlow for recommendation algorithms",
      "Python FastAPI for backend services",
      "Redis for real-time data caching",
      "PostgreSQL for customer data storage",
      "Stripe for payment processing integration",
      "AWS for scalable cloud infrastructure"
    ],

    results: [
      {
        metric: "45%",
        description: "Increase in conversion rates"
      },
      {
        metric: "60%",
        description: "Reduction in cart abandonment"
      },
      {
        metric: "35%",
        description: "Higher average order value"
      },
      {
        metric: "25+",
        description: "Languages supported"
      }
    ],

    testimonial: {
      quote: "The AI sales advisor has revolutionized our customer experience. We're seeing unprecedented engagement and conversion rates across all our markets.",
      author: "Emma Rodriguez",
      position: "Head of Digital Experience",
      company: "GlobalShop Retail"
    }
  },

  "healthcare-mvp-platform": {
    title: "HealthTech MVP: Telemedicine Revolution",
    subtitle: "MVP DEVELOPMENT",
    description: "Rapid MVP development for telehealth startup, from concept to launch with 10,000+ active users",
    image: "/images/ai-automation.webp",
    tags: ["React", "WebRTC", "HIPAA", "Real-time"],
    category: "MVP DEVELOPMENT",
    duration: "6 weeks",
    team: "6 people",
    year: "2024",
    services: ["MVP Development", "Healthcare Technology", "Rapid Prototyping"],

    projectBackground: "A healthcare startup needed to rapidly bring their telemedicine platform to market to capitalize on the growing demand for remote healthcare services. The challenge was to develop a HIPAA-compliant, secure, and user-friendly platform that could handle video consultations, patient records, and appointment scheduling within a tight 6-week deadline.",

    customerChallenges: [
      "Need for rapid market entry in competitive telehealth space",
      "Complex HIPAA compliance requirements",
      "Integration with existing healthcare systems",
      "Ensuring high-quality video calls for medical consultations",
      "User experience design for both patients and healthcare providers"
    ],

    businessChallenges: [
      "Limited funding requiring efficient resource utilization",
      "Competitive market with established players",
      "Regulatory compliance complexities",
      "Need to validate product-market fit quickly",
      "Scaling challenges for growing user base"
    ],

    solution: "We developed a comprehensive telemedicine platform MVP that included secure video consultations, patient management systems, appointment scheduling, and integrated payment processing. The platform was built with HIPAA compliance from the ground up, featuring end-to-end encryption, secure data storage, and audit trails for all medical interactions.",

    technologicalStack: [
      "React 18 for responsive web application",
      "WebRTC for real-time video communications",
      "Node.js with Express for backend API",
      "MongoDB for secure patient data storage",
      "Socket.io for real-time notifications",
      "Stripe for HIPAA-compliant payment processing",
      "AWS with HIPAA BAA for cloud infrastructure",
      "Twilio for SMS notifications and communication"
    ],

    results: [
      {
        metric: "10,000+",
        description: "Active users within 3 months"
      },
      {
        metric: "95%",
        description: "Video call success rate"
      },
      {
        metric: "4.8/5",
        description: "Average user satisfaction rating"
      },
      {
        metric: "100%",
        description: "HIPAA compliance score"
      }
    ],

    testimonial: {
      quote: "They delivered our telemedicine platform in just 6 weeks without compromising on quality or compliance. The MVP exceeded our expectations and helped us secure Series A funding.",
      author: "Dr. Lisa Chen",
      position: "Co-founder & CEO",
      company: "MedConnect Solutions"
    }
  },

  "enterprise-automation-suite": {
    title: "Enterprise Automation: 80% Efficiency Boost",
    subtitle: "ENTERPRISE SOFTWARE",
    description: "Intelligent document processing and workflow automation system for Fortune 500 company",
    image: "/images/startup-office.jpg",
    tags: ["Python", "AI", "Microservices", "Docker"],
    category: "ENTERPRISE SOFTWARE",
    duration: "12 months",
    team: "15 people",
    year: "2023",
    services: ["Enterprise Software", "Process Automation", "AI Integration"],

    projectBackground: "A Fortune 500 manufacturing company was struggling with manual document processing workflows that were consuming significant resources and creating bottlenecks in their operations. They needed an intelligent automation system that could process thousands of documents daily, extract relevant information, and integrate with their existing enterprise systems.",

    customerChallenges: [
      "Manual processing of 10,000+ documents daily",
      "High error rates in data extraction and entry",
      "Slow approval workflows causing operational delays",
      "Inconsistent document formats and quality",
      "Limited visibility into process bottlenecks"
    ],

    businessChallenges: [
      "High operational costs due to manual processing",
      "Compliance risks from human errors",
      "Scalability limitations affecting business growth",
      "Employee satisfaction issues with repetitive tasks",
      "Competitive disadvantage due to slow processes"
    ],

    solution: "We developed a comprehensive enterprise automation suite that combines AI-powered document processing with intelligent workflow management. The system automatically extracts data from various document types, validates information against business rules, routes documents through approval workflows, and integrates seamlessly with existing ERP and CRM systems.",

    technologicalStack: [
      "Python with FastAPI for microservices architecture",
      "TensorFlow and OpenCV for document analysis",
      "Apache Kafka for real-time data streaming",
      "PostgreSQL for transactional data storage",
      "Redis for caching and session management",
      "Docker and Kubernetes for containerization",
      "Elasticsearch for document search and analytics",
      "Azure Cloud for scalable infrastructure"
    ],

    results: [
      {
        metric: "80%",
        description: "Reduction in manual processing time"
      },
      {
        metric: "95%",
        description: "Accuracy in data extraction"
      },
      {
        metric: "$2.5M",
        description: "Annual cost savings achieved"
      },
      {
        metric: "99.9%",
        description: "System uptime and reliability"
      }
    ],

    testimonial: {
      quote: "This automation suite has transformed our operations. We've eliminated bottlenecks, reduced errors, and freed up our team to focus on strategic initiatives rather than manual processing.",
      author: "Robert Martinez",
      position: "VP of Operations",
      company: "Global Manufacturing Corp"
    }
  },

  "fintech-trading-app": {
    title: "High-Performance Trading Platform",
    subtitle: "FINTECH",
    description: "Real-time trading application processing 100M+ transactions daily with advanced analytics",
    image: "/images/mobile-dev.jpg",
    tags: ["React Native", "WebSocket", "Blockchain", "Analytics"],
    category: "FINTECH",
    duration: "10 months",
    team: "20 people",
    year: "2023",
    services: ["Fintech Development", "Mobile Apps", "Real-time Systems"],

    projectBackground: "A fintech startup needed a high-performance trading platform that could handle millions of transactions daily while providing real-time market data, advanced charting, and seamless user experience. The platform needed to support multiple asset classes including stocks, crypto, and derivatives with institutional-grade reliability and security.",

    customerChallenges: [
      "Real-time data processing for millions of transactions",
      "Low-latency requirements for competitive trading",
      "Complex financial calculations and risk management",
      "Multi-platform deployment (iOS, Android, Web)",
      "Integration with multiple market data providers"
    ],

    businessChallenges: [
      "Regulatory compliance across multiple jurisdictions",
      "High availability requirements (99.99% uptime)",
      "Scalability to handle market volatility spikes",
      "Security concerns with financial data and transactions",
      "Competitive pressure in crowded fintech market"
    ],

    solution: "We built a comprehensive trading platform with real-time market data processing, advanced charting capabilities, and institutional-grade security. The system features low-latency order execution, sophisticated risk management tools, and seamless integration with major exchanges and liquidity providers. The platform supports both retail and institutional traders with customizable interfaces and advanced analytics.",

    technologicalStack: [
      "React Native for cross-platform mobile development",
      "WebSocket for real-time market data streaming",
      "Node.js with clustering for high-performance backend",
      "Redis for ultra-fast data caching",
      "PostgreSQL with read replicas for data persistence",
      "Blockchain integration for cryptocurrency trading",
      "TradingView charts for advanced technical analysis",
      "AWS with multi-region deployment for reliability"
    ],

    results: [
      {
        metric: "100M+",
        description: "Daily transactions processed"
      },
      {
        metric: "<50ms",
        description: "Average order execution latency"
      },
      {
        metric: "99.99%",
        description: "Platform uptime achieved"
      },
      {
        metric: "500K+",
        description: "Active users on the platform"
      }
    ],

    testimonial: {
      quote: "Our trading platform has become the go-to choice for serious traders. The performance, reliability, and feature set are unmatched in the industry.",
      author: "David Kim",
      position: "Chief Technology Officer",
      company: "TradeTech Solutions"
    }
  },

  "ecommerce-marketplace": {
    title: "Multi-Vendor E-commerce Marketplace Revolution",
    subtitle: "E-COMMERCE PLATFORM",
    description: "Comprehensive marketplace platform connecting thousands of vendors with millions of customers worldwide",
    image: "/images/ecom-project.png",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    category: "E-COMMERCE PLATFORM",
    duration: "14 months",
    team: "25 people",
    year: "2024",
    services: ["E-commerce Development", "Marketplace Platform", "Payment Integration"],

    projectBackground: "Our client envisioned creating the next-generation multi-vendor marketplace that could compete with industry giants while providing superior user experience and vendor tools. The challenge was building a scalable platform that could handle thousands of concurrent vendors, millions of products, and complex logistics while maintaining performance and reliability.",

    customerChallenges: [
      "Managing thousands of vendors with different requirements and workflows",
      "Complex inventory management across multiple suppliers",
      "Payment processing and settlement for multiple parties",
      "Search and discovery optimization for millions of products",
      "Mobile-first user experience expectations"
    ],

    businessChallenges: [
      "Competing with established marketplace giants",
      "Building trust with both vendors and customers",
      "Scaling infrastructure for explosive growth",
      "Complex revenue models and commission structures",
      "International expansion and multi-currency support"
    ],

    solution: "We developed a comprehensive multi-vendor marketplace platform with advanced vendor management tools, intelligent product discovery, seamless payment processing, and robust analytics. The platform features automated vendor onboarding, dynamic pricing tools, integrated shipping solutions, and a mobile-first design that delivers exceptional user experiences across all devices.",

    technologicalStack: [
      "React 18 with Next.js for high-performance frontend",
      "Node.js with Express for scalable backend API",
      "PostgreSQL with read replicas for data management",
      "Redis for caching and session management",
      "Elasticsearch for product search and filtering",
      "Stripe Connect for multi-party payments",
      "AWS S3 for product image storage",
      "Docker and Kubernetes for containerized deployment"
    ],

    results: [
      {
        metric: "5,000+",
        description: "Active vendors on the platform"
      },
      {
        metric: "2M+",
        description: "Products listed and managed"
      },
      {
        metric: "$50M+",
        description: "Annual GMV processed"
      },
      {
        metric: "98.5%",
        description: "Platform uptime achieved"
      }
    ],

    testimonial: {
      quote: "This marketplace platform has exceeded all our expectations. The vendor tools are intuitive, the customer experience is seamless, and the scalability has supported our rapid growth.",
      author: "Maria Gonzalez",
      position: "Chief Product Officer",
      company: "MarketHub Global"
    }
  },

  "life-sciences-manufacturing": {
    title: "Digital Transformation in Life Sciences Manufacturing",
    subtitle: "MANUFACTURING SYSTEMS",
    description: "Advanced manufacturing execution system for pharmaceutical and life sciences companies",
    image: "/images/strand-life-science(manufacturing-site).png",
    tags: ["Python", "IoT", "Machine Learning", "Compliance"],
    category: "MANUFACTURING SYSTEMS",
    duration: "18 months",
    team: "18 people",
    year: "2023",
    services: ["Manufacturing Systems", "IoT Integration", "Compliance Automation"],

    projectBackground: "A leading life sciences manufacturer needed to modernize their production facilities to meet increasing regulatory requirements while improving operational efficiency. The existing manual processes were error-prone, time-consuming, and couldn't provide the real-time visibility required for FDA compliance and quality assurance.",

    customerChallenges: [
      "Manual quality control processes leading to delays",
      "Lack of real-time production visibility and monitoring",
      "Complex regulatory compliance requirements (FDA, GMP)",
      "Equipment downtime affecting production schedules",
      "Data silos preventing comprehensive analysis"
    ],

    businessChallenges: [
      "Regulatory compliance costs and audit preparation time",
      "Production inefficiencies affecting profitability",
      "Quality issues risking product recalls",
      "Competitive pressure for faster time-to-market",
      "Sustainability requirements and waste reduction goals"
    ],

    solution: "We implemented a comprehensive Manufacturing Execution System (MES) with IoT integration, real-time monitoring, and automated compliance reporting. The system connects all production equipment, provides real-time dashboards, automates quality control processes, and generates regulatory reports automatically while ensuring full traceability throughout the manufacturing process.",

    technologicalStack: [
      "Python with Django for core MES application",
      "IoT sensors and edge computing for real-time data collection",
      "Machine Learning algorithms for predictive maintenance",
      "PostgreSQL for production data and audit trails",
      "InfluxDB for time-series sensor data",
      "Apache Kafka for real-time data streaming",
      "Grafana for operational dashboards and visualization",
      "Docker containers with Azure Cloud deployment"
    ],

    results: [
      {
        metric: "40%",
        description: "Reduction in quality control time"
      },
      {
        metric: "99.8%",
        description: "Regulatory compliance score"
      },
      {
        metric: "25%",
        description: "Decrease in equipment downtime"
      },
      {
        metric: "60%",
        description: "Faster audit preparation"
      }
    ],

    testimonial: {
      quote: "The MES implementation has transformed our manufacturing operations. We now have complete visibility, automated compliance, and significantly improved efficiency across all our production lines.",
      author: "Dr. James Patterson",
      position: "VP of Manufacturing Operations",
      company: "Strand Life Sciences"
    }
  },

  "mobile-banking-app": {
    title: "Next-Generation Mobile Banking Experience",
    subtitle: "MOBILE BANKING",
    description: "Comprehensive mobile banking solution with AI-powered financial insights and seamless UX",
    image: "/images/mobile-banking app.webp",
    tags: ["React Native", "Blockchain", "AI", "Security"],
    category: "MOBILE BANKING",
    duration: "12 months",
    team: "16 people",
    year: "2024",
    services: ["Mobile App Development", "Financial Technology", "AI Integration"],

    projectBackground: "A forward-thinking regional bank wanted to revolutionize their digital presence with a mobile-first banking experience that could compete with fintech startups while maintaining enterprise-grade security and regulatory compliance. The goal was to create an intuitive, AI-powered app that would increase customer engagement and reduce branch visits.",

    customerChallenges: [
      "Complex banking processes translated to mobile interfaces",
      "Security concerns with mobile financial transactions",
      "Need for personalized financial insights and recommendations",
      "Integration with legacy banking systems",
      "Supporting multiple banking products and services"
    ],

    businessChallenges: [
      "Competition from fintech startups and digital banks",
      "Regulatory compliance in mobile banking environment",
      "Customer acquisition and retention in digital channels",
      "Reducing operational costs while improving service",
      "Maintaining security while providing convenient access"
    ],

    solution: "We developed a comprehensive mobile banking application with AI-powered financial insights, biometric authentication, real-time transaction monitoring, and seamless integration with all banking services. The app features smart budgeting tools, investment recommendations, bill pay automation, and a conversational AI assistant for customer support.",

    technologicalStack: [
      "React Native for cross-platform mobile development",
      "Blockchain technology for secure transaction verification",
      "AI and Machine Learning for financial insights",
      "Biometric authentication (Face ID, Touch ID)",
      "End-to-end encryption for data security",
      "RESTful APIs for core banking system integration",
      "Firebase for real-time notifications",
      "AWS with financial services compliance"
    ],

    results: [
      {
        metric: "85%",
        description: "Increase in mobile banking adoption"
      },
      {
        metric: "60%",
        description: "Reduction in branch visits"
      },
      {
        metric: "4.9/5",
        description: "App store rating achieved"
      },
      {
        metric: "99.99%",
        description: "Transaction success rate"
      }
    ],

    testimonial: {
      quote: "Our mobile banking app has become our customers' preferred way to bank. The AI insights and seamless experience have significantly improved customer satisfaction and engagement.",
      author: "Sarah Williams",
      position: "Chief Digital Officer",
      company: "Community First Bank"
    }
  },

  "kyc-compliance-solution": {
    title: "AI-Powered KYC & Compliance Automation",
    subtitle: "COMPLIANCE TECH",
    description: "Intelligent identity verification and compliance monitoring system for financial institutions",
    image: "/images/kyc-solution.webp",
    tags: ["AI", "Computer Vision", "Blockchain", "Compliance"],
    category: "COMPLIANCE TECH",
    duration: "10 months",
    team: "14 people",
    year: "2024",
    services: ["Compliance Technology", "AI Development", "Identity Verification"],

    projectBackground: "Financial institutions face increasing regulatory pressure for Know Your Customer (KYC) compliance while customers demand faster onboarding processes. Our client needed an intelligent system that could automate identity verification, reduce manual review time, and maintain the highest standards of compliance across multiple jurisdictions.",

    customerChallenges: [
      "Manual KYC processes causing customer onboarding delays",
      "High false positive rates in fraud detection",
      "Complex document verification across multiple countries",
      "Ongoing monitoring and compliance reporting requirements",
      "Integration with existing compliance and banking systems"
    ],

    businessChallenges: [
      "Regulatory fines and penalties for compliance failures",
      "Customer abandonment during lengthy onboarding processes",
      "High operational costs for manual compliance reviews",
      "Scalability challenges with growing customer base",
      "Keeping up with evolving regulatory requirements"
    ],

    solution: "We developed an AI-powered KYC and compliance platform that combines computer vision for document verification, machine learning for risk assessment, and blockchain for secure audit trails. The system automates identity verification, performs real-time risk scoring, monitors ongoing transactions, and generates comprehensive compliance reports while maintaining full regulatory compliance.",

    technologicalStack: [
      "Computer Vision AI for document analysis and verification",
      "Machine Learning models for risk assessment and fraud detection",
      "Blockchain for immutable audit trails and data integrity",
      "Natural Language Processing for document interpretation",
      "Python with TensorFlow for AI model development",
      "REST APIs for third-party data source integration",
      "PostgreSQL for compliance data storage",
      "AWS with financial services security compliance"
    ],

    results: [
      {
        metric: "90%",
        description: "Reduction in manual review time"
      },
      {
        metric: "95%",
        description: "Accuracy in identity verification"
      },
      {
        metric: "75%",
        description: "Faster customer onboarding"
      },
      {
        metric: "100%",
        description: "Regulatory compliance maintained"
      }
    ],

    testimonial: {
      quote: "The AI-powered KYC solution has transformed our compliance operations. We've dramatically reduced onboarding time while maintaining the highest standards of regulatory compliance.",
      author: "Michael Zhang",
      position: "Chief Compliance Officer",
      company: "SecureBank International"
    }
  },

  "business-management-platform": {
    title: "Unified Business Management Platform",
    subtitle: "BUSINESS PLATFORM",
    description: "All-in-one business management solution integrating CRM, ERP, and analytics for SMEs",
    image: "/images/unified-business-management-platform.webp",
    tags: ["Vue.js", "Laravel", "MySQL", "Analytics"],
    category: "BUSINESS PLATFORM",
    duration: "16 months",
    team: "22 people",
    year: "2023",
    services: ["Business Software", "CRM Development", "ERP Integration"],

    projectBackground: "Small and medium enterprises (SMEs) struggle with managing multiple disconnected systems for different business functions. Our client wanted to create a unified platform that would integrate CRM, ERP, project management, and analytics into a single, affordable solution specifically designed for growing businesses.",

    customerChallenges: [
      "Managing multiple disconnected business systems",
      "Lack of integrated data and business insights",
      "Complex workflows requiring manual coordination",
      "Difficulty tracking customer interactions and sales pipeline",
      "Limited reporting and analytics capabilities"
    ],

    businessChallenges: [
      "High costs of multiple software subscriptions",
      "Inefficient operations due to system fragmentation",
      "Difficulty scaling operations with disconnected tools",
      "Limited visibility into overall business performance",
      "Training complexity with multiple different systems"
    ],

    solution: "We developed a comprehensive business management platform that unifies CRM, ERP, project management, and analytics into a single, intuitive interface. The platform provides automated workflows, real-time reporting, integrated communication tools, and customizable dashboards that give business owners complete visibility and control over their operations.",

    technologicalStack: [
      "Vue.js 3 with Composition API for responsive frontend",
      "Laravel 10 with PHP 8 for robust backend development",
      "MySQL with optimized indexing for data management",
      "Redis for caching and session management",
      "Chart.js and D3.js for advanced analytics visualization",
      "WebSocket for real-time notifications and updates",
      "Elasticsearch for advanced search capabilities",
      "AWS with auto-scaling for reliable cloud deployment"
    ],

    results: [
      {
        metric: "65%",
        description: "Reduction in administrative overhead"
      },
      {
        metric: "40%",
        description: "Improvement in sales pipeline visibility"
      },
      {
        metric: "80%",
        description: "Faster report generation"
      },
      {
        metric: "92%",
        description: "User satisfaction rating"
      }
    ],

    testimonial: {
      quote: "This unified platform has revolutionized how we manage our business. Everything is connected, automated, and we finally have the insights we need to make data-driven decisions.",
      author: "Jennifer Adams",
      position: "CEO",
      company: "GrowthTech Solutions"
    }
  },

  "custom-erp-solution": {
    title: "Custom ERP Solution for Manufacturing Giant",
    subtitle: "CUSTOM ERP",
    description: "Tailored enterprise resource planning system optimizing operations for global manufacturer",
    image: "/images/custom-2.jpeg",
    tags: ["Java", "Spring Boot", "Oracle", "Microservices"],
    category: "CUSTOM ERP",
    duration: "24 months",
    team: "30 people",
    year: "2022",
    services: ["Custom ERP", "Enterprise Software", "System Integration"],

    projectBackground: "A global manufacturing corporation with operations in 15 countries needed a custom ERP solution to replace their aging systems and unify operations across all locations. The challenge was creating a flexible, scalable system that could handle complex manufacturing processes, multi-currency operations, and regulatory requirements across different countries.",

    customerChallenges: [
      "Legacy systems causing operational inefficiencies",
      "Lack of real-time visibility across global operations",
      "Complex supply chain management across multiple countries",
      "Inconsistent processes and data across different locations",
      "Difficulty in financial consolidation and reporting"
    ],

    businessChallenges: [
      "High maintenance costs of legacy systems",
      "Competitive pressure requiring operational efficiency",
      "Regulatory compliance across multiple jurisdictions",
      "Scalability limitations affecting business growth",
      "Risk of system failures impacting global operations"
    ],

    solution: "We developed a comprehensive custom ERP solution with modular architecture that could be configured for different business units and countries. The system includes advanced manufacturing execution, supply chain optimization, financial management, human resources, and business intelligence modules, all integrated into a unified platform with role-based access and multi-language support.",

    technologicalStack: [
      "Java 17 with Spring Boot for enterprise-grade backend",
      "Angular 15 for modern, responsive user interfaces",
      "Oracle Database with RAC for high availability",
      "Apache Kafka for real-time data streaming",
      "Microservices architecture with Docker containers",
      "Kubernetes for orchestration and scaling",
      "Redis for distributed caching and session management",
      "Jenkins for continuous integration and deployment"
    ],

    results: [
      {
        metric: "50%",
        description: "Reduction in operational costs"
      },
      {
        metric: "99.9%",
        description: "System availability achieved"
      },
      {
        metric: "70%",
        description: "Faster financial reporting"
      },
      {
        metric: "35%",
        description: "Improvement in supply chain efficiency"
      }
    ],

    testimonial: {
      quote: "Our custom ERP system has unified our global operations like never before. We now have real-time visibility, streamlined processes, and the flexibility to adapt to changing business needs.",
      author: "Thomas Mueller",
      position: "Chief Information Officer",
      company: "Global Manufacturing Industries"
    }
  }
};

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = projectsData[params.slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* Back Navigation */}
        <div className="max-w-7xl mx-auto mb-8">
          <LoadingLink
            href="/portfolio"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </LoadingLink>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                {project.subtitle}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Year: {project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Duration: {project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Team: {project.team}</span>
                </div>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span key={index} className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm text-neutral-300">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-600/10 border border-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Navigation */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">IN THIS CASE STUDY</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#project-background" className="text-neutral-300 hover:text-blue-400 transition-colors">Project background</a>
              <a href="#customer-challenges" className="text-neutral-300 hover:text-blue-400 transition-colors">Customer challenges</a>
              <a href="#business-challenges" className="text-neutral-300 hover:text-blue-400 transition-colors">Business challenges</a>
              <a href="#solution" className="text-neutral-300 hover:text-blue-400 transition-colors">Solution</a>
              <a href="#technological-stack" className="text-neutral-300 hover:text-blue-400 transition-colors">Technological stack</a>
              <a href="#results" className="text-neutral-300 hover:text-blue-400 transition-colors">Results</a>
            </div>
          </div>
        </div>

        {/* Project Background */}
        <section id="project-background" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Project background</h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            {project.projectBackground}
          </p>
        </section>

        {/* Customer Challenges */}
        <section id="customer-challenges" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Customer challenges</h2>
          <div className="space-y-4">
            {project.customerChallenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-neutral-900/30 border border-neutral-800/50 rounded-lg">
                <div className="w-6 h-6 bg-red-500/20 border border-red-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-neutral-300">{challenge}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Challenges */}
        <section id="business-challenges" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Business challenges</h2>
          <div className="space-y-4">
            {project.businessChallenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-neutral-900/30 border border-neutral-800/50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500/20 border border-orange-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-3 h-3 text-orange-500" />
                </div>
                <p className="text-neutral-300">{challenge}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Solution</h2>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
            <p className="text-lg text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Technological Stack */}
        <section id="technological-stack" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Technological stack</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.technologicalStack.map((tech, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-neutral-900/30 border border-neutral-800/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-300">{tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section id="results" className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-b from-neutral-900/50 to-neutral-900/30 border border-neutral-800 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                  {result.metric}
                </div>
                <p className="text-neutral-300 leading-relaxed">{result.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-blue-500/5 to-purple-600/5 border border-blue-500/20 rounded-2xl p-8 text-center">
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-neutral-200 mb-6 leading-relaxed italic">
              {`&ldquo;${project.testimonial.quote}&rdquo;`}
            </blockquote>
            <div className="text-neutral-400">
              <p className="font-semibold text-white">{project.testimonial.author}</p>
              <p>{project.testimonial.position}</p>
              <p>{project.testimonial.company}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Let&apos;s discuss how we can help transform your business with custom software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LoadingLink
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-8 font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-700"
            >
              Start Your Project
            </LoadingLink>
            <LoadingLink
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-700 px-8 font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              View More Projects
            </LoadingLink>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}