import React from "react";

const ClientStory = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col lg:flex-row"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      {/* Left: text content – minimal, light beige */}
      <div
        className="w-full lg:w-[38%] flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-16 lg:py-24"
        style={{ backgroundColor: "#F8F5F1" }}
      >
        <p
          className="uppercase text-neutral-500 mb-4"
          style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.22em" }}
        >
          Client story
        </p>
        <h2
          className="text-neutral-900 mb-8"
          style={{
            fontWeight: 200,
            fontSize: "clamp(24px, 2.4vw, 32px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
          }}
        >
          From sketch to finished piece.
        </h2>
        <p className="text-sm lg:text-base text-neutral-800 leading-relaxed max-w-md mb-10">
          One brief, one object, two perspectives. How a challenging chair sketch from a client became a finished piece that felt exactly like theirs.
        </p>

        <div className="space-y-8">
          <blockquote className="text-lg lg:text-xl font-semibold text-neutral-900 leading-snug max-w-md">
            &ldquo;Let us show you the precision of our work where we make your dream space come to reality.&rdquo;
          </blockquote>
          <blockquote className="text-lg lg:text-xl font-semibold text-neutral-900 leading-snug max-w-md">
            &ldquo;One of our clients gave us a chair design which was a bit challenging but we kept our promise.&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Right: two image sections side by side (vertical split), no dividing line */}
      <div className="w-full lg:w-[62%] flex flex-col lg:flex-row min-h-[60vh] lg:min-h-screen">
        <div className="flex-1 min-h-[50vh] lg:min-h-full relative w-full lg:w-1/2">
          <img
            src="/given.png"
            alt="What the client wanted"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <p className="absolute bottom-4 right-4 text-[11px] tracking-[0.2em] uppercase text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            Given / What client wanted
          </p>
        </div>
        <div className="flex-1 min-h-[50vh] lg:min-h-full relative w-full lg:w-1/2">
          <img
            src="/delivered.png"
            alt="What we delivered"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <p className="absolute bottom-4 right-4 text-[11px] tracking-[0.2em] uppercase text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            Delivered / What we delivered
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientStory;
