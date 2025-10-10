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
    { name: "Portfolio", href: "#portfolio" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
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
                    src="/images/white.png"
                    alt="Zyr1cs Logo"
                    width={200}
                    height={70}
                    className="h-10 sm:h-12 md:h-14 w-auto object-contain mb-3"
                    suppressHydrationWarning
                  />
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                    We create exceptional digital experiences that drive results. From web development to digital strategy, 
                    we help businesses thrive in the digital landscape.
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-2" suppressHydrationWarning>
                  <div className="flex items-center space-x-3 text-gray-300" suppressHydrationWarning>
                    <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                      hello@zyr1cs.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300" suppressHydrationWarning>
                    <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300" suppressHydrationWarning>
                    <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                      San Francisco, CA
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
                <h3 className="text-white font-semibold text-lg mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2" suppressHydrationWarning>
                  {quickLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm text-left"
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
                <h3 className="text-white font-semibold text-lg mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                  Follow Us
                </h3>
                <div className="flex space-x-3 mb-6" suppressHydrationWarning>
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50`}
                        aria-label={social.name}
                        suppressHydrationWarning
                      >
                        <IconComponent size={18} />
                      </a>
                    );
                  })}
                </div>
                
                {/* Newsletter Signup */}
                <div suppressHydrationWarning>
                  <h4 className="text-white font-medium text-sm mb-2" style={{ fontFamily: "'Unbounded', sans-serif" }} suppressHydrationWarning>
                    Stay Updated
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-2" suppressHydrationWarning>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      suppressHydrationWarning
                    />
                    <button
                      className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors duration-300"
                      style={{ fontFamily: "'Unbounded', sans-serif" }}
                      suppressHydrationWarning
                    >
                      Subscribe
                    </button>
                  </div>
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
            className="mt-8 pt-6 border-t border-gray-800/50"
            suppressHydrationWarning
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" suppressHydrationWarning>
              <div className="text-gray-400 text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                © {currentYear} Zyr1cs. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm" suppressHydrationWarning>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" style={{ fontFamily: "'Quicksand', sans-serif" }} suppressHydrationWarning>
                  Cookie Policy
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
