import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import Process from './components/Process'
import Principles from './components/Principles'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Principles />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
