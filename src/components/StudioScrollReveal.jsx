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
                Mystique Studio
              </motion.p>

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
                A contemporary furniture and objects atelier with a portfolio spanning tailored residences, intimate hospitality destinations, and quietly expressive commercial spaces.
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
                Founded to create objects and environments that feel rare, reassuringly simple, and lastingly warm.
              </motion.p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

