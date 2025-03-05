import React, { useState } from 'react';
import { games, Project } from '../../../public/Assets/portfolioData';
import ProjectCard from '../ProjectCard/ProjectCard';
import Popup from '../Popup/Popup';
import './Games.css';

const Games: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className='games'>
      <h2>Games</h2>
      <div className="games-list">
        {games.map((project) => (
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

export default Games;
