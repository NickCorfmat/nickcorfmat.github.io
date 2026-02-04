import React from 'react'
import { Project } from '../../../public/media/portfolioData'
import { isVideo } from '../../utils/mediaUtils'
import './ProjectCarousel.css'

interface ProjectCarouselProps {
  projects: Project[]
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const renderMedia = (project: Project) => {
    if (isVideo(project.media)) {
      return (
        <video
          className="project-media"
          src={project.media}
          autoPlay
          muted
          loop
          playsInline
        />
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

  const renderGroup = (suffix: string, ariaHidden = false) => (
    <div className="group" aria-hidden={ariaHidden}>
      {projects.map((project, index) => (
        <a
          key={`${project.name}-${suffix}-${index}`}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          aria-label={`Open project: ${project.name}`}
        >
          {renderMedia(project)}

          <div className="project-overlay">
            <span className="project-name">{project.name}</span>
          </div>
        </a>
      ))}
    </div>
  )

  return (
    <div className="carousel">
      {renderGroup('primary')}
      {renderGroup('duplicate', true)}
    </div>
  )
}

export default ProjectCarousel
