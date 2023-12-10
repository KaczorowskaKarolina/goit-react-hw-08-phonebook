import React, { useState } from 'react';

import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Tutaj możesz dodać logikę logowania, np. przekazać formData do funkcji logowania
    console.log('Submitted data:', formData);
    // W tym miejscu możesz dodać kod do wysłania danych na serwer lub do innego procesu logowania
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Email:
          <input
            className="login-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="login-label">
          Password:
          <input
            className="login-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <div className="login-btn-container">
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
