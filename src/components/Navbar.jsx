import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";

const TOP_THRESHOLD = 80;
const SCROLL_STOP_MS = 520;

const MEGA_MENUS = {
  "shop-by": {
    heading: "Shop by",
    description:
      "Explore the collection the way you think — by what’s new, what’s loved, or where it will live.",
    columns: [
      {
        title: "Curations",
        items: [
          "New arrivals",
          "Bestsellers",
          "Signature pieces",
          "Limited runs",
        ],
      },
      {
        title: "Spaces",
        items: ["Living", "Dining", "Bedroom", "Workspace"],
      },
    ],
    featured: [
      { label: "Karve Dining Set", meta: "Dining · Solid oak", image: "/dining1.avif" },
      { label: "Branch Office Set", meta: "Workspace · Light oak", image: "/dining2.webp" },
      { label: "Studio Corner", meta: "Living · Mixed timber", image: "/dining3.jpg" },
    ],
  },
  beds: {
    heading: "Beds",
    description:
      "Frames, headboards and complete systems, built for quiet, lasting rest.",
    columns: [
      {
        title: "Types",
        items: ["Platform beds", "Panel beds", "Upholstered beds"],
      },
      {
        title: "Sizes",
        items: ["King", "Queen", "Double", "Single"],
      },
    ],
    featured: [
      { label: "Karve Bed", meta: "Oak · Hand-oiled", image: "/bed1.jpeg" },
      { label: "Crest Bed", meta: "Boucle · Floating frame", image: "/bed2.jpeg" },
      { label: "Terra Bed", meta: "Rattan & oak", image: "/bed3.avif" },
    ],
  },
  sofas: {
    heading: "Sofas",
    description:
      "Two-seaters, three-seaters and sectionals for rooms that are lived in, not staged.",
    columns: [
      { title: "Forms", items: ["Sectionals", "Two-seaters", "Three-seaters"] },
      { title: "Feel", items: ["Linen", "Boucle", "Leather"] },
    ],
    featured: [
      { label: "Plinth Sofa", meta: "Deep seat · Boucle", image: "/sofa1.webp" },
      { label: "Form Sectional", meta: "Oak base · Linen", image: "/sofa2.webp" },
      { label: "Grove Sofa", meta: "Walnut · Leather", image: "/sofa3.webp" },
    ],
  },
  tables: {
    heading: "Tables",
    description:
      "Dining, coffee and side tables that share one quiet material language.",
    columns: [
      { title: "Use", items: ["Dining", "Coffee", "Side", "Console"] },
      { title: "Materials", items: ["Oak", "Walnut", "Concrete", "Marble"] },
    ],
    featured: [
      { label: "Meso Dining Table", meta: "Solid oak", image: "/table1.avif" },
      { label: "Slab Coffee Table", meta: "Walnut · Live-edge", image: "/table2.jpg" },
      { label: "Terra Dining Table", meta: "Concrete & oak", image: "/table3.webp" },
    ],
  },
  chairs: {
    heading: "Chairs",
    description:
      "Dining, lounge and accent seating with one consistent point of view.",
    columns: [
      { title: "Types", items: ["Dining chairs", "Lounge chairs", "Stools"] },
      { title: "Details", items: ["Timber frames", "Upholstered seats", "Woven"] },
    ],
    featured: [
      { label: "Form Lounge Chair", meta: "Oak & fabric", image: "/chair1.jpeg" },
      { label: "Volta Dining Chair", meta: "Ash · Spindle back", image: "/chair2.jpg" },
      { label: "Terra Lounge Chair", meta: "Velvet", image: "/chair3.jpg" },
    ],
  },
  consoles: {
    heading: "Consoles",
    description:
      "Entry and living consoles for keys, art and light — small pieces with real presence.",
    columns: [
      { title: "Placement", items: ["Hallway", "Living", "Bedroom"] },
      { title: "Profiles", items: ["Open", "With drawers", "With shelf"] },
    ],
    featured: [
      { label: "Slab Console", meta: "Single-plank oak", image: "/console1.jpeg" },
      { label: "Arch Console", meta: "Blackened oak", image: "/console2.jpeg" },
      { label: "Meso Console", meta: "Matte white", image: "/console3.jpeg" },
    ],
  },
  "dining-sets": {
    heading: "Dining sets",
    description:
      "Complete tables and seating, scaled to the way you gather.",
    columns: [
      { title: "Seat count", items: ["4-seat", "6-seat", "8-seat"] },
      { title: "Finish", items: ["Natural oak", "Smoked walnut", "Blackened"] },
    ],
    featured: [
      { label: "Karve Dining Set", meta: "Oak · 6-seat", image: "/dining4.jpg" },
      { label: "Plinth Dining Set", meta: "Walnut · 8-seat", image: "/dining5.jpg" },
      { label: "Terra Dining Set", meta: "Concrete & oak", image: "/dining6.jpg" },
    ],
  },
};

const Navbar = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  // On non-home pages the navbar is always solid white + dark text.
  // On homepage it transitions from transparent/white over the hero to solid once scrolled past it.
  const solidNav = !isHomePage || isScrolled;
  // If any mega menu is open, force the navbar into solid state even over the hero.
  const hasMegaOpen = !!(activeMenu && MEGA_MENUS[activeMenu]);
  const navIsSolid = solidNav || hasMegaOpen;

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
          navIsSolid ? "bg-white shadow-md" : "bg-transparent shadow-none"
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
        <nav className="max-w-[1600px] mx-auto px-5 lg:px-10 2xl:px-16">
          <div className="flex items-center justify-between h-16 lg:h-20 2xl:h-24">
            {/* Left: menu items only */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {[
                { to: "/collection/dining-sets", label: "DINING SETS", key: "dining-sets" },
                { to: "/collection/sofas", label: "SOFAS", key: "sofas" },
                { to: "/collection/tables", label: "TABLES", key: "tables" },
                { to: "/collection/chairs", label: "CHAIRS", key: "chairs" },
                { to: "/collection/consoles", label: "CONSOLES", key: "consoles" },
                { to: "/collection/beds", label: "BEDS", key: "beds" },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onMouseEnter={() => setActiveMenu(link.key)}
                >
                  {({ isActive }) => (
                    <span
                      className={`text-[11px] tracking-[0.26em] uppercase font-normal transition-colors duration-200 ${
                        navIsSolid
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
                  navIsSolid ? "text-neutral-900" : "text-white"
                }`}
                style={{ fontWeight: 300 }}
              >
                MYSTIQUE.
              </Link>
            </div>

            {/* Right: icons only */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {/* Right side text links */}
              {[
                { to: "/collection/beds", label: "SHOP BY", key: "shop-by" },
                { to: "/#about", label: "ABOUT US", key: null },
                { to: "/blog", label: "BLOGS", key: null },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onMouseEnter={() => link.key && setActiveMenu(link.key)}
                  className={`text-[11px] tracking-[0.22em] uppercase font-normal transition-colors duration-200 ${
                    navIsSolid ? "text-neutral-700 hover:text-neutral-900" : "text-white hover:text-white/90"
                  }`}
                  style={{ letterSpacing: "0.22em" }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Contact / Enquiry button */}
              <Link
                to="/contact"
                className={`group inline-flex items-center gap-2 border px-4 py-2 transition-colors duration-300 ${
                  navIsSolid
                    ? "border-neutral-300 hover:border-neutral-900"
                    : "border-white/60 hover:border-white"
                }`}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  className={`text-[11px] uppercase ${
                    navIsSolid ? "text-neutral-900" : "text-white"
                  }`}
                  style={{ fontWeight: 400, letterSpacing: "0.2em" }}
                >
                  Contact / Enquire
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Mega menu panel */}
        {activeMenu && MEGA_MENUS[activeMenu] && (
          <div
            className="hidden md:block border-t border-neutral-100"
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-[1600px] mx-auto px-5 lg:px-10 2xl:px-16 py-8 lg:py-9 flex gap-10 lg:gap-14">
              {/* Left: heading + description */}
              <div className="w-[26%] min-w-[240px]">
                <p
                  className="uppercase text-neutral-400 mb-3"
                  style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
                >
                  {MEGA_MENUS[activeMenu].heading}
                </p>
                <p
                  className="text-neutral-800"
                  style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.02em", lineHeight: 1.6 }}
                >
                  {MEGA_MENUS[activeMenu].description}
                </p>
              </div>

              {/* Middle: columns */}
              <div className="flex-1 flex gap-10 lg:gap-14">
                {MEGA_MENUS[activeMenu].columns.map((col) => (
                  <div key={col.title} className="min-w-[140px]">
                    <p
                      className="uppercase text-neutral-500 mb-3"
                      style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.22em" }}
                    >
                      {col.title}
                    </p>
                    <ul className="space-y-1.5">
                      {col.items.map((item) => (
                        <li
                          key={item}
                          className="text-neutral-700 hover:text-neutral-900 cursor-pointer transition-colors duration-150"
                          style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.01em" }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right: featured pieces */}
              <div className="w-[32%] flex flex-col gap-3">
                <p
                  className="uppercase text-neutral-400"
                  style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.22em" }}
                >
                  Featured pieces
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {MEGA_MENUS[activeMenu].featured.map((feat) => (
                    <div key={feat.label} className="group cursor-pointer">
                      <div className="w-full bg-neutral-100 aspect-[4/5] overflow-hidden">
                        <img
                          src={feat.image}
                          alt={feat.label}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <p
                        className="mt-2 text-neutral-900"
                        style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.14em", textTransform: "uppercase" }}
                      >
                        {feat.label}
                      </p>
                      <p
                        className="text-neutral-500"
                        style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.04em" }}
                      >
                        {feat.meta}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );

  // Render navbar via portal to document.body so it's always on top
  return typeof document !== 'undefined' 
    ? createPortal(navbarContent, document.body)
    : navbarContent;
};

export default Navbar;