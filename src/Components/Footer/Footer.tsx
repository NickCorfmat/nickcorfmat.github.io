import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

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
          <a href="https://facebook.com" target="_blank" className="social-icon">Facebook</a>
          <a href="https://twitter.com" target="_blank" className="social-icon">Twitter</a>
          <a href="https://instagram.com" target="_blank" className="social-icon">Instagram</a>
          <a href="https://linkedin.com" target="_blank" className="social-icon">LinkedIn</a>
        </div>
    </div>
  )
}

export default Footer
