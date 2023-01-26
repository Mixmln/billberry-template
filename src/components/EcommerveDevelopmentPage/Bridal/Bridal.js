import { Box } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import '../Bridal/bridal.css'

function Bridal() {
  return (
    <div>
      <Box>
        <Grid2 sx={{
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Grid2 direction='row' xs={6} sx={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: 6
          }}>
            <h2 className='bridal-title'>DAVID'S BRIDAL</h2>
            <p className='bridal-text'>This major wedding dress retailer had been trying for years to migrate their long-standing ecommerce infrastructure to the cloud. We worked together on a flexible, modern strategy: headless Magento 2 with a microservices-based architecture to integrate with dozens of legacy systems.</p>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start'

            }}>
              <div className='line'></div>

              <div className='bridal-nav-button'>
                <p>Learn more about our approach</p>
                <div>
                  <EastOutlinedIcon />
                </div>
              </div>

              <div className="line"></div>

              <div className='bridal-nav-button'>
                <p>Project rescue deep dive</p>
                <div>
                  <EastOutlinedIcon />
                </div>
              </div>

              <div className="line"></div>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <img src="https://bilberrry.com/wp-content/uploads/2022/08/22_BB_InlinenIMG_DB-02.jpg" alt="" />
          </Grid2>
        </Grid2>
      </Box>
    </div>
  )
}

export default Bridal