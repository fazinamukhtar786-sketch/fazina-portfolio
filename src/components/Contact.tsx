import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <p className="section-subtitle">Get In Touch</p>

        <h2 className="section-title">Let's Work Together</h2>

        <p className="contact-description">
          I'm always interested in learning, building new projects,
          and connecting with other developers. Feel free to reach
          out to me.
        </p>

        <div className="contact-links">
          <a href="fazinamukhtar786@gmail.com">
            <FaEnvelope />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/fazinamukhtar786-sketch/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/fazina-mukhtar-253ab4369/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;