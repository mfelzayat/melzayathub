import { Nav } from './components/Nav'
import { ChapterIndex } from './components/ChapterIndex'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Ventures } from './components/Ventures'
import { Focus } from './components/Focus'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="grain relative min-h-dvh">
      <Nav />
      <ChapterIndex />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
