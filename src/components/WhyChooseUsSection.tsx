"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid } from "./ui/BentoGrid";
import BlurText from "./BlurText";
import GlassFolder from "./ui/GlassFolder";
import { TeamAvatars } from "./ui/TeamAvatars";
import { GraphChart } from "./ui/GraphChart";
import { CustomizableCircle } from "./ui/CustomizableCircle";
import { Zap, Shield, Users, Clock, Smartphone, Rocket, Lock } from "lucide-react";
import { Particles } from "./ui/Particles";

export function WhyChooseUsSection() {
  const cards = [
    {
      title: "Lightning Fast",
      description: "Optimized performance and quick turnaround times",
      icon: Zap,
      className: "lg:col-span-1 lg:row-span-2",
      background: (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative">
            <Zap className="w-32 h-32 animate-pulse" strokeWidth={1.5} style={{ color: '#ffffff', stroke: '#ffffff' }} />
            <div className="absolute inset-0 blur-xl bg-white/30 rounded-full"></div>
          </div>
        </div>
      ),
      customIcon: (
        <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border border-white/10 before:border-white/5">
          <Zap className="m-auto h-6 w-6" strokeWidth={1} />
        </div>
      ),
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime",
      icon: Shield,
      className: "lg:col-span-2 lg:row-span-1",
      background: <GlassFolder icon={<Lock className="text-white" size={48} strokeWidth={2.5} style={{ color: '#ffffff', stroke: '#ffffff' }} />} className="absolute inset-0 opacity-50" />,
      customIcon: (
        <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border border-white/10 before:border-white/5">
          <Shield className="m-auto h-6 w-6" strokeWidth={1} />
        </div>
      ),
    },
    {
      title: "Expert Team",
      description: "Skilled professionals with years of experience",
      icon: Users,
      className: "lg:col-span-1 lg:row-span-1",
      background: <TeamAvatars />,
      customIcon: (
        <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border border-white/10 before:border-white/5">
          <Users className="m-auto h-6 w-6" strokeWidth={1} />
        </div>
      ),
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need it",
      icon: Clock,
      className: "lg:col-span-1 lg:row-span-1",
      background: (
        <div className="absolute inset-0 flex items-center justify-center pl-12">
          <div className="relative w-32 h-32">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
            </div>
            {/* Middle ring */}
            <div className="absolute inset-4 rounded-full border border-white/15"></div>
            {/* Inner glow */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white/30 to-white/10 blur-md"></div>
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"></div>
            {/* Orbiting dots */}
            <div className="absolute inset-2 rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-white/60 rounded-full"></div>
            </div>
          </div>
        </div>
      ),
      customIcon: (
        <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border border-white/10 before:border-white/5">
          <Clock className="m-auto h-6 w-6" strokeWidth={1} />
        </div>
      ),
    },
    {
      title: "Responsive Design",
      description: "Perfect experience across all devices and screen sizes",
      icon: Smartphone,
      className: "lg:col-span-1 lg:row-span-1",
      background: <CustomizableCircle />,
      customIcon: (
        <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border border-white/10 before:border-white/5">
          <Smartphone className="m-auto h-6 w-6" strokeWidth={1} />
        </div>
      ),
    },
    {
      title: "Rapid Deployment",
      description: "Get your project live faster than ever",
      icon: Rocket,
      className: "lg:col-span-2 lg:row-span-1",
      background: <GraphChart />,
      customIcon: (
        <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border border-white/10 before:border-white/5">
          <Rocket className="m-auto h-6 w-6" strokeWidth={1} />
        </div>
      ),
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-black relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-baseline mb-4 sm:mb-6">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mr-2 sm:mr-4"
              style={{ fontFamily: "'Druk Trial', sans-serif" }}
            >
              <BlurText
                text="WHY CHOOSE US"
                delay={200}
                animateBy="words"
                direction="top"
              />
            </h2>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-300 rounded-full flex items-center justify-center">
              <span className="text-black font-black text-sm sm:text-lg" style={{ fontFamily: "'Druk Trial', sans-serif" }}>?</span>
            </div>
          </div>
          <p
            className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            We deliver exceptional results through innovation, expertise, and dedication
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BentoGrid cards={cards} columns={3} />
        </motion.div>
      </div>
    </section>
  );
}
