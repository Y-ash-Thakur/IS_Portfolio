"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SimpleLoading = () => {
  const [show, setShow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "नमस्ते", "Namaste", "নমস্কার", "ನಮಸ್ಕಾರ", 
    "નમસ્તે", "నమస్కారం", "வணக்கம்", "नमस्कार"
  ];

  useEffect(() => {
    // change text every 800ms
    const textInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // it is used to restart the index after reaching the last element
    },800);

    const timer = setTimeout(() => {
      setShow(false);
      clearInterval(textInterval);
    }, 7000); // hide after 7 seconds

    return () => {
      clearInterval(textInterval);
      clearTimeout(timer);
    };
  }, [texts.length]);

    return (
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ scale: 0.8, opacity: 0}}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 1.2, opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-6xl md:text-8xl text-white font-bold text-center"
              >
                {texts[currentIndex]}
              </motion.h1>
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    )

  }

  export default SimpleLoading;