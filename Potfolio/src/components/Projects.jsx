import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Website Testing",
            description: "Conducted comprehensive manual testing for a mock e-commerce platform. Created 50+ test cases covering user registration, product search, and checkout flows.",
            tags: ["Manual Testing", "Test Cases", "Bug Reports"],
            link: "#"
        },
        {
            title: "API Testing with Postman",
            description: "Performed API validation for a RESTful service. Verified status codes, response payloads, and edge cases using Postman collections.",
            tags: ["API Testing", "Postman", "JSON"],
            link: "#"
        },
        {
            title: "Bug Tracking Dashboard",
            description: "A simulated project demonstrating bug lifecycle management using JIRA. Managed backlog, sprints, and defect triage process.",
            tags: ["JIRA", "Agile", "Process Management"],
            link: "#"
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{
                            backgroundColor: 'var(--color-surface)',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-md)',
                            transition: 'transform 0.3s ease',
                            border: '1px solid #f0f0f0'
                        }}>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', minHeight: '80px' }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.8rem',
                                            color: 'var(--color-secondary)',
                                            backgroundColor: '#EFF6FF',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '1rem'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
