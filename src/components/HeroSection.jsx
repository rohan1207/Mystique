import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100vh",
        height: "100vh",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero2.jpg"
          alt="Mystique — handcrafted furniture"
          className="w-full h-full object-cover"
        />
        {/* Cinematic bottom-up vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 38%, transparent 68%)",
          }}
        />
      </div>

      {/* Content — bottom left */}
      <div className="relative h-full flex flex-col justify-end px-8 lg:px-16 2xl:px-28 pb-14 lg:pb-20 2xl:pb-24 max-w-[1600px] mx-auto">

        {/* Eyebrow label */}
        <p
          className="text-white/50 tracking-[0.22em] uppercase mb-5"
          style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
        >
          Handcrafted Furniture
        </p>

        {/* Heading — ultra-light, large */}
        <h1
          className="text-white leading-none"
          style={{
            fontSize: "clamp(52px, 6.5vw, 96px)",
            fontWeight: 200,
            letterSpacing: "-0.025em",
            lineHeight: 1.02,
          }}
        >
          Made to Be<br />Lived In.
        </h1>

        {/* Thin rule */}
        <div
          className="mt-7 mb-6"
          style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.35)" }}
        />

        {/* Subtext */}
        <p
          className="text-white/65"
          style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.04em", lineHeight: 1.6 }}
        >
          Handcrafted pieces for the everyday ritual.
        </p>

        {/* CTA */}
        <button
          className="mt-7 self-start group flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
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
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              paddingBottom: "2px",
            }}
            className="group-hover:border-white/80 transition-colors duration-300"
          >
            Explore Collection
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-xs">
            →
          </span>
        </button>

      </div>
    </section>
  );
}
