import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Our AI customer service automation transformed our support operations completely. We now handle 80% of tickets automatically, dropping response time from 24 hours to under 2 minutes while maintaining 95% customer satisfaction.",
      name: "Michael Rodriguez",
      designation: "Head of Support at CloudNine",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The intelligent lead scoring system revolutionized our sales process. Automated follow-ups and personalized outreach boosted our conversion rates by 340% - it's like having 50 dedicated sales reps working 24/7.",
      name: "Emily Watson",
      designation: "VP Sales at GrowthHack Pro",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their AI-powered inventory system predicts demand with remarkable 94% accuracy and handles reordering automatically. We've reduced holding costs by 35% while completely eliminating stockouts - our supply chain has never been more efficient.",
      name: "James Kim",
      designation: "Operations Director at RetailFlow",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The AI content generation platform has been a game-changer for our marketing team. It freed up 25 hours weekly by creating personalized posts and automated responses, resulting in a 280% increase in social media engagement.",
      name: "Lisa Thompson",
      designation: "Marketing Director at SocialBoost",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their real-time AI fraud detection system transformed our security operations. It reduced false positives by 60% while maintaining a 99.8% fraud detection rate, ultimately saving us over $2M in our first year of implementation.",
      name: "David Park",
      designation: "Security Lead at SecurePay",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The intelligent document processing AI revolutionized our entire legal workflow. Contract analysis that previously took our lawyers 3 days now completes in just 30 minutes with 95% accuracy - we can handle 10x more cases efficiently.",
      name: "Rachel Green",
      designation: "Partner at LegalTech Partners",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their AI recruitment automation streamlined our entire hiring process. Resume screening and interview scheduling happen automatically, reducing our time-to-hire from 45 days to just 12 days while improving candidate quality by 40%.",
      name: "Alex Johnson",
      designation: "Head of Talent at TalentFlow",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
