import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '2rem 0',
            textAlign: 'center'
        }}>
            <div className="container">
                <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Junior Tester Portfolio. Built with React.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
