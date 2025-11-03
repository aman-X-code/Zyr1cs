"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Particles } from "./ui/Particles";
import BlurText from "./BlurText";
import { useState } from "react";
import { Github, Linkedin, Instagram, Globe } from "lucide-react";

const team = [
  {
    name: "Aman Khanna",
    role: "Founder & Full-Stack Developer",
    image: "https://res.cloudinary.com/dave3np5n/image/upload/v1762159869/aman_xwwmlj.jpg",
    specialty: "Full Stack Development | UI/UX Design | DevOps",
    bio: "Full-stack developer passionate about building scalable and user-centric web applications. Specializing in creating seamless digital experiences by integrating functionality with intuitive UI/UX design. B.Tech in Computer Science from VIT Chennai.",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "AWS", "DevOps", "UI/UX Design"],
    email: "aamankhanna1112@gmail.com",
    socials: {
      github: "https://github.com/aman-X-code",
      linkedin: "https://www.linkedin.com/in/aman-khanna-82715b200/",
      instagram: "https://www.instagram.com/aman.kkhanna/",
      portfolio: "https://portfolio-aman-x-codes-projects.vercel.app/",
    },
  },
  {
    name: "Team Member",
    role: "Creative Director",
    image: "/images/team2.jpg",
    specialty: "UI/UX Design",
    bio: "Crafting beautiful and intuitive user experiences that delight users and drive engagement.",
    skills: ["Figma", "Adobe XD", "Design Systems", "Prototyping"],
    email: "creative@zyr1cs.com",
    socials: {
      github: "#",
      linkedin: "#",
      instagram: "#",
      portfolio: "#",
    },
  },
  {
    name: "Team Member",
    role: "Tech Lead",
    image: "/images/team3.jpg",
    specialty: "System Architecture",
    bio: "Building scalable and robust systems that power modern applications with cutting-edge technology.",
    skills: ["Cloud Architecture", "DevOps", "Microservices", "Security"],
    email: "tech@zyr1cs.com",
    socials: {
      github: "#",
      linkedin: "#",
      instagram: "#",
      portfolio: "#",
    },
  },
];

export function AboutSection() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="about" className="py-12 bg-black relative overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-baseline mb-4 sm:mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mr-2 sm:mr-4" style={{ fontFamily: "'Druk Trial', sans-serif" }}>
              <BlurText text="ABOUT US" delay={200} animateBy="words" direction="top" />
            </h2>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-300 rounded-full" />
          </div>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            The minds behind the innovation
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => {
            const isFlipped = flippedCards.includes(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative h-[450px] sm:h-[500px] lg:h-[550px] cursor-pointer"
                style={{ perspective: "1000px" }}
                onClick={() => toggleFlip(index)}
              >
                {/* Card wrapper with 3D transform */}
                <motion.div
                  className="relative h-full w-full"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                >
                  {/* Front of card */}
                  <div 
                    className="absolute inset-0 h-full bg-black rounded-lg overflow-hidden border" 
                    style={{ 
                      borderColor: '#27272A',
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  >
                  {/* Grayscale image background */}
                  <div className="absolute inset-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                  {/* Content container */}
                  <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                    {/* Top section - minimal */}
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-1 bg-gradient-to-r from-white to-transparent" />
                    </div>

                    {/* Middle section - Name (positioned at 60% height) */}
                    <div className="absolute left-6 right-6 sm:left-8 sm:right-8" style={{ top: '55%' }}>
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      >
                        <h3
                          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-none tracking-wider"
                          style={{ fontFamily: "'Druk Trial', sans-serif" }}
                        >
                          {member.name.split(' ').map((word, i) => (
                            <div key={i}>{word}</div>
                          ))}
                        </h3>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-px w-8 bg-white" />
                          <div className="h-px flex-1 bg-gradient-to-r from-gray-500 to-transparent" />
                        </div>
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">
                          {member.role}
                        </p>
                      </motion.div>
                    </div>

                    {/* Bottom section - Specialty */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <p className="text-gray-300 text-sm font-medium" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                          {member.specialty}
                        </p>
                      </div>
                      <div className="h-1 w-20 bg-gradient-to-r from-white to-transparent rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute inset-0 h-full bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border p-6 sm:p-8"
                  style={{ 
                    borderColor: '#27272A',
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="h-full flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <h3 
                        className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-wider"
                        style={{ fontFamily: "'Druk Trial', sans-serif" }}
                      >
                        {member.name}
                      </h3>
                      <p className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6">
                        {member.role}
                      </p>
                      <div className="h-px w-full bg-gradient-to-r from-cyan-400 to-transparent mb-6" />
                    </div>

                    {/* Bio */}
                    <div className="flex-1">
                      <p 
                        className="text-gray-300 text-sm leading-relaxed mb-6"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {member.bio}
                      </p>

                      {/* Skills */}
                      <div className="mb-6">
                        <p className="text-white text-xs font-bold uppercase tracking-wider mb-3">
                          Expertise
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                              style={{ fontFamily: "'Quicksand', sans-serif" }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact */}
                    <div>
                      <div className="h-px w-full bg-gradient-to-r from-cyan-400 to-transparent mb-4" />
                      <div className="flex items-center justify-between">
                        <p className="text-gray-400 text-xs" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                          {member.email}
                        </p>
                        <div className="flex gap-3">
                          <a 
                            href={member.socials.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            title="Portfolio"
                          >
                            <Globe size={18} />
                          </a>
                          <a 
                            href={member.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            title="GitHub"
                          >
                            <Github size={18} />
                          </a>
                          <a 
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            title="LinkedIn"
                          >
                            <Linkedin size={18} />
                          </a>
                          <a 
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            title="Instagram"
                          >
                            <Instagram size={18} />
                          </a>
                        </div>
                      </div>
                      <p className="text-gray-500 text-xs mt-3">
                        Click to flip back
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
