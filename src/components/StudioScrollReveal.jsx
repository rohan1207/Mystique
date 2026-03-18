import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StudioScrollReveal() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Use only the first ~70% of scroll to "draw" the image,
  // then keep it fully revealed so the motion feels smooth and controlled.
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["32%", "50%", "72%", "72%"]
  );
  const imageX = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["-22%", "-10%", "0%", "0%"]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.35, 0.7, 1],
    [0, 1, 1, 1]
  );
  const circleScale = useTransform(scrollYProgress, [0.2, 0.6], [0.7, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      <div className="h-[220vh] lg:h-[220vh] relative">
        <div className="sticky top-0 h-screen flex items-stretch overflow-hidden">
          {/* Left: image that draws in from left to right */}
          <motion.div
            style={{ width: imageWidth, x: imageX }}
            className="relative h-full bg-black"
          >
            <img
              src="/product9.jpg"
              alt="Monochrome studio portrait for Mystique"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: text block */}
          <div className="flex-1 flex items-center">
            <div className="px-6 lg:px-16 max-w-lg space-y-8">

              {/* Eyebrow label */}
              <motion.p
                style={{ opacity: textOpacity, fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
                className="uppercase text-neutral-500"
              >
                About us
              </motion.p>

              {/* Heading */}
              <motion.h2
                style={{
                  opacity: textOpacity,
                  fontSize: "clamp(26px, 2.6vw, 38px)",
                  fontWeight: 200,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
                className="text-neutral-900"
              >
                A studio for quietly expressive furniture.
              </motion.h2>

              {/* Main copy */}
              <motion.p
                style={{
                  opacity: textOpacity,
                  fontSize: "clamp(18px, 2vw, 26px)",
                  fontWeight: 200,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.45,
                }}
                className="text-neutral-900"
              >
                Mystique works at the scale of rooms and the scale of objects — designing furniture, lighting and storage that sit quietly in a space while holding it together.
              </motion.p>

              {/* Thin rule */}
              <motion.div
                style={{ opacity: textOpacity, width: "40px", height: "1px", background: "rgba(0,0,0,0.2)" }}
              />

              {/* Secondary copy */}
              <motion.p
                style={{
                  opacity: textOpacity,
                  fontSize: "13px",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  lineHeight: 1.7,
                }}
                className="text-neutral-500"
              >
                Every piece begins as a conversation around how you live: morning rituals, evening light, the way you move through a room. From there we sketch, prototype and refine until the object feels inevitable.
              </motion.p>

              {/* CTA */}
              <motion.div style={{ opacity: textOpacity }} className="pt-4">
                <button
                  className="group inline-flex items-center gap-2 text-neutral-900 hover:text-neutral-600 transition-colors duration-300"
                  style={{
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    background: "none",
                    border: "none",
                    padding: 0,
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
                    Read more
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1 text-xs">
                    →
                  </span>
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

