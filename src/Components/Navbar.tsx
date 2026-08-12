import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          Fazina<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-links">
          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>

          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;