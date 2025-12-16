import React, { useState, useEffect, useRef } from 'react';
import { games, Project } from '../../../public/Assets/portfolioData';
import ProjectCard from '../ProjectCard/ProjectCard';
import Popup from '../Popup/Popup';
import './Games.css';

const Games: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const speed = 0.5; // pixels per frame (adjust for slower/faster)

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let offset = 0;

    const scroll = () => {
      offset -= speed;

      const firstChild = container.children[0] as HTMLElement;
      if (firstChild) {
        const firstWidth = firstChild.offsetWidth + parseInt(getComputedStyle(firstChild).marginRight);

        // If the first thumbnail has fully scrolled out, move it to the end
        if (-offset >= firstWidth) {
          offset += firstWidth;
          container.appendChild(firstChild);
        }
      }

      container.style.transform = `translateX(${offset}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className='games'>
      <h2>Games</h2>
      <div className="games-list" ref={containerRef}>
        {games.map((project, index) => (
          <ProjectCard
            key={index}
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
