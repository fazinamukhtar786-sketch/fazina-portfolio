function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-subtitle">My Journey</p>

        <h2 className="section-title">Education & Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-date">
                2023 - Present
              </span>

              <h3>BS Software Engineering</h3>

              <h4>University of Gujrat</h4>

              <p>
                Currently pursuing a Bachelor's degree in Software
                Engineering with a focus on software development,
                web technologies, databases, and software engineering
                practices.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-date">
                Academic Projects
              </span>

              <h3>Frontend & Software Development</h3>

              <h4>University Projects</h4>

              <p>
                Developed multiple academic projects involving
                frontend development, database management, software
                architecture, and application development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;