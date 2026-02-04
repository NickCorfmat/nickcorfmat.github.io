import React from 'react'
import './Games.css'
import '../../Pages/Styles/Home.css'
import { getProjectsByCategory } from '../../utils/portfolioSelectors'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'

const Games: React.FC = () => {
  const gameProjects = getProjectsByCategory(['game'])

  return (
    <section className="game-projects">
      <div className="homepage-project-header-container">
        <h2 className="homepage-project-title">I Develop Games.</h2>
        <div className="homepage-project-subheader">
          <h3>
            Sub-header will go here. This sentence is merely intended to add extra
            length.
          </h3>
        </div>
      </div>

      <ProjectCarousel projects={gameProjects} />
    </section>
  )
}

export default Games
