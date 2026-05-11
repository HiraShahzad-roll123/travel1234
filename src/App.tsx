import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Components - Ensure these files exist in src/components/...
import Header from "./components/Header/page";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import Dashboard from "./pages/Dashboard/page";
import Destinations from "./pages/Destinations/page";
import Features from "./pages/Features/page";
import Login from "./pages/Login/page";
import Signup from "./pages/Signup/page";

import "./index.css";

// --- HOME COMPONENT (Defined locally so you don't need a separate file) ---
function Home() {
  return (
    <main className="container">
      {/* Hero Section */}
      <div className="hero-banner">
        <h2>🌍 Explore the World with WanderLog</h2>
        <p>Your ultimate travel companion for discovering hidden gems and sharing unforgettable experiences.</p>
        <Link to="/destinations" className="btn btn-outline">View Destination Details</Link>
      </div>

      {/* Stats Section */}
      <div className="stats-row">
        <div className="stat-box">
          <div className="stat-number">120+</div>
          <div className="stat-label">Destinations Listed</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">5,400</div>
          <div className="stat-label">Happy Travelers</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">320</div>
          <div className="stat-label">Blog Posts</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">98%</div>
          <div className="stat-label">Satisfaction Rate</div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="section-heading">
        <h2>Featured Destinations</h2>
        <p>Top picks from our travel experts for this season</p>
      </div>

      <section className="card-grid">
        {/* Card 1 */}
        <article className="card-item">
          <img src="/images/image4.png" alt="Hunza Valley" className="card-image-styled" />
          <div className="card-body">
            <span className="category-tag">NORTH</span>
            <h3>Explore the North — Hunza</h3>
            <p>Towering peaks and ancient forts. Hunza Valley is Pakistan's crown jewel.</p>
            <Link to="/destinations" className="btn btn-small">View Details</Link>
          </div>
        </article>

        {/* Card 2 */}
        <article className="card-item">
          <img src="/images/image5.png" alt="Skardu Valley" className="card-image-styled" />
          <div className="card-body">
            <span className="category-tag">MOUNTAIN</span>
            <h3>Beauty of Skardu Valley</h3>
            <p>Gateway to K2. Crystal-clear lakes and breathtaking landscapes.</p>
            <Link to="/destinations" className="btn btn-small">View Details</Link>
          </div>
        </article>

        {/* Card 3 */}
        <article className="card-item">
          <img src="/images/image6.png" alt="Swat Valley" className="card-image-styled" />
          <div className="card-body">
            <span className="category-tag">VALLEY</span>
            <h3>Magical Valley of Swat</h3>
            <p>Emerald rivers and lush green meadows. The Switzerland of Pakistan.</p>
            <Link to="/destinations" className="btn btn-small">View Details</Link>
          </div>
        </article>
      </section>

      {/* Features Grid */}
      <div className="section-heading mt-3">
        <h2>Why Choose WanderLog?</h2>
        <p>Everything you need for the perfect travel experience</p>
      </div>

      <section className="card-grid">
        <div className="card-item">
          <div className="feature-card-body">
            <span className="feature-icon">🗺️</span>
            <h3>Expert Guides</h3>
            <p>Our certified guides ensure you never miss a hidden gem on your journey.</p>
          </div>
        </div>
        <div className="card-item">
          <div className="feature-card-body">
            <span className="feature-icon">📸</span>
            <h3>Blog and Stories</h3>
            <p>Read and share real travel stories and photography from our community.</p>
          </div>
        </div>
        <div className="card-item">
          <div className="feature-card-body">
            <span className="feature-icon">🏷️</span>
            <h3>Best Prices</h3>
            <p>We compare packages to bring you the most affordable travel options.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}