function About() {
  return (
    <section id="about" className="section">

      <div className="container">

        <p className="section-subtitle">
          Get To Know Me
        </p>

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-content">

          <div className="about-text">
            <p>
              I am a 6th-semester Software Engineering student
              passionate about frontend development and creating
              modern, responsive web interfaces.
            </p>

            <p>
              I enjoy turning ideas into functional and visually
              appealing applications while continuously improving
              my technical and problem-solving skills.
            </p>
          </div>

          <div className="about-info">

            <div className="info-card">
              <h3>Education</h3>
              <p>BS Software Engineering</p>
            </div>

            <div className="info-card">
              <h3>Focus</h3>
              <p>Frontend Development</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;