import React from 'react';
import { Link } from 'react-router-dom';

import '../Navigation/Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/register">Register</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/contacts">Contacts</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
