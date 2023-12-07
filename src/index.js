import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from 'react-redux';
import store from 'components/Atoms/Store';
import App from 'components/Pages/AppContainer';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);