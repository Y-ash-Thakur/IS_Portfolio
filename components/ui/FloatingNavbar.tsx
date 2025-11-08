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
// import Image from "next/image";

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

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", () => {
  setVisible(true);
});


  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-12 py-6 rounded-lg border border-neutral-200 bg-white shadow-[0px_6px_12px_-6px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.06)] items-center justify-center space-x-6",
          className
        )}
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      >

{navItems.map((navItem: any, idx: number) => {
  const isCareer =
    navItem.name.toLowerCase() === "career" ||
    navItem.name.toLowerCase() === "careers";

  const buttonClasses = cn(
  "px-4 py-2 rounded-md transition-all duration-200 font-medium text-sm md:text-base",
  "bg-transparent text-slate-800 border border-transparent",
  "hover:bg-blue-400 hover:text-white"
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
    <Link key={`link=${idx}`} href={navItem.link} className="flex items-center">
      <button className={buttonClasses}>{navItem.name}</button>
    </Link>
  );
})}

      </motion.div>
    </AnimatePresence>
  );
};
