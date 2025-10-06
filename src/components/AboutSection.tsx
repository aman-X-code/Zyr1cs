"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto px-4 sm:px-6 relative z-10" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8" style={{ fontFamily: "'Druk Trial', sans-serif" }} suppressHydrationWarning>
            ABOUT US
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
            We are a creative agency passionate about delivering exceptional digital experiences. 
            Our team combines technical expertise with creative vision to bring your ideas to life.
          </p>
          <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8 backdrop-blur-sm border border-gray-700" suppressHydrationWarning>
            <p className="text-sm sm:text-base text-gray-400" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
              More detailed content about our story, mission, and team will be added here...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
