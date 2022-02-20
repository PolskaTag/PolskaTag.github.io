import pl from "../resources/PL.png";

function Navbar() {
  const activateHamburger = (e) => {
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    nav.classList.toggle("nav-active");

    // animate the links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
  };

  return (
    <header className="navbar-header">
      <nav className="main-nav">
        <div className="nav-logo-container">
          <a className="nav-logo">
            <img src={pl}></img>
          </a>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              {" "}
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">My Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="burger" onClick={activateHamburger}>
            <div className="burger-line1"></div>
            <div className="burger-line2"></div>
            <div className="burger-line3"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
