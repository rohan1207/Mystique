import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export default function ShowcaseSection({
  title,
  bullets,
  bentoItems,
  textOnLeft = true,
  categorySlug = "",
}) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.15, 0.35], [24, 0]);

  const b1 = useTransform(scrollYProgress, [0.25, 0.42], [0, 1]);
  const b1Y = useTransform(scrollYProgress, [0.25, 0.42], [20, 0]);
  const b2 = useTransform(scrollYProgress, [0.38, 0.55], [0, 1]);
  const b2Y = useTransform(scrollYProgress, [0.38, 0.55], [20, 0]);
  const b3 = useTransform(scrollYProgress, [0.51, 0.68], [0, 1]);
  const b3Y = useTransform(scrollYProgress, [0.51, 0.68], [20, 0]);
  const b4 = useTransform(scrollYProgress, [0.64, 0.82], [0, 1]);
  const b4Y = useTransform(scrollYProgress, [0.64, 0.82], [20, 0]);

  const bulletData = [
    { opacity: b1, y: b1Y },
    { opacity: b2, y: b2Y },
    { opacity: b3, y: b3Y },
    { opacity: b4, y: b4Y },
  ];

  const textBlock = (
    <div
      className={`w-full lg:w-[30%] xl:w-[28%] flex flex-col justify-center py-16 lg:py-0 ${
        textOnLeft
          ? "pl-6 lg:pl-12 xl:pl-20 pr-4 lg:pr-8 order-1"
          : "pl-4 lg:pl-8 pr-6 lg:pr-12 xl:pr-20 order-2"
      }`}
    >
      <motion.p
        style={{ opacity: headingOpacity, fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
        className="uppercase text-neutral-500 mb-5"
      >
        Mystique
      </motion.p>
      <motion.h2
        style={{
          opacity: headingOpacity,
          y: headingY,
          fontWeight: 200,
          fontSize: "clamp(32px, 3.5vw, 52px)",
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
        }}
        className="text-neutral-900 mb-10 lg:mb-14"
      >
        {title}
      </motion.h2>
      <ul className="space-y-6 lg:space-y-8">
        {bullets.map((text, i) => (
          <motion.li
            key={i}
            style={{ opacity: bulletData[i].opacity, y: bulletData[i].y }}
            className="flex items-start gap-3 leading-relaxed"
          >
            <span className="mt-[6px] w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
            <span style={{ fontSize: "15px", fontWeight: 300, letterSpacing: "0.01em", lineHeight: 1.75 }} className="text-neutral-700">
              {text}
            </span>
          </motion.li>
        ))}
      </ul>

      {categorySlug && (
        <motion.div style={{ opacity: b4 }} className="mt-10 lg:mt-14">
          <Link
            to={`/collection/${categorySlug}`}
            className="group inline-flex items-center gap-3"
            style={{
              fontSize: "11px", fontWeight: 400,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "inherit", textDecoration: "none",
            }}
          >
            <span
              className="group-hover:border-neutral-900 transition-colors duration-300"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.35)", paddingBottom: "2px" }}
            >
              Shop Now
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 text-xs">→</span>
          </Link>
        </motion.div>
      )}
    </div>
  );

  const imageBlock = (
    <div
      className={`w-full lg:w-[70%] xl:w-[72%] flex flex-col min-h-0 py-6 lg:py-8 lg:h-full ${
        textOnLeft
          ? "pr-4 lg:pr-8 xl:pr-12 order-2"
          : "pl-4 lg:pl-8 xl:pl-12 order-1"
      }`}
    >
      <div className="w-full flex-1 min-h-[70vh] lg:min-h-0 grid grid-cols-2 grid-rows-2 gap-[3px] lg:gap-1.5">
        {bentoItems.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className={`relative overflow-hidden bg-neutral-200 min-h-[200px] ${
              i === 2 ? "col-span-2" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#fafaf9]"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      <div className="h-[280vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-stretch overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row gap-0 max-w-[1600px] mx-auto">
            {textBlock}
            {imageBlock}
          </div>
        </div>
      </div>
    </section>
  );
}
