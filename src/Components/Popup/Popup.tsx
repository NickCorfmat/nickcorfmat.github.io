import React from 'react';
import { Project } from '../../../public/Assets/portfolio';
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
        <div className="centered-modal" onClick={handleBackgroundClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {isVideo(project.media) ? (
                    <video className="project-media" autoPlay muted loop>
                        <source src={project.media} type="video/mp4" />
                    </video>
                ) : (
                    <img className="project-media" src={project.media} alt={project.name} />
                )}
            </div>
        </div>
    );
};

export default Popup;