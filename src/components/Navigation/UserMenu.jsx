import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserMenu = ({ userEmail, onLogout }) => {
  return (
    <div>
      <NavLink exact to="/register" activeClassName="active">
        Register
      </NavLink>
      <NavLink exact to="/login" activeClassName="active">
        Login
      </NavLink>
      <p>{userEmail}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

UserMenu.propTypes = {
  userEmail: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
