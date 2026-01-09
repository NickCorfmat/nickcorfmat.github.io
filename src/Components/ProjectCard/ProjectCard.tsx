import React, { useState } from 'react';
import './ProjectCard.css';
import { isVideo } from '../../utils/mediaUtils';
import { Project } from '../../../public/Assets/portfolioData';

interface ProjectCardProps extends Project {
    onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, media, shortDescription, description, url, teamSize, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`project-card ${isHovered ? 'hovered' : ''}`} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            onClick={() => onClick({ name, media, shortDescription, description, url, teamSize })}
        >
            {isVideo(media) ? (
                <video className="project-media" autoPlay muted loop>
                    <source src={media} type="video/mp4" />
                </video>
            ) : (
                <img className="project-media" src={media} alt={name} />
            )}
        </div>
    );
};

export default ProjectCard;