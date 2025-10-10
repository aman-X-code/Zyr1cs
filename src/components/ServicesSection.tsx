"use client";

import PixelCard from "./PixelCard";
import Ballpit from "./Ballpit";
import BlurText from "./BlurText";

export function ServicesSection() {

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10" suppressHydrationWarning>
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16" suppressHydrationWarning>
          <div className="flex items-baseline mb-4 sm:mb-6" suppressHydrationWarning>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mr-2 sm:mr-4" style={{ fontFamily: "'Druk Trial', sans-serif" }} suppressHydrationWarning>
              <BlurText
                text="OUR SERVICE"
                delay={200}
                animateBy="words"
                direction="top"
                className=""
              />
            </h2>
             <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-300 rounded-full" suppressHydrationWarning></div>
          </div>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
            Good design speaks. Great design flirts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center" suppressHydrationWarning>
          {/* Web Development */}
          <PixelCard variant="blue" className="w-full max-w-[340px] h-auto min-h-[280px] sm:min-h-[300px]">
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between z-10" suppressHydrationWarning>
              {/* Service Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                WEB DEVELOPMENT
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-200 leading-relaxed mb-6 text-sm md:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                Complete websites and web applications. From design to deployment, we create modern, fast, and user-friendly websites that grow your business.
              </p>

              {/* Call to Action */}
              <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300" suppressHydrationWarning>
                Build Your Website
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

          {/* Mobile App */}
          <PixelCard variant="blue" className="w-full max-w-[340px] h-auto min-h-[280px] sm:min-h-[300px]">
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between z-10" suppressHydrationWarning>
              {/* Service Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                MOBILE<br />APPLICATION
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-200 leading-relaxed mb-6 text-sm md:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                iOS and Android mobile applications. We build apps that your customers will love, with smooth performance and beautiful design.
              </p>

              {/* Call to Action */}
              <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300" suppressHydrationWarning>
                Create Your App
                <span className="ml-2">→</span>
              </button>
            </div>
            
          </PixelCard>

          {/* AI Automation */}
          <PixelCard variant="blue" className="w-full max-w-[340px] h-auto min-h-[280px] sm:min-h-[300px]">
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between z-10" suppressHydrationWarning>
              {/* Service Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                AI AUTOMATION
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-200 leading-relaxed mb-6 text-sm md:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                Smart automation and AI tools. We help you automate tasks, analyze data, and create intelligent systems that save time and boost efficiency.
              </p>

              {/* Call to Action */}
              <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300" suppressHydrationWarning>
                Get AI-Powered
                <span className="ml-2">→</span>
              </button>
            </div>
            
          </PixelCard>

          {/* Cloud Services */}
          <PixelCard variant="blue" className="w-full max-w-[340px] h-auto min-h-[280px] sm:min-h-[300px]">
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between z-10" suppressHydrationWarning>
              {/* Service Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                CLOUD SERVICES
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-200 leading-relaxed mb-6 text-sm md:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                Reliable cloud hosting and backend services. We manage your servers, databases, and APIs so you can focus on growing your business.
              </p>

              {/* Call to Action */}
              <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300" suppressHydrationWarning>
                Host Your Project
                <span className="ml-2">→</span>
              </button>
            </div>
            
          </PixelCard>
        </div>
      </div>
    </section>
  );
}
