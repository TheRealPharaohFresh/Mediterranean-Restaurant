import Navbar from "../components/Navbar";
import hpp from "../assets/hpp.jpeg";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main className="hero" style={{ backgroundImage: `url(${hpp})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Est. 2024</span>
          <h1 className="hero-title">Welcome to Bistro Bites</h1>
          <p className="hero-subtitle">
            Seasonal ingredients, crafted with care and served with warmth.
          </p>
          <div className="hero-actions">
            <a href="#" className="hero-btn hero-btn-primary">
              View Menu
            </a>
            <a href="#" className="hero-btn hero-btn-outline">
              Reserve a Table
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
