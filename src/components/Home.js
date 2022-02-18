import philipImg from "../resources/IMG_1774square.JPG";
function Home() {
  return (
    <section className="home">
      <div className="philip-img">
        <img src={philipImg}></img>
      </div>
      <div className="home-text">
        <h1 className="home-title">Hi, I'm Philip Lapinski.</h1>
        <h3>
          I’m a software engineer who likes to bring complex ideas to life. My
          current focus is building applications that interact with consumer
          items.
        </h3>
      </div>
    </section>
  );
}

export default Home;
