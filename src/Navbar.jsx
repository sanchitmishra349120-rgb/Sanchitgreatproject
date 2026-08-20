function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo">
          Campus<span>Connect</span>
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/colleges">Colleges</a>
          <a href="/events">Events</a>
          <a href="/about">About</a>
        </div>

        <div className="nav-actions">
          <a href="/login" className="login-btn">
            Login
          </a>

          <a href="/register" className="register-btn">
            Join Now
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
