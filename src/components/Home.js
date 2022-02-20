import philipImg from "../resources/IMG_1774square.JPG";
import resume from "../resources/PhilipLapinskiResume.pdf";

function Home() {
  return (
    <section className="home" id="home">
      <div className="philip-img">
        <img src={philipImg}></img>
      </div>
      <div className="home-text">
        <h1 className="home-title">Hi, I'm Philip Lapinski.</h1>
        <h3>
          I’m a software engineer who likes to bring complex ideas to life. My
          current focus is to explore the varying realms of software
          developement and see which one I can best serve.
        </h3>
        <a className="resume" href={resume} target="_blank">
          Resume
        </a>
      </div>
    </section>
  );
}

export default Home;
