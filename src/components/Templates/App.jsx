import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from '../Molecules/Register';
import Login from '../Molecules/Login';
import Contacts from '../Molecules/Contacts';
import Navigation from '../Organisms/Header';
import Home from '../Pages/Home';

import '../Pages/app.css'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
};

export default App;