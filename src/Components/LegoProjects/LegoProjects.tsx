import React, { useState } from 'react'
import { legoProjects, Project } from '../../../public/Assets/portfolioData'
import { isVideo } from '../../utils/mediaUtils'
import Popup from '../Popup/Popup'
import './LegoProjects.css'

const LegoProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
            <div
              key={`lego-${index}`}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              {renderMedia(project)}

              <div className="project-overlay">
                <span className="project-name">{project.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="group" aria-hidden>
          {legoProjects.map((project, index) => (
            <div
              key={`lego-dup-${index}`}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              {renderMedia(project)}

              <div className="project-overlay">
                <span className="project-name">{project.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Popup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default LegoProjects
