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
import { HiOutlineMenu, HiX } from "react-icons/hi";

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

  // Mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", () => {
    setVisible(true);
  });

  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed top-5 inset-x-0 z-[5000] flex items-center justify-center",
            "rounded-xl border border-neutral-200 bg-white/90 shadow-lg backdrop-blur-md",
            "px-3 sm:px-6 py-2 sm:py-3",
            "w-[92%] sm:w-[90%] max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto",
            className
          )}
        >
          {/* DESKTOP NAVBAR (unchanged) */}
          <div className="hidden sm:flex items-center gap-5 sm:gap-8">
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

            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
              {navItems.map((navItem, idx) => {
                const isCareer =
                  navItem.name.toLowerCase() === "career" ||
                  navItem.name.toLowerCase() === "careers";

                const buttonClasses = cn(
                  "px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-all duration-200 font-medium text-sm",
                  "bg-transparent text-slate-800 border border-transparent",
                  "hover:bg-indigo-500 hover:text-white"
                );

                return isCareer ? (
                  <a
                    key={`desktop-${idx}`}
                    href={navItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={buttonClasses}>{navItem.name}</button>
                  </a>
                ) : (
                  <Link key={`desktop-${idx}`} href={navItem.link}>
                    <button className={buttonClasses}>{navItem.name}</button>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* MOBILE NAVBAR */}
          <div className="flex w-full items-center justify-between sm:hidden">
            {/* Centered Logo */}
            <Link href="/" className="mx-auto">
              <Image
                src="/SpecBadgeLogo.png"
                alt="SpecBadge Logo"
                width={120}
                height={25}
                priority
                className="h-auto w-auto rounded-md"
              />
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="absolute right-4 text-slate-800"
            >
              <HiOutlineMenu size={28} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ===================== FULL-SCREEN MOBILE MENU ===================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[6000] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center space-y-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <HiX size={32} />
            </button>

            {/* Menu Items */}
            {navItems.map((navItem, idx) => (
              <motion.div
                key={`mobile-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={navItem.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-white font-semibold hover:text-purple-300 transition"
                >
                  {navItem.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
