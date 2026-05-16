import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const base = "text-[var(--text-color)] dark:text-white no-underline py-1.5 px-4 rounded transition-all duration-300 text-[0.92rem] font-medium hover:bg-primary hover:text-white";
  const active = "bg-primary text-white";

  return (
    <nav className="bg-[var(--card-bg)] py-3.5 px-8 text-center sticky top-0 z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex justify-center items-center gap-3 flex-wrap border-b border-[var(--border-color)]">
      <Link to="/" className={`${base} ${location.pathname === "/" ? active : ""}`}>Home</Link>
      <Link to="/dashboard" className={`${base} ${location.pathname === "/dashboard" ? active : ""}`}>Dashboard</Link>
      <Link to="/destinations" className={`${base} ${location.pathname === "/destinations" ? active : ""}`}>Destinations</Link>
      <Link to="/features" className={`${base} ${location.pathname === "/features" ? active : ""}`}>Features</Link>
      <Link to="/about" className={`${base} ${location.pathname === "/about" ? active : ""}`}>About</Link>
      <Link to="/profile" className={`${base} ${location.pathname === "/profile" ? active : ""}`}>Profile</Link>
      <Link to="/cart" className={`${base} ${location.pathname === "/cart" ? active : ""}`}>Cart</Link>
      <Link to="/login" className={`${base} ${location.pathname === "/login" ? active : ""}`}>Login</Link>
      <Link to="/reviews" className={`${base} ${location.pathname === "/reviews" ? active : ""}`}>Reviews</Link>
      <Link to="/register" className={`${base} ${location.pathname === "/register" ? active : ""}`}>Register</Link>
      
      <button 
        onClick={toggleTheme} 
        className="ml-4 p-2 rounded-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-primary transition-all duration-300 shadow-sm"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}