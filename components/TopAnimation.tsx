"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen overflow-hidden">
      <div className="relative w-[90%] max-w-4xl">
        <motion.img
          src="/SpecBadge Logo.png"
          alt="SpecBadge Logo faint"
          className="w-full h-auto absolute top-0 left-0 opacity-20 select-none pointer-events-none"
        />

        <motion.img
          src="/SpecBadge Logo.png"
          alt="SpecBadge Logo"
          className="w-full h-auto select-none pointer-events-none"
          initial={{
            clipPath: "inset(0% 100% 0% 0%)",
            scale: 1,
          }}
          animate={{
            clipPath: "inset(0% 0% 0% 0%)",
            scale: [1, 1.30, 1],
          }}
          transition={{
            clipPath: {
              duration: 4.5,
              ease: "easeInOut",
            },
            scale: {
              delay: 3.5,
              duration: 0.8,
              ease: [0.68, -0.55, 0.27, 1.55],
            },
          }}
        />
      </div>
    </div>
  );
}
