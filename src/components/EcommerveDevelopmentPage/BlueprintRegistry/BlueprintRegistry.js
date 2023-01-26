import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import '../Bridal/bridal.css'
import '../BlueprintRegistry/blueprint.css'


function BlueprintRegistry() {
  return (
    <div className='container'>
      <Grid2 sx={{
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 3
      }}>
        <Grid2 xs={6}>
          <img src="https://bilberrry.com/wp-content/uploads/2022/08/22_BB_InlinenIMG_BluePrintRegistry.png" alt="" />
        </Grid2>
        <Grid2 xs={6} sx={{
          width: '45%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          gap: 6
        }}>
          <h2 className='bridal-title'>BLUEPRINT
            REGISTRY</h2>
          <p className='bridal-text'>We built a custom ecomm platform for Blueprint that did this thing, that thing, and this other cool thing too. All together, it was a new way to do ecomm and successfully managed to do this notable feature, this notable feature, and this notable feature.</p>

          <div className='blueprint-line'></div>

          <div className='blueprint-nav-button'>
            <p>Learn more about our approach</p>
            <div>
              <EastOutlinedIcon className='slide-left' />
            </div>
          </div>
          <div className='blueprint-line'></div>

        </Grid2>
      </Grid2>
    </div>
  )
}

export default BlueprintRegistry