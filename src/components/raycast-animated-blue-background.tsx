import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowSize, isClient };
};

export const Component = () => {
  const { windowSize, isClient } = useWindowSize();

  // Always render the same structure to prevent hydration mismatches
  return (
    <div className={cn("flex flex-col items-center w-full h-full", isClient ? "" : "bg-black")} suppressHydrationWarning>
      {isClient ? (
        <div suppressHydrationWarning>
          <UnicornScene 
            production={true} 
            projectId="ed7SJMvTJEVxfqzypOOQ" 
            width={windowSize.width} 
            height={windowSize.height}
          />
        </div>
      ) : (
        <div className="w-full h-full bg-black" suppressHydrationWarning />
      )}
    </div>
  );
};

