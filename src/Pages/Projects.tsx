import React from 'react';
import './Styles/Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Projects</h1>

      <div className='project-box-container'>
        <div className='project-box'>
          <div className='project-box-left'>
            <video src="/Assets/videos/modernsimulator.mp4" muted loop></video>
          </div>
          <div className='project-box-right'>
            <h2>Modernism Simulator</h2>
            <p>this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph.</p>
          </div>
        </div>
        
        <div className='project-box'>
          <div className='project-box-left'>
            <video src="/Assets/videos/woofmart.mp4" muted loop></video>
          </div>
          <div className='project-box-right'>
            <h2>Woofmart</h2>
            <p>this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph.</p>
          </div>
        </div>

        <div className='project-box'>
          <div className='project-box-left'>
            <video src="/Assets/videos/fightfighters.mp4" muted loop></video>
          </div>
          <div className='project-box-right'>
            <h2>Fight Fighters</h2>
            <p>this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph.</p>
          </div>
        </div>

        <div className='project-box'>
          <div className='project-box-left'>
            <video src="/Assets/videos/willyoudoit.mp4" muted loop></video>
          </div>
          <div className='project-box-right'>
            <h2>will you do it?</h2>
            <p>this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph.</p>
          </div>
        </div>

        <div className='project-box'>
          <div className='project-box-left'>
            <video src="/Assets/videos/wailofthesirenheads.mp4" muted loop></video>
          </div>
          <div className='project-box-right'>
            <h2>Wail of the Sirenheads</h2>
            <p>this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph.</p>
          </div>
        </div>

        <div className='project-box'>
          <div className='project-box-left'>
            <video src="/Assets/videos/rogueeagle.mp4" muted loop></video>
          </div>
          <div className='project-box-right'>
            <h2>Rogue Eagle</h2>
            <p>this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph.</p>
          </div>
        </div>

      </div>

      <h1>LEGO Ideas</h1>

      <div className='project-box-container'>
        <div className='project-box'>
          <div className='project-box-left'>
            <img src="/Assets/images/lovesickgirls.png"></img>
          </div>
          <div className='project-box-right'>
            <h2>Blackpink "Lovesick Girls"</h2>
            <p>this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph.</p>
          </div>
        </div>

        <div className='project-box'>
          <div className='project-box-left'>
            <img src="/Assets/images/asifitsyourlast.jpg"></img>
          </div>
          <div className='project-box-right'>
            <h2>Blackpink "As If It's Your Last"</h2>
            <p>this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph.</p>
          </div>
        </div>

        <div className='project-box'>
          <div className='project-box-left'>
          <video src="/Assets/videos/polaroid.mp4" muted loop></video>
          </div>
          <div className='project-box-right'>
            <h2>Polaroid OneStep SX-70</h2>
            <p>this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph.</p>
          </div>
        </div>

        <div className='project-box'>
          <div className='project-box-left'>
            <img src="/Assets/images/reckless.png"></img>
          </div>
          <div className='project-box-right'>
            <h2>Madison Beer "Reckless"</h2>
            <p>this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph. this is an example paragraph.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;