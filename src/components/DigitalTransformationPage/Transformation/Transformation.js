import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Box, Stack } from '@mui/system'
import React from 'react'
import './transformation.css'

function Transformation() {
  return (
    <Box className="container transf-container">
      <Box sx={{
        paddingTop: 12,
        paddingBottom: 12,
        color: 'white',
        textAlign: 'left'
      }}>
        <Grid2 container spacing={2} sx={{
          justifyContent: 'space-between',
        }}>
          <Grid2 xs={1} >
            <h5>END TO END CAPABILITIES</h5>
          </Grid2>
          <Grid2 xs={10} sx={{
            paddingLeft: 20,
            textAlign: 'left'
          }} >
            <h2>We’re equal parts strategic consultancy, development firm, and design studio.</h2>
            <Stack direction='row' gap={8}>
              <Grid2 xs={4}>
                <h3>Strategy</h3>
                <p>Business consulting • Digital modernization strategy • Product development planning • Code audit & assessment • Technology architecture planning • Agile project planning • DevOps assessment & planning</p>
              </Grid2>
              <Grid2 xs={4}>
                <h3>Design</h3>
                <p>UI/UX design • Website design • Visual identity • Data architecture</p>
              </Grid2>
              <Grid2 xs={4}>
                <h3>Development</h3>
                <p>Web applications • Mobile applications • Custom websites • Enterprise ecommerce solutions • DevOps</p>
              </Grid2>
            </Stack>
          </Grid2>
        </Grid2>
      </Box>
      <Box sx={{
        paddingTop: 12,
        paddingBottom: 12,
        color: 'white',
        textAlign: 'left'
      }}>
        <Grid2 container spacing={2} sx={{
          justifyContent: 'space-between',
        }}>
          <Grid2 xs={1} >
            <h5>TRANSFORM
              YOUR BUSINESS</h5>
          </Grid2>
          <Grid2 xs={10} sx={{
            paddingLeft: 20,
            textAlign: 'left'
          }} >
            <h2>Our long-term, integrated approach drives us to tackle complex problems and deliver transformational digital solutions.</h2>
            <h4>We help CTOs, CIOs, and their teams uncover inefficiencies and use technology to build capabilities, from improved operations to better sales and beyond.</h4>
          </Grid2>
        </Grid2>
      </Box>
    </Box >
  )
}

export default Transformation