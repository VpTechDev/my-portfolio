import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";

import "./App.css";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Services />
                <Contact />
            </main>

            <footer className="footer">
                <p>© 2026 VipulPortfolio. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default App;