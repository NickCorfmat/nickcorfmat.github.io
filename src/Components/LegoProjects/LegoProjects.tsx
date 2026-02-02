import React from 'react'
import { Project } from '../../../public/Assets/portfolioData'
import { isVideo } from '../../utils/mediaUtils'
import { getProjectsByCategory } from '../../utils/portfolioSelectors'
import './LegoProjects.css'

const LegoProjects: React.FC = () => {
  const legoProjects = getProjectsByCategory(["lego_ideas"])

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

  const renderProjectCard = (project: Project, key: string) => (
    <a
      key={key}
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
  )

  return (
    <section className="lego-projects">
      <div className="home-project-header">
        <h2 className="home-project-title">Design, Build, Pitch.</h2>
        <div className="home-project-subheader">
          <h3>
            Sub-header will go here. This sentence is merely intended to add extra length.
          </h3>
        </div>
      </div>

      <div className="carousel">
        <div className="group">
          {legoProjects.map((project, index) =>
            renderProjectCard(project, `lego-${index}`)
          )}
        </div>

        {/* Duplicate group for infinite scroll */}
        <div className="group" aria-hidden>
          {legoProjects.map((project, index) =>
            renderProjectCard(project, `lego-dup-${index}`)
          )}
        </div>
      </div>
    </section>
  )
}

export default LegoProjects
