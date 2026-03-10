import React from "react";
import { motion } from "framer-motion";

const reels = [
  {
    id: 1,
    title: "Milan Queen Bed · Walnut & Cane",
    views: "3.9K",
    likes: 42,
    video: "/video1.mp4",
  },
  {
    id: 2,
    title: "Dune Dining · Oak & Bouclé",
    views: "3.3K",
    likes: 21,
    video: "/video2.mp4",
  },
  {
    id: 3,
    title: "Alba Coffee Table · Marble Edge",
    views: "2.4K",
    likes: 19,
    video: "/video3.mp4",
  },
  {
    id: 4,
    title: "Juniper Lounge · Low Seating",
    views: "1.5K",
    likes: 12,
    video: "/video4.mp4",
  },
  {
    id: 5,
    title: "Hanoi Bed · Cane & Storage",
    views: "1.3K",
    likes: 21,
    video: "/video5.mp4",
  },
  {
    id: 6,
    title: "Leroy Recliner · Cloud Lounge",
    views: "2.1K",
    likes: 17,
    video: "/video6.mp4",
  },
  {
    id: 7,
    title: "Studio Corner · Reading Nook",
    views: "1.9K",
    likes: 15,
    video: "/video7.mp4",
  },
  {
    id: 8,
    title: "Gallery Wall · Living Suite",
    views: "1.1K",
    likes: 9,
    video: "/video8.mp4",
  },
];

const OurStories = () => {
  return (
    <section
      className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-10"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <style>{`
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>
        <header className="mb-8 sm:mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg tracking-[0.28em] uppercase text-[#2b2118] mb-4 font-semibold">
              Our Stories
            </h2>
            <p className="text-sm sm:text-base text-[#5b5046] max-w-xl">
              Short stories from the studio floor – textures, details, and quiet
              moments with pieces in the making.
            </p>
          </div>
        </header>

        {/* Horizontal reels strip */}
        <div className="relative">
          <div className="flex overflow-x-auto no-scrollbar gap-4 sm:gap-5 lg:gap-6 pb-2">
            {reels.map((reel, index) => (
              <motion.article
                key={reel.id}
                className="min-w-[180px] max-w-[190px] sm:min-w-[210px] sm:max-w-[220px] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                {/* Video thumbnail – plays on hover */}
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black">
                  <video
                    src={reel.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget;
                      video.currentTime = 0;
                      video.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget;
                      video.pause();
                    }}
                  />

                  {/* Top-right stats */}
                  <div className="absolute top-2 right-2 flex flex-col items-end gap-1 text-[10px] text-white/80">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/35 backdrop-blur-sm">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path
                          d="M15 10l-3 3-3-3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{reel.views}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/35 backdrop-blur-sm">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path
                          d="M12.1 5.1L13 6l.9-.9a3 3 0 114.2 4.2l-.9.9L13 15.4l-4.2-4.2-.9-.9a3 3 0 114.2-4.2z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{reel.likes}</span>
                    </div>
                  </div>

                  {/* Play icon */}
                  <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                    <svg
                      className="w-3 h-3 text-[#2b2118]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <div className="px-1.5 pt-2">
                  <p className="text-[12px] sm:text-sm text-[#2b2118] leading-snug line-clamp-2">
                    {reel.title}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStories;

