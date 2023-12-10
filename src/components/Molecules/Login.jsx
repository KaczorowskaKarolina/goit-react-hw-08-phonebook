import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { app } from '../Templates/App';

export const Login = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const dispatch = useDispatch();

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await app.loginUser(username, password);
      dispatch({ type: 'auth/loginSuccess', payload: user });
    } catch (err) {
      dispatch({ type: 'auth/loginFailed', payload: err.message });
    }
 };

 return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
 );
};