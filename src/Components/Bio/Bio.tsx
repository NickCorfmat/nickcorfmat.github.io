import React from 'react'
import './Bio.css'
import profile from '../../../public/Assets/images/profile.jpg'

const Bio = () => {
  return (
    <div className='bio'>
      <div className='bio-left'>
        <div className='profile-container'>
          <img src={profile} className='profile-picture' alt="Profile" />
        </div>
      </div>
      <div className='bio-right'>
        <h2>Hi!</h2>
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