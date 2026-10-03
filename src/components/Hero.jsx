import profileImg from "../assets/VipulPhoto.jpeg";
function Hero() {
    return (
        <section id="home" className="hero">

            {/* =========================
                BACKGROUND GRAPHICS
            ========================= */}

            <div className="hero-background">

                <div className="hero-grid"></div>

                <div className="red-orb orb-one"></div>
                <div className="red-orb orb-two"></div>

                <div className="zoom-ring ring-one"></div>
                <div className="zoom-ring ring-two"></div>
                <div className="zoom-ring ring-three"></div>

                <div className="floating-dot dot-one"></div>
                <div className="floating-dot dot-two"></div>
                <div className="floating-dot dot-three"></div>
                <div className="floating-dot dot-four"></div>

                <div className="plus-mark plus-one">+</div>
                <div className="plus-mark plus-two">+</div>

            </div>


            {/* =========================
                HERO CONTENT
            ========================= */}

            <div className="hero-container">

                <div className="hero-content">

                    <div className="hero-eyebrow">
                        <span className="eyebrow-line"></span>
                        SOFTWARE ENGINEER III
                    </div>

                    <h1>
                        Building Digital
                        <br />
                        <span>Solutions.</span>
                    </h1>

                    <h2>
                        .NET Developer <b>×</b> React Developer
                    </h2>

                    <p className="hero-description">
                        I build modern web applications, enterprise
                        ERP systems and scalable REST APIs that solve
                        real-world business problems.
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="#projects"
                            className="primary-btn"
                        >
                            Explore My Work
                            <span>↗</span>
                        </a>

                        <a
                            href="#contact"
                            className="secondary-btn"
                        >
                            Let's Talk
                        </a>

                    </div>


                    {/* TECHNOLOGY PILLS */}

                    <div className="hero-tech">

                        <span>C#</span>
                        <span>ASP.NET Core</span>
                        <span>React</span>
                        <span>SQL Server</span>
                        <span>REST API</span>

                    </div>

                </div>


                {/* =========================
                    PROFILE CARD
                ========================= */}

                <div className="hero-visual">

                    <div className="visual-circle">

                        <div className="circle-inner photo-wrapper">

                            <img
                                src={profileImg}
                                alt="Vipul"
                                className="hero-profile-image"
                            />

                            <div className="photo-overlay"></div>

                        </div>

                    </div>

                    <div className="hero-card">

                        <div className="card-top">
                            <span className="status-dot"></span>
                            <span>AVAILABLE FOR PROJECTS</span>
                        </div>

                        <div className="profile-name">
                            Vipul
                        </div>

                        <div className="profile-role">
                            Software Engineer III
                        </div>

                        <div className="profile-line"></div>

                        <div className="hero-stats">

                            <div className="stat">
                                <strong>4+</strong>
                                <span>Years Experience</span>
                            </div>

                            <div className="stat">
                                <strong>20+</strong>
                                <span>Projects</span>
                            </div>

                            <div className="stat">
                                <strong>.NET</strong>
                                <span>Core Stack</span>
                            </div>

                        </div>

                    </div>

                    <div className="floating-tech tech-csharp">
                        C#
                    </div>

                    <div className="floating-tech tech-react">
                        React
                    </div>

                    <div className="floating-tech tech-api">
                        API
                    </div>

                </div>

            </div>


            {/* =========================
                SCROLL INDICATOR
            ========================= */}

            <div className="scroll-indicator">

                <span></span>

                <small>
                    SCROLL TO EXPLORE
                </small>

            </div>

        </section>
    );
}

export default Hero;
