import { Stack } from '@mui/material'
import React from 'react'
import '../Pasco/pascoSection.css'

function PascoSection() {
  return (
    <section className='pasco-section'>
      <Stack direction='row'>
        <img src="https://bilberrry.com/wp-content/uploads/2020/06/50514895-2306364546042677-1195809454591836160-o@2x.jpg" alt="" />
        <div className='pasco-desc'>
          <img src="https://bilberrry.com/wp-content/uploads/2020/06/pasco-logo-white.svg" alt="" />
          <h5>ASKED US:</h5>
          <h2>"WE NEED"</h2>
        </div>
      </Stack>
    </section>
  )
}

export default PascoSection