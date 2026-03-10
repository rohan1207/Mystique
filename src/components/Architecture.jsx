import { useState } from 'react'

const asset = (path) => `/ever/assets/${path}`

const SLIDES = [
  {
    id: 0,
    label: 'Simple shapes, expressive texture',
    description:
      'Four towers with clear volumes, panoramic glazing and deep window reveals. Facades are finished with natural stone and architectural concrete.',
    image: asset('images/landing/architecture/main-xs.jpg'),
    meta: ['Panoramic glazing', 'Architectural concrete'],
  },
  {
    id: 1,
    label: 'Courtyard perspective',
    description:
      'A landscaped courtyard opens towards the city, with stepped terraces, soft lighting and framed views of the skyline.',
    image: asset('images/landing/architecture/2-xs.jpg'),
    meta: ['Landscaped courtyard', 'Stepped terraces'],
  },
]

export default function Architecture() {
  const [activeId, setActiveId] = useState(0)
  const active = SLIDES.find((s) => s.id === activeId) ?? SLIDES[0]

  return (
    <section
      id="architecture"
      className="relative bg-ever-cold-3 text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light">
        <div className="absolute -left-32 -top-40 h-80 w-80 rounded-full border border-ever-cold-1/40" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-[45%] border border-ever-cold-2/30" />
      </div>

      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-6">
        <div className="hidden lg:block col-span-6 border-b border-ever-cold-2/25 px-ever-l py-ever-s" />

        <div className="flex flex-col justify-between gap-10 px-ever-l py-ever-l lg:col-span-3 lg:pt-[clamp(4rem,7vh,5.5rem)]">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-ever-cold-2">
              <span className="h-px w-6 bg-ever-cold-2/60" />
              Architecture
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] leading-[1.05] tracking-tight">
              Simple geometry,
              <br />
              <span className="text-ever-cold-1/80">expressive texture</span>
            </h2>
            <p className="max-w-xl text-sm md:text-base text-ever-cold-1/80">
              Ever is a clearly structured ensemble of vertical volumes and
              horizontal terraces. The rhythm of the facade emphasises
              panoramic views and fills the apartments with light.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {SLIDES.map((slide) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveId(slide.id)}
                className={`group rounded-full border px-4 py-2 text-xs md:text-sm transition ${
                  activeId === slide.id
                    ? 'border-ever-cold-1 bg-ever-cold-1 text-ever-cold-3'
                    : 'border-ever-cold-2/40 text-ever-cold-2 hover:border-ever-cold-1 hover:text-ever-cold-1'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                  {slide.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-2 grid gap-4 text-xs uppercase tracking-[0.16em] text-ever-cold-2/80 md:grid-cols-3">
            <div className="border-t border-ever-cold-2/25 pt-3">
              <p className="text-[0.64rem] text-ever-cold-2/70">HEIGHT</p>
              <p className="mt-1 text-sm text-ever-cold-1">Up to 27 floors</p>
            </div>
            <div className="border-t border-ever-cold-2/25 pt-3">
              <p className="text-[0.64rem] text-ever-cold-2/70">MATERIALS</p>
              <p className="mt-1 text-sm text-ever-cold-1">
                Stone, architectural concrete, glass
              </p>
            </div>
            <div className="border-t border-ever-cold-2/25 pt-3">
              <p className="text-[0.64rem] text-ever-cold-2/70">DETAILING</p>
              <p className="mt-1 text-sm text-ever-cold-1">
                Deep reveals, night illumination
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[60vh] flex-col justify-between bg-black/20 lg:col-span-3 lg:min-h-screen">
          <div className="relative h-[60vh] w-full overflow-hidden rounded-t-[32px] border-t border-l border-ever-cold-2/30 bg-black/40 shadow-[0_40px_80px_rgba(0,0,0,0.35)] lg:h-full lg:rounded-none lg:border-none lg:shadow-none">
            {SLIDES.map((slide) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-600 ${
                  activeId === slide.id
                    ? 'z-10 opacity-100'
                    : 'z-0 opacity-0 scale-[1.02]'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="h-full w-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            ))}

            <div className="pointer-events-none absolute inset-6 border border-ever-cold-2/40" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 rounded-2xl bg-black/55 p-4 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-ever-cold-2">
                  ARCHITECTURE
                </p>
                <span className="rounded-full border border-ever-cold-2/60 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-ever-cold-1/90">
                  {activeId + 1} / {SLIDES.length}
                </span>
              </div>
              <p className="text-sm md:text-base text-ever-cold-1/95">
                {active.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {active.meta?.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-ever-cold-3/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-ever-cold-1/85"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 8v24M12 24l8 8 8-8" />
    </svg>
  )
}
