import React, { useEffect, useState } from "react";
import pl from "../resources/PL-box.png";
import resume from "../resources/PhilipLapinskiResume.pdf";

function Navbar() {
  const [scrollPos, setScrollPos] = useState(0);
  const controlNavbar = () => {
    const header = document.querySelector("header");
    if (window.scrollY <= 0) {
      header.classList.remove("scroll-up");
      return;
    }

    if (
      window.scrollY > scrollPos &&
      !header.classList.contains("scroll-down")
    ) {
      header.classList.remove("scroll-up");
      header.classList.add("scroll-down");
    } else if (
      window.scrollY < scrollPos &&
      header.classList.contains("scroll-down")
    ) {
      header.classList.remove("scroll-down");
      header.classList.add("scroll-up");
    }

    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

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
    <header className={`navbar-header`}>
      <nav className="main-nav">
        <div className="nav-logo-container">
          <a href="#home" className="nav-logo">
            <img src={pl} alt="PL"></img>
          </a>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              {" "}
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#work">My Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                className="resume"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
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
