"use client"

import PricingNavbar from "@/components/pricing-navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  Rocket,
  Handshake,
  Zap,
  Building2,
  Banknote,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
  Shield,
  Cloud,
  Bot,
  Code2,
  CalendarDays,
  Brain,
  Sparkles,
  CheckCircle2,
  Star,
  ExternalLink,
  Cpu,
  TrendingUp,
  PenTool,
  Terminal,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";

// ── Team data ────────────────────────────────────────────────────────────────
const team = [
  {
    name: "Hamza Parvez",
    role: "CFO & AI Automation Lead",
    bio: "Leads backend architecture and custom AI voice agent development. Transforms complex business processes into intelligent, automated systems that save time and cut cost.",
    linkedin: "https://www.linkedin.com/in/hamzaparvez-main/",
    icon: Cpu,
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
    glow: "rgba(59,130,246,0.35)",
    tag: "AI · Backend · Voice Agents",
    initials: "HP",
  },
  {
    name: "B Tharun",
    role: "Marketing & Growth Strategist",
    bio: "Drives market research, business development, and growth strategy. Specialises in off-market strategic transactions and connecting GenuineStack with enterprise partners globally.",
    linkedin: "https://www.linkedin.com/in/b-tharun-b92b57186/",
    icon: TrendingUp,
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    glow: "rgba(16,185,129,0.35)",
    tag: "Growth · Research · Strategy",
    initials: "BT",
  },
  {
    name: "Samuel Adebayo",
    role: "Content Writer & Brand Strategist",
    bio: "Shapes GenuineStack's voice and content strategy. Creates clear, compelling narratives that translate complex AI solutions into stories clients understand and trust.",
    linkedin: "https://www.linkedin.com/in/samuel-adebayo-4a9290344/",
    icon: PenTool,
    gradient: "from-purple-500 via-violet-600 to-pink-600",
    glow: "rgba(147,51,234,0.35)",
    tag: "Content · Branding · Comms",
    initials: "SA",
  },
  {
    name: "Ankit Sevak",
    role: "Backend Developer",
    bio: "Builds the server-side systems powering GenuineStack's products. Designs robust APIs, data pipelines, and integrations that keep every platform fast, stable, and scalable.",
    linkedin: "https://www.linkedin.com/in/ankitsevak/",
    icon: Terminal,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    glow: "rgba(249,115,22,0.35)",
    tag: "Backend · APIs · Integrations",
    initials: "AS",
  },
  {
    name: "Manisha Saini",
    role: "Software Developer",
    bio: "Develops full-stack features across GenuineStack's platforms. Brings precision and clean engineering to every layer of the product — from UI components to database logic.",
    linkedin: "https://www.linkedin.com/in/manisha-saini-424a97153/",
    icon: MonitorSmartphone,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    glow: "rgba(236,72,153,0.35)",
    tag: "Full-Stack · Java · Frontend",
    initials: "MS",
  },
  {
    name: "Kevin (A Rishwanth)",
    role: "AI Automation Engineer",
    bio: "Builds custom AI systems that eliminate manual work for businesses. Specialises in AI automations, agents, voice systems, and custom business dashboards that help entrepreneurs scale faster.",
    linkedin: "https://www.linkedin.com/in/kevinautomates/",
    icon: Workflow,
    gradient: "from-lime-500 via-green-500 to-emerald-600",
    glow: "rgba(132,204,22,0.35)",
    tag: "AI Agents · Automation · Systems",
    initials: "KR",
  },
];

// ── Reusable stat card ────────────────────────────────────────────────────────
const StatCard = ({
  value,
  label,
  gradient,
  shadow,
}: {
  value: string;
  label: string;
  gradient: string;
  shadow: string;
}) => (
  <div
    className={`p-6 border border-neutral-800/60 rounded-2xl bg-white/5 backdrop-blur transition hover:shadow-lg`}
    style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.02)` }}
  >
    <div
      className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b ${gradient} mb-2`}
    >
      {value}
    </div>
    <p className="text-neutral-300 text-lg">{label}</p>
  </div>
);

const About = () => {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2 mt-20 md:mt-0">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Digital acceleration company
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
          We are a dedicated team of software developers, architects, and AI specialists committed
          to transforming ideas into powerful digital solutions that scale businesses worldwide.
        </p>

        {/* ── Stats ────────────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto py-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard value="150+" label="Projects Delivered"  gradient="from-blue-400 to-blue-600"    shadow="rgba(59,130,246,0.25)" />
            <StatCard value="50+"  label="Happy Clients"       gradient="from-emerald-400 to-emerald-600" shadow="rgba(16,185,129,0.25)" />
            <StatCard value="5+"   label="Years Experience"    gradient="from-purple-400 to-purple-600" shadow="rgba(147,51,234,0.25)" />
            <StatCard value="24/7" label="Support Available"   gradient="from-orange-400 to-orange-600" shadow="rgba(249,115,22,0.25)" />
          </div>
        </div>

        {/* ── Our Story ────────────────────────────────────────────────────── */}
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
            <div className="space-y-6">
              {[
                { icon: CalendarDays, color: "blue",    year: "2019 - The Beginning",    desc: "Started with a vision to bridge the gap between cutting-edge technology and practical business solutions." },
                { icon: Brain,        color: "emerald", year: "2021 - AI Integration",   desc: "Pioneered AI-first development approaches, helping clients automate and optimize their operations." },
                { icon: Rocket,       color: "purple",  year: "2023 - Scale & Growth",   desc: "Expanded to serve enterprise clients across multiple industries, delivering complex SaaS platforms." },
                { icon: Sparkles,     color: "orange",  year: "2025 - Innovation Continues", desc: "Leading the charge in next-gen technologies while maintaining our commitment to quality and client success." },
              ].map(({ icon: Icon, color, year, desc }) => (
                <div key={year} className="flex items-start space-x-4">
                  <div className={`mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-${color}-500/20 ring-1 ring-${color}-500/40`}>
                    <Icon className={`h-3.5 w-3.5 text-${color}-400`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{year}</h4>
                    <p className="text-neutral-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <Image src="/images/startup-office.jpg" alt="Team Collaboration" width={600} height={500} className="rounded-2xl shadow-2xl" priority />
            </div>
          </div>
        </div>

        {/* ── Mission ──────────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image src="/images/tech-workspace.jpg" alt="Our Team Workspace" width={600} height={400} className="rounded-2xl shadow-2xl" priority />
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
                {[
                  { icon: Code2, color: "blue",    label: "Custom SaaS Development" },
                  { icon: Bot,   color: "emerald", label: "AI-Powered Automation"   },
                  { icon: Cloud, color: "purple",  label: "Cloud Infrastructure"    },
                ].map(({ icon: Icon, color, label }) => (
                  <div key={label} className="flex items-center space-x-3">
                    <div className={`flex h-6 w-6 items-center justify-center rounded-md bg-${color}-500/10 ring-1 ring-${color}-500/30`}>
                      <Icon className={`h-3.5 w-3.5 text-${color}-400`} />
                    </div>
                    <span className="text-neutral-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            TEAM SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto py-24 relative">

          {/* Background glow blob */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10"
              style={{ background: "radial-gradient(ellipse, #3b82f6 0%, #8b5cf6 50%, transparent 80%)", filter: "blur(80px)" }} />
          </div>

          {/* Heading */}
          <div className="text-center mb-20 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-700/60 bg-white/5 backdrop-blur mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-neutral-400 text-sm tracking-widest uppercase font-medium">The People Behind It</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                Meet the Team
              </span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              A small, focused team of specialists. Every person owns their domain completely —
              no layers, no middlemen, direct access to the people building your product.
            </p>
          </div>

          {/* Cards grid — 2×3 for 6 members */}
          <div className="grid md:grid-cols-2 gap-8 relative">
            {team.map((member, idx) => {
              const Icon = member.icon;
              return (
                <div
                  key={member.name}
                  className="group relative rounded-3xl border border-neutral-800/60 bg-neutral-950/80 backdrop-blur overflow-hidden transition-all duration-500 hover:border-neutral-600/60 hover:-translate-y-1"
                  style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.03)` }}
                >
                  {/* Top glow line */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${member.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Subtle background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top left, ${member.glow} 0%, transparent 60%)` }}
                  />

                  <div className="relative p-8">
                    {/* Top row: avatar + name */}
                    <div className="flex items-start gap-5 mb-6">

                      {/* Avatar circle with gradient ring */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-xl tracking-tight">{member.initials}</span>
                        </div>
                        {/* Small icon badge */}
                        <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5 text-neutral-300" />
                        </div>
                      </div>

                      {/* Name + role */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-xl font-bold text-white leading-tight">{member.name}</h3>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-700/60 bg-white/5 hover:bg-white/10 hover:border-neutral-500 transition-all duration-200 group/btn"
                            aria-label={`${member.name} on LinkedIn`}
                          >
                            {/* LinkedIn icon */}
                            <svg className="w-3.5 h-3.5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <ExternalLink className="w-3 h-3 text-neutral-500 group-hover/btn:text-neutral-300 transition-colors" />
                          </a>
                        </div>
                        <p className={`text-sm font-semibold mt-1 bg-clip-text text-transparent bg-gradient-to-r ${member.gradient}`}>
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Tag pill */}
                    <div className="flex items-center justify-between">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border`}
                        style={{
                          background: `${member.glow}`,
                          borderColor: `${member.glow}`,
                          color: "rgba(255,255,255,0.75)"
                        }}>
                        {member.tag}
                      </div>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-neutral-600 hover:text-neutral-300 transition-colors"
                      >
                        View Profile →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-neutral-800/60 bg-white/5 backdrop-blur">
              <div className="flex -space-x-2">
                {team.map((m) => (
                  <div key={m.name} className={`w-8 h-8 rounded-full bg-gradient-to-br ${m.gradient} ring-2 ring-black flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{m.initials[0]}</span>
                  </div>
                ))}
              </div>
              <p className="text-neutral-400 text-sm">
                A global team of <span className="text-white font-medium">6 specialists</span> across <span className="text-white font-medium">3 countries</span> — building for the world
              </p>
            </div>
          </div>
        </div>
        {/* ══ END TEAM SECTION ══ */}

        {/* ── Values ───────────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Rocket,   gradient: "from-blue-500 to-purple-600",  title: "Innovation First",   desc: "We stay at the forefront of technology, continuously learning and implementing the latest tools and methodologies." },
              { icon: Handshake,gradient: "from-emerald-500 to-blue-500", title: "Client Partnership", desc: "We work as an extension of your team, understanding your business goals and delivering solutions that exceed expectations." },
              { icon: Zap,      gradient: "from-purple-500 to-pink-500",  title: "Quality & Speed",    desc: "We deliver high-quality code fast, without compromising on security, scalability, or performance." },
            ].map(({ icon: Icon, gradient, title, desc }) => (
              <div key={title} className="text-center p-6 border border-neutral-800/60 rounded-2xl bg-white/5 backdrop-blur">
                <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-neutral-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Process ──────────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-red-400 mb-16">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "1", gradient: "from-blue-500 to-blue-600",     title: "Discovery & Planning",    desc: "We deep-dive into your business requirements, technical constraints, and success metrics to create a comprehensive roadmap." },
              { n: "2", gradient: "from-emerald-500 to-emerald-600",title: "Design & Architecture",  desc: "Our team designs scalable architecture and intuitive user experiences that align with your business goals." },
              { n: "3", gradient: "from-purple-500 to-purple-600",  title: "Agile Development",      desc: "We build in iterative sprints with regular check-ins, ensuring transparency and flexibility throughout development." },
              { n: "4", gradient: "from-orange-500 to-red-500",     title: "Launch & Support",       desc: "We handle deployment, monitoring, and provide ongoing support to ensure your application performs optimally." },
            ].map(({ n, gradient, title, desc }) => (
              <div key={n} className="text-center border border-neutral-800/60 rounded-2xl p-6 bg-white/5 backdrop-blur">
                <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{n}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-neutral-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Technologies ─────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-blue-300 mb-16">
            Technologies & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { gradient: "from-blue-500 to-purple-600",    title: "Full-Stack Development", sub: "React, Next.js, Node.js, Python, PostgreSQL",     items: ["TypeScript/JavaScript","React & Next.js","Node.js & Express","Python & Django"] },
              { gradient: "from-emerald-500 to-teal-500",   title: "Cloud & DevOps",         sub: "AWS, Docker, Kubernetes, CI/CD",                  items: ["AWS & Azure","Docker & Kubernetes","GitHub Actions","Terraform"] },
              { gradient: "from-purple-500 to-pink-500",    title: "AI & Machine Learning",  sub: "TensorFlow, OpenAI, LangChain, Automation",       items: ["OpenAI GPT Integration","LangChain & Vector DBs","TensorFlow & PyTorch","Custom AI Solutions"] },
              { gradient: "from-orange-500 to-red-500",     title: "Mobile Development",     sub: "React Native, iOS, Android, Cross-platform",      items: ["React Native","Flutter","Native iOS/Android","Progressive Web Apps"] },
            ].map(({ gradient, title, sub, items }) => (
              <div key={title} className="text-center">
                <div className={`bg-gradient-to-r ${gradient} p-6 rounded-2xl mb-4 h-32 flex flex-col justify-center`}>
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-white/80 text-sm">{sub}</p>
                </div>
                <div className="text-left space-y-1">
                  {items.map(i => <p key={i} className="text-neutral-400 text-xs">• {i}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Industry Experience ───────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-400 mb-16">
            Industry Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Banknote,    color: "blue",   hoverBorder: "blue-500",   title: "FinTech",       desc: "Payment processing, trading platforms, digital banking solutions, and regulatory compliance systems.",                                   items: ["Stripe & PayPal Integration","PCI DSS Compliance","Real-time Trading Systems"] },
              { icon: Stethoscope,color: "emerald", hoverBorder: "emerald-500",title: "HealthTech",    desc: "Electronic health records, telemedicine platforms, patient management systems, and HIPAA compliance.",                                  items: ["HIPAA Compliant Systems","Telemedicine Platforms","Patient Data Analytics"] },
              { icon: ShoppingCart,color:"purple",  hoverBorder: "purple-500", title: "E-Commerce",    desc: "Multi-vendor marketplaces, inventory management, recommendation engines, and customer analytics.",                                      items: ["Shopify & WooCommerce","Custom Marketplaces","AI Recommendations"] },
              { icon: GraduationCap,color:"orange", hoverBorder: "orange-500", title: "EdTech",        desc: "Learning management systems, online course platforms, student assessment tools, and virtual classrooms.",                               items: ["LMS Development","Interactive Learning","Progress Tracking"] },
              { icon: Building2,  color: "pink",    hoverBorder: "pink-500",   title: "SaaS Platforms",desc: "Multi-tenant architectures, subscription management, user analytics, and enterprise integrations.",                                    items: ["Multi-tenant Architecture","Subscription Billing","API Development"] },
              { icon: Rocket,     color: "cyan",    hoverBorder: "cyan-500",   title: "Startups",      desc: "MVP development, rapid prototyping, investor demos, and scalable growth solutions.",                                                   items: ["Rapid MVP Development","Investor Presentations","Growth Optimization"] },
            ].map(({ icon: Icon, color, hoverBorder, title, desc, items }) => (
              <div key={title} className={`p-6 border border-neutral-800/60 rounded-2xl hover:border-${hoverBorder} transition-colors bg-white/5 backdrop-blur`}>
                <div className={`w-12 h-12 bg-${color}-500/20 ring-1 ring-${color}-500/40 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`h-6 w-6 text-${color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-neutral-300 text-sm mb-4">{desc}</p>
                <div className="space-y-1">
                  {items.map(i => <p key={i} className="text-neutral-400 text-xs">• {i}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Testimonials ─────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-orange-400 mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "David Miller",  title: "CEO, TechCorp",        avatar: "/images/client1-avatar.jpg", quote: "They delivered our SaaS platform 2 weeks ahead of schedule. The quality exceeded our expectations and their AI integration boosted our efficiency by 40%." },
              { name: "Lisa Chen",     title: "Founder, HealthFirst",  avatar: "/images/client2-avatar.jpg", quote: "Their expertise in healthcare compliance was invaluable. They built a HIPAA-compliant platform that our patients love using." },
              { name: "Mark Johnson",  title: "CTO, EduLearn",         avatar: "/images/client3-avatar.jpg", quote: "From MVP to enterprise scale in 8 months. Their development process is incredibly efficient and their support is outstanding." },
            ].map(({ name, title, avatar, quote }) => (
              <div key={name} className="p-6 border border-neutral-800/60 rounded-2xl bg-neutral-900/50 backdrop-blur">
                <div className="flex items-center mb-4">
                  <Image src={avatar} alt={name} width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">{name}</h4>
                    <p className="text-neutral-400 text-sm">{title}</p>
                  </div>
                </div>
                <p className="text-neutral-300 text-sm mb-4">&ldquo;{quote}&rdquo;</p>
                <div className="flex text-yellow-400 text-sm gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why Choose Us ────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-blue-400 mb-16">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { color: "blue",   title: "Proven Track Record",       desc: "150+ successful projects across multiple industries with a 98% client satisfaction rate." },
              { color: "emerald",title: "AI-First Approach",         desc: "We integrate cutting-edge AI technologies to give your business a competitive advantage." },
              { color: "purple", title: "Transparent Communication", desc: "Regular updates, clear timelines, and direct access to your development team." },
              { color: "orange", title: "Scalable Solutions",        desc: "Built to grow with your business, from startup MVP to enterprise-scale applications." },
              { color: "pink",   title: "Post-Launch Support",       desc: "Comprehensive maintenance, monitoring, and feature updates to ensure long-term success." },
              { color: "cyan",   title: "Security First",            desc: "Enterprise-grade security practices, compliance standards, and data protection protocols." },
            ].map(({ color, title, desc }, i) => (
              <div key={title} className="flex items-start space-x-4">
                <div className={`w-8 h-8 bg-${color}-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-neutral-300">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Partnerships ─────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-purple-400 mb-16">
            Partnerships & Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {[
              { gradient: "from-blue-500 to-blue-600",     abbr: "AWS",  name: "AWS Partner",       sub: "Certified Solutions Architect", hoverColor: "blue-500"   },
              { gradient: "from-emerald-500 to-emerald-600",abbr: "MSFT",name: "Microsoft Partner", sub: "Azure Certified Developer",    hoverColor: "emerald-500"},
              { gradient: "from-purple-500 to-purple-600", abbr: "SOC",  name: "SOC 2 Compliant",   sub: "Type II Certified",            hoverColor: "purple-500" },
              { gradient: "from-orange-500 to-orange-600", abbr: "ISO",  name: "ISO 27001",         sub: "Information Security",         hoverColor: "orange-500" },
            ].map(({ gradient, abbr, name, sub, hoverColor }) => (
              <div key={abbr} className={`text-center p-6 border border-neutral-800 rounded-2xl hover:border-${hoverColor} transition-colors`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-sm">{abbr}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{name}</h3>
                <p className="text-neutral-400 text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Culture ──────────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-400 mb-6">
                Our Culture
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                We believe that great software comes from great teams. Our culture emphasizes continuous learning,
                innovation, and work-life balance. We&apos;re not just colleagues – we&apos;re a community of passionate
                technologists who love what we do.
              </p>
              <div className="space-y-4">
                {[
                  "Remote-first with flexible working hours",
                  "Continuous learning and skill development budget",
                  "Innovation time for personal projects",
                  "Diverse, global team across 12 countries",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                      <Sparkles className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image src="/images/cumpany-culture.jpg" alt="Team Culture" width={600} height={400} className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Let&apos;s discuss your project and see how we can help bring your vision to life with cutting-edge technology and expert development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Get In Touch
            </a>
            <a href="/book" className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-8 font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-700">
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
