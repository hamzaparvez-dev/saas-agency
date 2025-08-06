import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  companyLogo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Atlassian understood our needs and their developers were passionate, skilled and conscientious about the work and project goals. That's a level of involvement I haven't seen before – total partner engagement!",
    author: "Ruairí Doyle",
    position: "Former Head of Product",
    company: "Apps for Good"
  },
  {
    id: 2,
    content: "Atlassian has been the best agency we've worked with so far. Your team understands Keller and is able to design new skills, features, and interactions within our model, with a great focus on speed to market.",
    author: "Adi Pavlovic",
    position: "Director of Innovation",
    company: "Keller Williams"
  },
  {
    id: 3,
    content: "I've had a long-lasting partnership with Atlassian. Happy that it works so well and hopeful that we can cooperate on more projects in the future. Atlassian always tries to make things possible.",
    author: "Susanne Wechsler",
    position: "Director B2B",
    company: "Babbel"
  },
  {
    id: 4,
    content: "Working with Shopify has transformed our entire development process. Their expertise in SaaS architecture and user experience design helped us reduce our time-to-market by 40% while maintaining exceptional quality standards.",
    author: "Michael Chen",
    position: "CTO",
    company: "TechFlow Solutions"
  },
  {
    id: 5,
    content: "Salesforce delivered beyond our expectations. Their team's deep understanding of enterprise software development and agile methodologies resulted in a platform that scales beautifully with our growing user base.",
    author: "Sarah Williams",
    position: "VP of Engineering",
    company: "DataVision Corp"
  },
  {
    id: 6,
    content: "The partnership with HubSpot has been incredible. They took our complex requirements and turned them into an intuitive, powerful SaaS solution that our customers absolutely love. The attention to detail is unmatched.",
    author: "James Rodriguez",
    position: "Product Director",
    company: "CloudStream Analytics"
  },
  {
    id: 7,
    content: "Twilio's development team exceeded every milestone on time and within budget. Their proactive communication and technical expertise made our AI-powered platform launch seamless and successful.",
    author: "Emily Foster",
    position: "Chief Innovation Officer",
    company: "SmartBot Technologies"
  },
  {
    id: 8,
    content: "Stripe has been instrumental in our digital transformation. Their full-stack capabilities and modern development practices helped us build a robust fintech platform that handles millions of transactions daily.",
    author: "David Park",
    position: "Head of Technology",
    company: "FinanceFlow Systems"
  },
  {
    id: 9,
    content: "The collaboration with Zendesk was outstanding. They understood our customer service challenges and built a comprehensive solution that reduced our response time by 60% and improved customer satisfaction dramatically.",
    author: "Lisa Thompson",
    position: "Operations Manager",
    company: "ServicePro Solutions"
  },
  {
    id: 10,
    content: "Adobe's creative approach to problem-solving impressed us from day one. They transformed our outdated systems into a modern, scalable SaaS platform that our team and clients find intuitive and powerful.",
    author: "Robert Kim",
    position: "Chief Technology Officer",
    company: "DesignHub Interactive"
  },
  {
    id: 11,
    content: "Slack's development methodology and collaborative approach made the entire project enjoyable. They delivered a communication platform that increased our team productivity by 45% and improved cross-department collaboration.",
    author: "Maria Gonzalez",
    position: "Director of Operations",
    company: "TeamSync Solutions"
  },
  {
    id: 12,
    content: "Working with Asana was a game-changer for our project management capabilities. Their team built us a comprehensive solution that streamlined our workflows and gave us real-time visibility into all our projects.",
    author: "Andrew Walsh",
    position: "Project Management Director",
    company: "WorkFlow Dynamics"
  },
  {
    id: 13,
    content: "DocuSign's expertise in document management and digital signatures helped us create a solution that eliminated 80% of our paper-based processes. The ROI was immediate and substantial.",
    author: "Jennifer Lee",
    position: "Head of Digital Operations",
    company: "ContractFlow Systems"
  },
  {
    id: 14,
    content: "The team at Tableau understood our data visualization needs perfectly. They built us a business intelligence platform that turns complex data into actionable insights, driving better decision-making across our organization.",
    author: "Mark Johnson",
    position: "Chief Data Officer",
    company: "Analytics Pro Solutions"
  },
  {
    id: 15,
    content: "Zoom's technical expertise and attention to user experience resulted in a video conferencing solution that's both powerful and incredibly user-friendly. Our client adoption rates increased by 200%.",
    author: "Rachel Davis",
    position: "VP of Product Development",
    company: "ConnectPro Technologies"
  },
  {
    id: 16,
    content: "Dropbox delivered exceptional cloud storage and collaboration features that transformed how our distributed teams work together. The seamless integration with our existing tools was remarkable.",
    author: "Thomas Anderson",
    position: "IT Director",
    company: "CloudWork Solutions"
  },
  {
    id: 17,
    content: "Microsoft's comprehensive approach to our enterprise needs resulted in a unified platform that handles everything from communication to project management. The scalability and security features are outstanding.",
    author: "Sandra Mitchell",
    position: "Chief Information Officer",
    company: "Enterprise Dynamics"
  },
  {
    id: 18,
    content: "Google's innovation in search and AI capabilities helped us build a knowledge management system that revolutionized how our team accesses and shares information. The impact on productivity has been remarkable.",
    author: "Kevin O'Brien",
    position: "Head of Knowledge Systems",
    company: "InfoHub Technologies"
  },
  {
    id: 19,
    content: "Working with Trello on our project management overhaul was fantastic. Their visual approach to task management and team collaboration created a solution that everyone on our team actually enjoys using.",
    author: "Amanda Clark",
    position: "Director of Team Operations",
    company: "ProjectFlow Systems"
  },
  {
    id: 20,
    content: "Box's expertise in secure file sharing and collaboration tools helped us build a solution that meets our strict compliance requirements while being incredibly user-friendly. The security features give us complete peace of mind.",
    author: "Daniel Rodriguez",
    position: "Chief Security Officer",
    company: "SecureShare Solutions"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = (): void => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = (): void => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = (): void => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by leading companies worldwide to deliver exceptional SaaS solutions
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={resumeAutoPlay}
        >
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-8 py-12 md:px-12 md:py-16"
                >
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Quote Icon */}
                    <svg
                      className="mx-auto h-12 w-12 text-indigo-500 mb-6"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>

                    {/* Testimonial Content */}
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-8">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-xl font-bold">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <cite className="not-italic">
                        <div className="text-lg font-semibold text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-base text-gray-600">
                          {testimonial.position}
                        </div>
                        <div className="text-base font-medium text-indigo-600">
                          {testimonial.company}
                        </div>
                      </cite>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors duration-200" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors duration-200" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-indigo-600 scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;