import React from "react";

const categories = [
  {
    name: "Latest Arrivals",
    badge: "NEW",
    image:
      "/product1.jpeg",
  },
  {
    name: "Sofas",
    image:
      "/product13.jpg",
  },
  {
    name: "Armchairs",
    image:
      "/product10.jpg",
  },
  {
    name: "Coffee Tables",
    image:
      "/product9.jpg",
  },
  {
    name: "Beds",
    image:
      "/bed.avif",
  },
  {
    name: "Wardrobes",
    image:
      "/product11.jpg",
  },
  {
    name: "Sideboards",
    image:
      "/product14.jpg",
  },
  {
    name: "Dining Sets",
    image:
      "/product5.jpg",
  },
  {
    name: "Lounge Chairs",
    image:
      "/product7.jpg",
  },
  {
    name: "Bookshelves",
    image:
      "/product6.jpg",
  },
  {
    name: "Study Tables",
    image:
      "/product2.jpg",
  },
  {
    name: "Mattresses",
    image:
      "/product15.jpg",
  },
];

const ShopByCategoryTwo = () => {
  return (
    <section
      className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-10"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg tracking-[0.28em] uppercase text-[#2b2118] mb-4 font-semibold">
              Shop by Category
            </h2>
            <p className="text-sm sm:text-base text-[#5b5046] max-w-xl">
              Explore Mystique pieces by the way you live – from low lounge seating
              to dining rituals and quietly considered storage.
            </p>
          </div>
        </header>

        <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center gap-3 min-w-[88px]"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-[#f5ece2] flex items-center justify-center overflow-hidden shadow-md">
                {/* Badge for latest */}
                {category.badge && (
                  <div className="absolute -left-1 -top-1 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8b5a2b] flex items-center justify-center shadow-md">
                    <span className="text-[8px] sm:text-[9px] tracking-[0.12em] uppercase text-white">
                      {category.badge}
                    </span>
                  </div>
                )}

                <img
                  src={category.image}
                  alt={category.name}
                  className="w-[88%] h-[88%] object-cover rounded-full transition-transform duration-400 ease-out hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <p className="text-xs sm:text-sm tracking-[0.16em] uppercase text-[#2b2118] text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategoryTwo;

