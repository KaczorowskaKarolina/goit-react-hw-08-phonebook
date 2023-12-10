import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Navigation/Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink exact to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink exact to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink exact to="/contacts" activeClassName="active">
            Contacts
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
