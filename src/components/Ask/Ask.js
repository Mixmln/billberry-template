import { Button, createTheme, ThemeProvider } from '@mui/material';
import { Stack } from '@mui/system'
import React from 'react'
import './ask.css'

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

function Ask() {
  return (
    <section className='ask'>
      <ThemeProvider theme={theme}>
        <Stack direction="row">
          <div className="container ask-section">
            <h3>WE ASK WHY, NOT WHAT</h3>
            <div className='ask-p'>
              <p>When we agree to build something, we’re agreeing to build the future of your business. So we always start by asking: Why?</p>
              <Button variant='outlined' sx={{
                fontSize: 14,
                width: '65%',
                padding: '16px 26px',
                boxSizing: 'border-box',
                lineHeight: 1.5
              }}
                color='justWhite'>
                Learn More About Our Approach
              </Button>
            </div>
          </div>
        </Stack>
      </ThemeProvider>
    </section>
  )
}

export default Ask