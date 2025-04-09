import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// HomePage Component
function HomePage() {
  const [showProfile, setShowProfile] = useState(false);
  const [showJoinPopup, setShowJoinPopup] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="info-left">
          <p className="small-label">Location</p>
          <p className="info-text">Sanur Beach</p>
          <p className="small-label">Dates</p>
          <p className="info-text">12.04 - 27.04</p>
          <h1 className="main-heading">Youth<br />Surf Camp</h1>
          <p className="time-stamp"># 18:44:58</p>
        </div>
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Surf Camp"
            className="hero-image"
          />
          <button className="join-btn" onClick={() => setShowJoinPopup(true)}>
            Join The Group
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="info-section">
        <h2>About Us</h2>
        <p>Welcome to the ultimate youth surf camp at Sanur Beach! We offer surf lessons, beach games, and sunset hangouts for beginners and pros alike.</p>
        <h3>Camp Schedule</h3>
        <ul>
          <li>Day 1: Arrival & Welcome</li>
          <li>Day 2-5: Surf Training & Activities</li>
          <li>Day 6: Local Exploration</li>
          <li>Day 7: Farewell Beach Party</li>
        </ul>
      </section>

      {/* Profile Popup */}
      {showProfile && (
        <div className="profile-popup">
          <div className="popup-content">
            <h3>User Profile</h3>
            <p>Name: Surfer Guest</p>
            <p>Email: surfer@example.com</p>
            <button onClick={() => setShowProfile(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Join Group Popup */}
      {showJoinPopup && (
        <div className="profile-popup">
          <div className="popup-content">
            <h3>Welcome Aboard! 🌊</h3>
            <p>You’ve successfully joined the surf camp group!</p>
            <button onClick={() => setShowJoinPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

// BeachGalleryPage Component
function BeachGalleryPage() {
  const beachImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?fm=jpg&q=60&w=3000",
    "https://images.unsplash.com/photo-1660986616995-23a6d76f18df?fm=jpg&q=60&w=3000",
  ];

  return (
    <section id="camps" className="gallery-section">
      <h2 className="gallery-heading">🌴 Beach Vibes</h2>
      <div className="gallery-grid">
        {beachImages.map((url, index) => (
          <div key={index} className="gallery-card hover-effect">
            <img
              src={url}
              alt={`Beach ${index + 1}`}
              className="gallery-img"
            />
            <p className="img-caption">Beach {index + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar-custom">
          <div className="logo">🌊</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/beaches">Beaches</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beaches" element={<BeachGalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
