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
      <div className="home-project-header">
        <h2 className="home-project-title">Design, Build, Pitch.</h2>
        <div className='home-project-subheader'>
          <h3>Community-driven product design projects that combine engineering precision, storytelling,
        and visual communication — reaching millions worldwide.</h3>
        </div>
      </div>

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
