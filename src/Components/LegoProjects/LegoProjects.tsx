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
            Beyond software projects, I enjoy applying my
            technical and creative skills with my love for LEGO. Alongside my
            brother, we build custom LEGO models from the ground up and publish
            them to{" "}
            
            <a
              href="https://beta.ideas.lego.com/profile/cb41754b-5ba3-425f-8051-5bb0be7b5c19"
              target="_blank"
              rel="noopener noreferrer"
              className="lego-link"
            >
              LEGO Ideas ↗
            </a>
            
            , where fans around the world can vote on them becoming real sets.
          </h3>
        </div>
      </div>

      <ProjectCarousel projects={legoProjects} />
    </section>
  )
}

export default LegoProjects
