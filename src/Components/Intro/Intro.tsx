import React from 'react'
import './Intro.css'
import full_body_photo from '../../../public/Assets/images/photo1.jpg'

const Intro = () => {
  return (
    <div>
      <div className='about-container'>
        <div className='about-container-left'>
            <img src={full_body_photo} className='full-body-photo' alt="Nick Corfmat Photo" />
        </div>
        <div className='about-container-right'>
            
        </div>
      </div>
    </div>
  )
}

export default Intro
