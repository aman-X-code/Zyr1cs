"use client";

import PixelCard from "./PixelCard";
import Ballpit from "./Ballpit";
import BlurText from "./BlurText";
import { HoverSlider, TextStaggerHover, HoverSliderImageWrap, HoverSliderCard } from "./HoverSlider";
import { Iphone } from "./ui/iphone";
import TerminalCard from "./TerminalCard";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { Icons } from "./Icons";
import { Particles } from "./ui/Particles";

export function ServicesSection() {
  return (
    <section id="services" className="py-12 bg-black relative overflow-hidden" suppressHydrationWarning>
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />
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

        {/* Services Hover Slider */}
        <HoverSlider className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start" suppressHydrationWarning>
          {/* Left Side - Service Names */}
          <div className="flex-1 space-y-4 pointer-events-none" suppressHydrationWarning>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white w-fit" style={{ fontFamily: "'Druk Trial', sans-serif" }} suppressHydrationWarning>
              <TextStaggerHover text="WEB DESIGN" index={0} className="block mb-2 pointer-events-auto w-fit" />
              <TextStaggerHover text="MOBILE APPLICATION" index={1} className="block mb-2 pointer-events-auto w-fit" />
              <TextStaggerHover text="AI AUTOMATION" index={2} className="block mb-2 pointer-events-auto w-fit" />
              <TextStaggerHover text="CLOUD SERVICES" index={3} className="block mb-2 pointer-events-auto w-fit" />
            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div className="flex-1 w-full lg:w-auto" suppressHydrationWarning>
            <HoverSliderImageWrap className="w-full max-w-[400px] h-[400px] lg:h-[450px] overflow-visible" suppressHydrationWarning>
              {/* Web Development */}
              <HoverSliderCard index={0}>
                <PixelCard variant="blue" className="w-full h-full">
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col z-10" suppressHydrationWarning>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                      WEB DESIGN
                    </h3>
                    
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                      Complete websites and web applications. From design to deployment, we create modern, fast, and user-friendly websites that grow your business.
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 z-0" suppressHydrationWarning>
                    <Ballpit className="w-full h-full" />
                  </div>
                </PixelCard>
              </HoverSliderCard>

              {/* Mobile App */}
              <HoverSliderCard index={1}>
                <div className="w-full h-full flex items-start justify-center pt-1 px-8 overflow-hidden">
                  <Iphone 
                    src="https://res.cloudinary.com/dave3np5n/image/upload/v1762159868/mobile_cy4hqb.jpg"
                    className="h-[110%] w-auto drop-shadow-2xl scale-110"
                  />
                </div>
              </HoverSliderCard>

              {/* AI Automation */}
              <HoverSliderCard index={2}>
                <PixelCard variant="blue" className="w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <OrbitingCircles iconSize={50} radius={80} duration={20}>
                      {/* Claude AI */}
                      <div className="size-12 rounded-full overflow-hidden flex items-center justify-center shadow-xl">
                        <img src="https://res.cloudinary.com/dave3np5n/image/upload/v1762159864/claude_hbpqze.svg" alt="Claude AI" className="size-full" />
                      </div>
                      {/* Grok (X.AI) */}
                      <div className="size-12 rounded-full overflow-hidden flex items-center justify-center shadow-xl">
                        <img src="https://res.cloudinary.com/dave3np5n/image/upload/v1762159866/grok_fvn6e4.svg" alt="Grok" className="size-full" />
                      </div>
                    </OrbitingCircles>
                    <OrbitingCircles iconSize={50} radius={150} duration={25} reverse>
                      {/* Google Gemini */}
                      <div className="size-12 rounded-full overflow-hidden flex items-center justify-center shadow-xl">
                        <img src="https://res.cloudinary.com/dave3np5n/image/upload/v1762159864/gemini_wxdwz3.svg" alt="Gemini" className="size-full" />
                      </div>
                      <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-xl">
                        <svg className="size-8" viewBox="0 0 24 24" fill="#181717">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </div>
                      <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-xl">
                        <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="size-8" />
                      </div>
                    </OrbitingCircles>
                  </div>
                </PixelCard>
              </HoverSliderCard>

              {/* Cloud Services */}
              <HoverSliderCard index={3}>
                <PixelCard variant="blue" className="w-full h-full">
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col z-10" suppressHydrationWarning>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                      CLOUD SERVICES
                    </h3>
                    
                    <div className="flex-1 flex items-center justify-center">
                      <TerminalCard 
                        command={`kubectl apply -f deployment.yaml
docker build -t myapp:latest .
aws s3 sync ./build s3://bucket`}
                        language="bash"
                        className="w-full"
                      />
                    </div>
                  </div>
                </PixelCard>
              </HoverSliderCard>
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>
      </div>
    </section>
  );
}
