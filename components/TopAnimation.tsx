"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white overflow-hidden">
      {/* Logo Animation Wrapper */}
      <div className="relative w-[90%] max-w-4xl">
        {/* Transparent base for subtle outline */}
        <motion.img
          src="/SpecBadge Logo.png"
          alt="SpecBadge Logo faint"
          className="w-full h-auto absolute top-0 left-0 opacity-20 select-none pointer-events-none"
        />

        {/* Colored main logo with animation */}
        <motion.img
          src="/SpecBadge Logo.png"
          alt="SpecBadge Logo"
          className="w-full h-auto select-none pointer-events-none"
          initial={{
            clipPath: "inset(0% 100% 0% 0%)", // hidden from right side
            scale: 1,
          }}
          animate={{
            clipPath: "inset(0% 0% 0% 0%)", // reveal left → right
            scale: [1, 1.30, 1], // zoom in then bounce back
          }}
          transition={{
            clipPath: {
              duration: 4.5, // slow reveal
              ease: "easeInOut",
            },
            scale: {
              delay: 3.5, // start zoom after reveal completes
              duration: 0.8,
              ease: [0.68, -0.55, 0.27, 1.55], // natural bounce ease
            },
          }}
        />
      </div>
    </div>
  );
}
