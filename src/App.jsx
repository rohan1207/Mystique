import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import ProductDetailPage from './pages/ProductDetailPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname])

  return null
}

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
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection/:categorySlug" element={<CollectionPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
