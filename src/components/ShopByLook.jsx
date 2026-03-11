import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hotspot + product data. Replace image paths later.
const LOOKS = [
  {
    id: "look-1",
    title: "Living Room Suite",
    image: "/shopbylook.avif",
    hotspots: [
      {
        id: "sofa",
        x: "58%",
        y: "22%",
        name: "Arco Curve Sofa",
        subtitle: "Bouclé · Teal",
        price: "From ₹1,65,000",
      },
      {
        id: "chair",
        x: "88%",
        y: "80%",
        name: "Juniper Lounge Chair",
        subtitle: "Twill · Terracotta",
        price: "From ₹89,000",
      },
      {
        id: "table",
        x: "52%",
        y: "82%",
        name: "Halo Coffee Table",
        subtitle: "Smoked glass · Brass",
        price: "From ₹74,000",
      },
      {
        id: "side-table",
        x: "14%",
        y: "70%",
        name: "Column Side Table",
        subtitle: "Solid brass",
        price: "From ₹48,000",
      },
    ],
  },
];

const ShopByLook = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const currentLook = LOOKS[0];

  const handleHotspotToggle = (id) => {
    setActiveHotspot((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-10"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg tracking-[0.28em] uppercase text-[#2b2118] mb-4 font-semibold">
              Shop the Look
            </h2>
            <p className="text-sm sm:text-base text-[#5b5046] max-w-xl">
              Explore a complete setting and tap into each glowing dot to see the
              pieces that compose the scene.
            </p>
          </div>
        </header>

        <div className="relative rounded-2xl overflow-hidden  bg-[#e8dfd4]">
          {/* Main look image */}
          <div className="relative">
            <img
              src={currentLook.image}
              alt={currentLook.title}
              className="w-full h-auto object-cover"
            />

            {/* Hotspots */}
            {currentLook.hotspots.map((spot) => (
              <button
                key={spot.id}
                type="button"
                onClick={() => handleHotspotToggle(spot.id)}
                className="absolute group"
                style={{ left: spot.x, top: spot.y, transform: "translate(-50%, -50%)" }}
              >
                {/* Pulsing ring */}
                <span className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7">
                  <span className="absolute inset-0 rounded-full bg-white/50 group-hover:bg-white/80 transition-colors duration-300" />
                  <span className="relative w-2.5 h-2.5 rounded-full bg-[#8b5a2b]" />
                </span>
              </button>
            ))}
          </div>

          {/* Product card for active hotspot */}
          <AnimatePresence>
            {activeHotspot && (
              <motion.div
                key={activeHotspot}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 bg-[#f6eee4] border border-[#e0d2c0] rounded-xl px-4 py-3 sm:px-5 sm:py-4  max-w-xs sm:max-w-sm"
              >
                {(() => {
                  const spot = currentLook.hotspots.find(
                    (h) => h.id === activeHotspot
                  );
                  if (!spot) return null;
                  return (
                    <>
                      <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#8b5a2b] mb-1">
                        In this look
                      </p>
                      <p className="text-sm sm:text-base text-[#2b2118]">
                        {spot.name}
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#5b5046] mt-0.5">
                        {spot.subtitle}
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#2b2118] mt-2">
                        {spot.price}
                      </p>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ShopByLook;

