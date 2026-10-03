import { useEffect, useState } from "react";

const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Process", id: "why-me" },
    { label: "Contact", id: "contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = navItems
                .map((item) => document.getElementById(item.id))
                .filter(Boolean);

            let current = "home";

            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - 180) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
            <div className="navbar-inner">
                <a href="#home" className="navbar-logo" onClick={handleNavClick}>
                    <span className="logo-v">V</span>

                    <span className="logo-text">
                        P<span>Tech</span>
                    </span>
                </a>

                <nav className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`nav-link ${activeSection === item.id ? "nav-link-active" : ""
                                }`}
                            onClick={handleNavClick}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="navbar-mobile-cta"
                        onClick={handleNavClick}
                    >
                        Let's Talk
                        <span>↗</span>
                    </a>
                </nav>

                <a href="#contact" className="navbar-cta">
                    Let's Talk
                    <span>↗</span>
                </a>

                <button
                    className={`navbar-toggle ${menuOpen ? "navbar-toggle-open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}

export default Navbar;