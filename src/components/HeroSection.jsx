import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/hero1.jpg", alt: "Teal curve sofa with brass tables" },
  { src: "/hero2.jpg", alt: "Terracotta lounge chair and side table" },
  { src: "/hero3.jpg", alt: "Low wood coffee table and soft sofa" },
  { src: "/hero4.jpg", alt: "Textured bed with upholstered headboard" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const imageVariants = {
    enter: () => ({ opacity: 0, scale: 1.04 }),
    center: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
    exit: () => ({ opacity: 0, scale: 1.02, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }),
  };

  const handleNext = () => { setDirection(1); setCurrent((p) => (p + 1) % slides.length); };
  const handlePrev = () => { setDirection(-1); setCurrent((p) => (p - 1 + slides.length) % slides.length); };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Full-screen image */}
      <div className="absolute inset-0">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.img
            key={slides[current].src}
            src={slides[current].src}
            alt={slides[current].alt}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </AnimatePresence>

        {/* Warm vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,12,5,0.18) 0%, rgba(20,12,5,0.08) 40%, rgba(20,12,5,0.58) 100%)",
            zIndex: 2,
          }}
        />
      </div>

      {/* Centred content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ zIndex: 10, textAlign: "center", padding: "0 24px" }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 10,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(249,244,238,0.62)",
            margin: "0 0 20px",
          }}
        >
          Mystique Furniture Atelier
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Georgia', serif",
            fontWeight: 300,
            fontSize: "clamp(36px, 4.5vw, 66px)",
            letterSpacing: "-0.025em",
            color: "#f9f4ee",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Simple shapes,
          <br />
          expressive finishes.
        </motion.h1>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", gap: 12, marginTop: 36 }}
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "13px 32px",
              borderRadius: "9999px",
              background: "#b87350",
              border: "none",
              color: "#fff",
              fontSize: 10,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'Georgia', serif",
              boxShadow: "0 8px 32px rgba(184,115,80,0.42)",
            }}
          >
            Explore Collections
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "13px 32px",
              borderRadius: "9999px",
              background: "rgba(249,244,238,0.08)",
              border: "1px solid rgba(249,244,238,0.48)",
              color: "#f9f4ee",
              fontSize: 10,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'Georgia', serif",
              backdropFilter: "blur(6px)",
            }}
          >
            Book Studio Visit
          </motion.button>
        </motion.div>
      </div>

      {/* Arrows + counter — bottom right */}
      <div
        style={{
          position: "absolute", bottom: 32, right: 36,
          zIndex: 20, display: "flex", alignItems: "center", gap: 12,
        }}
      >
        <button onClick={handlePrev} style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(249,244,238,0.40)", background: "rgba(249,244,238,0.08)", color: "#f9f4ee", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronLeft size={15} />
        </button>
        <button onClick={handleNext} style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(249,244,238,0.40)", background: "rgba(249,244,238,0.08)", color: "#f9f4ee", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronRight size={15} />
        </button>
        <span style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(249,244,238,0.60)" }}>
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Dot progress — bottom centre */}
      <div
        style={{
          position: "absolute", bottom: 40, left: "50%",
          transform: "translateX(-50%)", zIndex: 20,
          display: "flex", gap: 6, alignItems: "center",
        }}
      >
        {slides.map((_, i) => (
          <motion.div
            key={i}
            animate={{ width: i === current ? 22 : 5, opacity: i === current ? 0.9 : 0.35 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            style={{ height: 2, borderRadius: 2, background: "#f9f4ee", cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
}