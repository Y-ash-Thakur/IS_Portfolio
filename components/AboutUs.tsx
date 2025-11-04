"use client"

import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <section id="about" className="relative w-full py-14 sm:py-16 md:py-20 mt-2 sm:mt-6 md:mt-10 z-20 scroll-mt-24">
      {/* Centered heading outside the card */}
      <div className="max-w-6xl mx-auto mb-5 sm:mb-6 md:mb-8 text-center px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-blue-800"
        >
          About Us
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 sm:gap-8 md:gap-12 rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-800 px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-12 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4 sm:space-y-5 text-center"
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed md:leading-8 text-black">
            We are a team of engineers and designers crafting modern, performant digital experiences.
            From brand websites to complex web apps, we combine design systems with scalable
            engineering using Next.js, TypeScript and Three.js to create work that feels delightful
            and moves your goals forward.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-5 md:p-6 shadow-sm">
              <p className="text-xs sm:text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Focus</p>
              <p className="text-slate-900 dark:text-white font-semibold text-sm sm:text-base">Performance & Accessibility</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-5 md:p-6 shadow-sm">
              <p className="text-xs sm:text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Stack</p>
              <p className="text-slate-900 dark:text-white font-semibold text-sm sm:text-base">Next.js, TypeScript, Tailwind</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-5 md:p-6 shadow-sm">
              <p className="text-xs sm:text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Approach</p>
              <p className="text-slate-900 dark:text-white font-semibold text-sm sm:text-base">Design-led, data-informed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
