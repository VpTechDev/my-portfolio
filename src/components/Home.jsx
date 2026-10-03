import { useEffect, useState } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

const slides = [
    {
        image: slide1,
        eyebrow: "SOFTWARE DEVELOPMENT",
        title: "I Build Digital Solutions",
        highlight: "That Grow Businesses.",
        description:
            "Custom websites, business software, ERP systems and scalable digital solutions designed around real business needs.",
    },
    {
        image: slide2,
        eyebrow: "WEB & E-COMMERCE",
        title: "Turn Your Ideas Into",
        highlight: "Powerful Digital Experiences.",
        description:
            "Modern, responsive websites and e-commerce platforms built to look professional, perform fast and convert visitors into customers.",
    },
    {
        image: slide3,
        eyebrow: "BUSINESS SOFTWARE",
        title: "Smart Technology For",
        highlight: "Better Business Operations.",
        description:
            "From ERP and CRM to management systems and APIs, I create reliable software that helps businesses work smarter.",
    },
];

function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    return (
        <section id="home" className="home-hero">
            <div className="home-slides">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`home-slide ${index === activeSlide ? "home-slide-active" : ""
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            <div className="home-overlay" />
            <div className="home-side-gradient" />

            <div className="home-content">
                <div className="home-eyebrow">
                    <span className="home-eyebrow-line" />
                    {slides[activeSlide].eyebrow}
                </div>

                <h1 className="home-title">
                    {slides[activeSlide].title}
                    <span>{slides[activeSlide].highlight}</span>
                </h1>

                <p className="home-description">
                    {slides[activeSlide].description}
                </p>

                <div className="home-buttons">
                    <a href="#contact" className="primary-btn">
                        Let's Work Together
                        <span>↗</span>
                    </a>

                    <a href="#projects" className="secondary-btn">
                        View My Work
                        <span>→</span>
                    </a>
                </div>

                <div className="home-tech">
                    <span>Built With</span>
                    <i />
                    <strong>.NET</strong>
                    <i />
                    <strong>React</strong>
                    <i />
                    <strong>SQL</strong>
                    <i />
                    <strong>API</strong>
                </div>
            </div>

            <div className="home-bottom">
                <div className="home-counter">
                    <span>0{activeSlide + 1}</span>
                    <div className="home-counter-line">
                        <div
                            style={{
                                width: `${((activeSlide + 1) / slides.length) * 100}%`,
                            }}
                        />
                    </div>
                    <span>0{slides.length}</span>
                </div>

                <div className="home-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={index === activeSlide ? "active" : ""}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="home-scroll">
                <span>SCROLL TO EXPLORE</span>
                <div />
            </div>
        </section>
    );
}

export default Home;