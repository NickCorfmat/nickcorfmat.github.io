import React from 'react'
import { games } from '../../../public/Assets/portfolioData'
import './Games.css'

const Games: React.FC = () => {
  return (
    <section className="games">
      <h2 className="games-title">Games</h2>

      <div className="carousel">
        <div className="group">
          {games.map((project, index) => (
            <a
              key={`game-${index}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <video
                src={project.media}
                className="project-media"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="project-overlay">
                <span className="project-name">{project.name}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="group" aria-hidden>
          {games.map((project, index) => (
            <a
              key={`game-dup-${index}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <video
                src={project.media}
                className="project-media"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="project-overlay">
                <span className="project-name">{project.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Games
