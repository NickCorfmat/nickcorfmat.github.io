import React from 'react'
import { games } from '../../../public/Assets/portfolioData'
import './Games.css'
import unreal_engine_icon from '../../../public/Assets/icons/unreal_engine.png'
import unity_icon from '../../../public/Assets/icons/unity.png'
import phaser_icon from '../../../public/Assets/icons/phaser2.png'

const Games: React.FC = () => {
  return (
    <section className="games">
      <h2 className="games-title">Games I've Built</h2>

      <div className='games game-engines'>
        <a href="https://www.unrealengine.com/" target="_blank" rel="noopener noreferrer">
          <img src={unreal_engine_icon} className='engine-icon unreal' alt="Unreal Engine" />
        </a>
        <a href="https://www.unity.com/" target="_blank" rel="noopener noreferrer">
          <img src={unity_icon} className='engine-icon unity' alt="Unity" />
        </a>
        <a href="https://phaser.io/" target="_blank" rel="noopener noreferrer">
          <img src={phaser_icon} className='engine-icon phaser' alt="Phaser" />
        </a>
      </div>

      <div className="carousel">
        <div className="group">
          {games.map((project, index) => (
            <a
              key={`game-${index}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <video
                src={project.media}
                className="project-media"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="project-overlay">
                <span className="project-name">{project.name}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="group" aria-hidden>
          {games.map((project, index) => (
            <a
              key={`game-dup-${index}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <video
                src={project.media}
                className="project-media"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="project-overlay">
                <span className="project-name">{project.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Games
