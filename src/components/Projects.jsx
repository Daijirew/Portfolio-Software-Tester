import React, { useState } from 'react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 3; // Show 3 projects at a time

    const projects = [
        {
            title: "Intern Project eZView Backoffice",
            description: "Developed a scalable E2E automation framework during the internship to validate the eZview Backoffice system. The framework focuses on maintainability and stability for complex logistics workflows.",
            tags: ["Automate Testing", "Manual Testing", "Playwright", "Test Cases"],
            link: "https://github.com/Daijirew/Intern-Project-eZView-backoffice?tab=readme-ov-file"
        },
        {
            title: "Practice Testing Project with JavaScript",
            description: "A practice project for testing skills. Includes automate testing (Playwright).",
            tags: ["Automate Testing", "Manual Testing", "Playwright", "Test Cases"],
            link: "https://github.com/Daijirew/Test-QA-Practice"
        },
        {
            title: "Practice Testing Project with TypeScript",
            description: "Another practice project for testing skills. Includes automate testing (Playwright).",
            tags: ["Automate Testing", "Manual Testing", "Playwright", "Test Cases"],
            link: "https://github.com/Daijirew/QA-Practice-TypeScript"
        },
        {
            title: "E-Commerce Website Testing",
            description: "Designed and developed a full-stack application to practice advanced testing scenarios. The project serves as a realistic environment to implement comprehensive quality assurance strategies.",
            tags: ["Full Stack", "React", "Golang", "PostgreSQL", "Supabase", "REST API"],
            link: "https://github.com/Daijirew/E-commerce-miniproject"
        },
        {
            title: "Cat Sitter Application",
            description: "Designed and developed a full-stack mobile application connecting cat owners with sitters. The system supports 3 user roles (Owner, Sitter, Admin) and integrates critical 3rd-party services.",
            tags: ["Mobile App", "Flutter", "Firebase", "Manual Testing", "Google Maps API"],
            link: "https://github.com/Daijirew/ProjectCs"
        },
    ];

    const maxIndex = Math.max(0, projects.length - visibleCount);
    const totalScrollableSlides = projects.length - visibleCount + 1; // Number of possible starting positions

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const visibleProjects = projects.slice(currentIndex, currentIndex + visibleCount);

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                {/* Slider Container */}
                <div style={{ position: 'relative' }}>

                    {/* Navigation Arrows */}
                    {maxIndex > 0 && (
                        <>
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                style={{
                                    position: 'absolute',
                                    left: '-70px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    backgroundColor: currentIndex === 0 ? '#F3F4F6' : '#3B82F6',
                                    backdropFilter: 'blur(10px)',
                                    color: currentIndex === 0 ? '#9CA3AF' : 'white',
                                    border: 'none',
                                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    boxShadow: currentIndex === 0 ? '0 1px 3px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(59, 130, 246, 0.25)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    zIndex: 10,
                                    opacity: currentIndex === 0 ? 0.6 : 1
                                }}
                                onMouseEnter={(e) => {
                                    if (currentIndex !== 0) {
                                        e.currentTarget.style.backgroundColor = '#2563EB';
                                        e.currentTarget.style.transform = 'translateY(-50%) translateX(-4px) scale(1.05)';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (currentIndex !== 0) {
                                        e.currentTarget.style.backgroundColor = '#3B82F6';
                                        e.currentTarget.style.transform = 'translateY(-50%) translateX(0) scale(1)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.25)';
                                    }
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>

                            <button
                                onClick={nextSlide}
                                disabled={currentIndex === maxIndex}
                                style={{
                                    position: 'absolute',
                                    right: '-70px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    backgroundColor: currentIndex === maxIndex ? '#F3F4F6' : '#3B82F6',
                                    backdropFilter: 'blur(10px)',
                                    color: currentIndex === maxIndex ? '#9CA3AF' : 'white',
                                    border: 'none',
                                    cursor: currentIndex === maxIndex ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    boxShadow: currentIndex === maxIndex ? '0 1px 3px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(59, 130, 246, 0.25)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    zIndex: 10,
                                    opacity: currentIndex === maxIndex ? 0.6 : 1
                                }}
                                onMouseEnter={(e) => {
                                    if (currentIndex !== maxIndex) {
                                        e.currentTarget.style.backgroundColor = '#2563EB';
                                        e.currentTarget.style.transform = 'translateY(-50%) translateX(4px) scale(1.05)';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (currentIndex !== maxIndex) {
                                        e.currentTarget.style.backgroundColor = '#3B82F6';
                                        e.currentTarget.style.transform = 'translateY(-50%) translateX(0) scale(1)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.25)';
                                    }
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Projects Grid */}
                    <div style={{
                        overflow: 'hidden',
                        padding: '1rem 0'
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2.5rem',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: 1
                        }}>
                            {visibleProjects.map((project, index) => (
                                <div key={currentIndex + index} style={{
                                    backgroundColor: 'var(--color-surface)',
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)',
                                    transition: 'transform 0.3s ease',
                                    border: '1px solid #f0f0f0',
                                    animation: 'fadeIn 0.5s ease-in-out'
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
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slide Indicators */}
                    {maxIndex > 0 && (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            marginTop: '2rem'
                        }}>
                            {Array.from({ length: totalScrollableSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    style={{
                                        width: currentIndex === index ? '32px' : '8px',
                                        height: '8px',
                                        borderRadius: '4px',
                                        backgroundColor: currentIndex === index ? 'var(--color-primary)' : '#D1D5DB',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
