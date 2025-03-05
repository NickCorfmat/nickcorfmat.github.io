import React, { useState } from 'react';
import { categories, ProjectCategory, Project } from '../../../public/Assets/portfolioData';
import ProjectCard from '../ProjectCard/ProjectCard';
import Popup from '../Popup/Popup';
import './Library.css';

const Library: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleCardClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleModalClose = () => {
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
                <Popup project={selectedProject} onClose={handleModalClose} />
            )}
        </div>
    );
};

export default Library;