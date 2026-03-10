export default function Footer() {
  return (
    <footer
      className="w-full border-t border-[#e0d2c0] px-4 sm:px-10 py-8 sm:py-10"
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "linear-gradient(135deg, #c59a6a 0%, #b17b4c 35%, #9b6640 100%)",
        color: "#fff",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontWeight: 300,
                fontSize: "clamp(20px, 2.4vw, 26px)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
                margin: 0,
              }}
            >
              Mystique Furnishing Company
            </p>
            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.05vw, 15px)",
                letterSpacing: "0.03em",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                maxWidth: "34rem",
                marginTop: "0.9rem",
              }}
            >
              The Art of Bespoke Living.
              <br />
              An atelier for custom-made furniture. Thoughtfully crafted for modern homes.
              <br />
              Enquiries via DM!
            </p>
            <p
              className="mt-2 text-[11px] sm:text-xs tracking-[0.18em] uppercase"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Mystique Furnishing Company, Bhopal, Madhya Pradesh 462001
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-sm">
            <a
              href="mailto:studio@nirlovya.com"
              className="text-white hover:text-[#ffe9c7] transition-colors"
            >
              studio@nirlovya.com
            </a>
            <a
              href="tel:+910000000000"
              className="text-white hover:text-[#ffe9c7] tracking-[0.16em] uppercase text-[11px]"
            >
              +91 · 00000 · 00000
            </a>
            <p className="text-[11px] tracking-[0.18em] uppercase mt-2 text-white/80">
              Bhopal · Madhya Pradesh
            </p>
          </div>
        </div>

        {/* Middle links row */}
        <div className="flex flex-wrap gap-4 sm:gap-6 text-[11px] sm:text-xs tracking-[0.18em] uppercase text-white/75">
          <a href="#collections" className="hover:text-white transition-colors">
            Collections
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#stories" className="hover:text_white transition-colors">
            Stories
          </a>
          <a href="#studio" className="hover:text_white transition-colors">
            Studio
          </a>
          <a href="#contact" className="hover:text_white transition-colors">
            Contact
          </a>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/25 pt-4">
          <p className="text-[11px] sm:text-xs text-white/70 tracking-[0.16em] uppercase">
            © {new Date().getFullYear()} Nirlovya Atelier · All rights reserved
          </p>
          <div className="flex gap-4 text-[11px] sm:text-xs text-white/70">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
