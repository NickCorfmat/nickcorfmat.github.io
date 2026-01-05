import React from 'react'
import './Hero.css'
import { isVideo, getRandomProject } from '../../utils/mediaUtils'
import github_icon from '../../../public/Assets/icons/github_black.svg'
import linkedin_icon from '../../../public/Assets/icons/linkedin_blue.svg'
import download_icon from '../../../public/Assets/icons/download.svg'

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
                    <h3 className='quick-links'>Quick Links</h3>
                    <div className='hero-options'>
                        <a href="https://www.linkedin.com/in/nicolascorfmat/" className="hero-button linkedin">
                            LinkedIn
                            <img src={linkedin_icon} className="linkedin-icon" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/NickCorfmat" className="hero-button github">
                            GitHub
                            <img src={github_icon} className="github-icon" alt="LinkedIn" />
                        </a>
                        <a href="Assets/docs/Nicolas_Corfmat_Resume_2025.pdf" className="hero-button download" download="Nick_Corfmat_Resume_2025">
                            Resume
                            <img src={download_icon} className="download-icon" alt="Download Resume" />
                        </a>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}

export default Hero
