import React from 'react'
import { Switch } from '@mui/material'
import './Nav.css'
import bilberry from '../../assets/img/bilberrry-logo.png'

function Nav() {
  return (
    <div className='nav-container'>
      <nav className='container'>
        <img className='nav-logo' src={bilberry} alt="logo" />
        <ul>
          <li>Services</li>
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