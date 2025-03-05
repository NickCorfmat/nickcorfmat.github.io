import React, { useState } from 'react';
import { legoProjects, Project } from '../../../public/Assets/portfolioData';
import ProjectCard from '../ProjectCard/ProjectCard';
import Popup from '../Popup/Popup';
import './LegoProjects.css';

const LegoProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className='lego-projects'>
      <h2>LEGO Ideas Projects</h2>
      <div className="lego-projects-grid">
        {legoProjects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            media={project.media}
            description={project.description}
            url={project.url}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {selectedProject && (
        <Popup project={selectedProject} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default LegoProjects;
