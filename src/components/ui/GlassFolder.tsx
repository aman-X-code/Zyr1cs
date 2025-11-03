"use client";

import React from "react";
import { cn } from "../../lib/utils";

type GlassFolderProps = {
  icon?: React.ReactNode;
  className?: string;
};

const GlassFolder: React.FC<GlassFolderProps> = ({ icon, className }) => {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center pointer-events-none",
        className
      )}
      style={{ paddingTop: '20px' }}
    >
      <div className="relative w-60 h-40 origin-bottom [perspective:1500px]">
        {/* Top tab */}
        <div className="bg-white/20 backdrop-blur-md w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-white/20 after:backdrop-blur-md after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-white/20 before:backdrop-blur-md before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"></div>

        {/* Folder layers */}
        <div className="absolute inset-1 bg-white/10 backdrop-blur-md rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"></div>
        <div className="absolute inset-1 bg-white/10 backdrop-blur-md rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"></div>
        <div className="absolute inset-1 bg-white/10 backdrop-blur-md rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"></div>

        {/* Front folder layer with icon */}
        <div className="absolute bottom-0 bg-white/15 backdrop-blur-md w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-white/15 after:backdrop-blur-md after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-white/15 before:backdrop-blur-md before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-center justify-center group-hover:shadow-[inset_0_20px_40px_rgba(255,255,255,0.2),inset_0_-20px_40px_rgba(255,255,255,0.1)] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
          <div className="relative z-[100] flex items-center justify-center w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm" style={{ color: 'white' }}>
            <div style={{ color: 'white', stroke: 'white', fill: 'none' }}>
              {icon}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassFolder;
