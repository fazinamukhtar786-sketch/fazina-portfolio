import { FaArrowRight, FaDownload } from "react-icons/fa";


function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-subtitle">
          Hello, I'm
        </p>

        <h1>
          Fazina Mukhtar
        </h1>

        <h2>
          Software Engineering Student
          <span> & Frontend Developer</span>
        </h2>

        <p className="hero-description">
          I build clean, responsive, and user-focused web applications
          using modern frontend technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn primary-btn">
            View Projects
            <FaArrowRight />
          </a>

          <a href="/Fazina-Mukhtar-CV.pdf" className="btn secondary-btn">
            Download CV
            <FaDownload />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;