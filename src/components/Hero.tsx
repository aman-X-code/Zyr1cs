"use client";

import { Component as RaycastAnimatedBackground } from "@/components/raycast-animated-blue-background";
import { Spotlight } from "@/components/ui/spotlight";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" suppressHydrationWarning>
      {/* Raycast Animated Background */}
      <div className="absolute inset-0 z-0" suppressHydrationWarning>
        <RaycastAnimatedBackground />
      </div>

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      
      {/* Hero Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 -mt-20" suppressHydrationWarning>
        <div className="text-center -space-y-8" suppressHydrationWarning>
          {/* Main Headline */}
          <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-gray-200 leading-tight tracking-wide uppercase opacity-0 animate-fade-in-up" style={{ fontFamily: "'Druk Trial', sans-serif", animationDelay: '1s' }} suppressHydrationWarning>
            Building
          </h1>
          <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-gray-200 leading-tight tracking-wide uppercase opacity-0 animate-fade-in-up" style={{ fontFamily: "'Druk Trial', sans-serif", animationDelay: '1.3s' }} suppressHydrationWarning>
            Extraordinary
          </h1>
          <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-gray-200 leading-tight tracking-wide uppercase opacity-0 animate-fade-in-up" style={{ fontFamily: "'Druk Trial', sans-serif", animationDelay: '1.6s' }} suppressHydrationWarning>
            Digital Solutions
          </h1>
        </div>
      </div>
    </section>
  );
}
