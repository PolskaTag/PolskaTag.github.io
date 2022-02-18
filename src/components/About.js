function About() {
  return (
    <section className="about">
      <div>
        <h1>Who I Am.</h1>
        <hr />
        <h2>
          I love nature, nerd stuff, music, adventure, and food. I recently
          graduated with my Bachelor’s at Temple University and finished the
          first iteration of my project “WatchIT”. Now I’m looking for things to
          apply my skillset to, and make the world better than it was yesterday.
          Here’s what I’ve been working with recently:
        </h2>
      </div>
      <div className="skills">
        <div className="skills-item">
          <h2>JavaScript</h2>
          <hr></hr>
          <h3>React</h3>
          <h3>Node.js</h3>
          <h3>Express.js</h3>
        </div>
        <div className="skills-item">
          <h2>Python</h2>
          <hr></hr>
          <h3>OpenCV</h3>
        </div>
        <div className="skills-item">
          <h2>AWS</h2>
          <hr></hr>
          <h3>EC2</h3>
          <h3>S3</h3>
        </div>
        <div className="skills-item">
          <h2>Database</h2>
          <hr></hr>
          <h3>MongoDB</h3>
          <h3>SQL</h3>
        </div>
      </div>
    </section>
  );
}

export default About;
