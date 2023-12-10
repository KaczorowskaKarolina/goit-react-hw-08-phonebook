import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Routes, Route, Router } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from 'react-redux';

import store from 'components/Atoms/Store';
import Navigation from 'components/Organisms/Navigation';
import Home from 'components/Pages/Home';
import Register from 'components/Molecules/Register';
import Login from 'components/Molecules/Login';
import Contacts from 'components/Molecules/Contacts';
// import AppContainer from 'components/Pages/AppContainer';
import './index.css';

const basename = '/goit-react-hw-8-phonebook';

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <Router basename={basename}>
    <Navigation />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </Router>
 </Provider>
);