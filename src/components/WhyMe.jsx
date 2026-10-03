const processSteps = [
    {
        number: "01",
        title: "Understand",
        description:
            "First I understand your business, requirements, existing process and the actual problem you want the software to solve.",
    },
    {
        number: "02",
        title: "Plan",
        description:
            "The requirements are converted into a clear structure covering features, workflow, database, screens and technology.",
    },
    {
        number: "03",
        title: "Build",
        description:
            "The solution is developed step by step with a focus on clean design, reliable functionality and a smooth user experience.",
    },
    {
        number: "04",
        title: "Test",
        description:
            "Features and business workflows are tested to identify issues and make sure the application works correctly.",
    },
    {
        number: "05",
        title: "Deploy",
        description:
            "Once the product is ready, it can be deployed to your server or hosting environment and prepared for real users.",
    },
    {
        number: "06",
        title: "Support",
        description:
            "After launch, improvements, changes, maintenance and additional features can be handled as your business grows.",
    },
];

const highlights = [
    "Business-focused solutions",
    "Responsive & modern interfaces",
    "Scalable backend architecture",
    "Secure API development",
    "Database-driven applications",
    "Long-term maintenance support",
];

function WhyMe() {
    return (
        <section id="why-me" className="whyme-section">
            <div className="whyme-container">
                <div className="whyme-heading">
                    <div>
                        <div className="section-label">HOW I WORK</div>

                        <h2 className="section-title">
                            From Business Idea
                            <span> To Working Software.</span>
                        </h2>
                    </div>

                    <p className="whyme-heading-text">
                        Good software starts with understanding the business. I focus on
                        the complete journey instead of simply writing code and handing
                        over an application.
                    </p>
                </div>

                <div className="whyme-process">
                    {processSteps.map((step, index) => (
                        <div className="whyme-step" key={step.number}>
                            <div className="whyme-step-top">
                                <span className="whyme-step-number">{step.number}</span>

                                {index < processSteps.length - 1 && (
                                    <span className="whyme-step-line" />
                                )}
                            </div>

                            <div className="whyme-step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="whyme-bottom">
                    <div className="whyme-message">
                        <span className="whyme-message-number">WHY VPTECH</span>

                        <h3>
                            Technology should make
                            <span> business simpler.</span>
                        </h3>

                        <p>
                            Whether you are starting a new business, improving an existing
                            process or replacing manual work with software, the goal is to
                            create something practical, reliable and easy for your team to
                            use.
                        </p>

                        <a href="#contact" className="primary-btn">
                            Discuss Your Project
                            <span>↗</span>
                        </a>
                    </div>

                    <div className="whyme-highlights">
                        {highlights.map((highlight, index) => (
                            <div className="whyme-highlight" key={highlight}>
                                <span>0{index + 1}</span>
                                <strong>{highlight}</strong>
                                <i>↗</i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyMe;