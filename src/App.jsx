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
