import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App.tsx'

function bootstrapSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    touchMultiplier: 1.4,
  })
  document.documentElement.classList.add('lenis')

  let frame = 0
  const raf = (time: number) => {
    lenis.raf(time)
    frame = requestAnimationFrame(raf)
  }
  frame = requestAnimationFrame(raf)

  return () => {
    cancelAnimationFrame(frame)
    lenis.destroy()
    document.documentElement.classList.remove('lenis')
  }
}

function Root() {
  useEffect(() => bootstrapSmoothScroll(), [])
  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
