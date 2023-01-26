import React from 'react'
import About from '../components/About/About'
import Ask from '../components/Ask/Ask'
import Benefits from '../components/Benefits/Benefits'
import Blueprint from '../components/BlueprintRegistry/Blueprint'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Nav from '../components/Nav/Nav'
import PascoSection from '../components/Pasco/PascoSection'
import LifeSection from '../components/Life/LifeSection'

function HomePage() {
  return (
    <div>
      <div className='App'>
        <Nav />
        <Hero />
        <About />
        <PascoSection />
        <LifeSection />
        <Blueprint />
        <Benefits />
        <Ask />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage