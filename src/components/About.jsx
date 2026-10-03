function About() {
    return (
        <section id="about" className="section">

            <div className="section-container">

                <div className="section-heading">
                    <span>ABOUT ME</span>
                    <h2>Building Software That Solves Real Business Problems</h2>
                </div>

                <div className="about-grid">

                    <div className="about-text">

                        <p>
                            I am a Software Engineer with 4+ years of
                            experience in web application development,
                            ERP solutions and enterprise software.
                        </p>

                        <p>
                            I work primarily with C#, ASP.NET Core,
                            MVC, REST APIs, SQL Server and React.
                            I have developed business applications
                            for payroll, task management, transport,
                            inventory, education and other domains.
                        </p>

                        <p>
                            I focus on creating reliable, maintainable
                            and user-friendly software solutions that
                            help businesses improve their daily operations.
                        </p>

                    </div>

                    <div className="about-info">

                        <div className="info-item">
                            <span>Experience</span>
                            <strong>4+ Years</strong>
                        </div>

                        <div className="info-item">
                            <span>Primary Stack</span>
                            <strong>.NET + React</strong>
                        </div>

                        <div className="info-item">
                            <span>Database</span>
                            <strong>SQL Server</strong>
                        </div>

                        <div className="info-item">
                            <span>Development</span>
                            <strong>Web & ERP</strong>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;