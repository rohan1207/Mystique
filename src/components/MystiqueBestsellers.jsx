import React from "react";

const items = [
  {
    name: "Casey Swivel Dining Chair in Olive",
    image: "/product3.jpg",
  },
  {
    name: "Emilio Fabric Three-Seater Sofa in Blue",
    image: "/product4.jpg",
  },
  {
    name: "Carriba Extendable Dining Table in White Marble",
    image: "/product12.jpg",
  },
  {
    name: "Bennis Shoe & Console Unit in Dark Walnut",
    image: "/product13.jpg",
  },
  
];

const MystiqueBestsellers = () => {
  return (
    <section
      className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-10"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-6 sm:mb-8">
          <h2
            className="text-sm sm:text-base lg:text-lg text-[#111827]"
            style={{
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Mystique Bestsellers
          </h2>
          <button className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#8b5a2b] hover:text-[#a06a36] transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {items.map((item) => (
            <article key={item.name} className="flex flex-col items-start">
              <div className="w-full overflow-hidden">
                <div className="aspect-square w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-[1.05] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-1">
                <p className="text-[11px] sm:text-xs text-[#6b7280]">Mystique</p>
                <p className="text-xs sm:text-sm text-[#111827] leading-snug max-w-[15rem]">
                  {item.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MystiqueBestsellers;

