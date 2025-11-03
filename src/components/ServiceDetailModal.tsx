"use client";

import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ServiceDetail {
  title: string;
  description: string;
  process: { step: string; description: string }[];
  techStack: { name: string; icon: string }[];
  timeline: string;
  whyBetter: string[];
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail;
}

export function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            style={{ zIndex: 99998 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-12 lg:inset-20 xl:inset-32 bg-gradient-to-br from-gray-900 to-black border border-cyan-400/30 rounded-2xl overflow-hidden max-w-6xl mx-auto"
            style={{ zIndex: 99999 }}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                  style={{ fontFamily: "'Druk Trial', sans-serif" }}
                >
                  {service.title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Description */}
                <div>
                  <p 
                    className="text-gray-300 text-base md:text-lg leading-relaxed"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Our Process */}
                <div>
                  <h3 
                    className="text-xl md:text-2xl font-bold text-cyan-400 mb-4"
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    Our Process
                  </h3>
                  <div className="space-y-4">
                    {service.process.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-400 text-black font-bold flex items-center justify-center">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 
                            className="text-white font-bold mb-1"
                            style={{ fontFamily: "'Unbounded', sans-serif" }}
                          >
                            {step.step}
                          </h4>
                          <p 
                            className="text-gray-400 text-sm"
                            style={{ fontFamily: "'Quicksand', sans-serif" }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 
                    className="text-xl md:text-2xl font-bold text-cyan-400 mb-4"
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    Tech Stack We Use
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {service.techStack.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors group"
                      >
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img 
                            src={tech.icon} 
                            alt={tech.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <span 
                          className="text-white text-sm text-center font-medium"
                          style={{ fontFamily: "'Quicksand', sans-serif" }}
                        >
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 
                    className="text-xl md:text-2xl font-bold text-cyan-400 mb-4"
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    Project Timeline
                  </h3>
                  <p 
                    className="text-gray-300 text-base"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {service.timeline}
                  </p>
                </div>

                {/* Why We're Better */}
                <div>
                  <h3 
                    className="text-xl md:text-2xl font-bold text-cyan-400 mb-4"
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    Why Choose Us
                  </h3>
                  <ul className="space-y-3">
                    {service.whyBetter.map((reason, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-cyan-400 text-xl">✓</span>
                        <span 
                          className="text-gray-300"
                          style={{ fontFamily: "'Quicksand', sans-serif" }}
                        >
                          {reason}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button 
                    onClick={() => {
                      onClose();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full md:w-auto px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-lg transition-colors text-lg"
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    Start Your Project →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
