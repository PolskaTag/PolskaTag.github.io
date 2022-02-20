import philipUtah from "../resources/IMG_2168.JPG";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="about-title">Who I Am.</h1>
      <div className="about-content-1">
        <div className="about-description">
          <h3>
            I love creating things that are useful and fun. My interest for
            programming started in 2014, when I was playing Minecraft and
            choosing my adventure.
          </h3>
          <h3>
            Over the spread of <b>8 years,</b> I’ve developed a range of
            different projects. From text-based games to a light-weight security
            web app, I’ve been exploring all the things you can do with a
            computer and a brain.
          </h3>
          <h3>
            These are some of the most recent technologies I’ve been using:
          </h3>
        </div>
        <div className="about-image-container">
          <div className="philip-utah-img-outline">
            <img className="philip-utah-img" src={philipUtah}></img>
          </div>
        </div>
      </div>
      <div className="skills">
        <ul className="skills-col">
          <li className="skill skill-1">JavaScript</li>
          <li className="skill skill-2">React</li>
          <li className="skill skill-3">Node.js</li>
          <li className="skill skill-4">Express.js</li>
        </ul>
        <ul className="skills-col">
          <li className="skill skill-5">Python</li>
          <li className="skill skill-6">OpenCV</li>
        </ul>
        <ul className="skills-col">
          <li className="skill skill-7">EC2</li>
          <li className="skill skill-8">S3</li>
        </ul>
        <ul className="skills-col">
          <li className="skill skill-9">MongoDB</li>
          <li className="skill skill-10">SQL</li>
        </ul>
        {/* <div className="skills-item">
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
        </div> */}
      </div>
    </section>
  );
}

export default About;
