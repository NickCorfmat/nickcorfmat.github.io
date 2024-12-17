import React from 'react';
import { categories, ProjectCategory } from '../../../public/Assets/portfolio';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Library.css'

const Portfolio: React.FC = () => {
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
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;