import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <h2 className="section-title">About Me</h2>
                    <div style={{ maxWidth: '800px', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        <p style={{ marginBottom: '2rem' }}>
                            Hi! I'm a final-year CS student and an Automation Intern who loves the logic behind testing.

                            For me, testing isn't just about finding bugs; it's about designing smart scenarios to ensure quality. I enjoy crafting test flows and turning them into automated scripts using Playwright. Right now, I’m expanding my curiosity into Performance Testing because I believe good software should be both correct and fast.
                        </p>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem',
                            marginTop: '4rem',
                            textAlign: 'left'
                        }}>
                            <div style={{
                                background: 'white',
                                padding: '2rem',
                                boxShadow: 'var(--shadow-sm)',
                                borderRadius: 'var(--radius-md)'
                            }}>
                                <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>🎓 Education</h3>
                                <p><strong>B.Sc. Computer Science</strong></p>
                                <p style={{ fontSize: '0.9rem' }}>University of Phayao, 2022-(Expected Graduation: March 2026)</p>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '2rem',
                                boxShadow: 'var(--shadow-sm)',
                                borderRadius: 'var(--radius-md)'
                            }}>
                                <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>📜 Certifications</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>• Selenium Robot Framework (FutureSkill)</li>
                                    <li>• API and Functional Manual Testing (FutureSkill)</li>
                                    <li>• Basic SQL (FutureSkill)</li>
                                    <li>• Responsive Web Design (FreeCodeCamp)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
