import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SERVICES = [
  {
    label: "BEDS",
    image: "/product9.jpg",
  },
  {
    label: "CONSOLES",
    image: "/product10.jpg",
  },
  {
    label: "CHAIRS",
    image: "/product11.jpg",
  },
  {
    label: "TABLES",
    image: "/product12.jpg",
  },
  {
    label: "SOFAS",
    image: "/product13.jpg",
  },
  {
    label: "DINING SETS",
    image: "/product14.jpg",
  },
];

export default function WhatWeDo() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Stage 1: big "WE DO" centred, bold & dark.
  // Stage 2: as we scroll, they drift apart and fade.
  const titleScale = useTransform(scrollYProgress, [0, 0.25], [1.15, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 0.9, 0.3]);

  const weX = useTransform(scrollYProgress, [0, 0.4, 0.8], ["-10%", "-40%", "-70%"]);
  const doX = useTransform(scrollYProgress, [0, 0.4, 0.8], ["10%", "40%", "70%"]);

  // Stage 3: services list comes in and centres
  const listOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.8], [0, 1, 1]);
  const listY = useTransform(scrollYProgress, [0.35, 0.8], ["18%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative bg-[#f3f2f1]"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      <style>{`
        .whatwedo-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .whatwedo-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="h-[240vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Large WE DO background words */}
          <motion.div
            style={{ scale: titleScale, opacity: titleOpacity }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full flex items-center justify-center">
              <motion.span
                style={{ x: weX, fontWeight: 200, letterSpacing: "-0.04em" }}
                className="text-[18vw] leading-none text-neutral-900"
              >
                WE
              </motion.span>
              <motion.span
                style={{ x: doX, fontWeight: 200, letterSpacing: "-0.04em" }}
                className="text-[18vw] leading-none text-neutral-900"
              >
                DO
              </motion.span>
            </div>
          </motion.div>

          {/* Services list in the middle */}
          <motion.div
            style={{ opacity: listOpacity, y: listY }}
            className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8"
          >
            <p style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }} className="uppercase text-neutral-500 mb-6">
              What we do
            </p>
            {/* Scrollable list area so long lists never get cropped */}
            <div className="whatwedo-scroll max-h-[70vh] lg:max-h-[72vh] overflow-y-auto pr-3 space-y-5 lg:space-y-7">
              {SERVICES.map((service, index) => {
                const isImageLeft = index % 2 === 0;
                return (
                  <motion.button
                    key={service.label}
                    whileHover={{ scale: 1.01 }}
                    className="w-full flex items-center justify-between gap-6 lg:gap-10 group cursor-pointer"
                    style={{ textAlign: "left" }}
                  >
                    {isImageLeft && (
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-md overflow-hidden bg-neutral-300 flex-shrink-0">
                        <motion.img
                          src={service.image}
                          alt={service.label}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    )}

                    <div className="flex-1 flex items-center justify-between gap-4">
                      <span
                        className="uppercase text-neutral-800 group-hover:text-neutral-950 transition-colors duration-300"
                        style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.22em" }}
                      >
                        {service.label}
                      </span>
                      <span
                        className="uppercase text-neutral-400 group-hover:text-neutral-700 transition-colors duration-300"
                        style={{ fontSize: "10px", fontWeight: 300, letterSpacing: "0.22em" }}
                      >
                        View
                      </span>
                    </div>

                    {!isImageLeft && (
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-md overflow-hidden bg-neutral-300 flex-shrink-0">
                        <motion.img
                          src={service.image}
                          alt={service.label}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

