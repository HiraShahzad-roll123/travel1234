import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const base = "text-white no-underline py-1.5 px-4 rounded transition-all duration-300 text-[0.92rem] font-medium hover:bg-primary";
  const active = "bg-primary";

  return (
    <nav className="bg-nav-bg py-3.5 px-8 text-center sticky top-0 z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.3)] flex justify-center gap-3 flex-wrap">
      <Link to="/" className={`${base} ${location.pathname === "/" ? active : ""}`}>
        Home
      </Link>
      <Link to="/dashboard" className={`${base} ${location.pathname === "/dashboard" ? active : ""}`}>
        Dashboard
      </Link>
      <Link to="/destinations" className={`${base} ${location.pathname === "/destinations" ? active : ""}`}>
        Destinations
      </Link>
      <Link to="/features" className={`${base} ${location.pathname === "/features" ? active : ""}`}>
        Features
      </Link>
      <Link to="/login" className={`${base} ${location.pathname === "/login" ? active : ""}`}>
        Login
      </Link>
      <Link to="/signup" className={`${base} ${location.pathname === "/signup" ? active : ""}`}>
        Sign Up
      </Link>
    </nav>
  );
}