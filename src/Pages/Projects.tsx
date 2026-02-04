import React, { useState } from "react"
import { Project } from "../../public/media/portfolioData"
import { getProjectsByCategory } from "../utils/portfolioSelectors"
import { isVideo } from "../utils/mediaUtils"
import "./Styles/Projects.css"

import close_icon from "../../public/media/icons/close_icon.png"
import github_icon from "../../public/media/icons/github.svg"
import play_icon from "../../public/media/icons/play_icon.png"
import trailer_icon from "../../public/media/icons/trailer_icon.png"
import person_icon from "../../public/media/icons/person_icon.png"
import calendar_icon from "../../public/media/icons/calendar_icon.png"

interface ProjectCardProps {
  project: Project
  expanded: boolean
  onExpand: () => void
  onClose: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  expanded,
  onExpand,
  onClose,
}) => {
  const renderMedia = () => {
    if (isVideo(project.media)) {
      return <video src={project.media} muted loop autoPlay playsInline preload="metadata" />
    }
    return <img src={project.media} alt={project.name} />
  }

  const ActionButton = ({
    href,
    label,
    icon,
  }: {
    href: string
    label: string
    icon?: string
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="projects-link-btn"
    >
      {label}
      {icon && <img src={icon} className="action-icon" alt="" />}
    </a>
  )

  return (
    <>
      {expanded && <div className="projects-backdrop" onClick={onClose} />}

      <div
        className={`projects-card ${expanded ? "expanded" : ""}`}
        onClick={!expanded ? onExpand : undefined}
      >
        <div className="projects-card-inner">
          <div className="projects-media">{renderMedia()}</div>

          <div
            className={`projects-content ${
              expanded ? "expanded-content" : ""
            }`}
          >
            <h2>{project.name}</h2>

            {!expanded ? (
              <>
                <p>{project.shortDescription || "View project details"}</p>
                <button
                  className="projects-learn-more"
                  onClick={(e) => {
                    e.stopPropagation()
                    onExpand()
                  }}
                >
                  Learn more
                </button>
              </>
            ) : (
              <>
                <div className="misc-info">
                  <div className="misc-info-entry">
                    <img
                      src={person_icon}
                      className="misc-info-icon"
                      alt="Team size"
                    />
                    {project.teamSize}
                  </div>
                  <div className="misc-info-entry">
                    <img
                      src={calendar_icon}
                      className="misc-info-icon"
                      alt="Dates"
                    />
                    {project.dates}
                  </div>
                </div>

                <p className="description">{project.description}</p>

                <div className="action-btns">
                  {project.github && (
                    <ActionButton
                      href={project.github}
                      label="GitHub ↗"
                      icon={github_icon}
                    />
                  )}
                  {project.demo && (
                    <ActionButton href={project.demo} label="Demo </>" />
                  )}
                  {project.trailer && (
                    <ActionButton
                      href={project.trailer}
                      label="Trailer"
                      icon={trailer_icon}
                    />
                  )}
                  {project.url && (
                    <ActionButton
                      href={project.url}
                      label="Play"
                      icon={play_icon}
                    />
                  )}
                </div>

                <button
                  className="projects-close-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    onClose()
                  }}
                >
                  <img src={close_icon} className="close-icon" alt="×" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  const allProjects = getProjectsByCategory(["game", "program"])

  return (
    <section className="projects">
      <h1>Some of my work...</h1>

      <div className="projects-grid">
        {allProjects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            expanded={activeProject === project.name}
            onExpand={() => setActiveProject(project.name)}
            onClose={() => setActiveProject(null)}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
