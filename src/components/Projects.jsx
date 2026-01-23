import React, { useState } from 'react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const visibleCount = 3; // Show 3 projects at a time

    // Curated Work Categories
    const workCategories = [
        {
            id: 'test-reports',
            title: 'Test Reports',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            ),
            description: 'To see the test reports, click on the links below.',
            items: [
                { name: 'Test Report Version Thai', link: '/Test Report (TH).pdf' },
                { name: 'Test Report Version English', link: '/Test Report (EN).pdf' },
            ]
        },
        {
            id: 'bug-reports',
            title: 'Bug Reports',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
            ),
            description: 'To see the bug reports, click on the link below.',
            items: [
                { name: 'Intern Project eZView Backoffice Report', link: '/Bug Reports.pdf' },
            ]
        },
        {
            id: 'test-cases',
            title: 'Test Cases',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
            ),
            description: 'To see the test cases, click on the links below.',
            items: [
                { name: 'Test Cases Version Thai', link: '/Test Cases (TH).pdf' },
                { name: 'Test Cases Version English', link: '/Test Cases (EN).pdf' },
            ]
        }
    ];

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
                                className="slider-arrow-left"
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
                                className="slider-arrow-right"
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
                                    animation: 'fadeIn 0.5s ease-in-out',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}>
                                    <div style={{
                                        padding: '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%'
                                    }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                        <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                            {project.description}
                                        </p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
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
                                        <div style={{ marginTop: 'auto' }}>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                                                View Details
                                            </a>
                                        </div>
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

                {/* Curated Work Section */}
                <div style={{ marginTop: '5rem' }}>
                    <h2 className="section-title">
                        Example of Reports
                    </h2>

                    {/* Work Categories Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {workCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category)}
                                style={{
                                    padding: '2rem',
                                    backgroundColor: '#F9FAFB',
                                    borderRadius: '20px',
                                    border: '3px solid #3B82F6',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.25)';
                                    e.currentTarget.style.backgroundColor = '#EFF6FF';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                                }}
                            >
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                                }}>
                                    {category.icon}
                                </div>
                                <span style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: '#1F2937'
                                }}>
                                    {category.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {selectedCategory && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            animation: 'fadeIn 0.3s ease'
                        }}
                        onClick={() => setSelectedCategory(null)}
                    >
                        <div
                            style={{
                                backgroundColor: '#EFF6FF',
                                borderRadius: '20px',
                                padding: '3rem',
                                maxWidth: '600px',
                                width: '90%',
                                maxHeight: '80vh',
                                overflow: 'auto',
                                position: 'relative',
                                animation: 'slideUp 0.3s ease'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedCategory(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    backgroundColor: '#E5E7EB',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#D1D5DB';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#E5E7EB';
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            {/* Modal Title */}
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: '#1F2937',
                                textAlign: 'center',
                                marginBottom: '2rem',
                                fontStyle: 'italic'
                            }}>
                                {selectedCategory.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                color: '#4B5563',
                                marginBottom: '1.5rem',
                                fontSize: '1rem'
                            }}>
                                {selectedCategory.description}
                            </p>

                            {/* Links List */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem'
                            }}>
                                {selectedCategory.items.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        download={item.download ? true : undefined}
                                        target={item.download ? undefined : "_blank"}
                                        rel={item.download ? undefined : "noopener noreferrer"}
                                        style={{
                                            color: '#3B82F6',
                                            textDecoration: 'none',
                                            fontSize: '1rem',
                                            padding: '0.5rem 0',
                                            transition: 'all 0.2s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#1D4ED8';
                                            e.currentTarget.style.textDecoration = 'underline';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = '#3B82F6';
                                            e.currentTarget.style.textDecoration = 'none';
                                        }}
                                    >
                                        {item.download && (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="7 10 12 15 17 10"></polyline>
                                                <line x1="12" y1="15" x2="12" y2="3"></line>
                                            </svg>
                                        )}
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
