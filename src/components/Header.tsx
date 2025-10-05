"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  // Scroll spy functionality to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add CSS for shine animation and blinking dot
  React.useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes zezzz {
        0%,
        10% {
          background-position: -200px;
        }
        20% {
          background-position: top left;
        }
        100% {
          background-position: 200px;
        }
      }
      @keyframes blink {
        0%, 40% {
          opacity: 1;
        }
        50%, 90% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  useEffect(() => {
    // Listen for custom events to hide/show header
    let hideTimeout: NodeJS.Timeout
    let showTimeout: NodeJS.Timeout

    const handleHideHeader = () => {
      clearTimeout(showTimeout)
      hideTimeout = setTimeout(() => setIsHeaderVisible(false), 100)
    }

    const handleShowHeader = () => {
      clearTimeout(hideTimeout)
      showTimeout = setTimeout(() => setIsHeaderVisible(true), 100)
    }

    window.addEventListener("hideHeader", handleHideHeader)
    window.addEventListener("showHeader", handleShowHeader)

    return () => {
      clearTimeout(hideTimeout)
      clearTimeout(showTimeout)
      window.removeEventListener("hideHeader", handleHideHeader)
      window.removeEventListener("showHeader", handleShowHeader)
    }
  }, [])

  // Reset header visibility when pathname changes
  useEffect(() => {
    setIsHeaderVisible(true)
  }, [pathname])

  return (
    <div suppressHydrationWarning>
      {/* Company Logo - Outside Header, Positioned Left */}
      <motion.div
        className="fixed top-4 left-8 z-[200]"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween",
        }}
        suppressHydrationWarning
      >
        <button onClick={() => scrollToSection('#home')} suppressHydrationWarning>
          <Image 
            src="/images/white.png" 
            alt="Zyr1cs Logo" 
            width={180} 
            height={60} 
            className="h-16 w-auto object-contain"
            suppressHydrationWarning
          />
        </button>
      </motion.div>

      {/* Central Navigation Only */}
      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[100]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween",
        }}
        suppressHydrationWarning
      >
        {/* Navigation Links Container */}
        <nav className="flex items-center space-x-6 px-6 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg" suppressHydrationWarning>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium transition-all duration-400 group text-base ${
                  isActive ? "text-cyan-300" : "text-white hover:text-cyan-300"
                }`}
                style={{
                  fontFamily: "'Unbounded', sans-serif",
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
                  transitionDuration: '400ms',
                  transitionProperty: 'color',
                  cursor: 'pointer'
                }}
                suppressHydrationWarning
              >
                {item.name}
              </button>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4" suppressHydrationWarning>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white p-4 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-200"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            suppressHydrationWarning
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* CTA Button - Right Corner */}
      <motion.div
        className="fixed top-6 right-8 z-[200]"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween",
        }}
        suppressHydrationWarning
      >
        <button 
          onClick={() => scrollToSection('#contact')}
          className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg text-white font-medium transition-all duration-200 text-base hover:bg-white/10" 
          style={{ fontFamily: "'Unbounded', sans-serif" }} 
          suppressHydrationWarning
        >
          Get Started
        </button>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.nav
        id="mobile-navigation"
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="md:hidden overflow-hidden backdrop-blur-2xl border border-white/10 rounded-full mb-20 mx-8 shadow-lg"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        aria-label="Mobile navigation menu"
        suppressHydrationWarning
      >
        <motion.div
          initial={false}
          animate={{
            y: isMenuOpen ? 0 : -20,
          }}
          transition={{
            duration: 0.3,
            delay: isMenuOpen ? 0.1 : 0,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="px-3 pb-4 md:px-6 md:pb-6"
          suppressHydrationWarning
        >
          <ul className="flex flex-col space-y-0" suppressHydrationWarning>
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <motion.li
                  key={item.name}
                  initial={false}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: isMenuOpen ? 0.15 + index * 0.05 : 0,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative"
                  suppressHydrationWarning
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative py-3 md:py-4 text-base md:text-lg font-sans font-semibold transition-all duration-400 text-center group flex items-center justify-center ${
                      isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                    }`}
                    style={{
                      transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
                      transitionDuration: '400ms',
                      transitionProperty: 'color'
                    }}
                    suppressHydrationWarning
                  >
                    <span 
                      className="relative"
                      suppressHydrationWarning
                    >
                      {item.name}
                      {!isActive && (
                        <span 
                          className="absolute bottom-[-2px] left-0 w-0 h-0.5 transition-all duration-400 group-hover:w-full"
                          style={{
                            backgroundColor: '#fbbf24',
                            transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
                            transitionDuration: '400ms',
                            transitionProperty: 'width'
                          }}
                          suppressHydrationWarning
                        />
                      )}
                    </span>
                  </button>
                  {/* Faded line separator */}
                  {index < navItems.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" suppressHydrationWarning></div>
                  )}
                </motion.li>
              )
            })}
            {/* Separator before CTA button */}
            <motion.div
              initial={false}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
              }}
              transition={{
                duration: 0.2,
                delay: isMenuOpen ? 0.15 + navItems.length * 0.05 : 0,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto my-4"
              suppressHydrationWarning
            ></motion.div>
            <motion.li
              initial={false}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20,
              }}
              transition={{
                duration: 0.2,
                delay: isMenuOpen ? 0.15 + navItems.length * 0.05 + 0.05 : 0,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex justify-center"
              suppressHydrationWarning
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 mt-2"
                onClick={() => scrollToSection('#contact')}
                suppressHydrationWarning
              >
                Get Started
              </motion.button>
            </motion.li>
          </ul>
        </motion.div>
      </motion.nav>
    </div>
  )
}

export { Header }
