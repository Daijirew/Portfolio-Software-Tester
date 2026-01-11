import React from 'react';
import profileImg from '../assets/profile.png';

const Hero = () => {
    const heroStyles = {
        padding: '160px 0 100px',
        background: 'linear-gradient(135deg, var(--color-bg) 0%, #E0F2FE 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <section style={heroStyles}>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-image-container">
                        <img
                            src={profileImg}
                            alt="Profile"
                            style={{
                                width: '100%',
                                maxWidth: '350px',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-md)'
                            }}
                        />
                    </div>
                    <div className="hero-text">
                        <span style={{
                            color: 'var(--color-secondary)',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>
                            Junior Software Tester & Automation
                        </span>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                            Poomrapee <br />
                            <span style={{ color: 'var(--color-secondary)' }}>Patum</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                            Hi, I’m Rew. A QA Tester focused on Automation. I combine manual testing expertise with Playwright & TypeScript skills to create efficient test scripts and ensure seamless user experiences.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#projects" className="btn btn-primary">View My Work</a>
                            <a href="#contact" className="btn btn-outline">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
