"use client";

import { useEffect, useState } from "react";
import PixelCard from "./PixelCard";
import Ballpit from "./Ballpit";
import BlurText from "./BlurText";
import { HoverSlider, TextStaggerHover, HoverSliderImageWrap, HoverSliderCard } from "./HoverSlider";
import { Iphone } from "./ui/iphone";
import TerminalCard from "./TerminalCard";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { Icons } from "./Icons";
import { Particles } from "./ui/Particles";
import { ServiceDetailModal } from "./ServiceDetailModal";
import { Info } from "lucide-react";

const serviceDetails = [
  {
    title: "WEB DESIGN",
    description: "We craft stunning, high-performance websites that convert visitors into customers. Our full-stack approach ensures your web presence is fast, secure, and scalable.",
    process: [
      { step: "Discovery & Planning", description: "We analyze your business goals, target audience, and competitors to create a strategic roadmap." },
      { step: "Design & Prototyping", description: "Our designers create pixel-perfect mockups and interactive prototypes for your approval." },
      { step: "Development", description: "Clean, maintainable code built with modern frameworks and best practices." },
      { step: "Testing & Launch", description: "Rigorous QA testing across devices and browsers before going live." },
      { step: "Support & Optimization", description: "Ongoing maintenance, updates, and performance optimization." }
    ],
    techStack: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
    ],
    timeline: "Typical projects take 4-8 weeks from kickoff to launch, depending on complexity and scope.",
    whyBetter: [
      "Lightning-fast load times (< 2 seconds) with 95+ PageSpeed scores",
      "Mobile-first responsive design that works flawlessly on all devices",
      "SEO-optimized architecture to rank higher in search results",
      "Scalable infrastructure that grows with your business",
      "Ongoing support and maintenance included for 3 months post-launch"
    ]
  },
  {
    title: "MOBILE APPLICATION",
    description: "Native-quality mobile apps for iOS and Android using a single codebase. We deliver beautiful, performant apps that users love.",
    process: [
      { step: "Requirements Analysis", description: "Define features, user flows, and technical requirements for your app." },
      { step: "UI/UX Design", description: "Create intuitive interfaces following platform-specific design guidelines." },
      { step: "Cross-Platform Development", description: "Build once, deploy everywhere with React Native or Flutter." },
      { step: "API Integration", description: "Connect to your backend services and third-party APIs seamlessly." },
      { step: "App Store Deployment", description: "Handle submission and approval process for both iOS and Android stores." }
    ],
    techStack: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "iOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
    ],
    timeline: "Mobile apps typically take 6-12 weeks from concept to app store launch.",
    whyBetter: [
      "70% faster development with cross-platform approach",
      "Native performance and smooth 60fps animations",
      "Offline-first architecture for uninterrupted user experience",
      "Push notifications and real-time updates built-in",
      "App store optimization to maximize downloads"
    ]
  },
  {
    title: "AI AUTOMATION",
    description: "Harness the power of AI to automate repetitive tasks, gain insights from data, and create intelligent user experiences.",
    process: [
      { step: "Workflow Analysis", description: "Identify automation opportunities and pain points in your current processes." },
      { step: "AI Model Selection", description: "Choose the right AI models (GPT, Claude, Gemini) for your specific needs." },
      { step: "Integration & Training", description: "Integrate AI into your systems and fine-tune models with your data." },
      { step: "Testing & Refinement", description: "Validate accuracy and refine prompts for optimal results." },
      { step: "Deployment & Monitoring", description: "Deploy to production with monitoring and continuous improvement." }
    ],
    techStack: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" }
    ],
    timeline: "AI automation projects range from 2-6 weeks depending on complexity and integration requirements.",
    whyBetter: [
      "Reduce manual work by 80% with intelligent automation",
      "24/7 AI-powered customer support with natural conversations",
      "Data-driven insights and predictions to inform business decisions",
      "Custom AI models trained on your specific data and use cases",
      "Seamless integration with existing tools and workflows"
    ]
  },
  {
    title: "CLOUD SERVICES",
    description: "Enterprise-grade cloud infrastructure that scales automatically, reduces costs, and ensures 99.9% uptime for your applications.",
    process: [
      { step: "Infrastructure Assessment", description: "Evaluate current setup and identify optimization opportunities." },
      { step: "Architecture Design", description: "Design scalable, fault-tolerant cloud architecture tailored to your needs." },
      { step: "Migration & Setup", description: "Migrate existing services or build new infrastructure from scratch." },
      { step: "CI/CD Pipeline", description: "Automate deployments with continuous integration and delivery pipelines." },
      { step: "Monitoring & Optimization", description: "24/7 monitoring with automated scaling and cost optimization." }
    ],
    techStack: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" }
    ],
    timeline: "Cloud infrastructure projects typically take 3-8 weeks from planning to full deployment.",
    whyBetter: [
      "99.9% uptime guarantee with automatic failover and redundancy",
      "Auto-scaling to handle traffic spikes without manual intervention",
      "40% cost reduction through optimization and right-sizing",
      "Infrastructure as Code for reproducible, version-controlled deployments",
      "24/7 monitoring with instant alerts and automated recovery"
    ]
  }
];

export function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section id="services" className="py-12 pb-6 bg-black relative overflow-hidden" suppressHydrationWarning>
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
        <HoverSlider className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start mb-6 lg:mb-0" suppressHydrationWarning>
          {/* Left Side - Service Names */}
          <div className="flex-1 space-y-2 sm:space-y-4 pointer-events-none w-full" suppressHydrationWarning>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white w-fit" style={{ fontFamily: "'Druk Trial', sans-serif" }} suppressHydrationWarning>
              <TextStaggerHover text="WEB DESIGN" index={0} className="block mb-1 sm:mb-2 pointer-events-auto w-fit" />
              <TextStaggerHover text="MOBILE APPLICATION" index={1} className="block mb-1 sm:mb-2 pointer-events-auto w-fit" />
              <TextStaggerHover text="AI AUTOMATION" index={2} className="block mb-1 sm:mb-2 pointer-events-auto w-fit" />
              <TextStaggerHover text="CLOUD SERVICES" index={3} className="block mb-1 sm:mb-2 pointer-events-auto w-fit" />
            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div className="flex-1 w-full lg:w-auto" suppressHydrationWarning>
            <HoverSliderImageWrap className="w-full max-w-full sm:max-w-[400px] h-96 sm:h-48 md:h-64 lg:h-[450px] overflow-visible mx-auto" suppressHydrationWarning>
              {/* Web Development */}
              <HoverSliderCard index={0}>
                <PixelCard variant="blue" className="w-full h-full">
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col z-10" suppressHydrationWarning>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                      WEB DESIGN
                    </h3>
                    
                    <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                      Complete websites and web applications. From design to deployment, we create modern, fast, and user-friendly websites that grow your business.
                    </p>
                    
                    <button
                      onClick={() => setSelectedService(0)}
                      className="mt-auto px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 w-fit text-sm shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 animate-pulse"
                      style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                      <Info className="w-4 h-4" />
                      Learn More
                    </button>
                  </div>
                  
                  <div className="absolute inset-0 z-0" suppressHydrationWarning>
                    <Ballpit 
                      className="w-full h-full"
                      count={isMobile ? 8 : 15}
                      minSize={isMobile ? 0.25 : 0.8}
                      maxSize={isMobile ? 0.5 : 1.5}
                      size0={isMobile ? 0.5 : 1.5}
                    />
                  </div>
                </PixelCard>
              </HoverSliderCard>

              {/* Mobile App */}
              <HoverSliderCard index={1}>
                <div className="w-full h-full flex items-center justify-center p-1 sm:p-2 md:p-4 overflow-hidden relative">
                  <button
                    onClick={() => setSelectedService(1)}
                    className="absolute top-4 left-4 z-10 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 text-sm shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 animate-pulse"
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    <Info className="w-4 h-4" />
                    Learn More
                  </button>
                  
                  <Iphone 
                    src="https://res.cloudinary.com/dave3np5n/image/upload/v1762159868/mobile_cy4hqb.jpg"
                    className="h-full w-auto max-w-full drop-shadow-2xl"
                  />
                </div>
              </HoverSliderCard>

              {/* AI Automation */}
              <HoverSliderCard index={2}>
                <PixelCard variant="blue" className="w-full h-full">
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col z-10" suppressHydrationWarning>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                      AI AUTOMATION
                    </h3>
                    
                    <button
                      onClick={() => setSelectedService(2)}
                      className="mt-auto px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 w-fit text-sm shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 animate-pulse"
                      style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                      <Info className="w-4 h-4" />
                      Learn More
                    </button>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center z-0 opacity-40" suppressHydrationWarning>
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
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col z-10" suppressHydrationWarning>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
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
                    
                    <button
                      onClick={() => setSelectedService(3)}
                      className="mt-4 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 w-fit text-sm shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 animate-pulse"
                      style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                      <Info className="w-4 h-4" />
                      Learn More
                    </button>
                  </div>
                </PixelCard>
              </HoverSliderCard>
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>

        {/* Service Detail Modal */}
        {selectedService !== null && (
          <ServiceDetailModal
            isOpen={selectedService !== null}
            onClose={() => setSelectedService(null)}
            service={serviceDetails[selectedService]}
          />
        )}
      </div>
    </section>
  );
}
