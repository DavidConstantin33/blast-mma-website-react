import './Header.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Despre', to: 'despre' },
        { name: 'Galerie', to: 'galerie' },
        { name: 'Orar', to: 'orar' },
        { name: 'Prețuri', to: 'preturi' },
        { name: 'Contact', to: 'contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="header-logo"
            >
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="logo-link"
                >
                    <div className='logo-image'>
                        <img src='/assets/logo-header.png' alt='logo'/>
                        BLAST MMA
                    </div>
                </Link>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="nav-links">
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="nav-link"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Burger Icon */}
            <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="mobile-menu"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.3 }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-50}
                            className="mobile-link"
                            onClick={handleLinkClick}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </header>
    );
};

export default Header;