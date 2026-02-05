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
        <h2 className="homepage-project-title">Experiences I've worked on</h2>
        <div className="homepage-project-subheader">
          <h3>using tools such as Unity, Unreal Engine, Phaser</h3>
        </div>
      </div>

      <ProjectCarousel projects={gameProjects} />
    </section>
  )
}

export default Games
