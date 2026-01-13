// src/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';
import Button from './Button';
const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        // Check if the page has been scrolled down
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    useEffect(() => {
        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={isScrolled ? 'header scrolled' : 'header'}>
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <Link to="/">My Bio</Link>
                    </div>
                    <ul className="navbar-links">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About me</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#Process">Work Process</a>
                        </li>
                        <li>
                            <a href="#Form">Contact</a>
                        </li>
                        <li>
                            {/* <Link to="/contact" className='Mybtn'>Let's talk</Link> */}
                            <Button text="Let's talk"  />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Navbar;