import { useState } from "react";

const projects = [
    {
        id: 1,
        category: "ERP",
        type: "BUSINESS SOFTWARE",
        title: "Inventory & ERP Management",
        description:
            "A complete business management solution covering inventory, purchases, sales, warehouses, parties, accounting and reporting.",
        technologies: ["ASP.NET Core", "React", "SQL Server"],
    },
    {
        id: 2,
        category: "MANAGEMENT",
        type: "TASK MANAGEMENT",
        title: "Task & Checklist Management",
        description:
            "A business workflow platform for task assignment, checklists, delegation, employee performance, extensions and management reporting.",
        technologies: ["React", ".NET API", "SQL Server"],
    },
    {
        id: 3,
        category: "CRM",
        type: "BUSINESS APPLICATION",
        title: "Lead Management CRM",
        description:
            "A centralized CRM solution for managing leads, customers, follow-ups, sales activities and business pipelines.",
        technologies: ["ASP.NET Core", "React", "SQL Server"],
    },
    {
        id: 4,
        category: "SAAS",
        type: "BUSINESS SOFTWARE",
        title: "Payroll Management System",
        description:
            "A web-based payroll solution designed to manage employees, salary structures, attendance and payroll-related operations.",
        technologies: ["ASP.NET MVC", "SQL Server", "Reports"],
    },
    {
        id: 5,
        category: "SAAS",
        type: "BUSINESS PLATFORM",
        title: "Transport Management System",
        description:
            "A management platform designed to organize transport operations, records, workflows and business reporting.",
        technologies: ["ASP.NET Core", "React", "SQL Server"],
    },
    {
        id: 6,
        category: "WEB",
        type: "WEB APPLICATION",
        title: "Business & E-Commerce Platforms",
        description:
            "Modern responsive websites and online platforms designed for businesses, products, services and customer engagement.",
        technologies: ["React", "JavaScript", "REST API"],
    },
];

const categories = [
    "ALL",
    "ERP",
    "CRM",
    "MANAGEMENT",
    "SAAS",
    "WEB",
];

function Projects() {
    const [activeCategory, setActiveCategory] = useState("ALL");

    const filteredProjects =
        activeCategory === "ALL"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div className="projects-heading">
                    <div>
                        <div className="section-label">SELECTED WORK</div>

                        <h2 className="section-title">
                            Projects Built For
                            <span> Real-World Needs.</span>
                        </h2>
                    </div>

                    <p className="projects-heading-text">
                        A selection of business applications, management systems and
                        digital platforms developed around practical business
                        requirements.
                    </p>
                </div>

                <div className="project-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={activeCategory === category ? "active" : ""}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <article
                            className={`project-card ${index === 0 ? "project-card-featured" : ""
                                }`}
                            key={project.id}
                        >
                            <div className="project-visual">
                                <div className="project-visual-grid" />

                                <div className="project-window">
                                    <div className="project-window-top">
                                        <span />
                                        <span />
                                        <span />
                                    </div>

                                    <div className="project-window-body">
                                        <div className="project-window-sidebar">
                                            <i />
                                            <i />
                                            <i />
                                            <i />
                                        </div>

                                        <div className="project-window-content">
                                            <div className="fake-line large" />
                                            <div className="fake-line" />

                                            <div className="fake-cards">
                                                <div />
                                                <div />
                                                <div />
                                            </div>

                                            <div className="fake-chart">
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-visual-number">
                                    0{index + 1}
                                </div>
                            </div>

                            <div className="project-info">
                                <div className="project-meta">
                                    <span>{project.type}</span>
                                    <span>{project.category}</span>
                                </div>

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className="project-footer">
                                    <div className="project-tech">
                                        {project.technologies.map((technology) => (
                                            <span key={technology}>{technology}</span>
                                        ))}
                                    </div>

                                    <button className="project-view">
                                        View Details
                                        <span>↗</span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="projects-bottom">
                    <span>Want to see what we can build for your business?</span>

                    <a href="#contact">
                        Start a conversation
                        <span>↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;