import philipImg from "../resources/IMG_1774square.JPG";
import resume from "../resources/PhilipLapinskiResume.pdf";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-philip-img">
        <img src={philipImg} alt="Me :)"></img>
      </div>
      <h1 className="home-title">Hi, I'm Philip Lapinski.</h1>
      <h3 className="home-subtitle">
        I’m a <b>software engineer</b> who likes to bring complex ideas to life.
        My current focus is to explore the varying realms of software
        developement and see which one I can best serve.
      </h3>
      <a
        className="resume home-action"
        href={resume}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </section>
  );
}

export default Home;
