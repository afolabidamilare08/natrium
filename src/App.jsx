import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProtocolFeeSection from './components/ProtocolFeeSection'
import ProtocolTokenomics from './components/ProtocolTokenomics'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="appWrapper">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProtocolFeeSection />
        <ProtocolTokenomics />
        <Footer />
      </div>
    </>
  )
}

export default App
