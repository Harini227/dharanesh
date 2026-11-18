export default function Orbs({ variant = 'gold' }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="orb -left-24 top-10 h-96 w-96 bg-gold/15" />
      <div className={`orb -right-24 bottom-0 h-[28rem] w-[28rem] ${variant === 'gold' ? 'bg-blue-900/30' : 'bg-gold/10'}`} style={{ animationDelay: '-6s' }} />
    </div>
  )
}
