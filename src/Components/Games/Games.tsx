import React from 'react'
import './Games.css'
import { getProjectsByCategory } from '../../utils/portfolioSelectors'

const Games: React.FC = () => {
  const gameProjects = getProjectsByCategory(["game"])

  return (
    <section className="games">
      <div className="home-project-header">
        <h2 className="home-project-title">I Develop Games.</h2>
        <div className="home-project-subheader">
          <h3>
            Sub-header will go here. This sentence is merely intended to add extra
            length.
          </h3>
        </div>
      </div>

      <div className="carousel">
        <div className="group">
          {gameProjects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              aria-label={`Open project: ${project.name}`}
            >
              <video
                src={project.media}
                className="project-media"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="project-overlay">
                <span className="project-name">{project.name}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="group" aria-hidden="true">
          {gameProjects.map((project) => (
            <a
              key={`${project.name}-duplicate`}
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
                preload="metadata"
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
