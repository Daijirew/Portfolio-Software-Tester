import React from 'react';

const Skills = () => {
    const categories = [
        {
            title: "Testing Expertise",
            skills: ["Automation Testing", "Manual Testing", "API Testing", "Performance Testing (Learning)", "Test Case & Scenarios"]
        },
        {
            title: "Tools & Management",
            skills: ["Playwright", "Cypress", "Selenium Robotframework", "JMeter (Learning)", "k6 (Learning)", "Postman", "Git/GitHub"]
        },
        {
            title: "Programming Languages",
            skills: ["JavaScript / TypeScript", "SQL", "Python", "Java (OOP)", "Dart"]
        }
    ];

    return (
        <section id="skills" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {categories.map((cat, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid #E2E8F0',
                            backgroundColor: '#fff'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                {cat.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {cat.skills.map((skill, i) => (
                                    <span key={i} style={{
                                        backgroundColor: 'var(--color-bg)',
                                        color: 'var(--color-primary)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '2rem',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
