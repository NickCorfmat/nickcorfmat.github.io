import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <p className="nav-logo">NICK CORFMAT</p>
            <ul className="nav-menu">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/portfolio">PORTFOLIO</Link></li>
                <li><Link to="/resume">RESUME</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;