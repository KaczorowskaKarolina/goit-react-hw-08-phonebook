import React, { useState } from 'react';

import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
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
    // Tutaj możesz dodać logikę rejestracji, np. przekazać formData do funkcji rejestracji
    console.log('Submitted data:', formData);
    // W tym miejscu możesz dodać kod do wysłania danych na serwer lub do innego procesu rejestracji
  };

  return (
    <div>
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="register-label">
          First Name:
          <input
            className="register-input"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="register-label">
          Last Name:
          <input
            className="register-input"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="register-label">
          Phone Number:
          <input
            className="register-input"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="register-label">
          Email:
          <input
            className="register-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <div className="register-btn-container">
          <button className="register-btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
