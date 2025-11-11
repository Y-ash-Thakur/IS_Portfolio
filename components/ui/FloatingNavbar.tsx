"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", () => {
    setVisible(true);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-5 inset-x-0 z-[5000] mx-auto flex items-center justify-center",
          "rounded-xl border border-neutral-200 bg-white/90 shadow-lg backdrop-blur-md",
          "px-4 py-3 sm:px-6 sm:py-4 space-x-3 sm:space-x-5",
          "w-[90%] max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          const isCareer =
            navItem.name.toLowerCase() === "career" ||
            navItem.name.toLowerCase() === "careers";

          const buttonClasses = cn(
            "px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-all duration-200 font-medium text-xs sm:text-sm md:text-base",
            "bg-transparent text-slate-800 border border-transparent",
            "hover:bg-indigo-500 hover:text-white"
          );

          return isCareer ? (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <button className={buttonClasses}>{navItem.name}</button>
            </a>
          ) : (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className="flex items-center"
            >
              <button className={buttonClasses}>{navItem.name}</button>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
