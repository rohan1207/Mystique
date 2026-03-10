const asset = (path) => `/ever/assets/${path}`

const ITEMS = [
  {
    label: 'Car‑free courtyard',
    text: 'Pedestrian-only inner courtyard on a stylobate with children’s and recreation zones.',
  },
  {
    label: 'Landscaping scenarios',
    text: 'Urban balconies, amphitheatre, zen and secret gardens, rooftop terraces.',
  },
  {
    label: 'Smart security',
    text: 'Access control via smartphone, 24/7 video surveillance, controlled perimeter.',
  },
]

export default function Territory() {
  return (
    <section
      id="territory"
      className="relative bg-ever-green text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light">
        <div className="absolute left-[-140px] top-10 h-[360px] w-[360px] rounded-[50%] border border-white/18" />
        <div className="absolute right-[-100px] bottom-[-120px] h-[420px] w-[420px] rounded-[45%] border border-white/14" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="hidden lg:block border-b border-white/15 px-ever-l py-ever-s" />

        <div className="grid flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1.6fr),minmax(0,1.4fr)]">
          <div className="relative min-h-[56vh] overflow-hidden bg-black/20">
            <div className="absolute inset-0">
              <img
                src={asset('images/landing/territory/main-xs.jpg')}
                alt="Territory"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-transparent" />
            </div>

            <div className="absolute left-6 top-6 flex flex-col gap-2 rounded-2xl bg-black/50 px-4 py-3 text-[0.7rem] uppercase tracking-[0.22em] backdrop-blur">
              <span className="text-white/85">TERRITORY</span>
              <span className="text-white/60">
                6 hectares of landscaped area
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end gap-4">
              <div className="rounded-2xl bg-black/55 px-4 py-3 text-sm leading-relaxed text-white/92 backdrop-blur">
                Single courtyard on a stylobate with a bridge over a
                pedestrian-only shopping street. Intimate green routes, plazas
                and quiet corners for residents of all ages.
              </div>
              <div className="ml-auto flex gap-3 text-xs">
                <StatPill value="2 m" label="Fence height" />
                <StatPill value="24/7" label="Video surveillance" />
                <StatPill value="Wi‑Fi" label="Throughout courtyard" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-white/15 bg-ever-green/96 px-ever-l py-ever-l lg:border-l lg:border-t-0">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-white/70">
                <span className="h-px w-6 bg-white/60" />
                Territory
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.7rem] leading-[1.08] tracking-tight">
                A private park,
                <br />
                <span className="text-white/80">inside the city</span>
              </h2>
            </div>

            <div className="mt-8 grid gap-4 text-sm md:text-[0.9rem] text-white/92">
              {ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/18 bg-white/4 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.38)]"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/70">
                    {item.label}
                  </p>
                  <p className="mt-2 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatPill({ value, label }) {
  return (
    <div className="rounded-full bg-black/55 px-3 py-1.5 text-[0.7rem] leading-tight text-white/90 backdrop-blur">
      <div className="font-medium">{value}</div>
      <div className="text-[0.65rem] uppercase tracking-[0.16em] text-white/70">
        {label}
      </div>
    </div>
  )
}
