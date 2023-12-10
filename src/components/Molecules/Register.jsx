import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import App from '../Templates/App';

export const Register = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const dispatch = useDispatch();

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await App.registerUser(username, password);
      dispatch({ type: 'auth/registerSuccess', payload: newUser });
    } catch (err) {
      dispatch({ type: 'auth/registerFailed', payload: err.message });
    }
 };

 return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
 );
};

export default Register;