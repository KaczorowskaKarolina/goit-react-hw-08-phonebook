import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Register from '../Navigation/Register';
import Login from '../Navigation/Login';
import Contacts from '../Navigation/Contacts';

import '../App/App.css';

export function App() {
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
}
