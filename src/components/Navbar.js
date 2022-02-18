function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="main-nav">
        <div className="nav-logo">PL</div>
        <div className="nav-links">
          <ul>
            <li>
              {" "}
              <a>Home</a>
            </li>
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>My Work</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
