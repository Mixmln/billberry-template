import React from 'react'
import { Switch } from '@mui/material'
import './Nav.css'
import bilberry from '../../assets/img/bilberrry-logo.png'
import { useState } from 'react'

function Nav() {

  const [open, setOpen] = useState(false)

  console.log('open ===', open);

  return (
    <div className='nav-container'>
      <div className={` ${open ? 'dropdown-content-opened' : 'dropdown-content-closed'}`}>
        <div className='container'>
          <div className="services-container">
            <div>
              <h3>Digital Transformation</h3>
              <p>We partner with CTOs and CIOs to co-create and execute long-term strategies that increase sales, brand awareness, and operational efficiency.</p>
            </div>
            <div>
              <h3>Ecommerce
                Development</h3>
              <p>Flexible and intelligent B2B and B2C, omnichannel, and mobile commerce solutions that center your business.</p>
            </div>
            <div>
              <h3>Custom Software
                Development</h3>
              <p>Web apps, mobile apps and interactive experiences we help you take from ideation to implementation.</p>
            </div>
            <div>
              <h3>Website Design
                & Development</h3>
              <p>Beautifully designed and collaboratively concepted websites that deliver best-in-class experiences to your users.</p>
            </div>
          </div>

        </div>

      </div>
      <nav className='container'>
        <img className='nav-logo' src={bilberry} alt="logo" />
        <ul>
          <li onClick={() => setOpen(!open)}>Services</li>
          <li>Work</li>
          <li>Approach</li>
          <li>Notes</li>
          <li>About</li>
          <li>Contact</li>
          <Switch />
        </ul>
      </nav>

    </div>
  )
}

export default Nav