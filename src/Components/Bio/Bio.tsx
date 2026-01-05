import React from 'react'
import { Link } from 'react-router-dom';
import './Bio.css'
import profile from '../../../public/Assets/images/profile.jpg'

const Bio = () => {
  return (
    <div className='bio'>
      <div className='bio-profile-container'>
        <div className='gradient-container'>
          <div className='gradient'></div>
        </div>
        <Link to="/about" className="profile-overlay-link">
          <div className="profile-overlay">
            <span>About me</span>
          </div>
          <img src={profile} className='bio-profile-picture' alt="Nick Corfmat" />
        </Link>
      </div>
      <div className='bio-text-container'>
        <h2>Hi, I'm <span className="highlight-name">Nick Corfmat</span>!</h2>
        <p>
          I'm Nick, a game designer and software developer from the Bay Area, CA.
          I graduated from the University of California, Santa Cruz with a Bachelor's
          degree in Computer Science Game Design.
        </p>
      </div>
    </div>
  )
}

export default Bio
