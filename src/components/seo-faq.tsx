export default function SEOFAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Genuine Stack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Genuine Stack is a leading SaaS development agency specializing in custom software development, API development, MVP creation, enterprise websites, and AI automation solutions. We help businesses transform their ideas into powerful digital products."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Genuine Stack offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Genuine Stack offers comprehensive SaaS development services including custom software development, API development, MVP development, enterprise website development, AI automation solutions, and end-to-end development services."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Genuine Stack located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Genuine Stack is based in Lucknow, India, and serves clients worldwide. We provide remote development services and have experience working with companies across different time zones."
        }
      },
      {
        "@type": "Question",
        "name": "How long has Genuine Stack been in business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Genuine Stack has been delivering software solutions since 2019, with over 5 years of experience in SaaS development and AI automation. We have successfully completed 150+ projects for 50+ happy clients."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Genuine Stack use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Genuine Stack uses modern technologies including React, Next.js, Node.js, Python, PostgreSQL, AWS, Docker, Kubernetes, and AI/ML frameworks like TensorFlow and OpenAI GPT for comprehensive software development solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does Genuine Stack provide ongoing support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Genuine Stack provides 24/7 support and ongoing maintenance for all our projects. We offer comprehensive post-launch support including monitoring, updates, and feature enhancements."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }}
    />
  );
}
