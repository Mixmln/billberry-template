import { Button, Stack } from '@mui/material';
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Pasco/pascoSection.css'

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

function Blueprint() {
  return (
    <section className='pasco-section'>
      <ThemeProvider theme={theme}>
        <Stack direction='row' sx={{
          gap: 15
        }}>
          <img src="https://bilberrry.com/wp-content/uploads/2020/06/50514895-2306364546042677-1195809454591836160-o-copy@2x.jpg" alt="" />
          <div className='pasco-desc'>
            <img src="https://bilberrry.com/wp-content/uploads/2020/06/blueprint-logo-white.svg" alt="" />
            <h5>WONDERED:</h5>
            <h2>"HOW LONG WILL THIS TAKE?"</h2>
            <p>The truth is, it depends. We typically host a few discovery workshops, followed by a series of sprints from proof of concept to production-ready. We're agile, so you will be too.</p>
            <Button variant='outlined' sx={{
              fontSize: 14,
              width: '65%',
              padding: '16px 26px',
              boxSizing: 'border-box',
              lineHeight: 1.5
            }}
              color='justWhite'
            >Behind the scenes of a 4-year partnership.</Button>
          </div>
        </Stack>
      </ThemeProvider>
    </section >
  )
}

export default Blueprint