import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={`nav-link ${location.pathname === "/" ? "link-active" : ""}`}>
        Home
      </Link>
      <Link to="/dashboard" className={`nav-link ${location.pathname === "/dashboard" ? "link-active" : ""}`}>
        Dashboard
      </Link>
      <Link to="/destinations" className={`nav-link ${location.pathname === "/destinations" ? "link-active" : ""}`}>
        Destinations
      </Link>
      <Link to="/features" className={`nav-link ${location.pathname === "/features" ? "link-active" : ""}`}>
        Features
      </Link>
      <Link to="/login" className={`nav-link ${location.pathname === "/login" ? "link-active" : ""}`}>
        Login
      </Link>
      <Link to="/signup" className={`nav-link ${location.pathname === "/signup" ? "link-active" : ""}`}>
        Sign Up
      </Link>
    </nav>
  );
}