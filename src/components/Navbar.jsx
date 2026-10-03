function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-container">

                <a href="#home" className="logo">
                    VP<span>Tech</span>
                </a>

                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </nav>

                <a href="#contact" className="nav-btn">
                    Hire Me
                </a>

            </div>
        </header>
    );
}

export default Navbar;