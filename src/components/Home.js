import philipImg from "../resources/IMG_1774 1.jpg";
function Home() {
  return (
    <section className="home">
      <div className="philip-img">
        <img src={philipImg}></img>
      </div>
      <div className="home-text">
        <h1>Hi, I'm Philip Lapinski</h1>
        <h2>
          I’m a software engineer who likes to bring complex ideas to life. My
          current focus is building applications that interact with consumer
          items.
        </h2>
      </div>
    </section>
  );
}

export default Home;
