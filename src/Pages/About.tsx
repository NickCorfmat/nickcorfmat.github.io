import React from 'react'
import './Styles/About.css'
import Bio from '../Components/Bio/Bio'
import Skills from '../Components/Skills/Skills'
import Languages from '../Components/Languages/Languages'
import full_body_photo from '../../public/Assets/images/photo1.png'

const About = () => {
  return (
    <div>
      <div className='about-container'>
        <img src={full_body_photo} className='full-body-photo' alt="Nick Corfmat Photo" />
      </div>
      <Bio/>
      <Skills />
      <Languages />
    </div>
  )
}

export default About
