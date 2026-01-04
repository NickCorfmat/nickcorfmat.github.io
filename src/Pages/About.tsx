import React from 'react'
import './Styles/About.css'
import Intro from '../Components/Intro/Intro'
import Skills from '../Components/Skills/Skills'
import Languages from '../Components/Languages/Languages'

const About = () => {
  return (
    <div className='about-root'>
      <Intro />
      <Skills />
      <Languages />
    </div>
  )
}

export default About
