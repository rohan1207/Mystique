import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Listen to Lenis scroll events instead of native scroll
    const handleLenisScroll = ({ scroll, limit, velocity, direction, progress }) => {
      setIsScrolled(scroll > 50);
    };

    // Fallback to native scroll if Lenis isn't available
    const handleNativeScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check if Lenis is available (it's exposed globally in SmoothScroll)
    let checkInterval;
    let cleanup;
    
    const checkLenis = () => {
      if (window.lenis) {
        // Subscribe to scroll events
        window.lenis.on('scroll', handleLenisScroll);
        // Also check initial scroll position
        setIsScrolled(window.lenis.scroll > 50);
        
        // Clear any pending interval
        if (checkInterval) {
          clearInterval(checkInterval);
          checkInterval = null;
      }
        
        return () => {
          if (window.lenis) {
            window.lenis.off('scroll', handleLenisScroll);
          }
        };
      }
      return null;
    };

    // Initial check
    cleanup = checkLenis();
    
    // If Lenis not ready, check periodically and use native scroll as fallback
    if (!cleanup) {
      window.addEventListener("scroll", handleNativeScroll, { passive: true });
      checkInterval = setInterval(() => {
        const newCleanup = checkLenis();
        if (newCleanup) {
          cleanup = newCleanup;
          window.removeEventListener("scroll", handleNativeScroll);
          clearInterval(checkInterval);
          checkInterval = null;
        }
      }, 100);
    }

    return () => {
      if (cleanup) cleanup();
      if (checkInterval) clearInterval(checkInterval);
      window.removeEventListener("scroll", handleNativeScroll);
    };
  }, []);

  const navbarContent = (
    <>
      <style>{`
        .navbar-always-visible {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 9999 !important;
          transform: translateZ(0) !important;
          will-change: auto !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
      <header
        className={`navbar-always-visible transition-all duration-700 ease-in-out rounded-sm ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent shadow-none"
        }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 9999,
          display: 'block',
          visibility: 'visible',
        }}
      >
        <nav className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-28">
            {/* Left: Inline navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {[
                { to: "/", label: "Home" },
                { to: "/collections", label: "Collections" },
                { to: "/bespoke", label: "Bespoke" },
                { to: "/studio", label: "Studio" },
              ].map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {({ isActive }) => (
                    <span
                      className={`text-xs lg:text-sm tracking-[0.18em] uppercase transition-colors duration-300 ${
                        isActive
                          ? "text-[#8b5a2b]"
                          : "text-neutral-800 hover:text-[#a06a36]"
                      }`}
                    >
                      {link.label}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link to="/">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                >
                  <img
                    src={isScrolled ? "/logo.png" : "/logo.png"}
                    alt="Nirlovya Furniture Atelier"
                    className="h-14 lg:h-20 w-auto object-contain"
                  />
                </motion.div>
              </Link>
            </div>

            {/* Right: Inline navigation + CTA */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {[
                { to: "/journal", label: "Journal" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {({ isActive }) => (
                    <span
                      className={`text-xs lg:text-sm tracking-[0.18em] uppercase transition-colors duration-300 ${
                        isActive
                          ? "text-[#8b5a2b]"
                          : "text-neutral-800 hover:text-[#a06a36]"
                      }`}
                    >
                      {link.label}
                    </span>
                  )}
                </NavLink>
              ))}
              <Link
                to="/booking"
                className="px-3 lg:px-8 py-2 lg:py-3 rounded-full text-xs lg:text-base font-medium transition-all duration-700 bg-[#8b5a2b] text-white hover:bg-[#a06a36] hover:shadow-xl transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );

  // Render navbar via portal to document.body so it's always on top
  return typeof document !== 'undefined' 
    ? createPortal(navbarContent, document.body)
    : navbarContent;
};

export default Navbar;