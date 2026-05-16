import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header/page";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

// Pages
import Home from "./pages/Home/page";
import Dashboard from "./pages/Dashboard/page";
import Destinations from "./pages/Destinations/page";
import Features from "./pages/Features/page";
import Login from "./pages/Login/page";
import Register from "./pages/Register/page";
import Cart from "./pages/Cart/page";
import Reviews from "./pages/Reviews/page";
import About from "./pages/About/page";
import Profile from "./pages/Profile/page";

import "./index.css";

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/features" element={<Features />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}