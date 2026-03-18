import React from "react";
import { motion } from "framer-motion";

const IMAGES = [
  "/chair1.jpeg",
  "/sofa1.webp",
  "/table1.avif",
  "/bed1.jpeg",
  "/console1.jpeg",
  "/dining1.avif",
  "/chair4.webp",
  "/sofa4.jpg",
];

export default function OurGallery() {
  return (
    <section
      className="w-full bg-white py-16 lg:py-24"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 2xl:px-16">
        {/* Header row */}
        <div className="flex items-baseline justify-between mb-8 lg:mb-10">
          <div>
            <p
              className="uppercase text-neutral-500 mb-3"
              style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
            >
              Our gallery
            </p>
            <p
              className="text-neutral-900"
              style={{
                fontSize: "clamp(22px, 2.6vw, 30px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Moments from the studio floor.
            </p>
          </div>

          <button
            className="hidden sm:inline-flex items-center gap-2 group text-neutral-900 hover:text-neutral-600 transition-colors duration-300"
            style={{
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              className="group-hover:border-neutral-600 transition-colors duration-300"
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.55)",
                paddingBottom: "2px",
              }}
            >
              View gallery
            </span>
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Marquee rail */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent" />

          <motion.div
            className="flex gap-4 lg:gap-6"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-35%", "0%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {[...IMAGES, ...IMAGES].map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="shrink-0 w-52 sm:w-64 lg:w-72 aspect-[4/5] overflow-hidden bg-neutral-100"
              >
                <img
                  src={src}
                  alt="Mystique gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

