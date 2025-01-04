import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/books" className="nav-link">Gestion de livres</Link>
  </nav>
);

export default Navbar;