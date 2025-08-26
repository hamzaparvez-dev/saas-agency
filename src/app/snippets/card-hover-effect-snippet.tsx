import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Monitor, Headphones, Lock, Megaphone, Store, Smartphone } from "lucide-react";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><Monitor className="w-8 h-8 text-blue-600" /></div>,
        title: "Software Development",
        description:
          "Custom software solutions built with modern technologies. From web applications to complex systems, we deliver scalable and maintainable code.",
        link: "/services/software-development"
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><Lock className="w-8 h-8 text-blue-600" /></div>,
        title: "API Development",
        description:
          "Robust and secure APIs for your applications. RESTful services, GraphQL endpoints, and microservices architecture.",
        link: "/services/api-development"
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><Store className="w-8 h-8 text-blue-600" /></div>,
        title: "End-to-End Development",
        description:
          "Complete product development from concept to deployment. Full-stack solutions with frontend, backend, and database design.",
        link: "/services/end-to-end-development"
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><Smartphone className="w-8 h-8 text-blue-600" /></div>,
        title: "MVP Development",
        description:
          "Rapid prototyping and MVP development to validate your ideas quickly. Get to market fast with core features that matter.",
        link: "/services/mvp-development"
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><Megaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "Enterprise Websites",
        description:
          "High-performance enterprise websites with advanced functionality, CMS integration, and enterprise-grade security.",
        link: "/services/enterprise-websites"
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><Headphones className="w-8 h-8 text-blue-600" /></div>,
        title: "AI Automation",
        description:
          "Intelligent automation solutions powered by AI. Streamline workflows, automate processes, and integrate AI capabilities into your software.",
        link: "/services/ai-automation"
      },
];