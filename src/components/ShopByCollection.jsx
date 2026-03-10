import React from "react";

const collections = [
  {
    name: "Table",
    image: "/product9.jpg",
  },
  {
    name: "Chair",
    image: "/product1.jpeg",
  },
  {
    name: "Sofa",
    image: "/product13.jpg",
  },
  {
    name: "Bed",
    image: "/bed.avif",
  },
];

const ShopByCollection = () => {
  return (
    <section
      className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-10"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg tracking-[0.28em] uppercase text-[#2b2118] mb-4 font-semibold">
              Shop Our Collections
            </h2>
            <p className="text-sm sm:text-base text-[#5b5046] max-w-xl">
              Curated families of pieces that live beautifully together – from dining rituals
              to slow-evening lounge rooms.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {collections.map((item) => (
            <div
              key={item.name}
              className="aspect-[4/5] flex flex-col items-center justify-center overflow-hidden group"
            >
              <div className="flex-1 flex items-center justify-center w-full px-2 pt-2 pb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full w-auto object-contain transform group-hover:scale-[1.05] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="w-full px-5 pb-5">
                <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#2b2118]">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCollection;

