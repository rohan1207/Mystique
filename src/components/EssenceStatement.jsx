import React from "react";
import { motion } from "framer-motion";

export default function EssenceStatement() {
  return (
    <section
      className="bg-white"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <motion.p
          initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -24, filter: "blur(10px)" }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 1.1,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="text-center text-xl leading-relaxed text-neutral-900 lg:text-5xl"
          style={{
            letterSpacing: "-0.02em",
            fontWeight: 200,
            lineHeight: 1.25,
          }}
        >
          Designed for the modern everyday.
          <br className="hidden sm:block" />
          We create objects that anchor your space with effortless confidence
          and tactile warmth.
        </motion.p>
      </div>
    </section>
  );
}

