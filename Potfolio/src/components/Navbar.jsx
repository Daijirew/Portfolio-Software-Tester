import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav style={navStyles}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    Poomrapee <span style={{ color: 'var(--color-secondary)' }}> Patum</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        color: 'var(--color-primary)',
                        cursor: 'pointer',
                        zIndex: 1001
                    }}
                    aria-label="Toggle navigation"
                >
                    {/* Simple Hamburger Icon crafted with spans, though CSS handles the button display logic */}
                    <span style={{ display: 'block', width: '25px', height: '3px', background: 'currentColor' }}></span>
                    <span style={{ display: 'block', width: '25px', height: '3px', background: 'currentColor' }}></span>
                    <span style={{ display: 'block', width: '25px', height: '3px', background: 'currentColor' }}></span>
                </button>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>

                    <a href="/resume.pdf" className="btn btn-primary" onClick={() => setIsMenuOpen(false)} download target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                        Download Resume
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
