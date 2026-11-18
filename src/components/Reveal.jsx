import { useEffect, useRef, useState } from 'react'

// Adds "is-in" once the element scrolls into view.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`${className} ${shown ? 'is-in' : ''}`} {...rest}>
      {children}
    </Tag>
  )
}
