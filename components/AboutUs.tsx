"use client"

import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-28 mt-10 md:mt-24 z-20 scroll-mt-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 backdrop-blur px-8 md:px-12 py-10 md:py-14 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)]">
        <div className="md:col-span-2 flex items-start">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            About Us
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="md:col-span-3 space-y-5"
        >
          <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            We are a team of engineers and designers crafting modern, performant digital experiences.
            From brand websites to complex web apps, we combine design systems with scalable
            engineering using Next.js, TypeScript and Three.js to create work that feels delightful
            and moves your goals forward.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 md:p-6 shadow-sm">
              <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Focus</p>
              <p className="text-slate-900 dark:text-white font-semibold">Performance & Accessibility</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 md:p-6 shadow-sm">
              <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Stack</p>
              <p className="text-slate-900 dark:text-white font-semibold">Next.js, TypeScript, Tailwind</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 md:p-6 shadow-sm">
              <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Approach</p>
              <p className="text-slate-900 dark:text-white font-semibold">Design-led, data-informed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
