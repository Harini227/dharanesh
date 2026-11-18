import { useEffect, useRef } from 'react'
export default function Progress() {
  const bar = useRef(null)
  useEffect(() => {
    const on = () => {
      const h = document.documentElement
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)
      if (bar.current) bar.current.style.transform = `scaleX(${p})`
    }
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return <div ref={bar} aria-hidden="true" className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left scale-x-0 bg-gold" />
}
