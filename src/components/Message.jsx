import Reveal from './Reveal.jsx'

const paragraphs = [
  'Somewhere along the way, you became more than just a friend to me. You became someone I could trust, someone I could share everything with, and someone who made difficult days feel a little easier.',
  'Thank you for listening to me, understanding me, and being there when I needed someone.',
  "I may not say it every day, but I'm genuinely grateful to have you in my life.",
  "You're not just my best friend. You're the brother life gave me.",
  'And whatever happens, remember that you will always have me by your side.',
]

export default function Message() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy to-ink px-6 py-36">
      <div className="mx-auto max-w-xl">
        <Reveal as="h2" className="fade font-serif text-5xl font-semibold leading-tight sm:text-6xl">
          More Than Just a Friend.
        </Reveal>
        <div className="mt-6 h-px w-20 bg-gold/70" aria-hidden="true" />
        <div className="mt-14 space-y-9 font-light leading-loose text-ivory/75">
          {paragraphs.map((p, i) =>
            i === 3 ? (
              <Reveal as="p" key={i} className="fade border-l border-gold/60 py-2 pl-6 font-serif text-3xl italic leading-snug text-gold">
                {p}
              </Reveal>
            ) : (
              <Reveal as="p" key={i} className="fade">{p}</Reveal>
            )
          )}
        </div>
      </div>
    </section>
  )
}
