"use client";

import { useState } from "react";
import PixelCard from "./PixelCard";
import Ballpit from "./Ballpit";
import BlurText from "./BlurText";

export function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("DESIGN");

  const services = [
    {
      title: "WEBSITE DEV",
      description: "help you to build website company that is modern, user friendly, good CEO, and Clean design",
      icon: "🌐",
      category: "DEVELOPMENT",
      gradient: "from-blue-600 to-purple-600",
      illustration: "💻"
    },
    {
      title: "UI/UX DESIGN",
      description: "help you to build website company that is modern, user friendly, good CEO, and Clean design",
      icon: "✏️",
      category: "DESIGN",
      gradient: "from-gray-800 to-gray-900",
      illustration: "📱"
    },
    {
      title: "BRANDING",
      description: "help you to build website company that is modern, user friendly, good CEO, and Clean design",
      icon: "🏷️",
      category: "DESIGN",
      gradient: "from-gray-800 to-gray-900",
      illustration: "🎨"
    },
    {
      title: "SHOPIFY",
      description: "help you to build website company that is modern, user friendly, good CEO, and Clean design",
      icon: "🛒",
      category: "DEVELOPMENT",
      gradient: "from-purple-600 to-blue-600",
      illustration: "🛍️"
    }
  ];

  const filters = ["DESIGN", "DEVELOPMENT", "DIGITAL MARKETING", "SEO"];

  const filteredServices = services.filter(service => 
    activeFilter === "DESIGN" ? service.category === "DESIGN" : 
    activeFilter === "DEVELOPMENT" ? service.category === "DEVELOPMENT" :
    true
  );

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto px-6 relative z-10" suppressHydrationWarning>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16" suppressHydrationWarning>
          <div className="mb-8 lg:mb-0" suppressHydrationWarning>
            <div className="flex items-baseline mb-6 ml-16" suppressHydrationWarning>
              <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white mr-4" style={{ fontFamily: "'Druk Trial', sans-serif" }} suppressHydrationWarning>
                <BlurText
                  text="OUR SERVICE"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className=""
                />
              </h2>
               <div className="w-4 h-4 bg-cyan-300 rounded-full" suppressHydrationWarning></div>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed ml-16" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
              Good design speaks. Great design flirts.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-32 ml-16 mr-16" suppressHydrationWarning>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center ${
                  activeFilter === filter
                    ? "bg-transparent border-2 border-white text-white"
                    : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50"
                }`}
                style={{ fontFamily: "'Quicksand', sans-serif" }}
                suppressHydrationWarning
              >
                {filter}
                {activeFilter === filter && (
                  <span className="ml-2 text-blue-400">→</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-16 mr-16" suppressHydrationWarning>
          {filteredServices.map((service, index) => {
            // Use PixelCard for UI/UX Design service with Ballpit
            if (service.title === "UI/UX DESIGN") {
              return (
                <PixelCard key={index} variant="blue" className="w-full h-auto">
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10" suppressHydrationWarning>
                    {/* Service Title */}
                    <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                      {service.title}
                    </h3>
                    
                    {/* Service Description */}
                    <p className="text-gray-200 leading-relaxed mb-6 text-base" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                      {service.description}
                    </p>

                    {/* Call to Action */}
                    <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300" suppressHydrationWarning>
                      Start with us
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                  
                  {/* Ballpit Background */}
                  <div className="absolute inset-0 z-0" suppressHydrationWarning>
                    <Ballpit
                      className="w-full h-full"
                    />
                  </div>
                </PixelCard>
              );
            }

            // Use PixelCard for Branding service without Ballpit
            if (service.title === "BRANDING") {
              return (
                <PixelCard key={index} variant="blue" className="w-full h-auto">
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10" suppressHydrationWarning>
                    {/* Service Title */}
                    <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                      {service.title}
                    </h3>
                    
                    {/* Service Description */}
                    <p className="text-gray-200 leading-relaxed mb-6 text-base" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                      {service.description}
                    </p>

                    {/* Call to Action */}
                    <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300" suppressHydrationWarning>
                      Start with us
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </PixelCard>
              );
            }
            
            // Use PixelCard for all other services
            return (
              <PixelCard key={index} variant="blue" className="w-full h-auto">
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10" suppressHydrationWarning>
                  {/* Service Title */}
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-200 leading-relaxed mb-6 text-base" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                    {service.description}
                  </p>

                  {/* Call to Action */}
                  <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300" suppressHydrationWarning>
                    Start with us
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </PixelCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
