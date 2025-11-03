import React from "react";
import { cn } from "../../lib/utils";
import { GlowingEffect } from "./GlowingEffect";

interface BentoCardData {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  background?: React.ReactNode;
  customIcon?: React.ReactNode;
}

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: BentoCardData[];
  columns?: number;
  rowHeight?: string;
}

export const BentoGrid = ({
  cards,
  columns = 3,
  rowHeight = "auto",
  className,
  ...props
}: BentoGridProps) => {
  return (
    <div
      className={cn(
        `grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[12rem]`,
        className
      )}
      {...props}
    >
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className={cn(
              "relative overflow-hidden rounded-lg p-4 sm:p-6",
              "bg-white/5 backdrop-blur-lg",
              "border text-white group",
              card.className
            )}
            style={{ borderColor: '#27272A' }}
          >
            <GlowingEffect
              disabled={false}
              proximity={250}
              spread={30}
              blur={2}
              borderWidth={6}
              glow={true}
              movementDuration={0.3}
              inactiveZone={0.1}
            />
            {/* Background on right side */}
            {card.background && (
              <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 flex items-center justify-center">
                {card.background}
              </div>
            )}
            {/* Content on left side */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-start">
                {card.customIcon ? card.customIcon : <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />}
              </div>
              <div>
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-white tracking-widest"
                  style={{ fontFamily: "'Druk Trial', sans-serif" }}
                >
                  {card.title}
                </h3>
                <p 
                  className="text-xs sm:text-sm text-gray-400"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
