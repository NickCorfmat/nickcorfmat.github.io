import React from 'react'
import './Games.css'
import '../../Pages/Styles/Home.css'
import { getProjectsByCategory } from '../../utils/portfolioSelectors'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'

const Games: React.FC = () => {
  const gameProjects = getProjectsByCategory(['game'])

  return (
    <section className="games-projects">

      {/* ================= HEADER ================= */}

      <div className="homepage-project-header-container">
        <h2 className="homepage-project-title">
          Systems → Gameplay → Performance.
        </h2>

        <div className="homepage-project-subheader">
          <h3>
            I design and engineer gameplay systems, rendering pipelines,
            and modular tooling across real-time engines — focusing on
            performance, scalability, and player feel.
          </h3>
        </div>
      </div>

      {/* ================= CAROUSEL ================= */}

      <ProjectCarousel projects={gameProjects} />

    </section>
  )
}

export default Games
