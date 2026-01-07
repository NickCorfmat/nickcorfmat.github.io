import React from 'react'
import './Intro.css'
import full_body_photo from '../../../public/Assets/images/photo1.jpg'

const Intro = () => {
  return (
    <div>
      <div className='about-container'>
        <div className='about-container-left'>
          <h3>ABOUT ME</h3>
          <div className="education-container">
            <h3>EDUCATION</h3>
            <div className="education-card">
              <h2>BS in Computer Science: Game Design</h2>
              <h3>University of California, Santa Cruz - Santa Cruz, CA</h3>
              <h4>September 2021 - June 2025</h4>
            </div>
          </div>
        </div>
        <div className='about-container-right'>
            <img src={full_body_photo} className='full-body-photo' alt="Nick Corfmat Photo" />
        </div>
      </div>
    </div>
  )
}

export default Intro
