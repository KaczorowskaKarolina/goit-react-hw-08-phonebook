import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Atoms/Store'; 

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.email);

  const handleLogout = () => {
    dispatch(logoutUser()); 
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;