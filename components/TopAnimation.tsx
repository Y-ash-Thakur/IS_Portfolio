"use client";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full z-[0]
        bg-[radial-gradient(ellipse_120%_80%_at_80%_80%,rgba(99,102,241,0.25),rgba(255,255,255,0))]
        dark:bg-[radial-gradient(ellipse_120%_80%_at_80%_60%,rgba(147,51,234,0.35),rgba(255,255,255,0))]"
      />

      <div
        className="relative w-[90%] max-w-4xl flex justify-center items-center py-8 z-[10]"
        style={{ overflow: "visible" }}
      >
        <motion.div style={{ overflow: "visible" }}>
          {/* SpecBadge heading */}
          <motion.h1
            className={`${pacifico.className} text-center text-[10vw] md:text-[8vw] font-bold
              bg-gradient-to-r from-[#0B123D] via-[#3F2E7A] to-[#6C1E9C]
              text-transparent bg-clip-text select-none pointer-events-none
              leading-[1.3] pb-8`}
            initial={{
              clipPath: "inset(0% 100% 0% 0%)",
              scale: 0.85,
              opacity: 0,
            }}
            animate={{
              clipPath: "inset(0% 0% 0% 0%)",
              scale: [0.85, 1.1, 1],
              opacity: 1,
            }}
            transition={{
              clipPath: {
                duration: 3, // slower and smoother
                ease: "easeInOut",
              },
              scale: {
                delay: 2.5, // starts after Namaste finishes
                duration: 1.8,
                ease: [0.34, 1.56, 0.64, 1], // springy but elegant
              },
              opacity: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
          >
            SpecBadge
          </motion.h1>

          {/* Subtitle */}
          <motion.h5
            className="text-gray-500 text-sm md:text-base font-semibold text-center tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 4, // after title completes
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            Fueling Potential, Transforming Future
          </motion.h5>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 mt-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 4,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* WhatsApp Icon */}
            <button
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-green-400/50 transition-all duration-300 group"
              title="Contact on WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
            </button>

            {/* Instagram Icon */}
            <button
              onClick={() =>
                window.open("https://instagram.com/yourusername", "_blank")
              }
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-pink-500/50 transition-all duration-300 group"
              title="Follow on Instagram"
            >
              <FaInstagram className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
