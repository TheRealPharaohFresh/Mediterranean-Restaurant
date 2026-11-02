import "../styles/navbar.css";

const links = ["Home", "Menu", "About", "Contact", "Reservations", "Locations"];

const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-eyebrow">Fine Dining</span>
        <h4 className="sidebar-title">Bistro Bites</h4>
      </div>
      <ul className="nav flex-column sidebar-links">
        {links.map((label, index) => (
          <li className="nav-item" key={label}>
            <a
              className={`nav-link sidebar-link ${index === 0 ? "active" : ""}`}
              href="#"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <p>123 Main Street</p>
        <p>Open daily 11am – 10pm</p>
      </div>
    </nav>
  );
};

export default Navbar;
