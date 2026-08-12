import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Smart Inventory Management System",
    description:
      "A web-based inventory management system for managing products, stock, sales, purchases, customers, suppliers, and reports.",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Bootstrap"],
    github: "#",
    demo: "#",
  },
  {
    title: "Hospital Management System",
    description:
      "A management system designed to organize hospital operations including patients, doctors, appointments, and records.",
    technologies: ["C#", "SQL Server", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Library Management System",
    description:
      "A system for managing books, students, borrowing records, returns, and library operations.",
    technologies: ["C++", "SQL", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Point of Sale System",
    description:
      "A POS application for managing products, sales, customers, invoices, and transaction records.",
    technologies: ["C#", "SQL Server", "Bootstrap"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <p className="section-subtitle">My Work</p>

        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                    GitHub
                  </a>

                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;