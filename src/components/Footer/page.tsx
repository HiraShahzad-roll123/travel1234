import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white text-center py-8 px-8 mt-12 text-[0.9rem]">
      <p>
        &copy; 2026 WanderLog Travel Blog. All rights reserved. |{" "}
        <Link to="/contact" className="text-accent no-underline hover:underline"> Contact Us</Link> |{" "}
        <Link to="/dashboard" className="text-accent no-underline hover:underline"> Admin Dashboard</Link>
      </p>
    </footer>
  );
}