import React from 'react'
import './Hero.css'
import { isVideo } from '../../utils/mediaUtils'
import {
  getProjectsByCategory,
  getRandomProject
} from '../../utils/portfolioSelectors'

import github_icon from '../../../public/media/icons/github_black.svg'
import linkedin_icon from '../../../public/media/icons/linkedin_blue.svg'
import download_icon from '../../../public/media/icons/download.svg'

const Hero: React.FC = () => {
  const featuredProjects = getProjectsByCategory(["featured"])

  const randomProject = getRandomProject(featuredProjects)

  return (
    <div className="hero">
      {randomProject && (
        <>
          {isVideo(randomProject.media) ? (
            <video className="hero-media" autoPlay muted loop playsInline>
              <source src={randomProject.media} type="video/mp4" />
            </video>
          ) : (
            <img
              className="hero-media"
              src={randomProject.media}
              alt={randomProject.name}
            />
          )}

          <div className="hero-text">
            <h1>Nick Corfmat</h1>

            <div className="card">
              <div className="loader">
                <div className="words">
                  <span className="word">Game</span>
                  <span className="word">Software</span>
                  <span className="word">Web</span>
                </div>
                <p>Developer</p>
              </div>
            </div>

            <h3 className="quick-links">Quick Links</h3>

            <div className="hero-options">
              <a
                href="https://www.linkedin.com/in/nicolascorfmat/"
                className="hero-button linkedin"
              >
                LinkedIn
                <img
                  src={linkedin_icon}
                  className="linkedin-icon"
                  alt="LinkedIn"
                />
              </a>

              <a
                href="https://github.com/NickCorfmat"
                className="hero-button github"
              >
                GitHub
                <img
                  src={github_icon}
                  className="github-icon"
                  alt="GitHub"
                />
              </a>

              <a
                href="/media/docs/Nicolas_Corfmat_Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button download"
              >
                Resume
                <img
                  src={download_icon}
                  className="download-icon"
                  alt="Download Resume"
                />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Hero
