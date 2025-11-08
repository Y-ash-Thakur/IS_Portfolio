"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import About from "@/components/AboutUs";
import SimpleLoading from "@/components/SimpleLoading";
import TopAnimation from "@/components/TopAnimation";

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <AnimatePresence mode="wait">
        {showLoader ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          >
            {/* <SimpleLoading /> */}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-7xl w-full"
          >
            <FloatingNav navItems={navItems} />
            <TopAnimation />
            <About />
            {/* <Grid /> */}
            <Experience />
            <RecentProjects />
            <Clients />
            <Approach />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;
