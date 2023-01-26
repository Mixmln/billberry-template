import { Button, createTheme, Stack, ThemeProvider } from '@mui/material'
import React from 'react'
import './lifeSection.css'
import logo from '../../assets/img/tlycs-logo.png'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    justWhite: {
      main: '#ffffff',
    }
  },

});

function PascoSection() {
  return (
    <section className='life-section'>
      <ThemeProvider theme={theme}>
        <Stack direction='row-reverse'
          sx={{
            gap: 0
          }}>
          <img className='life-img' src="https://bilberrry.com/wp-content/uploads/2020/06/50514895-2306364546042677-1195809454591836160-o-copy-3@2x-1.jpg" alt="" />
          <div className="life-desc">
            <img src={logo} alt='logo' />
            <h5>WANTED TO KNOW:</h5>
            <h2>"CAN YOU MAKE US A NEW WEBSITE?"</h2>
            <p>When it comes to digital experiences, we can build pretty much anything. And if there’s a better solution, we’ll tell you. We always start with: Why? and use the answer to drive real growth and meaningful transformation.</p>
            <Button variant='outlined' sx={{
              fontSize: 12,
              width: '95%',
              padding: '16px 26px',
              boxSizing: 'border-box',
              lineHeight: 1.8,
              fontWeight: 'bold',

            }}
              color='justWhite'
              size='medium'
            >See what we built for a global non-profit with a tight timeline-and why.</Button>
          </div>
        </Stack>
      </ThemeProvider>
    </section>
  )
}

export default PascoSection