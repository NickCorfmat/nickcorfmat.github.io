import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import github_icon from '../../../public/Assets/icons/github.svg'
import linkedin_icon from '../../../public/Assets/icons/linkedin.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <ul className="footer-links">
          <li><Link to="/" className="nav-link">HOME</Link></li>
          <li><Link to="/portfolio" className="nav-link">PORTFOLIO</Link></li>
          <li><Link to="/resume" className="nav-link">RESUME</Link></li>
          <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
        </ul>
        <div className="footer-social-icons">
          <a href="https://www.linkedin.com/in/nicolascorfmat/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_icon} className="linkedin-icon" alt="LinkedIn" />
          </a>
          <a href="https://github.com/NickCorfmat" target="_blank" rel="noopener noreferrer">
            <img src={github_icon} className="github-icon" alt="LinkedIn" />
          </a>
        </div>
    </div>
  )
}

export default Footer
