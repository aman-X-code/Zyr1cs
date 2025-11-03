"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Work", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  // Lock/unlock scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

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

  // Scroll spy functionality to detect active section and logo change
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'why-choose-us', 'portfolio', 'about', 'contact']
      const scrollPosition = window.scrollY + 150 // Increased offset for better detection

      // Check if scrolled past hero section (approximately 80vh)
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        setIsScrolled(window.scrollY > heroHeight * 0.7)
      }

      let currentSection = 'home'

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          const sectionBottom = sectionTop + sectionHeight

          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sections[i]
            break
          }
          // If we're past the current section, it becomes the active one
          else if (scrollPosition >= sectionTop) {
            currentSection = sections[i]
          }
        }
      }

      setActiveSection(currentSection)
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
      hideTimeout = setTimeout(() => {}, 100)
    }

    const handleShowHeader = () => {
      clearTimeout(hideTimeout)
      showTimeout = setTimeout(() => {}, 100)
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


  return (
    <div suppressHydrationWarning>
      {/* Desktop Header - Original Design */}
      <div className="hidden md:block">
        {/* Company Logo - Outside Header, Positioned Left */}
        <motion.div
          className="fixed top-5 md:top-7 left-4 md:left-8 z-[200]"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "tween",
          }}
          suppressHydrationWarning
        >
          <button onClick={() => scrollToSection('#home')} suppressHydrationWarning>
            <motion.div
              initial={false}
              animate={{
                opacity: isScrolled ? 0 : 1,
                scale: isScrolled ? 0.8 : 1,
              }}
              transition={{ duration: 0.3 }}
              className={isScrolled ? "absolute" : "relative"}
              suppressHydrationWarning
            >
              <Image
                src="https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/white_in5rof.png"
                alt="Zyr1cs Logo"
                width={110}
                height={38}
                className="h-8 md:h-9 w-auto object-contain"
                suppressHydrationWarning
              />
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                opacity: isScrolled ? 1 : 0,
                scale: isScrolled ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
              className={!isScrolled ? "absolute" : "relative"}
              suppressHydrationWarning
            >
              <Image
                src="https://res.cloudinary.com/dave3np5n/image/upload/v1762159870/whitehalf_xrwoeb.png"
                alt="Z1 Logo"
                width={40}
                height={40}
                className="h-8 md:h-9 w-auto object-contain"
                suppressHydrationWarning
              />
            </motion.div>
          </button>
        </motion.div>

        {/* Central Navigation */}
        <motion.div
          className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-[100]"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "tween",
          }}
          suppressHydrationWarning
        >
          <nav className="flex items-center space-x-4 lg:space-x-6 px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg" suppressHydrationWarning>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative font-medium transition-all duration-400 group text-sm lg:text-base ${
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
        </motion.div>

        {/* CTA Button - Right Corner */}
        <motion.div
          className="fixed top-4 md:top-6 right-4 md:right-8 z-[200]"
          initial={{ y: -100 }}
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
            className="px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg text-white font-medium transition-all duration-200 text-sm lg:text-base hover:bg-white/10"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
            suppressHydrationWarning
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Backdrop Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
        transition={{
          duration: 0.3,
        }}
        className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[130]"
        onClick={() => setIsMenuOpen(false)}
        suppressHydrationWarning
      />

      {/* Mobile Floating Navbar */}
      <motion.div
        className="md:hidden fixed top-4 left-4 right-4 z-[200]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween",
        }}
        suppressHydrationWarning
      >
        <div className="flex items-center justify-between px-5 py-3 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl">
          {/* Logo */}
          <button onClick={() => scrollToSection('#home')} className="flex-shrink-0" suppressHydrationWarning>
            <Image
              src="https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/white_in5rof.png"
              alt="Zyr1cs Logo"
              width={90}
              height={32}
              className="h-6 w-auto object-contain"
              suppressHydrationWarning
            />
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            suppressHydrationWarning
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Half-Screen Mobile Menu Expanding Downward from Navbar */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? '60vh' : '0vh',
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="md:hidden fixed left-4 right-4 z-[140] overflow-hidden rounded-3xl"
        style={{
          top: '4.5rem',
          background: '#000000',
          transformOrigin: 'top',
        }}
        suppressHydrationWarning
      >

        <div className="flex flex-col justify-center items-center h-full px-6 py-8 relative z-10">
          {/* Menu Items - Centered with active having background */}
          <div className="w-full max-w-lg space-y-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <motion.div
                  key={item.name}
                  initial={false}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 50,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: isMenuOpen ? 0.2 + index * 0.08 : 0,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  suppressHydrationWarning
                >
                  <motion.button
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-center py-3 px-6 relative group rounded-2xl"
                    animate={{
                      scale: isActive ? 1 : 0.95,
                    }}
                    whileTap={{ 
                      scale: 0.95,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    style={{
                      background: isActive ? 'rgba(55, 65, 81, 0.5)' : 'transparent',
                    }}
                    suppressHydrationWarning
                  >
                    {/* Text */}
                    <motion.span 
                      className={`relative z-10 inline-block font-black ${
                        isActive ? "text-cyan-300" : "text-white"
                      }`}
                      style={{
                        fontFamily: "'Druk Trial', sans-serif",
                        fontSize: isActive ? '2.5rem' : '1.5rem',
                        letterSpacing: '0.08em',
                        lineHeight: '1.2',
                        transition: 'all 0.4s cubic-bezier(0.76, 0, 0.24, 1)',
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {item.name}
                    </motion.span>

                    {/* Ripple effect on tap */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-cyan-400"
                      initial={{ scale: 1, opacity: 0 }}
                      whileTap={{ 
                        scale: 1.2, 
                        opacity: [0.5, 0],
                        transition: { duration: 0.5 }
                      }}
                    />
                  </motion.button>
                </motion.div>
              )
            })}
          </div>


        </div>
      </motion.div>
    </div>
  )
}

export { Header }
