import { Box, Stack } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import '../Approach/approach.css'

function Approach() {
  return (
    <Box sx={{
      marginTop: 12
    }}>
      <Grid2 container spacing={2}>
        <Grid2 xs={3} sx={{
          color: 'white'
        }}>
          <h5>OUR APPROACH</h5>
        </Grid2>
        <Grid2 xs={9}>
          <Box sx={{
            width: '90%',
            padding: '10px 50px',
            color: 'white'
          }}>
            <Stack>
              <h2>title</h2>
              <Grid2>
                <Grid2 xs={4}></Grid2>
                <Grid2 xs={4}></Grid2>
                <Grid2 xs={4}></Grid2>
              </Grid2>
            </Stack>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Approach