"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { Particles } from "./ui/Particles";

const projects = [
  {
    id: 1,
    company: "AI Bot",
    title: "Intelligent chatbot with natural language processing",
    description: "AI-powered customer support automation",
    mockup: "https://res.cloudinary.com/dave3np5n/image/upload/v1762159865/aiauto_jpgtxz.png",
  },
  {
    id: 2,
    company: "Cloth Shopping App",
    title: "Mobile e-commerce platform for fashion retail",
    description: "Seamless shopping experience with AR try-on",
    mockup: "https://res.cloudinary.com/dave3np5n/image/upload/v1762159865/app_wihn3b.png",
  },
  {
    id: 3,
    company: "Backend System",
    title: "Scalable backend infrastructure and API development",
    description: "High-performance server architecture",
    mockup: "https://res.cloudinary.com/dave3np5n/image/upload/v1762159865/back_ofilyq.png",
  },
  {
    id: 4,
    company: "Efficiency Management",
    title: "Productivity tracking and workflow optimization app",
    description: "Streamline team collaboration and task management",
    mockup: "https://res.cloudinary.com/dave3np5n/image/upload/v1762159869/phone_owpsv6.png",
  },
  {
    id: 5,
    company: "Tracker Application",
    title: "Real-time tracking and analytics dashboard",
    description: "Monitor metrics and performance insights",
    mockup: "https://res.cloudinary.com/dave3np5n/image/upload/v1762159870/tablet_xzwodn.png",
  },
  {
    id: 6,
    company: "Hospital Report Website",
    title: "Medical records and patient management portal",
    description: "Secure healthcare data management system",
    mockup: "https://res.cloudinary.com/dave3np5n/image/upload/v1762159870/website_iuxlsp.png",
  },
];

export function PortfolioSection() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    // Show left arrow if not at start
    setShowLeftArrow(scrollLeft > 10);
    
    // Show right arrow if not at end
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-12 bg-black relative overflow-hidden" suppressHydrationWarning>
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-baseline mb-4 sm:mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mr-2 sm:mr-4" style={{ fontFamily: "'Druk Trial', sans-serif" }}>
              <BlurText text="OUR WORK" delay={200} animateBy="words" direction="top" />
            </h2>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-300 rounded-full" />
          </div>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Real projects. Real results. Real impact.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Left Fade - only show when scrolled */}
          {showLeftArrow && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" 
            />
          )}
          
          {/* Right Fade - only show when more content exists */}
          {showRightArrow && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" 
            />
          )}
          
          {/* Left Arrow */}
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={scrollLeft}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-[#0A0A0A] rounded-full flex items-center justify-center hover:bg-[#1a1a1a] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 5L7 10L12 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          )}
          
          {/* Right Arrow */}
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={scrollRight}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-[#0A0A0A] rounded-full flex items-center justify-center hover:bg-[#1a1a1a] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 5L13 10L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px]"
              >
                <div className="bg-[#121212] rounded-lg overflow-hidden hover:bg-[#1a1a1a] transition-colors duration-300 border" style={{ borderColor: '#27272A' }}>
                  {/* Header */}
                  <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                    <div className="mb-3 sm:mb-4">
                      <span className="text-white font-semibold text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.company}
                      </span>
                    </div>
                    
                    <h4 className="text-white text-sm sm:text-base font-normal leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {project.title}
                    </h4>
                  </div>

                  {/* Mockup */}
                  <div className="relative h-56 sm:h-64 md:h-72 flex items-end justify-center px-4 sm:px-6 pb-4 sm:pb-6">
                    <img
                      src={project.mockup}
                      alt={project.company}
                      className="h-full w-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
