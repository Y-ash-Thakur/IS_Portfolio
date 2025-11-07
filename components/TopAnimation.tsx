"use client";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-white overflow-hidden">
      {/* Wrapper that allows visible overflow */}
      <div className="relative w-[90%] max-w-4xl flex justify-center items-center py-8" style={{ overflow: "visible" }}>
        <motion.div style={{ overflow: "visible" }}>
          <motion.h1
            className={`${pacifico.className} text-center text-[10vw] md:text-[8vw] font-bold
            bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700
            text-transparent bg-clip-text select-none pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]
            leading-[1.3] pb-8`}
            initial={{
              clipPath: "inset(0% 100% 0% 0%)",
              scale: 0.85,
              opacity: 0.8,
            }}
            animate={{
              clipPath: "inset(0% 0% 0% 0%)",
              scale: [0.85, 1.2, 1.1],
              opacity: 1,
            }}
            transition={{
              clipPath: {
                duration: 4.5,
                ease: "easeInOut",
              },
              scale: {
                delay: 4.2,
                duration: 1,
                ease: [0.68, -0.55, 0.27, 1.55],
              },
            }}
          >
            SpecBadge
          </motion.h1>
          <motion.h5
              className="mt-4 text-gray-500 text-sm md:text-base text-bold text-center tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.2, duration: 0.6, ease: 'easeOut' }}
          >
            Fueling Potential, Transforming Future
          </motion.h5>
        </motion.div>
      </div>
    </div>
  );
}
