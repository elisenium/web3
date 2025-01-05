import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/famous-jokes" className="nav-link">Gestion de blagues</Link>
  </nav>
);

export default Navbar;