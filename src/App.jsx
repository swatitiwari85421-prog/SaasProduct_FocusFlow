import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }

        })
      },
      {
        threshold: 0.15
      }
    )

    const elements = document.querySelectorAll('.reveal')

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()

  }, [])

  return (
    <div
  className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: "url('/image.png')"
  }}
>
      <Navbar />

      <main>

        <div className="reveal">
          <Hero />
        </div>

        <div className="reveal">
          <Features />
        </div>

        <div className="reveal">
          <HowItWorks />
        </div>

        <div className="reveal">
          <Pricing />
        </div>

        <div className="reveal">
          <Contact />

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App