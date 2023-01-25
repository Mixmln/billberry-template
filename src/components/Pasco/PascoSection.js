import { Button, Stack } from '@mui/material'
import React from 'react'
import '../Pasco/pascoSection.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <section className='pasco-section'>
      <ThemeProvider theme={theme}>
        <Stack direction='row' sx={{
          gap: 13,
          alignItems: 'center'
        }}>
          <img src="https://bilberrry.com/wp-content/uploads/2020/06/50514895-2306364546042677-1195809454591836160-o@2x.jpg" alt="" />
          <div className='pasco-desc'>
            <img src="https://bilberrry.com/wp-content/uploads/2020/06/pasco-logo-white.svg" alt="" />
            <h5>ASKED US:</h5>
            <h2>"WE NEED TO INNOVATE. WHAT NOW?"</h2>
            <p>Our favorite question. When you know what you want, but not what  you want, we go all-in to uncover the strategies that will get your business where you want it to go.</p>
            <Button variant='outlined' sx={{
              fontSize: 12,
              width: '64%',
              padding: '18px 32px',
              boxSizing: 'border-box',
              lineHeight: 1.5,
              fontWeight: 'bold',
            }}
              color='justWhite'
            >Here's how we helped a legacy business digitally transform its operations.</Button>
          </div>
        </Stack>
      </ThemeProvider>
    </section >
  )
}

export default PascoSection