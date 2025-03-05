import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const transitionLimit = 50;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > transitionLimit) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <ul className="nav-menu">
                <li><Link to="/" className="nav-link">HOME</Link></li>
                <li><Link to="/projects" className="nav-link">PROJECTS</Link></li>
                <li><Link to="/resume" className="nav-link">RESUME</Link></li>
                <li><Link to="/about" className="nav-link">ABOUT</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;