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
        <h2>Nick Corfmat</h2>
        <p>
          Passionate software engineer and game developer with experience in
          Unity, React, and Phaser. Constantly exploring new technologies and
          creative ways to build immersive experiences.
        </p>
      </div>
    </div>
  )
}

export default Bio