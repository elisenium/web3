import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <h3>Amazing Guess a Word Game</h3>
    <Link className="nav-link" to="/">Play</Link>
    <Link className="nav-link" to="/add-word">Add a word</Link>
  </nav>
);

export default Navbar;