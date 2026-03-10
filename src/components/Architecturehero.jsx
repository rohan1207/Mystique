import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

// ── Floating sphere with smooth up/down spring animation ──────────────────────
function FloatingSphere({ src, style, delay = 0, amplitude = 18, duration = 3.8 }) {
  return (
    <motion.img
      src={src}
      style={style}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none select-none"
      alt=""
    />
  );
}

export default function ArchitectureHero() {
  // ── colour palette ──
  const bg = "#ffffff";          // white background
  const cream = "#8b5a2b";       // warm brown heading colour
  const creamLight = "#a06a36";  // slightly lighter brown for body

  return (
    <div
      className="relative w-full overflow-hidden flex items-center"
      style={{
        background: bg,
        minHeight: "100vh",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* ── subtle grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,90,43,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,90,43,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* ══════════════════════════════════════════════
          LEFT SECTION  –  oval image + FURNITURE text
      ══════════════════════════════════════════════ */}
      <div className="relative flex-shrink-0" style={{ width: "38%", height: 420 }}>

        {/* Oval / ellipse image */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: 18,
            left: 32,
            width: 260,
            height: 310,
            borderRadius: "50%",
            zIndex: 2,
          }}
        >
          <img
            src="/product2.jpg"
            alt="Detail of bespoke wooden chair and side table"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
        </div>

        {/* FURNITURE – huge display text placed below the image */}
        <div
          className="relative flex items-end"
          style={{ zIndex: 10, marginTop: 420, paddingLeft: 28 }}
        >
          <span
            style={{
              fontFamily: "'Georgia', serif",
              fontWeight: 300,
              fontSize: "clamp(52px, 7vw, 86px)",
              letterSpacing: "-0.02em",
              color: cream,
              opacity: 0.92,
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            FURNITURE
          </span>
        </div>

        {/* Copper textured sphere – bottom-centre of left panel */}
        <FloatingSphere
          src="/obj2.png"
          delay={0}
          amplitude={14}
          duration={4.2}
          style={{
            position: "absolute",
            bottom: 48,
            left: "52%",
            width: 140,
            height: 140,
            borderRadius: "50%",
            backgroundColor: "transparent",
            objectFit: "cover",
            filter: "sepia(0.6) saturate(1.6) hue-rotate(-10deg) brightness(0.85)",
            zIndex: 8,
           
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════
          CENTRE  –  tall rectangular furniture photo
      ══════════════════════════════════════════════ */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: "32%",
          height: 400,
          zIndex: 5,
          marginLeft: -10,
        }}
      >
        <img
          src="/product9.jpg"
          alt="Minimal, luxurious living room with bespoke sofa"
          className="w-full h-full object-cover"
          style={{ display: "block" }}
        />
        {/* slight dark vignette at bottom so "ARCHITECTURE" reads over it */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 55%, rgba(58,74,85,0.55) 100%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════
          RIGHT SECTION  –  text + decorative spheres
      ══════════════════════════════════════════════ */}
      <div
        className="relative flex flex-col justify-between"
        style={{
          flex: 1,
          height: 420,
          paddingLeft: 36,
          paddingRight: 48,
          paddingTop: 32,
          paddingBottom: 32,
          zIndex: 5,
        }}
      >
        {/* Top group – heading + white sphere */}
        <div className="flex items-start justify-between">
          {/* Heading */}
          <div>
            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontWeight: 400,
                fontSize: "clamp(18px, 2vw, 26px)",
                letterSpacing: "0.06em",
                color: cream,
                lineHeight: 1.2,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Simple shapes,
              <br />
              Expressive
              <br />
              Finishes
            </p>
          </div>

          {/* White dimpled / textured sphere */}
          <FloatingSphere
            src="/obj1.png"
            delay={0.6}
            amplitude={20}
            duration={3.6}
            style={{
              width: 130,
              height: 130,
              borderRadius: "50%",
              backgroundColor: "transparent",
              objectFit: "cover",
              filter: "grayscale(1) brightness(1.4) contrast(1.1)",
         
              flexShrink: 0,
              marginLeft: 12,
              marginTop: -6,
            }}
          />
        </div>

        {/* Bottom group – body text + copper circle button */}
        <div className="flex items-end justify-between">
          {/* Body copy */}
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(11px, 1vw, 13px)",
              color: creamLight,
              lineHeight: 1.65,
              maxWidth: 280,
              margin: 0,
              opacity: 0.85,
            }}
          >
            Tailored, high-quality furniture pieces with softened edges, rich
            textures, and generous surfaces. Each collection is composed to
            stand beautifully on its own, yet feel effortless when layered
            together in a single room.
          </p>

          {/* Copper "+" circle button */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 62,
              height: 62,
              borderRadius: "50%",
              background: "#b87350",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              marginLeft: 16,
              boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 26,
                fontWeight: 200,
                lineHeight: 1,
                marginTop: -2,
              }}
            >
              +
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}