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
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
  logo = {
    src: "/SpecBadgeLogo.png",
    alt: "Company Logo",
    width: 140,
    height: 48,
  }
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", () => {
    setVisible(true);
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
          "flex max-w-[95vw] sm:max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-4 sm:top-6 md:top-10 inset-x-0 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg border border-neutral-200 bg-white shadow-[0px_6px_12px_-6px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.06)] items-center justify-between sm:justify-center space-x-2 sm:space-x-4 md:space-x-6",
          className
        )}
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      >
        {/* Company Logo - Left Side */}
        <Link
          href='/'
          className="flex items-center mr-2 sm:mr-4 md:mr-6 hover:opacity-90 transition-opacity flex-shrink-0"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width || 140}
            height={logo.height || 48}
            className="rounded-lg h-8 sm:h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-2 text-slate-800 hover:text-slate-900 transition-colors"
              )}
            >
              <span className="text-sm md:text-base font-medium !cursor-pointer whitespace-nowrap">
                {navItem.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Tablet Navigation - Show icons with text */}
        <nav className="hidden sm:flex md:hidden items-center space-x-3">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link-tablet=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex flex-col space-y-1 text-slate-800 hover:text-slate-900 transition-colors"
              )}
            >
              {navItem.icon && (
                <span className="text-lg">{navItem.icon}</span>
              )}
              <span className="text-xs font-medium !cursor-pointer whitespace-nowrap">
                {navItem.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-slate-800 rounded"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-slate-800 rounded"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-slate-800 rounded"
          />
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-lg border border-neutral-200 shadow-lg overflow-hidden md:hidden"
            >
              <nav className="flex flex-col py-2">
                {navItems.map((navItem: any, idx: number) => (
                  <Link
                    key={`link-mobile=${idx}`}
                    href={navItem.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 text-slate-800 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    )}
                  >
                    {navItem.icon && (
                      <span className="text-xl flex-shrink-0">{navItem.icon}</span>
                    )}
                    <span className="text-base font-medium !cursor-pointer">
                      {navItem.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
