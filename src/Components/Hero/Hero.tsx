import React from 'react'
import './Hero.css'
import { isVideo, getRandomProject } from '../../utils/mediaUtils'

const Hero = () => {
  const randomProject = getRandomProject();

  return (
    <div className='hero'>
        {randomProject && (
            <>
                {isVideo(randomProject.media) ? (
                    <video className='hero-media' autoPlay muted loop>
                        <source src={randomProject.media} type='video/mp4'/>
                    </video>
                ) : (
                    <img className='hero-media' src={randomProject.media}/>
                )}
                <div className='hero-text'>
                    <h1>Nick Corfmat</h1>
                    <div className='card'>
                        <div className='loader'>
                            <div className='words'>
                                <span className='word'>Web</span>
                                <span className='word'>Software</span>
                                <span className='word'>Game</span>
                                <span className='word'>Web</span>
                            </div>
                            <p>Developer</p>
                        </div>
                    </div>
                </div>
                <div className='hero-options'>
                    <a href="https://www.linkedin.com/in/nicolascorfmat/" className="hero-button">Resume</a>
                    <a href="https://www.linkedin.com/in/nicolascorfmat/" className="hero-button">LinkedIn</a>
                    <a href="https://github.com/NickCorfmat" className="hero-button">GitHub</a>
                </div>
            </>
        )}
    </div>
  )
}

export default Hero
