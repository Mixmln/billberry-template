import { Stack } from '@mui/material'
import React from 'react'
import './lifeSection.css'

function PascoSection() {
  return (
    <section className='life-section'>
      <Stack direction='row'>

        <div className="life-desc">
          <img className='life-logo' src="https://images.squarespace-cdn.com/content/v1/5b4cc42f4611a0e9f08711ce/1547635530135-U0JB3Q1E7IOVIT8D05NZ/The+Life+You+Can+Save+logo." alt="the life you can save logo" />
          <div className="life-text">
            <p>WANTED TO KNOW:</p>
            <h2>"SCAN YOU MAKE US A NEW WEBSITE?"</h2>
            <p>When it comes to digital experiences, we can build pretty much anything. And if there’s a better solution, we’ll tell you. We always start with: Why? and use the answer to drive real growth and meaningful transformation.
              <button>See what we built for a global non-profit with a tight timeline-and why.</button>
            </p>
          </div>
        </div>
        <img className='life-img' src="https://bilberrry.com/wp-content/uploads/2020/06/50514895-2306364546042677-1195809454591836160-o-copy-3@2x-1.jpg" alt="" />

      </Stack>
    </section>
  )
}

export default PascoSection