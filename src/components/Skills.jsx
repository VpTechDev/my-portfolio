const skills = [
    "C#",
    "ASP.NET Core",
    "ASP.NET MVC",
    "REST API",
    "SQL Server",
    "MySQL",
    "React",
    "JavaScript",
    "jQuery",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JWT Authentication",
    "Swagger / OpenAPI",
    "Hangfire",
    "Git",
    "IIS",
    "Crystal Reports"
];

function Skills() {
    return (
        <section id="skills" className="section dark-section">

            <div className="section-container">

                <div className="section-heading">
                    <span>TECHNOLOGIES</span>
                    <h2>My Technical Skills</h2>
                </div>

                <div className="skills-grid">

                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            {skill}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;