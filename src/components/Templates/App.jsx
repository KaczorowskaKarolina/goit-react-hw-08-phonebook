import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../Atoms/Store';
import AppContainer from '../Pages/AppContainer';
import Header from '../Organisms/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header /> 
          <Switch>
            <Route path="/" exact component={AppContainer} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;