import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the compiled CSS file

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="nav-link-container">
                    <div className="nav-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/skills" className="nav-link">Skills</Link>
                        <Link to="/projects" className="nav-link">Projects</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
