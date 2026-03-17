import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-[#f8f7f5]"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        {/* Main block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-neutral-200">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block">
              <span className="text-lg tracking-[0.35em] uppercase font-semibold text-neutral-900">
                MYSTIQUE
              </span>
            </Link>
            <p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-sm tracking-[0.02em]">
              An atelier for custom-made furniture. Thoughtfully crafted for modern homes.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.28em] uppercase text-neutral-500 mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm tracking-[0.18em] uppercase text-neutral-700 hover:text-neutral-900 transition-colors">
                Home
              </Link>
              <Link to="/collections" className="text-sm tracking-[0.18em] uppercase text-neutral-700 hover:text-neutral-900 transition-colors">
                Collections
              </Link>
              <Link to="/bespoke" className="text-sm tracking-[0.18em] uppercase text-neutral-700 hover:text-neutral-900 transition-colors">
                Bespoke
              </Link>
              <Link to="/studio" className="text-sm tracking-[0.18em] uppercase text-neutral-700 hover:text-neutral-900 transition-colors">
                Studio
              </Link>
              <Link to="/contact" className="text-sm tracking-[0.18em] uppercase text-neutral-700 hover:text-neutral-900 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.28em] uppercase text-neutral-500 mb-4">
              Enquiries
            </p>
            <a
              href="mailto:hello@mystiqueatelier.com"
              className="block text-sm tracking-[0.12em] text-neutral-800 hover:text-neutral-600 transition-colors"
            >
              hello@mystiqueatelier.com
            </a>
            <a
              href="tel:+910000000000"
              className="mt-2 block text-xs tracking-[0.2em] uppercase text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              +91 · 00000 · 00000
            </a>
            <p className="mt-4 text-[11px] tracking-[0.16em] uppercase text-neutral-500">
              Bhopal, Madhya Pradesh
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6">
          <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">
            © {currentYear} Mystique. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              Pinterest
            </a>
          </div>
        </div>
        <p className="text-[10px] tracking-[0.18em] uppercase text-neutral-400 mt-4 text-center sm:text-left">
          Designed by Markitects
        </p>
      </div>
    </footer>
  );
}
