import { lazy, Suspense } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { About } from './components/About'
import { Ventures } from './components/Ventures'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const CinematicBackdrop = lazy(() =>
  import('./components/CinematicBackdrop').then((m) => ({
    default: m.CinematicBackdrop,
  })),
)

function BackdropFallback() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 bg-void"
      aria-hidden
      style={{
        backgroundImage:
          'radial-gradient(ellipse 60% 45% at 78% 18%, color-mix(in oklab, #e8282c 18%, transparent), transparent 70%), radial-gradient(ellipse 50% 40% at 12% 80%, color-mix(in oklab, #e8282c 8%, transparent), transparent 65%)',
      }}
    />
  )
}

export default function App() {
  return (
    <div className="relative min-h-dvh">
      <Suspense fallback={<BackdropFallback />}>
        <CinematicBackdrop />
      </Suspense>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Ventures />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
