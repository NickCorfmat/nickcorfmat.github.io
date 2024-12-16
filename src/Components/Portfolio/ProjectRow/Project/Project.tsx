import React from 'react';
import './Project.css'
import { isVideo } from '../../../../utils/mediaUtils';

interface Project {
    name: string;
    media: string;
    url: string;
    description: string;
}

const Project: React.FC<Project> = ({ media }) => {
    return (
        <div className="project">
            {isVideo(media) ? (
                <video className="project-media" autoPlay muted loop>
                    <source src={media} type="video/mp4" />
                </video>
            ) : (
                <img className="project-media" src={media} />
            )}
        </div>
    );
};

export default Project;