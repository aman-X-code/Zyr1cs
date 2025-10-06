"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const UnicornScene = dynamic(() => import("unicornstudio-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />,
});

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

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowSize, isClient };
};

export const Component = () => {
  const { windowSize, isClient } = useWindowSize();

  return (
    <div className={cn("flex flex-col items-center w-full h-full", isClient ? "" : "bg-black")} suppressHydrationWarning>
      {isClient && windowSize.width > 0 ? (
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

