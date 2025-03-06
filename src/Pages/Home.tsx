import React from 'react'
import Hero from '../Components/Hero/Hero'
import Games from '../Components/Games/Games'
import LegoProjects from '../Components/LegoProjects/LegoProjects'
import Skills from '../Components/Skills/Skills'
import Languages from '../Components/Languages/Languages'
import Bio from '../Components/Bio/Bio'

const Home = () => {
  return (
    <div>
      <Hero />
      <Bio />
      <Games />
      <LegoProjects />
      <Skills />
      <Languages />
    </div>
  )
}

export default Home
