import Orbs from './Orbs.jsx'

const d = (ms) => ({ animationDelay: `${ms}ms` })

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-ink via-navy to-ink px-6 text-center">
      <Orbs />
      <div className="relative">
        <p style={d(300)} className="rise mx-auto max-w-2xl font-serif text-2xl italic leading-snug text-ivory/80 sm:text-4xl">
          Some people make life beautiful just by being in it.
        </p>
        <div style={d(1200)} className="rise mx-auto my-12 h-px w-28 bg-gold/70" aria-hidden="true" />
        <h1 style={d(1700)} className="rise font-serif text-5xl font-semibold tracking-wide text-ivory sm:text-8xl">
          Happy 20th Birthday
        </h1>
        <p style={d(2400)} className="rise mx-auto mt-8 max-w-md text-sm font-light leading-relaxed text-ivory/60 sm:text-base">
          A special day for someone who means more than words can explain.
        </p>
        <a
          href="#photograph"
          style={d(3100)}
          className="rise group mt-16 inline-flex items-center gap-3 border border-gold/70 px-9 py-4 text-sm font-light tracking-wide text-gold transition duration-500 hover:bg-gold hover:text-ink hover:shadow-[0_0_40px_rgba(201,169,106,.35)]"
        >
          Open Your Surprise <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  )
}
