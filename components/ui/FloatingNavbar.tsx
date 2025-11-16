"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
          // ✅ Center instead of justify-between
          "fixed top-5 inset-x-0 z-[5000] flex items-center justify-center",
          "rounded-xl border border-neutral-200 bg-white/90 shadow-lg backdrop-blur-md",
          "px-3 sm:px-6 py-2 sm:py-3",
          "w-[92%] sm:w-[90%] max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto",
          className
        )}
      >
        {/* ✅ Group logo + navigation items together */}
        <div className="flex items-center gap-5 sm:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/SpecBadgeLogo.png"
            alt="SpecBadge Logo"
            width={140}
            height={25}
            priority
            className="h-auto w-auto rounded-md"
          />
        </Link>


          {/* Navigation Items */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            {navItems.map((navItem, idx) => {
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
                  key={`link-${idx}`}
                  href={navItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <button className={buttonClasses}>{navItem.name}</button>
                </a>
              ) : (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className="flex items-center"
                >
                  <button className={buttonClasses}>{navItem.name}</button>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
