"use client";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto px-6 relative z-10" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8" style={{ fontFamily: "'Druk Trial', sans-serif" }} suppressHydrationWarning>
            PORTFOLIO
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700" suppressHydrationWarning>
            <p className="text-gray-400" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
              Portfolio showcase will be added here...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
