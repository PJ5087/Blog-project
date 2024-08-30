import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'; // Import Link from react-router-dom
import './Nav.css';
import { FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
// import navimg from './div.png'

const NavBar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation()

    const handleLogoClick = () => {
        setShowPopup(!showPopup)
        setTimeout(() => setShowPopup(false), 3000)
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo" onClick={handleLogoClick}>
                    <img src="/path/to/logo.png" alt="Pankaj.me" />
                </div>
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? '#007bff' : '#fff',
                        textDecoration: 'none',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        backgroundColor: isActive ? '#fff' : 'transparent'
                    })}>Home</NavLink></li>
                    <li><NavLink to="/about" style={({ isActive }) => ({
                        color: isActive ? '#007bff' : '#fff',
                        textDecoration: 'none',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        backgroundColor: isActive ? '#fff' : 'transparent'
                    })}>About Me</NavLink></li>
                    <li><NavLink to="/blog" style={({ isActive }) => ({
                        color: isActive ? '#007bff' : '#fff',
                        textDecoration: 'none',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        backgroundColor: isActive ? '#fff' : 'transparent'
                    })}>Blog</NavLink></li>
                    <li className='social-icon'>
                        <a href="https://www.linkedin.com/in/pankaj-kumar-yadav-046097234/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="navbar-icon" />
                        </a>
                    </li>
                    <li className='social-icon'>
                        <a href="https://www.instagram.com/i_kumarpankaj" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="navbar-icon" />
                        </a>
                    </li>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>
            {showPopup && (
                <div className='welcome-popup'>
                    <div className='popup-content'>
                        Hire a good developer
                    </div>
                </div>
            )}

            {
                location.pathname === '/' && (
                    <div className="addnav">
                        {/* <img src={navimg} alt="nav" /> */}
                <h1 className='h1'>What I do</h1>
                <p>Eat code sleep Repeat</p>
                <button className='btn'></button>
            </div>
                )
            }
            
        </>
    );
}

export default NavBar;
