import React from 'react'
import { legoProjects, Project } from '../../../public/Assets/portfolioData'
import { isVideo } from '../../utils/mediaUtils'
import './LegoProjects.css'

const LegoProjects: React.FC = () => {
  const renderMedia = (project: Project) => {
    if (isVideo(project.media)) {
      return (
        <video
          className="project-media"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={project.media} type="video/mp4" />
        </video>
      )
    }

    return (
      <img
        src={project.media}
        alt={project.name}
        className="project-media"
      />
    )
  }

  return (
    <section className="lego-projects">
      <h2 className="lego-title">LEGO Ideas</h2>

      <div className="carousel">
        <div className="group">
          {legoProjects.map((project, index) => (
            <a
              key={`lego-${index}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              {renderMedia(project)}

              <div className="project-overlay">
                <span className="project-name">{project.name}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="group" aria-hidden>
          {legoProjects.map((project, index) => (
            <a
              key={`lego-dup-${index}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              {renderMedia(project)}

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

export default LegoProjects
