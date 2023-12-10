import React, { useState } from 'react';

import './register.css';

const Register = () => {
  const [formData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  // Usunięcie nieużywanej funkcji handleChange
  const handleSubmit = e => {
    e.preventDefault();

    console.log('Submitted data:', formData);
  };

  return (
    <div>
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* ... (reszta kodu) */}
      </form>
    </div>
  );
};

export default Register;
