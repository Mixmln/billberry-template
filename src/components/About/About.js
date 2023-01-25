import { Stack } from '@mui/material'
import React from 'react'
import '../About/about.css'

function About() {
  return (
    <div className='container about-section'>
      <div className='about-text'>
        <h4 className='about-title'>WE ARE BILBERRY</h4>
        <p className='about-desc'>We design and develop websites, apps and digital experiences that help our clients grow, innovate, and transform. We listen, learn and understand before we build. We identify your goals together, then use our expertise to find that sweet spot of realistic and impactful.</p>
      </div>
      <Stack
        className='logos-flex container'
        direction='row'
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <img className='logo-pepsico' src="https://bilberrry.com/wp-content/uploads/2020/05/pepsico-dark.svg" alt="" />
        <img className='logo-chipotle' src="https://bilberrry.com/wp-content/uploads/2020/05/chipotle-dark.svg" alt="" />
        <img className='logo-delta' src="https://bilberrry.com/wp-content/uploads/2020/05/delta-dark.svg" alt="" />
        <img className='logo-uni' src="https://bilberrry.com/wp-content/uploads/2020/05/university-light.svg" alt="" />
        <img className='logo-gofoundme' src="https://bilberrry.com/wp-content/uploads/2022/08/gofundme.png" alt="" />
      </Stack>
    </div>
  )
}

export default About