import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../Atoms/Store';
import AppContainer from '../Pages/AppContainer';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Navigation from '../Organisms/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/contacts" component={AppContainer} />
          </Switch>
        </Router>
      </ChakraProvider>
    </Provider>
  );
};

export default App;