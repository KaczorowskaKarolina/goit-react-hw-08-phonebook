import React, { useState } from 'react';

import './login.css';

const Login = () => {
  const [formData] = useState({
    email: '',
    password: '',
  });

  // Usunięcie nieużywanej funkcji handleChange
  const handleSubmit = e => {
    e.preventDefault();

    console.log('Submitted data:', formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* ... (reszta kodu) */}
      </form>
    </div>
  );
};

export default Login;
