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