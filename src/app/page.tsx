import { HeroSection } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import ClickSpark from "@/components/ClickSpark";
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <ClientOnly>
        <ClickSpark
          sparkColor='#00d4ff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <main suppressHydrationWarning>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <PortfolioSection />
            <ContactSection />
          </main>
        </ClickSpark>
      </ClientOnly>
    </div>
  );
}
