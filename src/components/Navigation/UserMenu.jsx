import React from 'react';
import PropTypes from 'prop-types';

const UserMenu = ({ userEmail, onLogout }) => {
  return (
    <div>
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
