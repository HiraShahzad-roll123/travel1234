import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer">
      <p>
        &copy; 2026 WanderLog Travel Blog. All rights reserved. | 
        <Link to="/contact"> Contact Us</Link> | 
        <Link to="/dashboard"> Admin Dashboard</Link>
      </p>
    </footer>
  );
}