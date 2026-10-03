function Footer() {
    const services = [
        "Business Websites",
        "E-Commerce",
        "ERP & Management Software",
        "CRM Solutions",
        "Custom Applications",
        "API Development",
    ];

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span className="footer-logo-v">V</span>
                            <span>
                                P<span>Tech</span>
                            </span>
                        </a>

                        <p>
                            Building modern websites, business software and digital
                            solutions designed around real business needs.
                        </p>

                        <a
                            href="mailto:techvpdrive@gmail.com"
                            className="footer-email"
                        >
                            techvpdrive@gmail.com
                            <span>↗</span>
                        </a>
                    </div>

                    <div className="footer-column">
                        <h4>Navigation</h4>

                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#skills">Technology</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>

                        {services.map((service) => (
                            <span key={service}>{service}</span>
                        ))}
                    </div>

                    <div className="footer-column footer-connect">
                        <h4>Let's Connect</h4>

                        <a href="tel:+919660650819">
                            +91 96606 50819
                            <span>↗</span>
                        </a>

                        <a
                            href="https://wa.me/919660650819"
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp
                            <span>↗</span>
                        </a>

                        <a
                            href="mailto:techvpdrive@gmail.com"
                        >
                            Email Me
                            <span>↗</span>
                        </a>

                        <a href="#contact" className="footer-talk">
                            Start A Project
                            <span>↗</span>
                        </a>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="footer-big-text">
                        LET'S BUILD
                        <span>SOMETHING.</span>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>
                        © {new Date().getFullYear()} VPTech. All rights reserved.
                    </div>

                    <div className="footer-bottom-center">
                        Designed & Developed by <strong>Vipul Tailor</strong>
                    </div>

                    <a href="#home" className="footer-top-link">
                        Back To Top
                        <span>↑</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;