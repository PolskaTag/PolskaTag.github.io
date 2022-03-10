import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink as HashLink } from "react-router-hash-link";
import pl from "../resources/PL-logo.png";
import resume from "../resources/PhilipLapinskiResume.pdf";

function Navbar() {
  const [scrollPos, setScrollPos] = useState(0);
  const controlNavbar = () => {
    const header = document.querySelector("header");
    const navLinks = document.querySelector(".nav-links");

    if (window.scrollY <= 0) {
      header.classList.remove("scroll-up");
      return;
    }

    if (
      window.scrollY > scrollPos &&
      !header.classList.contains("scroll-down") &&
      !navLinks.classList.contains("nav-active")
    ) {
      // Hide the navbar
      header.classList.remove("scroll-up");
      header.classList.add("scroll-down");
    } else if (
      window.scrollY < scrollPos &&
      header.classList.contains("scroll-down")
    ) {
      // Show the navbar
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
          <HashLink to={{ pathname: "/", hash: "#home" }} className="nav-logo">
            <img src={pl} alt="PL Logo"></img>
          </HashLink>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <HashLink to={{ pathname: "/", hash: "#home" }}>Home</HashLink>
            </li>
            <li>
              <HashLink to={{ pathname: "/", hash: "#about" }}>
                About Me
              </HashLink>
            </li>
            <li>
              <HashLink to={{ pathname: "/", hash: "#work" }}>My Work</HashLink>
            </li>
            <li>
              <HashLink to={{ pathname: "/", hash: "#contact" }}>
                Contact
              </HashLink>
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
