import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag } from "lucide-react";

const TOP_THRESHOLD = 80;
const SCROLL_STOP_MS = 520;

const Navbar = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // On non-home pages the navbar is always solid white + dark text.
  // On homepage it transitions from transparent/white over the hero to solid once scrolled past it.
  const solidNav = !isHomePage || isScrolled;

  useEffect(() => {
    let lastScrollY = 0;
    let scrollStopTimer = null;

    const heroThreshold =
      typeof window !== "undefined"
        ? Math.max(window.innerHeight - 160, 80)
        : 200;

    const update = (scrollY) => {
      setIsScrolled(scrollY >= heroThreshold);

      if (scrollY <= TOP_THRESHOLD) {
        setIsNavbarVisible(true);
        if (scrollStopTimer) {
          clearTimeout(scrollStopTimer);
          scrollStopTimer = null;
        }
        lastScrollY = scrollY;
        return;
      }

      const goingDown = scrollY > lastScrollY;
      lastScrollY = scrollY;

      if (goingDown) {
        setIsNavbarVisible(false);
        if (scrollStopTimer) clearTimeout(scrollStopTimer);
        scrollStopTimer = setTimeout(() => {
          setIsNavbarVisible(true);
          scrollStopTimer = null;
        }, SCROLL_STOP_MS);
      } else {
        setIsNavbarVisible(true);
        if (scrollStopTimer) {
          clearTimeout(scrollStopTimer);
          scrollStopTimer = null;
        }
      }
    };

    const handleLenisScroll = ({ scroll }) => update(scroll);
    const handleNativeScroll = () => {
      if (typeof window !== "undefined") update(window.scrollY);
    };

    let cleanup = null;
    let checkInterval = null;

    const checkLenis = () => {
      if (window.lenis) {
        window.lenis.on("scroll", handleLenisScroll);
        setIsScrolled(window.lenis.scroll >= heroThreshold);
        lastScrollY = window.lenis.scroll;
        if (checkInterval) {
          clearInterval(checkInterval);
          checkInterval = null;
        }
        return () => {
          if (window.lenis) window.lenis.off("scroll", handleLenisScroll);
        };
      }
      return null;
    };

    cleanup = checkLenis();
    if (!cleanup) {
      window.addEventListener("scroll", handleNativeScroll, { passive: true });
      lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
      checkInterval = setInterval(() => {
        const c = checkLenis();
        if (c) {
          cleanup = c;
          window.removeEventListener("scroll", handleNativeScroll);
          if (checkInterval) clearInterval(checkInterval);
        }
      }, 100);
    }

    return () => {
      if (cleanup) cleanup();
      if (checkInterval) clearInterval(checkInterval);
      if (scrollStopTimer) clearTimeout(scrollStopTimer);
      window.removeEventListener("scroll", handleNativeScroll);
    };
  }, []);

  const navbarContent = (
    <>
      <style>{`
        .navbar-smart {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 9999 !important;
          will-change: transform !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
      <header
        className={`navbar-smart transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          solidNav
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
          transform: isNavbarVisible ? 'translateY(0)' : 'translateY(-100%)',
          pointerEvents: isNavbarVisible ? 'auto' : 'none',
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        }}
      >
        <nav className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left: menu items only */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {[
                { to: "/seating", label: "SEATING" },
                { to: "/tables", label: "TABLES" },
                { to: "/objects", label: "OBJECTS" },
              ].map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {({ isActive }) => (
                    <span
                      className={`text-[11px] tracking-[0.26em] uppercase font-normal transition-colors duration-200 ${
                        solidNav
                          ? isActive
                            ? "text-neutral-900"
                            : "text-neutral-600 hover:text-neutral-900"
                          : "text-white hover:text-white/90"
                      }`}
                    >
                      {link.label}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Center: brand */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link
                to="/"
                className={`text-[13px] lg:text-[15px] tracking-[0.22em] uppercase transition-colors duration-200 ${
                  solidNav ? "text-neutral-900" : "text-white"
                }`}
                style={{ fontWeight: 300 }}
              >
                MYSTIQUE.
              </Link>
            </div>

            {/* Right: icons only */}
            <div className="hidden md:flex items-center gap-5">
              <button
                aria-label="Search"
                className={`p-1 transition-colors duration-200 ${
                  solidNav ? "text-neutral-900" : "text-white"
                }`}
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                aria-label="Bag"
                className={`p-1 transition-colors duration-200 ${
                  solidNav ? "text-neutral-900" : "text-white"
                }`}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
              </button>
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