import gitLogo from "../resources/git-icon.png";
function Work() {
  return (
    <section className="work" id="work">
      <h1 className="work-title">
        Some things I've done. <hr />
      </h1>
      <div className="work-item">
        <div className="work-item-left">
          <h2 className="work-item-title">WatchIT</h2>
          <span>September - December</span>
          <p>
            Leading a team of 6 students, we built a user-defined action web
            application driven by object detection.
          </p>
          <a
            href="https://github.com/PolskaTag/project-watchit"
            target="_blank"
            className="git-logo"
          >
            <img src={gitLogo}></img>
            <div>Link to Repo</div>
          </a>
        </div>
        <div className="work-item-mid project1"></div>
        <div className="work-item-right">
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>OpenCV</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>

      <div className="work-item">
        <div className="work-item-left">
          <h2 className="work-item-title">PeaceOfCake!</h2>
          <span>September - December</span>
          <p>
            A class project where I built a web application about my love for
            food. I honed the basics of JS, HTML, CSS.
          </p>
          <a
            href="https://github.com/PolskaTag"
            target="_blank"
            className="git-logo"
          >
            <img src={gitLogo}></img>
            <div>Link to Repo</div>
          </a>
        </div>
        <div className="work-item-mid project2"></div>
        <div className="work-item-right">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>Bootstrap</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Work;
