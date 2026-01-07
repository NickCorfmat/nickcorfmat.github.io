import React, { useState } from "react";
import { games, Project } from "../../public/Assets/portfolioData";
import "./Styles/Projects.css";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="project-card"
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`project-card-inner ${
          flipped ? "is-flipped" : ""
        }`}
      >
        <div className="project-face project-front">
          <div className="project-media">
            {project.media.endsWith(".mp4") ? (
              <video
                src={project.media}
                muted
                loop
                autoPlay
                playsInline
              />
            ) : (
              <img src={project.media} alt={project.name} />
            )}
          </div>

          <div className="project-front-overlay">
            <h2>{project.name}</h2>
            <p>{project.description || "View project details"}</p>

            <button
              className="learn-more-btn"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(true);
              }}
            >
              Learn more
            </button>
          </div>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-face project-back"
        >
          <h2>{project.name}</h2>
          <p>{project.description || "View project details"}</p>
          <span className="project-link">Open project ↗</span>
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h1>My Projects</h1>

      <div className="project-grid">
        {games.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
