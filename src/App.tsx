import { Nav } from './components/Nav'
import { ChapterIndex } from './components/ChapterIndex'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { About } from './components/About'
import { Ventures } from './components/Ventures'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="grain relative min-h-dvh">
      <Nav />
      <ChapterIndex />
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
