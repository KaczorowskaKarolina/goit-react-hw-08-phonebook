import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';

import Register from '../Molecules/Register';
import Login from '../Molecules/Login';
import Contacts from '../Molecules/Contacts';
import Navigation from '../Organisms/Header';
import Home from '../Pages/Home';

import '../Pages/app.css'

const App = () => {
  return (
<div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Navigation />
    </div>
  );
};

export default App;