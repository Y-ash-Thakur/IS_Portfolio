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
    <div className="relative flex items-center justify-center w-full h-screen bg-white overflow-hidden">
      {/* Wrapper that allows visible overflow */}
      <div className="relative w-[90%] max-w-4xl flex justify-center items-center py-8" style={{ overflow: "visible" }}>
        <motion.div style={{ overflow: "visible" }}>
        <motion.h1
            className={`${pacifico.className} text-center text-[10vw] md:text-[8vw] font-bold
            bg-gradient-to-r from-[#0B123D] via-[#3F2E7A] to-[#6C1E9C]
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
              className="text-gray-500 text-sm md:text-base text-bold text-center tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.2, duration: 0.6, ease: 'easeOut' }}
          >
            Fueling Potential, Transforming Future
          </motion.h5>

          {/* social icons */}
          <motion.div className="flex gap-4 mt-6 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.2, duration: 0.6, ease: 'easeOut' }}
          >
              {/* Whatsapp Icon */}
              <button onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-salte-600 hover:border-green-400/50 transition-all duration-300 group"
                title="Contact on WhatsApp"
                >
                <FaWhatsapp className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transfrom"/>
              </button>

              {/* Instagram Icon */}
              <button onClick={() => window.open('https://instagram.com/yourusername', '_blank')}
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-salte-600 hover:border-pink-500/50 transition-all duration-300 group"
                title="Follow on Instagram"
                >
                  <FaInstagram className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transfrom"/>
              </button>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
}