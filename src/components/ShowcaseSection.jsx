import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ShowcaseSection({
  title,
  bullets,
  bentoItems,
  textOnLeft = true,
  categorySlug = "",
}) {
  const textBlock = (
    <motion.div
      className={`w-full lg:w-[30%] xl:w-[28%] flex flex-col justify-center py-16 lg:py-0 ${
        textOnLeft
          ? "pl-6 lg:pl-12 xl:pl-20 pr-4 lg:pr-8 order-1"
          : "pl-4 lg:pl-8 pr-6 lg:pr-12 xl:pr-20 order-2"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 22,
        mass: 0.9,
      }}
    >
      <p
        style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
        className="uppercase text-neutral-500 mb-5"
      >
        Mystique
      </p>
      <h2
        style={{
          fontWeight: 200,
          fontSize: "clamp(32px, 3.5vw, 52px)",
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
        }}
        className="text-neutral-900 mb-10 lg:mb-14"
      >
        {title}
      </h2>
      <ul className="space-y-5 lg:space-y-7">
        {bullets.map((text, i) => (
          <li
            key={i}
            className="flex items-start gap-3 leading-relaxed"
          >
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 300,
                letterSpacing: "0.01em",
                lineHeight: 1.8,
              }}
              className="text-neutral-800"
            >
              {text}
            </span>
          </li>
        ))}
      </ul>

      {categorySlug && (
        <div className="mt-10 lg:mt-12">
          <Link
            to={`/collection/${categorySlug}`}
            className="group inline-flex items-center gap-3"
            style={{
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <span
              className="group-hover:border-neutral-900 transition-colors duration-300"
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.6)",
                paddingBottom: "3px",
              }}
            >
              Shop Now
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">
              →
            </span>
          </Link>
        </div>
      )}
    </motion.div>
  );

  const imageBlock = (
    <motion.div
      className={`w-full lg:w-[70%] xl:w-[72%] flex flex-col min-h-0 py-6 lg:py-8 lg:h-full ${
        textOnLeft
          ? "pr-4 lg:pr-8 xl:pr-12 order-2"
          : "pl-4 lg:pl-8 xl:pl-12 order-1"
      }`}
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 130,
        damping: 20,
        mass: 1,
      }}
    >
      <div className="w-full flex-1 min-h-[70vh] lg:min-h-0 grid grid-cols-2 grid-rows-2 gap-[3px] lg:gap-1.5">
        {bentoItems.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className={`relative overflow-hidden bg-neutral-200 min-h-[200px] ${
              i === 2 ? "col-span-2" : ""
            }`}
          >
            <motion.img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover object-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      className="relative bg-[#fafaf9]"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      <div className="h-[160vh] relative">
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
