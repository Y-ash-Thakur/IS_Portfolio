"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * HashCleaner Component
 * 
 * Removes hash from URL after page load to prevent persistent hash in URL.
 * Allows smooth scrolling to hash targets first, then cleans the URL.
 * Works for all hash links without breaking client-side navigation or smooth scrolling.
 */
export default function HashCleaner() {
  const pathname = usePathname();
  const cleanupTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const cleanupHash = () => {
      // Clear any existing timeout
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
        cleanupTimeoutRef.current = null;
      }

      const hash = window.location.hash;

      if (hash) {
        // Find the target element
        const element = document.querySelector(hash);

        if (element) {
          // Calculate position with offset for fixed navbar (approximately 100px)
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 100;

          // Smooth scroll to the element
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });

          // Remove hash from URL after scroll completes
          // Delay to allow smooth scroll animation to finish
          cleanupTimeoutRef.current = setTimeout(() => {
            if (window.location.hash) {
              // Use replaceState to remove hash without reloading or breaking navigation
              const cleanUrl = window.location.pathname + 
                (window.location.search || "");
              window.history.replaceState(null, "", cleanUrl);
            }
            cleanupTimeoutRef.current = null;
          }, 1000); // Wait for smooth scroll to complete
        } else {
          // If element not found, remove the hash immediately
          const cleanUrl = window.location.pathname + 
            (window.location.search || "");
          window.history.replaceState(null, "", cleanUrl);
        }
      }
    };

    // Handle hash on initial mount and route changes
    // Use a small delay to ensure DOM is ready
    const timeoutId = setTimeout(cleanupHash, 100);

    return () => {
      clearTimeout(timeoutId);
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
        cleanupTimeoutRef.current = null;
      }
    };
  }, [pathname]); // Re-run when route changes

  // Handle hash changes from navigation (when clicking hash links)
  useEffect(() => {
    const scrollAndCleanup = (hash: string) => {
      // Clear any existing timeout
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
        cleanupTimeoutRef.current = null;
      }

      const element = document.querySelector(hash);
      
      if (element) {
        // Scroll with offset for navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });

        // Remove hash after scroll completes
        cleanupTimeoutRef.current = setTimeout(() => {
          if (window.location.hash) {
            const cleanUrl = window.location.pathname + 
              (window.location.search || "");
            window.history.replaceState(null, "", cleanUrl);
          }
          cleanupTimeoutRef.current = null;
        }, 1000);
      } else {
        // Element not found, remove hash immediately
        const cleanUrl = window.location.pathname + 
          (window.location.search || "");
        window.history.replaceState(null, "", cleanUrl);
      }
    };

    const handleHashChange = () => {
      // When hash changes (user clicks a hash link), clean it up after scrolling
      if (window.location.hash) {
        scrollAndCleanup(window.location.hash);
      }
    };

    // Listen for hash changes (when clicking hash links)
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
        cleanupTimeoutRef.current = null;
      }
    };
  }, [pathname]);

  return null; // This component doesn't render anything
}

