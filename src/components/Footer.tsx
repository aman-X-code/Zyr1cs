"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-300" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-400" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Work", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800/50 relative overflow-hidden" suppressHydrationWarning>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" suppressHydrationWarning></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" suppressHydrationWarning>
        <div className="py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2" suppressHydrationWarning>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                suppressHydrationWarning
              >
                <div className="mb-4" suppressHydrationWarning>
                  <Image
                    src="https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/white_in5rof.png"
                    alt="Zyr1cs Logo"
                    width={140}
                    height={50}
                    className="h-8 sm:h-9 md:h-10 w-auto object-contain mb-3"
                    suppressHydrationWarning
                  />
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                    We create exceptional digital experiences that drive results. From web development to digital strategy, 
                    we help businesses thrive in the digital landscape.
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-2" suppressHydrationWarning>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300" suppressHydrationWarning>
                    <Mail size={14} className="text-cyan-400 flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm break-all" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                      aamankhanna1112@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300" suppressHydrationWarning>
                    <Phone size={14} className="text-cyan-400 flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                      +91 9039242458
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300" suppressHydrationWarning>
                    <MapPin size={14} className="text-cyan-400 flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                      Delhi, India
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div suppressHydrationWarning>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                suppressHydrationWarning
              >
                <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2" suppressHydrationWarning>
                  {quickLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm text-left"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      suppressHydrationWarning
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div suppressHydrationWarning>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                suppressHydrationWarning
              >
                <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                  Follow Us
                </h3>
                <div className="flex space-x-2 sm:space-x-3" suppressHydrationWarning>
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-colors duration-300 p-1.5 sm:p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50`}
                        aria-label={social.name}
                        suppressHydrationWarning
                      >
                        <IconComponent size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-8 pt-6 relative"
            suppressHydrationWarning
          >
            {/* Faded divider line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" suppressHydrationWarning></div>
            
            <div className="flex justify-center items-center" suppressHydrationWarning>
              <div className="text-gray-400 text-xs sm:text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                © {currentYear} Zyr1cs. All rights reserved.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
