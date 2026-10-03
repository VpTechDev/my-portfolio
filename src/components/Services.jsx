const services = [
    {
        number: "01",
        title: "Business Websites",
        description:
            "Professional and responsive websites for companies, startups, brands and local businesses that build trust and create a strong online presence.",
        tags: ["Corporate", "Responsive", "SEO Ready"],
    },
    {
        number: "02",
        title: "E-Commerce Solutions",
        description:
            "Complete online stores with product management, categories, orders, customers, payments and business administration.",
        tags: ["Online Store", "Orders", "Management"],
    },
    {
        number: "03",
        title: "ERP & Management Software",
        description:
            "Custom software to manage business operations such as inventory, sales, purchases, employees, tasks, reports and approvals.",
        tags: ["ERP", "Reports", "Automation"],
    },
    {
        number: "04",
        title: "CRM & Lead Management",
        description:
            "Business-focused CRM systems to manage leads, customers, follow-ups, sales activities and the complete customer journey.",
        tags: ["CRM", "Leads", "Sales"],
    },
    {
        number: "05",
        title: "Custom Business Applications",
        description:
            "Purpose-built software for unique business requirements, processes and workflows instead of adapting your business to generic software.",
        tags: ["Custom", "Workflow", "Scalable"],
    },
    {
        number: "06",
        title: "API & System Integration",
        description:
            "Reliable REST APIs and integrations that connect websites, mobile applications, ERP systems, databases and third-party services.",
        tags: ["REST API", "Integration", "Backend"],
    },
];

function Services() {
    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <div className="services-heading">
                    <div>
                        <div className="section-label">WHAT I DO</div>

                        <h2 className="section-title">
                            Solutions Built For
                            <span> Real Businesses.</span>
                        </h2>
                    </div>

                    <p className="services-heading-text">
                        Whether you need a website, an online store or a complete
                        business management system, I build digital solutions around
                        your actual requirements.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <article className="service-card" key={service.number}>
                            <div className="service-top">
                                <span className="service-number">{service.number}</span>

                                <span className="service-arrow">↗</span>
                            </div>

                            <div className="service-content">
                                <h3>{service.title}</h3>

                                <p>{service.description}</p>
                            </div>

                            <div className="service-tags">
                                {service.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="services-bottom">
                    <span>Have a different requirement?</span>

                    <a href="#contact">
                        Let's discuss your project
                        <span>↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Services;