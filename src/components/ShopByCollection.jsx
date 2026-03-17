import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    name: "Chair",
    by: "",
    image: "/product9.jpg",
  },
  {
    name: "Table",
    by: " ",
    image: "/product1.jpeg",
  },
  {
    name: "Sofa",
    by: " ",
    image: "/product13.jpg",
  },
  {
    name: "Dining Set",
    by: "",
    image: "/product10.jpg",
  },
];

const ShopByCollection = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const onMouseMove = useCallback((e) => {
    setCursor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  }, []);

  const onCardEnter = useCallback((e) => {
    setCursor({ x: e.clientX, y: e.clientY, visible: true });
  }, []);

  const onCardLeave = useCallback(() => {
    setCursor((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <section
      className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-20"
      style={{
        backgroundColor: "white",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-10 lg:mb-14 xl:mb-16">
          <p
            className="uppercase text-neutral-500 mb-4"
            style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
          >
            Shop by collection
          </p>
          <p
            className="text-neutral-800 max-w-xl xl:max-w-2xl"
            style={{ fontSize: "clamp(22px, 2.4vw, 40px)", fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 1.18 }}
          >
            Curated families of pieces that live beautifully together.
          </p>
        </header>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 ${cursor.visible ? "cursor-none" : ""}`}
          onMouseMove={onMouseMove}
        >
          {/* Custom cursor – View pill sticky to pointer when over a card */}
          <div
            className="fixed left-0 top-0 w-0 h-0 pointer-events-none z-[10000]"
            style={{
              transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`,
            }}
          >
            <div
              className={`inline-flex items-center rounded-full overflow-hidden transition-opacity duration-200 ${
                cursor.visible ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundColor: "#b8956e" }}
            >
              <span
                className="px-5 py-2.5 text-white"
                style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.18em" }}
              >
                VIEW
              </span>
              <span className="flex items-center justify-center w-10 h-10 bg-white text-neutral-900 rounded-full">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </div>
          </div>

          {collections.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className="group cursor-pointer"
              whileHover={{ y: -6 }}
              // transition={{ type: "tween", duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
              onMouseEnter={onCardEnter}
              onMouseLeave={onCardLeave}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 rounded-sm shadow-none group-hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] transition-shadow duration-500">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                />
                <div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.04] transition-colors duration-500"
                  aria-hidden
                />
              </div>

              <div className="pt-4 pb-2">
                <p
                  className="uppercase text-neutral-900"
                  style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
                >
                  {item.name}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCollection;
