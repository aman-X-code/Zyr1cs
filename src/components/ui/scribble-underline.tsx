"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScribbleUnderlineProps {
  children: ReactNode
  color?: string
  delay?: number
}

export function ScribbleUnderline({ 
  children, 
  color = "#fbbf24",
  delay = 0 
}: ScribbleUnderlineProps) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        className="absolute left-0 -bottom-2 w-full overflow-visible"
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        style={{ height: "20px" }}
      >
        <motion.path
          d="M5,15 Q30,8 60,12 T120,10 T180,13 T240,9 T295,12"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.8, delay, ease: "easeInOut" },
            opacity: { duration: 0.3, delay }
          }}
        />
        <motion.path
          d="M3,13 Q35,10 65,14 T125,11 T185,15 T245,10 T297,14"
          stroke={color}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{
            pathLength: { duration: 0.7, delay: delay + 0.1, ease: "easeInOut" },
            opacity: { duration: 0.3, delay: delay + 0.1 }
          }}
        />
        <motion.path
          d="M7,14 Q40,11 70,13 T130,12 T190,14 T250,11 T293,13"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            pathLength: { duration: 0.6, delay: delay + 0.2, ease: "easeInOut" },
            opacity: { duration: 0.3, delay: delay + 0.2 }
          }}
        />
      </svg>
    </span>
  )
}
