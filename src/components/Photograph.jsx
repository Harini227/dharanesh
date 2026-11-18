import Reveal from './Reveal.jsx'

// To change the photo, replace public/images/our-picture.jpg (keep the file name).
const PHOTO = '/images/our-picture.jpg'

export default function Photograph() {
  return (
    <section id="photograph" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-charcoal px-4 py-24">
      {/* Soft glow made from the photo's own colours */}
      <img src={PHOTO} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-125 object-cover opacity-20 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-navy" />

      <Reveal className="frame-in relative w-full max-w-md">
        <figure className="border border-gold/60 p-2 shadow-[0_50px_120px_-20px_rgba(0,0,0,.9)] sm:p-3">
          <div className="relative overflow-hidden border border-gold/20 bg-ink">
            <img
              src={PHOTO}
              alt="The two of us together, side by side"
              width="898"
              height="1600"
              decoding="async"
              className="photo-img mx-auto block max-h-[78vh] w-auto max-w-full object-contain"
            />
            <div aria-hidden="true" className="curtain absolute inset-0 bg-ink" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,.45)]" />
          </div>
        </figure>
      </Reveal>

      <Reveal as="p" delay={1400} className="fade relative mt-12 max-w-md text-center font-serif text-xl italic leading-relaxed text-ivory/75 sm:text-2xl">
        One picture. A thousand memories. A bond that means everything.
      </Reveal>
    </section>
  )
}
