"use client";

import { Suspense, lazy, useState } from "react";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import TopAnimation from "@/components/TopAnimation";
import About from "@/components/AboutUs";
import Experience from "@/components/Experience";
import SimpleLoading from "@/components/SimpleLoading";

// Lazy load below-the-fold components
const RecentProjects = lazy(() => import("@/components/RecentProjects"));
const Clients = lazy(() => import("@/components/Clients"));
const Approach = lazy(() => import("@/components/Approach"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingPlaceholder = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

const Home = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {!showMainContent ? (
        <SimpleLoading onComplete={() => setShowMainContent(true)} />
      ) : (
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <TopAnimation />
          <About />
          <Experience />

          <Suspense fallback={<LoadingPlaceholder />}>
            <RecentProjects />
          </Suspense>

          <Suspense fallback={<LoadingPlaceholder />}>
            <Clients />
          </Suspense>

          <Suspense fallback={<LoadingPlaceholder />}>
            <Approach />
          </Suspense>

          <Suspense fallback={<LoadingPlaceholder />}>
            <Footer />
          </Suspense>
        </div>
      )}
    </main>
  );
};

export default Home;
