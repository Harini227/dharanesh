import Reveal from './Reveal.jsx'
import Orbs from './Orbs.jsx'

export default function Finale() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6 py-28 text-center">
      <Orbs variant="navy" />
      <div className="relative">
        <Reveal as="h2" className="fade font-serif text-5xl italic sm:text-7xl">
          20 looks good on you.
        </Reveal>
        <Reveal as="p" delay={300} className="fade mx-auto mt-10 max-w-md font-light leading-relaxed text-ivory/65">
          Happy to have you in my life. Grateful for every moment, every conversation, and every memory.
        </Reveal>
        <div className="mx-auto my-16 h-px w-28 bg-gold/60" aria-hidden="true" />
        <Reveal as="p" delay={600} className="fade mx-auto max-w-3xl">
          <span className="gold-shimmer font-serif text-4xl font-semibold sm:text-6xl">Forever Brothers. No Conditions. No End.</span>
        </Reveal>
      </div>
    </section>
  )
}
