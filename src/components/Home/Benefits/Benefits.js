import { Stack } from '@mui/system'
import React from 'react'
import './benefits.css'
import think from '../../../assets/img/think.png'
import build from '../../../assets/img/build.png'
import eye from '../../../assets/img/eye.png'

function Benefits() {
  return (
    <section className="benefits-section">
      <Stack direction="row" spacing={2}>
        <div className='container benefits'>
          <div className="think">
            <img src={think} alt="think logo" />
            <h4>WE THINK WITH YOU</h4>
            <Stack direction="column">
              <p>Innovation Strategy</p>
              <p>Digital Product Strategy</p>
              <p>Technology Architecture</p>
              <p>Information Architecture</p>
            </Stack>
          </div>
          <div className="hr"></div>
          <div className="eye">
            <img src={eye} alt="eye logo" />
            <h4>WE ENVISION WITH YOU</h4>
            <Stack direction="column">
              <p>Digital Product Design</p>
              <p>UX Research & Design</p>
              <p>Website Design</p>
              <p>Brand Identity Design</p>
            </Stack>
          </div>
          <div className="hr"></div>
          <div className="build">
            <img src={build} alt="build logo" />
            <h4>WE BUILD WITH YOU</h4>
            <Stack direction="column">
              <p>Web App Development</p>
              <p>Magento Development</p>
              <p>Wordpress Development</p>
              <p>Mobile App Development</p>
            </Stack>
          </div>
        </div>
      </Stack>
    </section>
  )
}

export default Benefits