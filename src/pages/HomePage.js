import React from 'react'
import About from '../components/Home/About/About'
import Ask from '../components/Home/Ask/Ask'
import Benefits from '../components/Home/Benefits/Benefits'
import Blueprint from '../components/Home/BlueprintRegistry/Blueprint'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Nav from '../components/Nav/Nav'
import image from '../assets/img/hero-bg.jpg'
import PascoSection from '../components/Home/Pasco/PascoSection'
import LifeSection from '../components/Home/Life/LifeSection'


function HomePage() {
  return (
    <div>
      <div className='App'>
        <Nav />
        <Hero title='YOUR DIGITAL FUTURE
        WELL BUILT' mainImage={image} />
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