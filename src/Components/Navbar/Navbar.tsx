import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <p>NICK CORFMAT</p>
        </div>
        <ul className='nav-menu'>
            <li>HOME</li>
            <li>PORTFOLIO</li>
            <li>RESUME</li>
            <li>CONTACT</li>
        </ul>
    </div>
  )
}

export default Navbar
