import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt
} from "react-icons/fa";

import { SiTypescript, SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />
  },
  {
    name: "JavaScript",
    icon: <FaJs />
  },
  {
    name: "React",
    icon: <FaReact />
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />
  },
  {
    name: "Git",
    icon: <FaGitAlt />
  }
];

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="container">

        <p className="section-subtitle">
          My Expertise
        </p>

        <h2 className="section-title">
          Skills
        </h2>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;