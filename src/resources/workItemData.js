import gitLogo from "./git-icon.png";
import externalLogo from "./bx_link-external.png";

const workItemData = [
  {
    projectName: "Portfolio",
    date: "(2022) February",
    description: (
      <p>
        Wanting to accelerate my career, I decided to create a website to
        showcase my Portfolio and tell the world a little bit about myself. It
        was a great chance to practice my development workflow: from designing
        in Figma, to implementing in React.
      </p>
    ),
    plugs: (
      <a
        href="https://github.com/PolskaTag/portfolio-v1"
        target="_blank"
        rel="noreferrer"
        className="git-logo"
      >
        <img src={gitLogo} alt="Link to code"></img>
      </a>
    ),

    techStack: ["HTML", "CSS", "JS", "React", "Firebase"],
  },
  {
    projectName: "WatchIT",
    date: "(2021) September",
    description: (
      <>
        <p>
          Leading a team of 6 students, I built a prototype of a user-defined
          action web application driven by object detection.
        </p>
        <p>
          WatchIT lets people use their computers as lightweight object
          detectors that can perform basic actions upon detection like sending
          an email or playing a sound.
        </p>
      </>
    ),
    plugs: (
      <a
        href="https://github.com/PolskaTag/project-watchit"
        target="_blank"
        rel="noreferrer"
        className="git-logo"
      >
        <img src={gitLogo} alt="Project 2"></img>
      </a>
    ),
    techStack: ["React", "Node.js", "Express.js", "OpenCV", "AWS EC2"],
  },
  {
    projectName: "Tablespoon Treats",
    date: "(2020) September - December",
    description: (
      <p>
        A class project where I built a web application about my love for food.
        I honed the basics of JS, HTML, CSS.
      </p>
    ),
    plugs: (
      <>
        <a
          href="https://github.com/PolskaTag"
          target="_blank"
          rel="noreferrer"
          className="git-logo"
        >
          <img src={gitLogo} alt="Github"></img>
        </a>
        <a
          href="http://cis-linux2.temple.edu:8080/FA20_3308_tug68843/#/newHome"
          target="_blank"
          rel="noreferrer"
          className="external-logo"
        >
          <img src={externalLogo} alt="Project 3"></img>
        </a>
      </>
    ),
    techStack: ["HTML", "CSS", "JS", "Bootstrap", "SQL"],
  },
];

export default function getWorkItemData() {
  return workItemData;
}
