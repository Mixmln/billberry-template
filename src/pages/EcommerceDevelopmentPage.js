import React from 'react'
import Approach from '../components/EcommerveDevelopmentPage/Approach/Approach'
import BlueprintRegistry from '../components/EcommerveDevelopmentPage/BlueprintRegistry/BlueprintRegistry'
import Bridal from '../components/EcommerveDevelopmentPage/Bridal/Bridal'
import Modern from '../components/EcommerveDevelopmentPage/Modern/Modern'
import Notes from '../components/EcommerveDevelopmentPage/Notes/Notes'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Nav from '../components/Nav/Nav'

function EcommerceDevelopmentPage() {
  return (
    <div className='App'>
      <Nav />
      <Hero title='ECOM DEVELOPMENT
FOR BIG BUSINESS' mainImage='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F42309-nature-forest-mountain.jpg&f=1&nofb=1&ipt=01d9dbeab5ee9b718e44b4a8c040b5fd9c1c52c01f609732516316023ad8e8f4&ipo=images' />
      <Approach />
      <Bridal />
      <BlueprintRegistry />
      <Modern></Modern>
      <Notes></Notes>
      <Footer />
    </div>
  )
}

export default EcommerceDevelopmentPage