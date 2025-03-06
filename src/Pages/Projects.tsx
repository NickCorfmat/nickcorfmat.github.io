import React, { useEffect, useState } from 'react';
import './Styles/Projects.css';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const projectBoxes = document.querySelectorAll('.project-box');
      let closestIndex = null;
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;

      projectBoxes.forEach((box, index) => {
        const rect = box.getBoundingClientRect();
        const boxCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - boxCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='projects'>
      <h1>Projects</h1>

      <div className='project-box-container'>
        <div className={`project-box ${activeIndex === 0 ? 'active' : ''}`}>
          <div className='project-box-left'>
            <video src="/Assets/videos/modernsimulator.mp4" muted loop autoPlay></video>
          </div>
          <div className='project-box-right'>
            <h2>Modernism Simulator</h2>
            <p>This is an example paragraph. This is an example paragraph.</p>
          </div>
        </div>

        <div className={`project-box ${activeIndex === 1 ? 'active' : ''}`}>
          <div className='project-box-left'>
            <video src="/Assets/videos/woofmart.mp4" muted loop autoPlay></video>
          </div>
          <div className='project-box-right'>
            <h2>Woofmart</h2>
            <p>This is an example paragraph. This is an example paragraph.</p>
          </div>
        </div>

        <div className={`project-box ${activeIndex === 2 ? 'active' : ''}`}>
          <div className='project-box-left'>
            <video src="/Assets/videos/fightfighters.mp4" muted loop autoPlay></video>
          </div>
          <div className='project-box-right'>
            <h2>Fight Fighters</h2>
            <p>This is an example paragraph. This is an example paragraph.</p>
          </div>
        </div>

        <div className={`project-box ${activeIndex === 3 ? 'active' : ''}`}>
          <div className='project-box-left'>
            <video src="/Assets/videos/willyoudoit.mp4" muted loop autoPlay></video>
          </div>
          <div className='project-box-right'>
            <h2>Will You Do It?</h2>
            <p>This is an example paragraph. This is an example paragraph.</p>
          </div>
        </div>

        <div className={`project-box ${activeIndex === 4 ? 'active' : ''}`}>
          <div className='project-box-left'>
            <video src="/Assets/videos/wailofthesirenheads.mp4" muted loop autoPlay></video>
          </div>
          <div className='project-box-right'>
            <h2>Wail of the Sirenheads</h2>
            <p>This is an example paragraph. This is an example paragraph.</p>
          </div>
        </div>

        <div className={`project-box ${activeIndex === 5 ? 'active' : ''}`}>
          <div className='project-box-left'>
            <video src="/Assets/videos/rogueeagle.mp4" muted loop autoPlay></video>
          </div>
          <div className='project-box-right'>
            <h2>Rogue Eagle</h2>
            <p>This is an example paragraph. This is an example paragraph.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;