import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-nav-bg text-white pt-16 pb-8 px-8 mt-auto border-t-4 border-primary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">WanderLog</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your ultimate travel companion for discovering hidden gems and sharing unforgettable experiences around the globe.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">🐦</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">📸</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">📘</a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/about" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">About Us</Link></li>
            <li><Link to="/destinations" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">Destinations</Link></li>
            <li><Link to="/features" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">Features</Link></li>
            <li><Link to="/reviews" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">Reviews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest travel updates and offers.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border border-white/20 rounded-md px-4 py-2 w-full text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary hover:bg-secondary transition-colors duration-300 px-4 py-2 rounded-md font-bold text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto text-center border-t border-white/10 pt-8 text-gray-400 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; 2026 WanderLog Travel Blog. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/dashboard" className="text-accent hover:underline">Admin Dashboard</Link>
        </div>
      </div>
    </footer>
  );
}