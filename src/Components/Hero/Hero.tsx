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
                    <h1>NICK CORFMAT</h1>
                    <h2>SOFTWARE DEVELOPER</h2>
                </div>
            </>
        )}
    </div>
  )
}

export default Hero
