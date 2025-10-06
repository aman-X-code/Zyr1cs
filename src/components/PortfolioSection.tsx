"use client";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto px-4 sm:px-6 relative z-10" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8" style={{ fontFamily: "'Druk Trial', sans-serif" }} suppressHydrationWarning>
            PORTFOLIO
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
            Explore our latest projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
          <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8 backdrop-blur-sm border border-gray-700" suppressHydrationWarning>
            <p className="text-sm sm:text-base text-gray-400" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
              Portfolio showcase will be added here...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
