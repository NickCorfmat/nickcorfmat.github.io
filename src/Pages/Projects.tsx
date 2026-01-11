import React, { useState } from "react";
import { games, Project } from "../../public/Assets/portfolioData";
import "./Styles/Projects.css";
import close_icon from "../../public/Assets/icons/close_icon.png";
import github_icon from "../../public/Assets/icons/github.svg"
import play_icon from "../../public/Assets/icons/play_icon.png"
import trailer_icon from "../../public/Assets/icons/trailer_icon.png"
import person_icon from "../../public/Assets/icons/person_icon.png"
import calendar_icon from "../../public/Assets/icons/calendar_icon.png"

interface ProjectCardProps {
  project: Project;
  expanded: boolean;
  onExpand: () => void;
  onClose: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  expanded,
  onExpand,
  onClose,
}) => {
  return (
    <>
      {expanded && <div className="projects-backdrop" onClick={onClose} />}

      <div
        className={`projects-card ${expanded ? "expanded" : ""}`}
        onClick={!expanded ? onExpand : undefined}
      >
        <div className="projects-card-inner">
          <div className="projects-media">
            {project.media.endsWith(".mp4") ? (
              <video src={project.media} muted loop autoPlay playsInline />
            ) : (
              <img src={project.media} alt={project.name} />
            )}
          </div>

          <div className={`projects-content ${expanded ? "expanded-content" : ""}`}>
            <h2>{project.name}</h2>

            {!expanded ? (
              <>
                <p>{project.shortDescription || "View project details"}</p>
                <button
                  className="projects-learn-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    onExpand();
                  }}
                >
                  Learn more
                </button>
              </>
            ) : (
              <>
                <div className="misc-info">
                  <div className="misc-info-entry">
                    <img src={person_icon} className="misc-info-icon person-icon" alt="Team size: " />
                    {project.teamSize}
                  </div>
                  <div className="misc-info-entry">
                    <img src={calendar_icon} className="misc-info-icon" alt="Dates: " />
                    {project.dates}
                  </div>
                </div>
                
                <p className="description">{project.description || "View project details"}</p>
                  
                <div className="action-btns">
                  {project.github ? (
                    <>
                      <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects-link-btn"
                      >
                        Github ↗
                        <img src={github_icon} className="action-icon" alt="" />
                      </a>
                    </>
                  ) : (
                  <></>
                  )}
                  {project.demo ? (
                    <>
                      <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects-link-btn"
                      >
                        Demo {'</>'}
                      </a>
                    </>
                  ) : (
                  <></>
                  )}
                  {project.trailer ? (
                    <>
                      <a
                      href={project.trailer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects-link-btn"
                      >
                        Trailer
                        <img src={trailer_icon} className="action-icon" alt="" />
                      </a>
                    </>
                  ) : (
                  <></>
                  )}
                  {project.url ? (
                    <>
                      <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects-link-btn"
                      >
                        Play
                        <img src={play_icon} className="action-icon" alt="" />
                      </a>
                    </>
                  ) : (
                  <></>
                  )}
                </div>

                <button
                  className="projects-close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
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
  );
};

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section className="projects">
      <h1>My Projects</h1>

      <div className="projects-grid">
        {games.map((project) => (
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
  );
};

export default Projects;
