import React from 'react'
import { FormControlLabel, styled, Switch } from '@mui/material'
import './Nav.css'
import bilberry from '../../assets/img/bilberrry-logo.png'
import { useState } from 'react'
import { useEffect } from 'react'

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 40,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 0.5,
    transitionDuration: '500ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      transition: '0.5s ease in out',
      color: 'rgba(0, 0, 0, 0.616)',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? 'gray' : 'black',
        opacity: 0.7,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? 'black' : 'gray',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


function Nav() {

  const [open, setOpen] = useState(null)

  return (
    <div className='nav-container'>
      <div className={` ${open === null ? 'dropdown-content-hidden' : (open ? 'dropdown-content-opened' : 'dropdown-content-closed')}`}>
        <div className='container'>

          <div className="services-container">
            <div  >
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
          {/* <Switch /> */}
          <FormControlLabel
            control={<IOSSwitch defaultChecked />}
          />
        </ul>
      </nav>

    </div>
  )
}

export default Nav