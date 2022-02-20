import gitLogo from "../resources/git-icon.png";
import externalLogo from "../resources/bx_link-external.png";
function Work() {
  return (
    <section className="work" id="work">
      <h1 className="work-title">
        Some things I've done. <hr />
      </h1>
      {/* work items */}
      <div className="work-item">
        <div className="work-item-left">
          <h2 className="work-item-title">Portfolio</h2>
          <span>(2022) February</span>
          <p>
            Wanting to accelerate my career, I decided to create a website to
            showcase my Portfolio and tell the world a little bit about myself.
            It was a great chance to practice my development workflow: from
            designing in Figma, to implementing in React.
          </p>
          <div className="icon-plugs">
            <a
              href="https://github.com/PolskaTag/portfolio-v1"
              target="_blank"
              rel="noreferrer"
              className="git-logo"
            >
              <img src={gitLogo} alt="project 1"></img>
              <div>Link to Repo</div>
            </a>
          </div>
        </div>
        <div className="work-item-mid project1"></div>
        <div className="work-item-right">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
          </ul>
        </div>
      </div>

      <div className="work-item">
        <div className="work-item-left">
          <h2 className="work-item-title">WatchIT</h2>
          <span>(2021) September - December</span>
          <p>
            Leading a team of 6 students, we built a user-defined action web
            application driven by object detection.
          </p>
          <div className="icon-plugs">
            <a
              href="https://github.com/PolskaTag/project-watchit"
              target="_blank"
              rel="noreferrer"
              className="git-logo"
            >
              <img src={gitLogo} alt="Project 2"></img>
              <div>Link to Repo</div>
            </a>
          </div>
        </div>
        <div className="work-item-mid project2"></div>
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
          <span>(2020) September - December</span>
          <p>
            A class project where I built a web application about my love for
            food. I honed the basics of JS, HTML, CSS.
          </p>
          <div className="icon-plugs">
            <a
              href="https://github.com/PolskaTag"
              target="_blank"
              rel="noreferrer"
              className="git-logo"
            >
              <img src={gitLogo}></img>
              <div>Link to Repo</div>
            </a>
            <a
              href="http://cis-linux2.temple.edu:8080/FA20_3308_tug68843/#/newHome"
              target="_blank"
              rel="noreferrer"
              className="external-logo"
            >
              <img src={externalLogo} alt="Project 3"></img>
            </a>
          </div>
        </div>
        <div className="work-item-mid project3"></div>
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
