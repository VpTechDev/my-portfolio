const projects = [
    {
        title: "FMS - Task & Checklist Management",
        category: "ERP / Management",
        description:
            "Task delegation, checklist management, approvals, extensions, performance reports and dashboard analytics.",
        tech: "ASP.NET Core • React • SQL Server"
    },
    {
        title: "Payroll Management System",
        category: "ERP / Payroll",
        description:
            "Employee, attendance, leave, salary, PF, ESI, approvals and employee self-service management.",
        tech: "ASP.NET MVC • VB.NET • SQL Server"
    },
    {
        title: "Transport Management System",
        category: "Transport / Logistics",
        description:
            "Trip management, vehicle, route, LR and NRO management with reporting and business workflows.",
        tech: "React • ASP.NET Core • SQL Server"
    },
    {
        title: "Modern Library Seating",
        category: "Library Management",
        description:
            "Modern library seating management with seat allocation, student tracking, availability, reservations and usage monitoring.",
        tech: "React • ASP.NET Core • SQL Server"
    },
    {
        title: "Library Management System",
        category: "Education",
        description:
            "Floor, room, seat, member registration, membership plans and library management.",
        tech: "React • ASP.NET Core • SQL Server"
    },
    {
        title: "School Management System",
        category: "Education",
        description:
            "Student and school management solution with business workflows and reporting.",
        tech: ".NET • SQL Server • Web"
    }
];

function Projects() {
    return (
        <section id="projects" className="section">

            <div className="section-container">

                <div className="section-heading">
                    <span>MY WORK</span>
                    <h2>Featured Projects</h2>
                </div>

                <div className="projects-grid">

                    {projects.map((project, index) => (

                        <article className="project-card" key={index}>

                            <div className="project-number">
                                0{index + 1}
                            </div>

                            <span className="project-category">
                                {project.category}
                            </span>

                            <h3>
                                {project.title}
                            </h3>

                            <p>
                                {project.description}
                            </p>

                            <div className="project-tech">
                                {project.tech}
                            </div>

                            <a href="#contact">
                                Discuss Project →
                            </a>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;