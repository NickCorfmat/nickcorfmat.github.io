import React from 'react'
import './Bio.css'
import cattycorner from '../../../public/Assets/images/cattycorner.png'

const Bio = () => {
  return (
    <div>
      <div className='bio'>
        <div className='bio-left'>
            <div className='profile-container'>
                <img src={cattycorner} alt="" />
            </div>
        </div>
        <div className='bio-right'>

        </div>
      </div>
    </div>
  )
}

export default Bio
