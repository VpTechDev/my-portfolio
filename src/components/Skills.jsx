const skillGroups = [
    {
        number: "01",
        title: "Backend",
        description: "Powerful and scalable server-side applications.",
        skills: [
            "C#",
            "ASP.NET Core",
            "ASP.NET MVC",
            "REST API",
            "JWT",
            "LINQ",
        ],
    },
    {
        number: "02",
        title: "Frontend",
        description: "Modern and responsive user experiences.",
        skills: [
            "React",
            "JavaScript",
            "HTML5",
            "CSS3",
            "jQuery",
            "Bootstrap",
        ],
    },
    {
        number: "03",
        title: "Database",
        description: "Structured data and business information systems.",
        skills: [
            "SQL Server",
            "MySQL",
            "Stored Procedures",
            "SQL Queries",
            "Database Design",
            "Reporting",
        ],
    },
    {
        number: "04",
        title: "Tools & Deployment",
        description: "Development, deployment and application management.",
        skills: [
            "Git",
            "GitHub",
            "IIS",
            "Swagger",
            "Hangfire",
            "Crystal Reports",
        ],
    },
];

const coreTech = [
    "C#",
    "ASP.NET Core",
    "React",
    "SQL Server",
    "REST API",
    "JavaScript",
];

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <div className="skills-heading">
                    <div>
                        <div className="section-label">TECHNOLOGY</div>

                        <h2 className="section-title">
                            The Technology
                            <span> Behind The Work.</span>
                        </h2>
                    </div>

                    <p className="skills-heading-text">
                        A practical technology stack focused on building reliable,
                        scalable and maintainable digital products for real-world
                        business requirements.
                    </p>
                </div>

                <div className="core-tech">
                    <div className="core-tech-label">
                        <span>CORE STACK</span>
                        <i />
                    </div>

                    <div className="core-tech-list">
                        {coreTech.map((tech, index) => (
                            <div className="core-tech-item" key={tech}>
                                <span>0{index + 1}</span>
                                <strong>{tech}</strong>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-groups">
                    {skillGroups.map((group) => (
                        <div className="skill-group" key={group.number}>
                            <div className="skill-group-top">
                                <span>{group.number}</span>

                                <div className="skill-group-title">
                                    <h3>{group.title}</h3>
                                    <p>{group.description}</p>
                                </div>
                            </div>

                            <div className="skill-list">
                                {group.skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-note">
                    <div className="skills-note-icon">+</div>

                    <div>
                        <strong>Technology is a tool. The solution comes first.</strong>
                        <p>
                            I choose technologies according to the project's requirements,
                            business process, scalability and long-term maintenance needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;