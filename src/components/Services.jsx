const services = [
    {
        icon: "01",
        title: "Custom ERP Software",
        description:
            "Business-specific ERP solutions designed around your workflow."
    },
    {
        icon: "02",
        title: "Business Websites",
        description:
            "Modern responsive websites for companies, institutes and businesses."
    },
    {
        icon: "03",
        title: "Management Software",
        description:
            "School, library, transport, inventory, payroll and business management systems."
    },
    {
        icon: "04",
        title: "API Development",
        description:
            "Secure and scalable REST APIs using ASP.NET Core."
    }
];

function Services() {
    return (
        <section id="services" className="section">

            <div className="section-container">

                <div className="section-heading">
                    <span>WHAT I DO</span>
                    <h2>Software Development Services</h2>
                </div>

                <div className="services-grid">

                    {services.map((service, index) => (

                        <div className="service-card" key={index}>

                            <div className="service-number">
                                {service.icon}
                            </div>

                            <h3>{service.title}</h3>

                            <p>
                                {service.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Services;