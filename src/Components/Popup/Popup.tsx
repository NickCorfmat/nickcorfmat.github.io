import React from 'react';
import { Project } from '../../../public/Assets/portfolioData';
import { isVideo } from '../../utils/mediaUtils';
import './Popup.css';

interface PopupProps {
    project: Project;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ project, onClose }) => {
    const handleBackgroundClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <div className="popup-overlay" onClick={handleBackgroundClick}>
            <div className="popup-media" onClick={(e) => e.stopPropagation()}>
                {isVideo(project.media) ? (
                    <video className="project-media" autoPlay muted loop>
                        <source src={project.media} type="video/mp4" />
                    </video>
                ) : (
                    <img className="project-media" src={project.media} alt={project.name} />
                )}
            </div>
            <div className='popup-info'></div>
        </div>
    );
};

export default Popup;