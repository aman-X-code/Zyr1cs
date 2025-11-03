"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlurText from "./BlurText";
import { Particles } from "./ui/Particles";

const faqs = [
  {
    question: "How long does it take to develop a website?",
    answer: "Website development timelines vary: Simple websites (5-10 pages) take 2-3 weeks, business websites with CMS take 4-6 weeks, and complex web applications take 8-12 weeks. We follow agile methodology with weekly updates and can expedite delivery if needed."
  },
  {
    question: "Do you provide support after project completion?",
    answer: "Yes! We provide 3 months of free support and maintenance after launch. This includes bug fixes, minor updates, and technical assistance. We also offer extended support plans with 24/7 monitoring, regular updates, and priority support."
  },
  {
    question: "Which technologies do you use for web development?",
    answer: "We specialize in modern tech stacks: React, Next.js, TypeScript for frontend; Node.js, Python for backend; PostgreSQL, MongoDB for databases; AWS, Azure, GCP for cloud hosting. We choose the best technology based on your project requirements."
  },
  {
    question: "Can you help with AI automation for my business?",
    answer: "Absolutely! We implement AI solutions using GPT, Claude, and Gemini for chatbots, content generation, data analysis, and workflow automation. We can integrate AI into your existing systems or build custom AI-powered applications from scratch."
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer: "We work with both! We're a startup tech partner offering flexible pricing, MVP development, and scalable solutions. We've helped 100+ startups launch their products and also serve enterprise clients with complex requirements."
  },
  {
    question: "What is your development process?",
    answer: "We follow a 5-step process: 1) Discovery & Planning (requirements gathering), 2) Design & Prototyping (UI/UX mockups), 3) Development (agile sprints), 4) Testing & QA (comprehensive testing), 5) Launch & Support (deployment and maintenance)."
  },
  {
    question: "Can you develop both iOS and Android apps?",
    answer: "Yes! We build cross-platform apps using React Native and Flutter, which work on both iOS and Android with a single codebase. This reduces development time by 40% and costs by 30% compared to native development."
  },
  {
    question: "Do you offer cloud migration services?",
    answer: "Yes, we provide complete cloud migration services from on-premise to AWS, Azure, or GCP. We handle infrastructure setup, data migration, security configuration, CI/CD pipelines, and ongoing DevOps support with 99.9% uptime guarantee."
  },
  {
    question: "What makes Zyr1cs different from other agencies?",
    answer: "We combine technical expertise with business understanding. Our team has experience with 100+ projects, we use cutting-edge technologies, offer transparent pricing, provide regular updates, and deliver on time. Plus, we offer 3 months free support after launch."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured data for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-12 bg-black relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-baseline mb-4 sm:mb-6">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mr-2 sm:mr-4"
              style={{ fontFamily: "'Druk Trial', sans-serif" }}
            >
              <BlurText
                text="FAQ"
                delay={200}
                animateBy="words"
                direction="top"
              />
            </h2>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-300 rounded-full flex items-center justify-center">
              <span className="text-black font-black text-xs sm:text-sm" style={{ fontFamily: "'Druk Trial', sans-serif" }}>?</span>
            </div>
          </div>
          <p
            className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Common questions about our services, pricing, and process
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-400/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <h3
                  className="text-base sm:text-lg font-semibold text-white pr-4"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p
                        className="text-gray-300 leading-relaxed text-sm sm:text-base"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
