import React from 'react'
import './Games.css'
import '../../Pages/Styles/Home.css'
import { getProjectsByCategory } from '../../utils/portfolioSelectors'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'

const Games: React.FC = () => {
  const gameProjects = getProjectsByCategory(['game'])

  return (
    <section className="games-projects">
      <div className="homepage-project-header-container">
        <h2 className="homepage-project-title">
          Blending Code & Creativity.
        </h2>
        <div className="homepage-project-subheader">
          <h3>
            From Gameplay Scripting and Performance Optimization to Procedural Generation and Level Design, I build systems across multiple facets of game development to deliver polished, cohesive experiences.
          </h3>
        </div>
      </div>
      <ProjectCarousel projects={gameProjects} />

    </section>
  )
}

export default Games
