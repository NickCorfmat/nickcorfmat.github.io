import React, { useState } from 'react';
import { categories, ProjectCategory, Project } from '../../../public/Assets/portfolio';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Library.css';

const Library: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleCardClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleModalBackgroundClick = () => {
        setSelectedProject(null);
    };

    return (
        <div>
            {categories.map((category: ProjectCategory) => (
                <div key={category.title} className="category">
                    <h2>{category.title}</h2>
                    <div className="category-grid">
                        {category.projects.map((project) => (
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
                </div>
            ))}
            {selectedProject && (
                <div className="centered-modal" onClick={handleModalBackgroundClick}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h1>{selectedProject.name}</h1>
                        <p>{selectedProject.description}</p>
                        <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Library;