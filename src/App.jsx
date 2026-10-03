import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
    return (
        <div className="app">
            <Navbar />

            <main>
                <Home />
                <About />
                <Services />
                <Skills />
                <Projects />
                <WhyMe />
                <Contact />
            </main>

            <Footer />

            <a
                href="https://wa.me/919660650819"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-float"
                aria-label="Contact on WhatsApp"
            >
                <span>W</span>
            </a>
        </div>
    );
}

export default App;