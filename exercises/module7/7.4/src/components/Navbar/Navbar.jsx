import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/cinemas" className="nav-link">Cinemas</Link>
    <Link to="/movies" className="nav-link">My favorite movies</Link>
    <Link to="/movies/add" className="nav-link">Add a movie</Link>
  </nav>
);

export default NavBar;