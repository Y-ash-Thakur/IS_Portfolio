"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        // max-w-7xl to w-screen
        "scroller relative z-20 w-screen overflow-hidden  ", // [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]
        // testimonial blur effect removed 
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          // change gap-16
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[40vw] xl:w-[35vw] 
                      max-w-[500px] relative rounded-2xl border border-b-0
                      flex-shrink-0 border-slate-800 p-5 sm:p-6 md:p-8 
                      flex flex-col justify-between min-h-[260px] sm:min-h-[300px]"
            style={{
              background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <blockquote className="flex flex-col justify-between h-full">
              {/* Quote section */}
              <span className="relative z-20 text-sm sm:text-base md:text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>

              {/* Fixed bottom name section */}
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <img
                    src="/profile.svg"
                    alt="profile"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
                <span className="flex flex-col gap-1">
                  <span className="text-base sm:text-lg font-bold leading-[1.6] text-white">
                    {item.name}
                  </span>
                  <span className="text-xs sm:text-sm leading-[1.6] text-white-200 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>


        ))}
      </ul>
    </div>
  );
};
