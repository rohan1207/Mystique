import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Architecture from './components/Architecture'
import ArchitectureHero from './components/Architecturehero'
import SecondSection from './components/SecondSection'
import ShopByCollection from './components/ShopByCollection'
import OurProjects from './components/OurProjects'
import ShopByCategoryTwo from './components/ShopByCategoryTwo'
import OurStories from './components/OurStories'
import ShopByLook from './components/ShopByLook'
import Territory from './components/Territory'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import MystiqueBestsellers from './components/MystiqueBestsellers'


export default function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768)
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  if (isMobile) {
    return (
      <div
        className="min-h-screen bg-white text-[#2b2118] flex items-center justify-center px-6 text-center"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        <div className="max-w-md space-y-3">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[#8b5a2b]">
            Mystique Furnishing Company
          </p>
          <p className="text-lg leading-snug">
            Please open this experience on a desktop screen.
          </p>
          <p className="text-sm text-[#6b6b6b]">
            We&apos;ll be on phone soon. For now, the site is designed for larger displays to
            showcase our furniture in detail.
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-white text-[#2b2118]">
      <Navbar />
      <main>
        <HeroSection />
        <ArchitectureHero />
        <SecondSection />
        <ShopByCollection />
        <ShopByCategoryTwo />
        <OurProjects />
        <MystiqueBestsellers />
        <OurStories />
        <ShopByLook />
       
      
       
        <Footer />
      </main>
    </div>
  )
}
