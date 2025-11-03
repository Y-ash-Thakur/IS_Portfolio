"use client"

import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <section id="about" className="relative w-full py-20">
      <div className="w-full mx-0 text-center border border-gray-200 dark:border-gray-700 rounded-2xl py-5 shadow-lg px-10">
        <motion.h2
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-blue-700 mb-8"
          >
            About Us
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-4"
          >
            <p className="text-xl text-black leading-relaxed">
              We are a passionate team of developers and designers dedicated to crafting exceptional web experiences. With expertise in Next.js, we specialize in building dynamic, high-performance applications that captivate users and drive results.
            </p>

            <p className="text-lg text-black leading-relaxed">
              Lets 
            </p>
          </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
