import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" >Movies Hub</Link>
            </div>

            <div className="navbar-links">
                
                    <Link to="/">Home</Link>
                    <Link to="/favorite">Favorite</Link>
                
            </div>

        </nav>
    );
}

export default Navbar;
