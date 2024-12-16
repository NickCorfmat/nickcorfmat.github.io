import React from 'react';
import './ProjectRow.css'
import Project from './Project/Project';

interface ProjectRow {
    title: string;
    projects: Project[];
}

const ProjectRow: React.FC<ProjectRow> = ({ title, projects }) => {
    return (
        <div className="project-row">
            <h3>{title}</h3>
            <div className="project-row-items">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        media={project.media}
                        url={project.url}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectRow;