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
        <h2 className="homepage-project-title"></h2>
        <div className="homepage-project-subheader">
          <h3>
            I develop gameplay systems, tools, and performance-optimized features across Unity, Unreal, and browser-based frameworks. My experience spans multiplayer networking, AI, graphics programming, combat systems, save architectures, and mobile deployment. I focus on scalable code design, real-time performance, and translating design goals into polished, shippable gameplay experiences.

          </h3>
        </div>
      </div>

      <ProjectCarousel projects={gameProjects} />
    </section>
  )
}

export default Games
