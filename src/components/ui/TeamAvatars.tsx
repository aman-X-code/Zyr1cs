"use client";

import React from "react";

export const TeamAvatars = () => {
  const avatars = [
    { name: "Aman", position: "right", image: "https://res.cloudinary.com/dave3np5n/image/upload/v1762159869/aman_xwwmlj.jpg" },
    { name: "M. Irung", position: "left", image: "https://i.pravatar.cc/150?img=2" },
    { name: "B. Ng", position: "right", image: "https://i.pravatar.cc/150?img=3" },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center pl-12">
      <div className="relative flex h-full w-full flex-col justify-center space-y-4 py-4">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 -translate-x-1/2" />
        
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`relative flex items-center gap-2 ${
              avatar.position === "right"
                ? "w-[calc(50%+1rem)] justify-end"
                : "ml-[calc(50%-1rem)]"
            }`}
          >
            {avatar.position === "right" && (
              <span className="block h-fit rounded border border-gray-700 px-2 py-1 text-xs text-gray-300">
                {avatar.name}
              </span>
            )}
            <div className="size-7 ring-4 ring-black rounded-full overflow-hidden">
              <img
                className="size-full rounded-full object-cover"
                src={avatar.image}
                alt={avatar.name}
              />
            </div>
            {avatar.position === "left" && (
              <span className="block h-fit rounded border border-gray-700 px-2 py-1 text-xs text-gray-300">
                {avatar.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
