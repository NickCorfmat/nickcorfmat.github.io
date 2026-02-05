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
            Outside of traditional software projects, I enjoy applying my technical and creative skills with my love for LEGO. Alongside my brother, I build custom LEGO models from the ground up and publish them to LEGO Ideas, where fans around the world can vote on them becoming real sets.
  
          </h3>
        </div>
      </div>

      <ProjectCarousel projects={legoProjects} />
    </section>
  )
}

export default LegoProjects
