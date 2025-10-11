"use client";

import { useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Nisant Mohta",
    role: "Founder",
    company: "Finlytics",
    avatar: "/images/client1-avatar.jpg",
    quote:
      "Genuine Stack felt like an extension of our team. We launched our MVP in 3 weeks and closed two enterprise pilots the same month.",
  },
  {
    name: "Emily Rogers",
    role: "CFO",
    company: "CareBridge Health",
    avatar: "/images/client2-avatar.jpg",
    quote:
      "They translated a messy idea into a reliable product our clinicians love using. Communication was crisp and deadlines were respected.",
  },
  {
    name: "Frank Lagendijk",
    role: "Product Lead",
    company: "ShipRight",
    avatar: "/images/client3-avatar.jpg",
    quote:
      "From architecture to tiny UI details, they cared about outcomes—not just output. Performance improved and support tickets dropped.",
  },
  {
    name: "Ravi Ganesh",
    role: "CTO",
    company: "Strand Life Sciences",
    avatar: "/images/strand-life-science.png",
    quote:
      "Their API work and dev tooling made our pipelines faster and safer. Solid engineering partner you can trust.",
  },
  {
    name: "Sushant Singh",
    role: "Founder",
    company: "Silk Design System",
    avatar: "/images/sushant.png",
    quote:
      "Attention to detail is top‑notch. Design system integration was smooth and the dev handoff was flawless.",
  },
  {
    name: "Ravi V.",
    role: "Head of Engineering",
    company: "Polpharma",
    avatar: "/images/polpharma-api.jpeg",
    quote:
      "They modernized our services without downtime. Documentation and knowledge transfer were excellent.",
  },
  {
    name: "Ganesh R.",
    role: "Operations Director",
    company: "Strand Life Sciences",
    avatar: "/images/strand-life-science.png",
    quote:
      "Reliable team that ships on schedule. Monitoring and observability they set up saved us countless hours.",
  },
  {
    name: "Nick F.",
    role: "CEO",
    company: "Genuine Stack Client",
    avatar: "/images/Nick-flamboyant-alpha-1.png",
    quote:
      "They focus on business impact. Clear roadmap, pragmatic decisions, and fast iterations made all the difference.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  // Show 3 items per view (desktop-first). Grid handles stacking on small screens.
  const itemsPerView = 3;

  const visible = useMemo(() => {
    const end = Math.min(index + itemsPerView, TESTIMONIALS.length);
    return TESTIMONIALS.slice(index, end);
  }, [index]);

  const canPrev = index > 0;
  const canNext = index < TESTIMONIALS.length - itemsPerView;

  const prev = () => canPrev && setIndex((i) => Math.max(0, i - itemsPerView));
  const next = () =>
    canNext &&
    setIndex((i) => Math.min(TESTIMONIALS.length - itemsPerView, i + itemsPerView));

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What our clients say</h2>
        <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          Real words from founders and operators who trusted us to build, ship, and scale their products.
        </p>
      </div>

      <div className="relative">
        <button
          aria-label="Previous"
          onClick={prev}
          disabled={!canPrev}
          className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 p-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-white disabled:opacity-40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="grid gap-6 md:grid-cols-3">
          {visible.map((t) => (
            <div key={t.name} className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
              <div className="flex items-center gap-4">
                <Image src={t.avatar} alt={`${t.name} avatar`} width={48} height={48} className="h-12 w-12 rounded-full object-cover border border-neutral-700" />
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-neutral-400 text-sm">{t.role}, {t.company}</p>
                </div>
              </div>
              <p className="text-neutral-300 mt-4 leading-relaxed">“{t.quote}”</p>
            </div>
          ))}
        </div>

        <button
          aria-label="Next"
          onClick={next}
          disabled={!canNext}
          className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 p-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-white disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: Math.ceil(TESTIMONIALS.length / itemsPerView) }).map(
          (_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === Math.floor(index / itemsPerView) ? "bg-white" : "bg-neutral-600"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
}


