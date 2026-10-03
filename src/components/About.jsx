function About() {
    const stats = [
        { number: "4+", label: "Years Experience" },
        { number: "20+", label: "Projects Delivered" },
        { number: "10+", label: "Business Domains" },
        { number: "360°", label: "Development Support" },
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-top">
                    <div className="about-heading">
                        <div className="section-label">ABOUT ME</div>

                        <h2 className="section-title">
                            Building Technology
                            <span> Around Your Business.</span>
                        </h2>
                    </div>

                    <div className="about-intro">
                        <p>
                            I'm <strong>Vipul Tailor</strong>, a full-stack software
                            developer focused on building modern websites, business
                            applications and custom software solutions.
                        </p>

                        <p>
                            I work with businesses to turn their ideas and day-to-day
                            requirements into practical digital products that are easy to
                            use, scalable and built for long-term growth.
                        </p>
                    </div>
                </div>

                <div className="about-main">
                    <div className="about-story">
                        <div className="about-number">01</div>

                        <h3>
                            More Than Just
                            <span> Writing Code.</span>
                        </h3>

                        <p>
                            Every business has different processes, challenges and goals.
                            Instead of forcing a business into a ready-made solution, I
                            build software around the way the business actually works.
                        </p>

                        <p>
                            From a professional company website or e-commerce platform to
                            complete ERP, CRM, management software and REST APIs, the goal
                            is always the same — create technology that solves a real
                            business problem.
                        </p>

                        <a href="#services" className="about-link">
                            Explore My Services
                            <span>↗</span>
                        </a>
                    </div>

                    <div className="about-capabilities">
                        <div className="capability-card">
                            <div className="capability-icon">01</div>
                            <div>
                                <h4>Full-Stack Development</h4>
                                <p>
                                    Modern frontend experiences combined with powerful and
                                    reliable backend systems.
                                </p>
                            </div>
                        </div>

                        <div className="capability-card">
                            <div className="capability-icon">02</div>
                            <div>
                                <h4>Business Software</h4>
                                <p>
                                    ERP, CRM, inventory, payroll, task management and custom
                                    business applications.
                                </p>
                            </div>
                        </div>

                        <div className="capability-card">
                            <div className="capability-icon">03</div>
                            <div>
                                <h4>Web & E-Commerce</h4>
                                <p>
                                    Professional responsive websites and e-commerce platforms
                                    designed for real customers.
                                </p>
                            </div>
                        </div>

                        <div className="capability-card">
                            <div className="capability-icon">04</div>
                            <div>
                                <h4>API & Integration</h4>
                                <p>
                                    Secure REST APIs and integrations connecting applications,
                                    databases and business systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-stats">
                    {stats.map((stat, index) => (
                        <div className="about-stat" key={index}>
                            <strong>{stat.number}</strong>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;