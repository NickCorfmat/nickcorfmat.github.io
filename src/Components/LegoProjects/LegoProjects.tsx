import React from 'react'
import './LegoProjects.css'
import '../../Pages/Styles/Home.css'
import { getProjectsByCategory } from '../../utils/portfolioSelectors'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'

const LegoProjects: React.FC = () => {
  const legoProjects = getProjectsByCategory(['lego_ideas'])

  return (
    <section className="lego-projects">
      <div className="homepage-project-header-container">
        <h2 className="homepage-project-title">Design → Render → Pitch.</h2>
        <div className="homepage-project-subheader">
          <h3>
            Beyond coding, I like to merge my computer skills with my love for LEGO.
            With the help of my brother, we design and pitch LEGO sets from the
            ground up and publish them on LEGO Ideas where fans can vote for them.
            At 10,000 supporters, our projects get officially reviewed by LEGO for
            production. Below are some of the 29+ projects we designed for LEGO
            Ideas.
          </h3>
        </div>
      </div>

      <ProjectCarousel projects={legoProjects} />
    </section>
  )
}

export default LegoProjects
