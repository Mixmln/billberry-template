import { Box, Stack } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import '../Approach/approach.css'

function Approach() {
  return (
    <Box sx={{
      margin: '0px 90px',
      marginTop: 12,
    }}>
      <Grid2 container spacing={2}>
        <Grid2 xs={3} sx={{
          color: 'white'
        }}>
          <h5>OUR APPROACH</h5>
        </Grid2>
        <Grid2 xs={9}>
          <Box sx={{
            width: '80%',
            color: 'white',
            marginLeft: 8
          }}>
            <Stack>
              <h2 className='approach-h2-title'>We design, build, and deploy enterprise ecommerce that actually works.</h2>
              <Grid2 direction='column' gap={2} wrap='nowrap' sx={{
                padding: 0,
                display: 'flex'
              }}>
                <Grid2 xs={4} sx={{
                  display: 'inline-block',
                  padding: 0,
                  textAlign: 'left',


                }}>
                  <h4 className='box-h4-title'>How we do it</h4>
                  <p className='approach-text'>We prioritize your business. That means integrating with existing systems, developing strategies that complement your operations, and delivering highly functional change management without derailing your day-to-day.</p>
                </Grid2>
                <Grid2 xs={4} sx={{
                  display: 'inline-block',
                  textAlign: 'left',
                  padding: 0,

                }}>
                  <h4 className='box-h4-title'>Capabilities</h4>
                  <p className='approach-text'>Technology architecture planning • Agile project planning • DevOps assessment & planning • DevOps • UI/UX design • Data migration • Platform migration • eCommerce development</p>
                </Grid2>
                <Grid2 xs={4} sx={{
                  display: 'inline-block',

                }}></Grid2>
              </Grid2>
            </Stack>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Approach