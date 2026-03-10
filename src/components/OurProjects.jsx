import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Niseko Dining House",
    location: "Hokkaido, Japan",
    image: "/product6.jpg",
  },
  {
    title: "Terrace Loft Residence",
    location: "Mumbai, India",
    image: "/product7.jpg",
  },
  {
    title: "Courtyard Living Room",
    location: "Pune, India",
    image: "/product8.jpg",
  },
  {
    title: "Terrace Loft Residence",
    location: "Mumbai, India",
    image: "/product9.jpg",
  },
  {
    title: "Terrace Loft Residence",
    location: "Mumbai, India",
    image: "/product10.jpg",
  },
];

const OurProjects = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[current];

  return (
    <section
      className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-10"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg tracking-[0.28em] uppercase text-[#2b2118] mb-4 font-semibold">
              Our Projects
            </h2>
            <p className="text-sm sm:text-base text-[#5b5046] max-w-xl">
              Quietly luxurious spaces where bespoke furniture, light, and material
              come together to define the way you live.
            </p>
          </div>

          {/* Meta / Counter */}
          <div className="mt-4 sm:mt-0 text-xs sm:text-sm tracking-[0.24em] uppercase text-[#8b5a2b]/80">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </div>
        </header>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Main image area */}
          <div className="relative flex items-center justify-between">
            {/* Previous arrow */}
            <button
              type="button"
              onClick={handlePrev}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-[#8b5a2b]/30 text-[#8b5a2b] hover:text-white hover:border-[#8b5a2b] hover:bg-[#8b5a2b] transition-colors duration-300 mr-4"
            >
              <span className="sr-only">Previous project</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Image wrapper */}
            <div className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-[#e3d7c8]">
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.img
                  key={currentProject.image}
                  src={currentProject.image}
                  alt={currentProject.title}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Next arrow */}
            <button
              type="button"
              onClick={handleNext}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-[#8b5a2b]/30 text-[#8b5a2b] hover:text-white hover:border-[#8b5a2b] hover:bg-[#8b5a2b] transition-colors duration-300 ml-4"
            >
              <span className="sr-only">Next project</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Bottom meta bar */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#8b5a2b]/80 mb-1">
                Featured Project
              </p>
              <p className="text-lg sm:text-xl text-[#2b2118] font-medium">
                {currentProject.title}
              </p>
              <p className="text-xs sm:text-sm text-[#5b5046] mt-1">
                {currentProject.location}
              </p>
            </div>

            {/* Mobile arrows */}
            <div className="flex sm:hidden items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#8b5a2b]/30 text-[#8b5a2b] hover:text-white hover:border-[#8b5a2b] hover:bg-[#8b5a2b] transition-colors duration-300"
              >
                <span className="sr-only">Previous project</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#8b5a2b]/30 text-[#8b5a2b] hover:text-white hover:border-[#8b5a2b] hover:bg-[#8b5a2b] transition-colors duration-300"
              >
                <span className="sr-only">Next project</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;

